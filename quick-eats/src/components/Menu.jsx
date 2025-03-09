import React,{useState} from 'react';


const Menu = ({ menu, addToCart }) => {
 const [bgColor, setBgColor] = useState("brown");
  return (
    <div style={{ backgroundColor: bgColor}}>
      <h3>Menu</h3>
      <ul>
        {menu.map((item) => (
          <li key={item.id} style={{ display: 'flex',justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;