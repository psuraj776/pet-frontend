import React from 'react';
import { Link } from 'react-router-dom';
import './SelectRole.css';

const SelectRole = () => {
  return (
    <div className="select-role">
      <h2>Select Your Role</h2>
      <Link to="/login/vet">
        <button>Vet</button>
      </Link>
      <Link to="/login/pet">
        <button>Pet</button>
      </Link>
    </div>
  );
}

export default SelectRole;

