import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-center my-2">
          <img className={style.headingImage} src="Marc.png"></img>
          <div
            className="text-end"
            style={{ position: "relative", left: "650px" }}
          >
            <Link to="/Login" className={`${style.LoginBtn}`}>
              <button type="button" className="btn btn-dark me-2">
                Login
              </button>
            </Link>
            <Link to="/SignUp" className={`${style.SignUp}`}>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <nav>
        <div className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <ul className="nav col-12 mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/Home" className={`nav-link px-4 ${style.navStyle}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className={`nav-link px-4 ${style.navStyle}`}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/Service" className={`nav-link px-4 ${style.navStyle}`}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/Contact" className={`nav-link px-4 ${style.navStyle}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
