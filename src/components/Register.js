import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('pet');
  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();
    // Call backend API for registration
    // On successful registration, redirect to login
    history.push('/login');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="pet">Pet</option>
          <option value="vet">Vet</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
