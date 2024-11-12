import carritoCompras from '../assets/icons/carritoCompras.png'
const Cart = () => {
  
  return (
    <div className="flex items-center space-x-2">
      <a  className="cursor-pointer">
        <img
          className="cart w-16 md:w-20"
          src={carritoCompras}
          alt="Carrito"
        />
      </a>
    </div>
  );
};

export default Cart;
