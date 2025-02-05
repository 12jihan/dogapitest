import { RouterProvider } from "react-router/dom";
import "./App.scss";
import routes from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
