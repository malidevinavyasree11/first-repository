import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from './Search';
import Result from './Result';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Search/>} />
      <Route path="/results" element={<Result />} />
    </Routes>
  );
}

export default App;
