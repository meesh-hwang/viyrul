import logo from '../assets/img/logo.png';
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
            <Link to="/">
                <img src={logo} className="logo" alt="logo" />
            </Link>
            <ul className='menu'>
                <li><Link to="/contact" class='target'>Contact</Link></li>
                <li><Link to="/about" class='target'>About</Link></li>
                <li><Link to="/services" class='target'>Services</Link></li>
            </ul>
            <Outlet />
        </header>
    );
}

export default Header