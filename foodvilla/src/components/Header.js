import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useIsLogedIn from "../utils/useLogedIn";
import { BsCartPlusFill } from "react-icons/bs";
const Header = () => {
  const [isLoggedIn, toogleIsLoggedIn] = useIsLogedIn(true);
  const isOnline = useOnline();

  return (
    <nav
      className="navbar navbar-light sticky-top "
      style={{ backgroundColor: "#e67e22", color: "#fff" }}
    >
      <div className="container-fluid d-flex">
        <Link to="/" className="text-decoration-none ">
          <h1 className="navbar-brand text-light fs-2">FoodVilla</h1>
        </Link>
        <ul className="navbar-nav d-flex flex-row">
          <li className="mx-2">
            <Link to="/" className="text-decoration-none text-light">
              Home
            </Link>
          </li>

          <li className="mx-2">
            <Link to="/about" className="text-decoration-none text-light">
              About-Us
            </Link>
          </li>

          <li className="mx-2 text-light">
            <Link to="/contact" className="text-decoration-none text-light">
              Contact
            </Link>
          </li>

          <li className="mx-2 text-light">
            <Link to="/cart" className="text-decoration-none text-white">
              <BsCartPlusFill
                className="
              fs-4"
              />
            </Link>
          </li>

          <li>
            <button
              onClick={toogleIsLoggedIn}
              className={isLoggedIn ? "text-success, mx-2" : "text-dark, mx-2"}
            >
              {isLoggedIn && isOnline ? "🟢 Log-in" : "🔴 Log-out"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
