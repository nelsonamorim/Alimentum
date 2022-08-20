import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import { Catalogo } from './pages/Catalogo/catalogo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Catalogo/>
  </React.StrictMode>
);
