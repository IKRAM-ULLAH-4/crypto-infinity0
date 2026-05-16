import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Components/AboutUs";
import About from "../Pages/About";

export const routes = createBrowserRouter([
    {path:'/' , element:<Home /> } , 
    {path:'/aboutus' , element: <About />}
])