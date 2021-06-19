import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import UIkit from 'uikit';
import "uikit/dist/css/uikit.min.css";
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
