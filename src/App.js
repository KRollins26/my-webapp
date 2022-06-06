import React from 'react'; 
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path ='/' exact element={<Home/>}/>
        <Route path ='/about' component={<About/>}/>
        <Route path ='/projects' component={<Projects/>}/>
        <Route path ='/contact' component={<Contact/>}/>
        <Route path ='/resume' component={<Resume/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
