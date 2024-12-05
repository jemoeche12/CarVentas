import { Link } from "react-router-dom";
import CounterComponent from "./CounterComponent";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addItem({
        id: item.id,
        name: `${item.make} ${item.model}`,
        make: item.make,
        model: item.model,
        price: item.price,
        year: item.year,
        image: item.image,
        description: item.description,
        quantity: quantity,
      });
    }
  };

  if (!item) {
    return <div className="text-center py-4">Item no encontrado</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-64">
          <img
            src={item.image}
            alt={`${item.make} ${item.model}`}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold mb-4">
            {item.make} {item.model}
          </h1>
          <p className="text-xl text-gray-700 mb-4">Año: {item.year}</p>
          <p className="text-gray-600 mb-6">{item.description}</p>
          <p className="text-2xl font-semibold text-green-500 mb-4">
            Precio: ${item.price}
          </p>
          <CounterComponent
            quantity={quantity}
            setQuantity={setQuantity} 
          />
          <button
            onClick={handleAddToCart}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
          >
            Agregar al carrito
          </button>
          <Link
            to={`/`}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 text-center mt-4"
          >
            Volver al catálogo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

