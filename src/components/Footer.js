import logo from '../assets/img/logo-slogan.png';
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
                <div className='socials'>
                    <div>
                        <img src={mail} alt='Email logo' />
                        <Link to='mailto:viyrulmarketingco@gmail.com'>viyrulmarketingco@gmail.com</Link>
                    </div>
                    <div>
                        <img src={phone} alt='Phone logo' />
                        <Link to='/'>+1 (778) 123 4567</Link>
                    </div>
                    <div>
                        <img src={instagram} alt='Instagram logo' />
                        <Link to='https://www.instagram.com/viyrul/'>Instagram</Link>
                    </div>
                </div>
            </div>
            <div className='footer-links'>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
            </div>
            <span>© Copyright Viyrul 2023</span>
            <Outlet />
        </div>
    );
}

export default Footer;