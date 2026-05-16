import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/routes";

import { ThemeProvider } from "./Context/ThemeContext";

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