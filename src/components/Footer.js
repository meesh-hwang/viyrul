import logo from '../assets/img/logo.png';
import mail from '../assets/img/icons/mail.png';
import instagram from '../assets/img/icons/instagram.png';
import { Outlet, Link } from "react-router-dom";
import phone from '../assets/img/icons/phone.png';

const Footer = () => {

    return(
        <div className="footer">
            <div className="footer-content">
                <Link to='/'>
                    <img src={logo} alt='Viyrul logo with slogan' />
                </Link>
                <div>•</div>
                <Link to='mailto:viyrulmarketingco@gmail.com'>contact@viyrul.com
</Link>
                <div>•</div>
                <Link to='https://www.instagram.com/viyrul/'>Instagram</Link>
                <div>•</div>
            </div>
            <div className='footer-links'>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </div>
            <span>© Copyright Viyrul 2023</span>
            <Outlet />
        </div>
    );
}

export default Footer;