import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import MessageAlert from "./MessageAlert";
import MessageDeleteCarrito from "./messageDeleteCarrito";

const Cart = () => {
  const { cart, clearCart, updateCart } = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);
  const [showDeleteAllAlert, setShowDeleteAllAlert] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleClearCart = () => {
    setShowDeleteAllAlert(true);
  };

  const handleConfirmClearCart = () => {
    clearCart();
    setShowDeleteAllAlert(false);
  };

  const handleCancelClearCart = () => {
    setShowDeleteAllAlert(false);
  };

  const handleDeleteItem = (item) => {
    setItemToDelete(item);
    setShowAlert(true);
  };

  const handleConfirm = () => {
    if (itemToDelete) {
      const updatedCart = cart.filter(cartItem => cartItem.name !== itemToDelete.name);
      updateCart(updatedCart);
      localStorage.setItem('cartCarritoCompra', JSON.stringify(updatedCart));
    }
    setShowAlert(false);
    setItemToDelete(null);
  };

  const handleCancel = () => {
    setShowAlert(false);
    setItemToDelete(null);
  };

 

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
                {item.quantity} unidades x ${item.price} = ${item.quantity * item.price}
              </p>
            </div>
            <button
              onClick={() => handleDeleteItem(item)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between">
        <button
          onClick={handleClearCart}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
        >
          Vaciar Carrito
        </button>
        <Link to="/checkout">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Finalizar Compra
          </button>
        </Link>
      </div>
      {showAlert && (
        <MessageAlert
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      {showDeleteAllAlert && (
        <MessageDeleteCarrito
          onConfirm={handleConfirmClearCart}
          onCancel={handleCancelClearCart}
        />
      )}
    </div>
  );
};

export default Cart;