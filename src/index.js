// index.js
import React from 'react';
import App from './App';

// Import createRoot from "react-dom";
import { createRoot } from "react-dom/client";

// ... rest of your code ...

const rootInstance = createRoot(root);

rootInstance.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



