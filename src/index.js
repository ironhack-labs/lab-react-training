import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UIkit from "uikit";
import "uikit/dist/css/uikit.min.css";
import Icons from "uikit/dist/js/uikit-icons";
import "./index.css";

UIkit.use(Icons);

ReactDOM.render(<App />, document.getElementById('root'));


