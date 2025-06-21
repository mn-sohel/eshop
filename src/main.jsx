import { createRoot } from 'react-dom/client'
import { ToastContainer, toast } from 'react-toastify';
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ToastContainer />    
    <App />
  </BrowserRouter>
)
