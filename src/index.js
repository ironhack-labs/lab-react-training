import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App'; eliminamos este file
import App from '../src/components/App'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
