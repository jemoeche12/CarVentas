import { useParams } from 'react-router-dom';
import { VehicleCard } from './common/VehicleCard.jsx';
import { useCategoryItems } from '../hooks/useVehicles';
import { useState, useEffect } from 'react';
import { getProducts, getSingleProduct, filterbyCategory } from "../firebase/firebase";


const ItemListContainer = ({ greeting }) => {
  const [myproducts, setMyProducts] = useState([]);
  useEffect(() => {
    
    getProducts().then((products) => setMyProducts(products));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center py-4">{greeting}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {myproducts &&
      myproducts.map((item) =>(
          <VehicleCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
