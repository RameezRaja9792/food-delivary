import React from 'react';

const Menu = ({ menu, addToCart }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map((item) => (
          <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;