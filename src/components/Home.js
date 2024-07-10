import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Pet Vet Store</h1>
      <Link to="/select-role">
	  <button>Continue</button>
      </Link>
    </div>
  );
}

export default Home;
