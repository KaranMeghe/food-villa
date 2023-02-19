import Cart from "../image/shopping-cart.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // function toggle() {
  //   return isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
  // }

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
            <Link to="/cart">
              {" "}
              <img src={Cart} style={{ width: "30px" }} alt="cart"></img>{" "}
            </Link>
          </li>

          <li>
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Log-In</button>
            ) : (
              <button onClick={() => setIsLoggedIn(true)}>Log-Out</button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
