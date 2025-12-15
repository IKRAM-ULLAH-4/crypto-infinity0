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

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}>

  
    <App />
      </RouterProvider>
  </StrictMode> // Fixed the closing tag
);
