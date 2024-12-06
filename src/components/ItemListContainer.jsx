import { VehicleCard } from './common/VehicleCard.jsx';
import { useState, useEffect } from 'react';
import { getProducts } from "../firebase/firebase";
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';

const ItemListContainer = ({ greeting }) => {
  const [myproducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts().then((products) => {
      if (category) {
        const filteredProducts = products.filter(
          (product) => product.category === category
        );
        setMyProducts(filteredProducts);
      } else {
        setMyProducts(products);
      }
      setLoading(false);
    });
  }, [category]);
  
  if (loading) {
    return <Spinner />;
  }

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
