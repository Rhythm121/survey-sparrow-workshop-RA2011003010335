// Education.js
import React from 'react';
const educationStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px',
  };
  
const Education = ({ degree, school, year }) => (
  <section>
    <h2>Education</h2>
    <p>Degree: {degree}</p>
    <p>School: {school}</p>
    <p>Year: {year}</p>
  </section>
);

export default Education;
