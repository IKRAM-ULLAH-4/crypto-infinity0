// import { useContext } from "react";
// import { QuantityContext} from "../Context/QuantitiyContext";
import { useQuantity } from "../Context/QuantitiyContext";
function Products() {
 const {quantity , setQuantity} = useQuantity();
//   const { quantity , setQuantity} = useContext(QuantityContext);


  return (
    <>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <p>{quantity}</p>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
    </>
  );
}

export default Products;
