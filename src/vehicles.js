import vehiculos from './API/vehiculos.json';

export const getVehicles = async (categoryId) => {
  // Simulamos una llamada async
  return new Promise((resolve) => {
    setTimeout(() => {
      const vehiclesList = vehiculos.vehicles;
      const filteredItems = categoryId
        ? vehiclesList.filter(item => item.category === categoryId)
        : vehiclesList;
      resolve(filteredItems);
    }, 500);
  });
};