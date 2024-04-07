import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import Homepage from './pages/Homepage';
import LandingPage from './pages/landingPage';
import CourseContent from './pages/courseContent';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/courseContent" element={<CourseContent />} />
        <Route path="/videoPlayer" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
