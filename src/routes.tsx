import { createBrowserRouter, Outlet } from "react-router";
import NavbarComponent from "./components/NavBar/NavbarComponent";
import HomeComponent from "./pages/HomeComponent";
import BreedProfileComponent from "./pages/BreedProfileComponent";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavbarComponent />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <div className="container">
              <HomeComponent />
            </div>
          </>
        ),
      },
      {
        path: "/:id",
        element: (
          <>
            <div className="container">
              <BreedProfileComponent />
            </div>
          </>
        ),
      },
    ],
  },
]);

export default routes;
