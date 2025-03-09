import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ backgroundImage: "url('https://i.pinimg.com/1200x/e6/7d/af/e67daf68a6e8f6d4a9283cb7d64b098c.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "100vh", width: "100%", }}>
    <h1 style={{ color: '#FF6B6B', fontSize: '2.5em', marginBottom: '20px', paddingTop: '200px' }}>Welcome to Food Delivery!</h1>
      <p style={{ fontSize: '1.1em', color: 'white', marginBottom: '30px' }}>Explore our delicious menu and order your favorite meals.</p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {}
        <div style={{ margin: '15px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '250px' }}>
          <h3 style={{ color: '#FF8E31' }}>Restaurant Azad</h3>
          <p>Pizza</p>
          <p>Pasta</p>
          <Link to="/restaurant/Azad">View Menu</Link>
        </div>
        <div style={{ margin: '15px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '250px' }}>
          <h3 style={{ color: '#4CAF50' }}>Restaurant Bakies</h3>
          <p>Pizza</p>
          <p>Pasta</p>
          <Link to="/restaurant/Bakies">View Menu</Link>
        </div>
        <div style={{ margin: '15px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '250px' }}>
          <h3 style={{ color: '#4CAF50' }}>Restaurant Nawab</h3>
          <p>Pizza</p>
          <p>Pasta</p>
          <Link to="/restaurant/Nawab">View Menu</Link>
        </div>
        <div style={{ margin: '15px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '250px' }}>
          <h3 style={{ color: '#4CAF50' }}>Restaurant Foodstop</h3>
          <p>Pizza</p>
          <p>Pasta</p>
          <Link to="/restaurant/Foodstop">View Menu</Link>
        </div>
      </div>
    </div>
  );
}; 


export default Home;