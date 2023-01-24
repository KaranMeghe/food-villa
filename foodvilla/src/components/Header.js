import Cart from "../image/shopping-cart.png";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // function toggle() {
  //   return isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
  // }

  return (
    <nav
      className="navbar navbar-light "
      style={{ backgroundColor: "#e67e22", color: "#fff" }}
    >
      <div className="container-fluid d-flex">
        <a
          className="navbar-brand"
          href="http://localhost:3000/"
          style={{ color: "#fff" }}
        >
          FoodVilla
        </a>
        <ul className="navbar-nav d-flex flex-row">
          <li className="mx-2">
            <a>Home</a>
          </li>
          <li className="mx-2">
            <a>About-Us</a>
          </li>
          <li className="mx-2">
            <a>Contact</a>
          </li>
          <li className="mx-2">
            <img src={Cart} style={{ width: "30px" }} alt="cart"></img>
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
