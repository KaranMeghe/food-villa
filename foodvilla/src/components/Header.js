import Cart from "../image/shopping-cart.png";
const Header = () => {
  return (
    <nav
      className="navbar navbar-light "
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid d-flex">
        <a className="navbar-brand">FoodVilla</a>
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
        </ul>
      </div>
    </nav>
  );
};
export default Header;
