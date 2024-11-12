import { useParams } from 'react-router-dom';
import { VehicleCard } from './common/VehicleCard.jsx';
import { useCategoryItems } from '../hooks/useVehicles';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const { items, loading, error } = useCategoryItems(categoryId);

  if (loading) {
    return <div className="text-center py-4">Cargando...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  if (items.length === 0) {
    return <p className="text-center col-span-full text-gray-500">No se encontraron productos en esta categoría.</p>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center py-4">{greeting}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {items.map(item => (
          <VehicleCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
