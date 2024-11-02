const Cart = () => {
  return (
    <>
      <div>
        <a>
          <img className="cart" src="src/assets/icons/cart.png" alt="" />
        </a>
        <span>0</span>
      </div>
      <style>
        {`
            .cart{
              width: 80px;
            }
            `}
      </style>
    </>
  );
};

export default Cart;
