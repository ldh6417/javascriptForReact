import { RouterProvider } from "react-router-dom";
import root from "./router/Root";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={root} />
    </>
  );
}

export default App; 