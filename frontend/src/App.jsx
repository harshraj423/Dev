import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import Homepage from './pages/Homepage';
import LoginCard from './components/loginCard'
import LandingPage from './pages/landingPage';
import Test from './test';
import NavBar from './pages/NavBar';
import CourseContent from './pages/courseContent';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LoginPage />} />
    //     {/* <Route path="/home" element={<Homepage />} /> */}
    //   </Routes>
    // </BrowserRouter>
    // <LandingPage></LandingPage> 
    // <LoginPage></LoginPage> 
    <div>
      <NavBar></NavBar>
      {/* <Homepage></Homepage> */}
      <CourseContent></CourseContent>
    </div>
  );
}

export default App;
