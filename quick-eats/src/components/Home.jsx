import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '30px', textAlign: 'center', backgroundColor: '#FFF3E0', minHeight: 'calc(100vh - 60px)' }}>
      <h1 style={{ color: '#FF6B6B', fontSize: '2.5em', marginBottom: '20px' }}>Welcome to Food Delivery!</h1>
      <p style={{ fontSize: '1.1em', color: '#333', marginBottom: '30px' }}>Explore our delicious menu and order your favorite meals.</p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Example restaurant cards */}
        <div style={{ margin: '15px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '250px' }}>
          <h3 style={{ color: '#FF8E31' }}>Restaurant A</h3>
          <p>Cuisine: Italian</p>
        </div>
        <div style={{ margin: '15px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '250px' }}>
          <h3 style={{ color: '#4CAF50' }}>Restaurant B</h3>
          <p>Cuisine: Mexican</p>
        </div>
      </div>
    </div>
  );
};

export default Home;