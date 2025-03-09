import React, { useState, useEffect } from 'react';

const DeliveryStatusPage = () => {
  const [status, setStatus] = useState('Preparing your order...');
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const statuses = ['Preparing your order...', 'Order being cooked...', 'Order out for delivery...', 'Order delivered!'];
    let currentStatusIndex = 0;
    const interval = setInterval(() => {
      currentStatusIndex++;
      if (currentStatusIndex < statuses.length) {
        setStatus(statuses[currentStatusIndex]);
        setProgress((currentStatusIndex + 1) * 25);
      } else {
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Delivery Status</h2>
      <p>{status}</p>
      <div style={{ width: '80%', margin: '20px auto', backgroundColor: '#f3f3f3', borderRadius: '5px', overflow: 'hidden' }}>
        <div style={{ width: `${progress}%`, height: '20px', backgroundColor: '#4CAF50' }}></div>
      </div>
    </div>
  );
};

export default DeliveryStatusPage;