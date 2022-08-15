import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Attention from './pages/Attention';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter basename="/me-tube-react">
      <h1>Hello Router</h1>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Attention />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
