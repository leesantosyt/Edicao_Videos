import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RoutesApp from './routes.js';
import reportWebVitals from './reportWebVitals';
import RoutesApp from './routes.js';
import { HashRouter } from "react-router-dom";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <RoutesApp/>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
