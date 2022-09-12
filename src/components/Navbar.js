import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    const showButton =() => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize',showButton)

  return (
    <>
    <nav className="navbar">
        {/* Create navbar container */}
        <div className="navbar-container">
            {/* Create navbar logos */}
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <i className="fa-solid fa-k"></i>
                <i className="fa-solid fa-r"></i>
            </Link>
            {/* Menu icon change when clicked */}
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            {/* Nav menu links */}
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    < Link 
                        to='/about' 
                        className ='nav-links' 
                        onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    < Link 
                        to='/projects' 
                        className ='nav-links' 
                        onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
                <li className='nav-item'>
                    < Link 
                        to='/contact' 
                        className ='nav-links' 
                        onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    < Link 
                        to='/resume' 
                        className ='nav-links-mobile' 
                        onClick={closeMobileMenu}>
                        Resume
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Resume</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar