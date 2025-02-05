import "./NavbarComponent.scss";
import { ReactElement } from "react";
import { Link } from "react-router";

function NavbarComponent(): ReactElement {
  return (
    <>
      <div className="nav-container">
        <ul className="links-container">
          <li className="list-item">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavbarComponent;
