import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // your custom CSS
import App from './App.jsx';

// Correct Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from './Components/Paths.jsx'
import { routes } from './Routes/routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
  </StrictMode> // Fixed the closing tag
);
