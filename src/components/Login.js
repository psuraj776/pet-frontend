import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { loginUser } from '../api';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { role } = useParams();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      if (response.success) {
        navigate(`/${role}-profile`);
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
    // Handle Google OAuth login here
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="login-container">
        <h2>Login as {role === 'vet' ? 'Vet' : 'Pet'}</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
        <GoogleLogin
          onSuccess={responseGoogle}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        <Link to={`/register/${role}`}><button>Register</button></Link>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;

