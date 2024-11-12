import { useState, useEffect } from 'react';
import vehiculos from '../API/vehiculos.json';
import motos from '../API/motos.json';
import accesorios from '../API/accesorios.json';

// Helper function para obtener items por categoría
const getItemsByCategory = (categoryId) => {
  const categories = {
    vehiculos: vehiculos.vehicles,
    motos: motos.motos,
    accesorios: accesorios.accesorios,
  };

  // Si no hay categoryId o es '/', retornamos todos los items
  if (!categoryId || categoryId === '/') {
    return Object.values(categories).flat();
  }

  // Si la categoría existe, la retornamos
  if (categories[categoryId]) {
    return categories[categoryId];
  }

  throw new Error('Categoría no válida');
};

export const useCategoryItems = (categoryId) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = () => {
      try {
        setLoading(true);
        const itemsList = getItemsByCategory(categoryId);
        setItems(itemsList);
        setError(null);
      } catch (err) {
        setError('Error al cargar los productos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [categoryId]);

  return { items, loading, error };
};