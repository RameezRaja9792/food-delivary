import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from './Menu';
import Cart from './Cart';

const RestaurantPage = () => {
  const { restaurantId } = useParams(); // Get restaurant ID from URL
  const [cart, setCart] = useState([]);

  // Mock restaurant data (replace with actual data fetching)
  const restaurant = {
    id: restaurantId,
    name: `Restaurant ${restaurantId}`,
    cuisine: 'Italian',
    menu: [
      { id: 1, name: 'Pizza', price: 12 },
      { id: 2, name: 'Pasta', price: 10 },
      { id: 3, name: 'Salad', price: 8 },
    ],
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{restaurant.name}</h2>
      <p>Cuisine: {restaurant.cuisine}</p>
      <Menu menu={restaurant.menu} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default RestaurantPage;