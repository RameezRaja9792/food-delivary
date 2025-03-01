import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', { username, email, password });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div style={{ padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 60px)', backgroundColor: '#FCE4EC' }}>
      <div style={{ width: '350px', padding: '40px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#E91E63' }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px' }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px' }}
          />
          <button
            type="submit"
            style={{ width: '100%', padding: '12px', backgroundColor: '#E91E63', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Register
          </button>
        </form>
        <button onClick={() => navigate('/login')} style={{marginTop: '10px', width: '100%', padding:'12px', backgroundColor: '#F06292', color: 'white', border: 'none', borderRadius:'5px', cursor: 'pointer'}}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;