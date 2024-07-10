// src/components/VetProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VetProfile() {
  const [vet, setVet] = useState({});

  useEffect(() => {
    // Fetch vet profile from backend
    axios.get('/api/vets/{vetId}')
      .then(response => setVet(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Vet Profile</h2>
      <p>Name: {vet.name}</p>
      <p>Address: {vet.address}</p>
      <p>License: {vet.license}</p>
      <p>Contact Details: {vet.contactDetails}</p>
    </div>
  );
}

export default VetProfile;

