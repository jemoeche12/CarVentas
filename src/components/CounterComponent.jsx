const CounterComponent = ({ quantity, setQuantity }) => {
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="flex items-center space-x-4 mb-4">
      <button
        onClick={handleDecrement}
        className="bg-gray-300 text-black px-3 py-1 rounded">
        -
      </button>
      <span className="text-lg">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="bg-gray-300 text-black px-3 py-1 rounded">
        +
      </button>
    </div>
  );
};

export default CounterComponent;
