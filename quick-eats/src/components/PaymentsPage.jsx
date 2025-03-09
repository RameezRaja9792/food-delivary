import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentsPage = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    console.log('Payment processed:', { cardNumber, expiryDate, cvv });
    navigate('/delivery-status');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Payment Details</h2>
      <form onSubmit={handlePayment}>
        <label>
          Card Number:
          <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }} />
        </label>
        <label>
          Expiry Date:
          <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }} />
        </label>
        <label>
          CVV:
          <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }} />
        </label>
        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentsPage;
