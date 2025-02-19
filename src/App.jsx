import './App.css';
import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<></>} />
      </Routes>
    </>
  )
}

export default App;
