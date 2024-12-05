import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartCarritoCompra")) || [];
    setCartItems(savedCart);

    const cartTotal = savedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(cartTotal);
  }, []);

  const handleConfirmPurchase = () => {
    setShowModal(true);
    clearCart(); // Limpia el carrito usando el contexto
    // Redirigir al home después de 3 segundos
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Checkout</h1>

        {/* Detalle de Compra */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Detalle de Compra</h2>
          <div className="space-y-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <span className="text-gray-600">
                  {item.name} (x{item.quantity})
                </span>
                <span className="font-medium text-gray-900">
                  ${item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>
          {/* Total */}
          <div className="mt-4 flex justify-between items-center border-t pt-2 border-gray-200">
            <span className="font-bold text-gray-700">Total</span>
            <span className="font-bold text-gray-900">${total}</span>
          </div>
        </div>

        {/* Botón de Confirmar */}
        <button
          onClick={handleConfirmPurchase}
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Finalizar Compra
        </button>
      </div>

      {/* Modal de Compra Finalizada */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-16 h-16 mx-auto mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m0 4v6m-4-6H5v6"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Compra Finalizada</h2>
            <p className="text-gray-600 mb-6">Serás redirigido al inicio en unos segundos.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
