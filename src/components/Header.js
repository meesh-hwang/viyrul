import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png';
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShow(false); // Scroll down, hide navbar
      } else {
        setShow(true); // Scroll up, show navbar
      }
      setLastScrollY(currentScrollY); // Remember current scroll position
    };

    // Set initial scroll position on component mount
    setLastScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
    return(
        <header className={show ? 'header show' : 'header hide'}>
            <Link to="/">
                <img src={logo} className="logo" alt="logo" />
            </Link>
            <ul className='menu'>
                <li><Link to="/contact" >Contact</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/services" >Services</Link></li>
            </ul>
            <Outlet />
        </header>
    );
}

export default Header