// PersonalInfo.js
import React from 'react';
const personalInfoStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px',
  };
const PersonalInfo = ({ name, age, address }) => (
  <section>
    <h2>Personal Information</h2>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Address: {address}</p>
  </section>
);

export default PersonalInfo;
