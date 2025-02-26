import './App.css';
import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/post' element={<NewPostPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App;