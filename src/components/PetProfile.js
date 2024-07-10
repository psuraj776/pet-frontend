// src/components/PetProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PetProfile() {
  const [pet, setPet] = useState({});

  useEffect(() => {
    // Fetch pet profile from backend
    axios.get('/api/pets/{petId}')
      .then(response => setPet(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Pet Profile</h2>
      <p>Name: {pet.name}</p>
      <p>Breed: {pet.breed}</p>
      <p>Vet: {pet.vetId ? `Vet ID: ${pet.vetId}` : 'No vet assigned'}</p>
    </div>
  );
}

export default PetProfile;

