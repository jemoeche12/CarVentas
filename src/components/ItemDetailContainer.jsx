import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getProducts, getSingleProduct } from "../firebase/firebase"; 
import ItemDetail from "./ItemDetail";
import { CartContext } from "../context/CartContext";

const ItemDetailContainer = () => {
  const { itemId, categoryId } = useParams(); 
  const [item, setItem] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const { addItem } = useContext(CartContext); 
  useEffect(() => {
    const fetchItemDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        if (itemId) {
          
          const product = await getSingleProduct(itemId);
          if (!product) {
            throw new Error("Producto no encontrado");
          }
          setItem(product);
        } else if (categoryId) {
          const products = await getProducts();
          const filteredProducts = products.filter(
            (prod) => prod.categoryId === categoryId
          );
          if (filteredProducts.length === 0) {
            throw new Error("No se encontraron productos en esta categoría");
          }
          setItem(filteredProducts[0]); 
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItemDetails();
  }, [itemId, categoryId]);

  if (loading) return <div className="text-center py-4">Cargando...</div>;
  if (error)
    return <div className="text-center py-4 text-red-500">{error}</div>;

  const handleAddToCart = (quantity) => {
    const productToAdd = {
      ...item,
      quantity,
    };
    addItem(productToAdd); 
  };

  return <ItemDetail item={item} onAddToCart={handleAddToCart} />;
};

export default ItemDetailContainer;
