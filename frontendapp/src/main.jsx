
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react'
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import StoreContextProvider from './context/StoreContext.jsx';
import { BrowserRouter } from 'react-router-dom';

// const contextvalue = {
//   user: null, // Example value
//   cart: [],   // Example value
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider >

      <App />
   
    </StoreContextProvider>
  </BrowserRouter>
)
