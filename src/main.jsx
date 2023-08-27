import React from 'react'
import { ToastContainer } from "react-toastify";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer position='top-center'/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
