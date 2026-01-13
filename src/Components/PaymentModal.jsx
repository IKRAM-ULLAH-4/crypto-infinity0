import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { ethers } from 'ethers';
import { 
  FaWallet, 
  FaCheckCircle, 
  FaSpinner, 
  FaShieldAlt, 
  FaTimes, 
  FaExternalLinkAlt 
} from 'react-icons/fa';
import './ama.css';

const USDT_CONTRACT = '0x55d398326f99059fF775485246999027B3197955';
const RECEIVER_ADDRESS = '0xf0824584eAE1944493c29d96467737C3eF738D05';
const BSC_CHAIN_ID = 56;

const PaymentModal = ({ show, onHide, pkg }) => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState(null);
  const [walletAvailable, setWalletAvailable] = useState(false);

  useEffect(() => {
    // Check if browser wallet is available
    setWalletAvailable(!!window.ethereum);
    if (!show) {
      setAccount(null);
      setTxHash(null);
      setLoading(false);
    }
  }, [show]);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("No wallet detected. Please install MetaMask or use WalletConnect!");
        return;
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } catch (err) {
      console.error('Connection rejected');
    }
  };

  const handlePayment = async () => {
    if (!account) return alert("Connect your wallet first!");
    try {
      setLoading(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();

      // Switch to BSC if not connected
      if (Number(network.chainId) !== BSC_CHAIN_ID) {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x38' }],
        });
      }

      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        USDT_CONTRACT,
        ['function transfer(address to, uint256 amount) returns (bool)'],
        signer
      );

      const amount = ethers.parseUnits(pkg.price.toString(), 18);
      const tx = await contract.transfer(RECEIVER_ADDRESS, amount);
      const receipt = await tx.wait();
      setTxHash(receipt.hash);
    } catch (err) {
      alert('Payment failed. Ensure you have enough USDT and BNB for gas.');
    } finally {
      setLoading(false);
    }
  };

  if (!pkg) return null;

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" contentClassName="wallet-modal">
      <Modal.Body className="p-4 p-md-5 position-relative">
        <button className="close-modal-icon" onClick={onHide} disabled={loading}>
          <FaTimes size={20} />
        </button>

        <div className="modal-stack text-center">
          {!txHash ? (
            <>
              <FaShieldAlt size={48} color="#00ffff" className="mb-3" />
              <h3 className="fw-bold text-white mb-1">Secure Checkout</h3>
              <p className="text-muted small">Pay with BEP-20 USDT</p>

              <div className="price-box mb-3">
                <span>Amount Due</span>
                <h2>{pkg.price} <small>USDT</small></h2>
              </div>

              {account && (
                <div className="wallet-status-badge mb-3">
                  <div className="dot-pulse" />
                  {account.slice(0, 6)}...{account.slice(-4)}
                </div>
              )}

              {/* Action Buttons */}
              <div className="modal-footer-area w-100">
                {!account ? (
                  <>
                    {walletAvailable ? (
                      <button className="primary-wallet-btn w-100 mb-2" onClick={connectWallet}>
                        <FaWallet className="me-2" /> Connect Wallet
                      </button>
                    ) : (
                      <a href="https://metamask.io/download/" target="_blank" className="primary-wallet-btn w-100">
                        Install MetaMask
                      </a>
                    )}
                  </>
                ) : (
                  <button className="primary-wallet-btn w-100" disabled={loading} onClick={handlePayment}>
                    {loading ? <><FaSpinner className="fa-spin me-2" /> Processing...</> : 'Confirm & Pay'}
                  </button>
                )}
              </div>
            </>
          ) : (
            /* SUCCESS STATE */
            <div className="modal-stack text-center">
              <FaCheckCircle size={64} color="#00ffc2" className="mb-2" />
              <h2 className="fw-bold text-white">Payment Successful</h2>
              <p className="text-white-50">Your <strong>{pkg.title}</strong> is now scheduled.</p>

              <div className="bg-black p-3 rounded border border-secondary text-start w-100 mb-2">
                <small className="text-muted d-block">Transaction Hash</small>
                <code className="text-info small d-block mb-2">{txHash.slice(0, 32)}...</code>
                <a href={`https://bscscan.com/tx/${txHash}`} target="_blank" rel="noreferrer" className="text-white-50 small">
                  View on BscScan <FaExternalLinkAlt size={10} />
                </a>
              </div>

              <button className="book-btn w-100 mt-2" onClick={onHide}>Finish</button>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentModal;
