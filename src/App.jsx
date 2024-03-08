import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Feed from './Pages/Feed'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        {/* Other routes */}
      </Routes>
    </Router>
  )
}

export default App;