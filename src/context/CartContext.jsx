import { createContext, useState } from "react";

export const CartContext = createContext(false);

export const updateQuantity = (itemId, newQuantity) => {
  setCart((prevCart) => {
    const updatedCart = prevCart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    localStorage.setItem("cartCarritoCompra", JSON.stringify(updatedCart));
    return updatedCart;
  });
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cartCarritoCompra');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addItem = (item) => {
    setCart((prevCart) => {
      // Buscar si el producto ya existe en el carrito
      const existingItemIndex = prevCart.findIndex(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.make === item.make &&
          cartItem.model === item.model &&
          cartItem.year === item.year
      );
  
      let updatedCart;
  
      if (existingItemIndex !== -1) {
        // Producto ya existe, actualizar la cantidad
        updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...prevCart[existingItemIndex],
          quantity: prevCart[existingItemIndex].quantity + item.quantity,
        };
      } else {
        // Producto no existe, agregarlo al carrito
        updatedCart = [...prevCart, { ...item }];
      }
  
      // Guardar el carrito actualizado en localStorage
      localStorage.setItem("cartCarritoCompra", JSON.stringify(updatedCart));
  
      return updatedCart; // Actualizar el estado con el carrito actualizado
    });
  };
  


  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem('cartCarritoCompra', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cartCarritoCompra');
  };

  const updateCart = (newCart) => {
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
