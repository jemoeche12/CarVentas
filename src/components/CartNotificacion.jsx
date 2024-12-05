import React, { useEffect, useState } from 'react';

const CartNotification = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cartCarritoCompra'));
    if (cartData && cartData.length > 0) {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!showNotification) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 bg-blue-500 text-white p-4 rounded shadow-lg">
      <p className="font-semibold">Tienes productos en tu carrito.</p>
      <p>¡No olvides completar tu compra!</p>
    </div>
  );
};

export default CartNotification;