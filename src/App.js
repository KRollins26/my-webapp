import React from 'react'; 
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import ProjectMap from './components/pages/ProjectMap';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path ='/' exact element={<Home/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/projects' element={<Projects/>}/>
        <Route path ='/contact' element={<Contact/>}/>
        <Route path ='/resume' element={<Resume/>}/>
        <Route path ='/projectmap' element={<ProjectMap/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
