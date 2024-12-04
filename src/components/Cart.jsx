import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return (
      <div className="p-4">
        <h2>Tu carrito está vacío.</h2>
        <p>Agrega productos para comenzar tu compra.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li
            key={item.id} 
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>
                {item.quantity} unidades x ${item.price} = $
                {item.quantity * item.price}
              </p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between">
        <button
          onClick={clearCart}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
        >
          Vaciar Carrito
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
