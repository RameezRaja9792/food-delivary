import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h3>Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
          <p>Total: ${totalPrice}</p>
        </ul>
      )}
    </div>
  );
};

export default Cart;