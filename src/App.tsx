import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// OR
// import Home from '@/src/pages/Home';  // Assuming Home is in a different directory

import { ProfilesProvider } from './contexts/home/ProfilesContext';
import Home from './pages/Home';

function App() {
  return (
    <ProfilesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ProfilesProvider>
  );
}

export default App;