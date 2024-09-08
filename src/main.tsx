import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import StoreProvider from "./redux/provider"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from "react-router-dom"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
        <ToastContainer limit={3} autoClose={2000} position="top-right" draggable />
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>
)
