import "./style.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="container">
      <div>
        <h3>Ruiz Ecommerce</h3>
      </div>
      <ul className="list">
        <li>
          <a href="#Inicio">Inicio</a>
        </li>
        <li>
          <a href="#Market">Market</a>
        </li>
        <li>
          <a href="#Contacto">Contacto</a>
        </li>
      </ul>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
