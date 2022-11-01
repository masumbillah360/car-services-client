import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeContext } from "./context/ThemeProvider/ThemeProvider";
import { router } from "./Router/Router";

function App() {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      data-theme={dark ? "dark" : "light"}
      className="max-w-screen-xl mx-auto"
    >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
