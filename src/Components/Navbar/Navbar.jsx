import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Icons/tutor-track-logo.png';
import user_account from '../../Assets/Icons/account.png';
import menu_icon from '../../Assets/Icons/menu.png';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 426);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 426);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout=() => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-logo">
          <Link to={'/'}><img src={logo} alt="Logo" /></Link>
        </div>

        <div className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <Link className='nav-link-items' to="/" style={{ textDecoration: 'none' }}> <li>Home</li> </Link>
            {/* <Link className='nav-link-items' to="/tutors" style={{ textDecoration: 'none' }}> <li>tutors</li> </Link> */}
            <Link className='nav-link-items' to="/about-us" style={{ textDecoration: 'none' }}> <li>About us</li> </Link>
            <Link className='nav-link-items' to="/contact-us" style={{ textDecoration: 'none' }}> <li>Contact us</li> </Link>
          </ul>
          {isMobile && (
            <div className="signup-login">
              <div 
                className="login"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link to="/login" style={{ textDecoration: 'none' }} ><button>Login</button></Link>
              </div>
              <div className="signup">
                <Link to="/signup" style={{ textDecoration: 'none' }} ><button className={isHovered ? 'hovered' : ''}>Sign Up</button></Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="toggle-menu" onClick={handleMenuToggle}>
        <img src={menu_icon} alt="Menu" />
      </div>
      <div className="nav-right">
        {!isMobile && (
          <div className="signup-login">
            <div 
              className="login"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link  style={{ textDecoration: 'none' }} onClick={handleLogout}><button>Logout</button></Link>
            </div>
            
          </div>
        )}
        <div className="user-account">
          <Link to="/profile">
          <img src={user_account} alt="User Account" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
