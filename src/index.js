import './modules/style/Reset.css'
import './modules/style/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './modules/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <HashRouter>
    // </HashRouter>
<BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</BrowserRouter>
);
reportWebVitals();
