import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './templates/Home.tsx'
import Login from './templates/Login.tsx'
import NotFound from './templates/NotFound.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Login} />
      <Route path='/home' Component={Home} />
      <Route path='/' Component={NotFound} />
    <Login />
    <Home />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
