import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import ManageProducts from './components/ManageProducts/ManageProducts';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/manage-products' element={<ManageProducts />} />
      </Routes>
    </div>
  );
}

export default App;
