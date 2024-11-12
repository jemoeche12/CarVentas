import { Link } from 'react-router-dom';

export const VehicleCard = ({ item }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={item.image} 
        alt={`${item.make} ${item.model}`} 
        className="w-full h-48 object-cover rounded-md mb-4" 
      />
      <h2 className="text-xl font-semibold">{item.make} {item.model}</h2>
      <p className="text-gray-600 mb-4">{item.description}</p>
      <Link
        to={`/item/${item.id}/${item.category}`}
        className="text-blue-500 hover:text-blue-700 transition-colors"
      >
        Ver Detalles
      </Link>
    </div>  
  );
};
