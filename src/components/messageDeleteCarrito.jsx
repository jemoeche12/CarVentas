import React from "react";

const MessageDeleteCarrito = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Vaciar carrito
        </h3>
        <p className="text-gray-600 text-center mb-6">
          ¿Estás seguro que deseas eliminar todos los productos del carrito?
          Esta acción no se puede deshacer.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onCancel}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
          >
            Eliminar todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageDeleteCarrito;
