import { useContext } from "react";
import carritoCompras from "../assets/icons/carritoCompras.png";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="flex items-center space-x-2 w-20">
      <button>
        <img src={carritoCompras} alt="cart" />
      </button>
      <p>{totalItems}</p>
    </div>
  );
};

export default CartWidget;
