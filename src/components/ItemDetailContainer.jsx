import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import vehiculos from '../API/vehiculos.json';
import motos from '../API/motos.json';
import accesorios from '../API/accesorios.json';

const getItemsByCategory = (categoryId) => {
  switch (categoryId) {
    case 'sedan':
    case 'suv':
    case 'truck':
      return { items: vehiculos, key: 'vehicles' };
    case 'moto':
      return { items: motos, key: 'motos' };
    case 'interior':
    case 'seguridad':
      return { items: accesorios, key: 'accesorios' };
    default:
      return { items: [], key: '' };
  }
};


const ItemDetailContainer = () => {
  const { itemId, categoryId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItemDetails = () => {
      setLoading(true);
      setError(null);

      try {
        const categoryData = getItemsByCategory(categoryId);
        const categoryItems = categoryData.items;
        const categoryKey = categoryData.key;
        // Filtrar usando la clave dinámica para acceder a la lista correcta
        const foundItem = categoryItems[categoryKey]?.find(item => item.id === itemId);

        if (!foundItem) {
          setError('Item no encontrado');
        } else {
          setItem(foundItem);
        }
      } catch (err) {
        setError('Error al cargar los detalles');
      } finally {
        setLoading(false);
      }
    };

    fetchItemDetails();
  }, [itemId, categoryId]);

  if (loading) return <div className="text-center py-4">Cargando...</div>;
  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

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
        <div>
          <h1 className="text-3xl font-semibold mb-4">{item.make} {item.model}</h1>
          <p className="text-xl text-gray-700 mb-4">Año: {item.year}</p>
          <p className="text-gray-600 mb-6">{item.description}</p>
          <p className="text-2xl font-semibold text-green-500 mb-4">Precio: ${item.price}</p>
          <Link
            to={`/`}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Volver al catálogo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
