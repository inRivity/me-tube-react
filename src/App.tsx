import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Attention from './pages/Attention';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter basename="/me-tube-react">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
