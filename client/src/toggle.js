import React, { useState } from 'react';
import './toggle.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faGraduationCap, faWrench, faCertificate, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Toggle() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="toggle-container">
            <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? (
              <span className="close-icon">✖️</span>
                ) : (
              <span className="hamburger-icon" style={{color:"black",fontSize:"50px",
                fontStyle:"bold"
              }}>☰</span>
                )}
            </button>

     <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
         <ul>
               <li>
               <Link to="/myprofile" className="no-underline">
                            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
               </Link>
                    </li>
                    <li>
            <Link to="/profile" className="no-underline">
                            <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/education" className="no-underline">
                            <FontAwesomeIcon icon={faGraduationCap} /> <span>Education</span>
                        </Link>
                    </li>
        <li>
                        <Link to="/skills" className="no-underline">
                            <FontAwesomeIcon icon={faWrench} /> <span>Skills</span>
                        </Link>
                    </li>
                    <li>
                   <Link to="/certifications" className="no-underline">
                            <FontAwesomeIcon icon={faCertificate} /> <span>Certifications</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="no-underline">
                            <FontAwesomeIcon icon={faFolder} /> <span>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="no-underline">
                            <FontAwesomeIcon icon={faEnvelope} /> <span>Contact Me</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Toggle;
