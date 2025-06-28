import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { createContext } from 'react';
import {cartStore}  from './stores/CartStore.js';
export const StoreContext = createContext(cartStore);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreContext.Provider value={cartStore}>
    <App />
  </StoreContext.Provider>
);
