import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavComponent from './Components/nav';
import VideoPlayer from './Components/main';
import Upload from './Components/upload';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<VideoPlayer />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;