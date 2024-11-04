import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Toggle from './toggle';
import Profile from './profile';
import Education from './education';
import Home from './home.js';
import Certification from './certifications.js';
import Skills from './skills.js';
import Contact from './contact.js';
import Projects from './projects.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Container fluid className="full-width-container">
        {/* Toggle button */}
        <Toggle />
        
        {/* Main content */}
        <Routes>
          <Route path="/myprofile" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certifications" element={<Certification />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          {/* Add other routes here */}
        </Routes>
      </Container>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
