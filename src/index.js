import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client'
import './index.css';
import App from './App';  // Your main app component
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

// Create a root element and render your app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  {/* Wrap your entire app with BrowserRouter */}
    <App />
  </BrowserRouter>
);
