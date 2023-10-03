import logo from '../assets/img/logo.png';
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
            <Link to="/">
                <img src={logo} className="logo" alt="logo" />
            </Link>
            <ul className='menu'>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
            </ul>
            <Outlet />
        </header>
    );
}

export default Header