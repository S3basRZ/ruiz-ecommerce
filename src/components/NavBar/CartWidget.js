import "./style.css";
import cartIcon from "../../img/cart.svg"

const CartWidget = () => {
  return (
    <div>
      <button className="btn-navbar">
        <img className="img-btn-navbar" src={cartIcon} alt="carrito" />
      </button>
    </div>
  );
};

export default CartWidget;
