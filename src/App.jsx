import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/routes";

import { ThemeProvider } from "./Context/ThemeContext";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
    {/* <Navbar /> */}
    
   
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
    {/* <Footer /> */}
     </>
  );
};

export default App;