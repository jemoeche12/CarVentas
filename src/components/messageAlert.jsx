import React from "react";

const MessageAlert = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-center">¿Estás seguro?</h3>
        <p className="mb-4">Vas a eliminar el producto del carrito.</p>
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageAlert;