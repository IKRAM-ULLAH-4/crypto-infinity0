import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/routes";

import { ThemeProvider } from "./Context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;