import React from 'react';
import Index from './pages/Index'
import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login'
import Dashboard from './components/Dashboard/Dashboard';
import UserDashboard from './components/UserDashboard/UserDashboard';
import './style.css'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/userDashboard' element={<UserDashboard/>} />
        <Route path='/*' element={<Dashboard />} />
      </Routes>
    </>
  )
}
export default App