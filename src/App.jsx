import './App.css';
import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='*' element={<></>} />
      </Routes>
    </>
  )
}

export default App;
