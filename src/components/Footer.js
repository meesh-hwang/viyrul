import logo from '../assets/img/logo-slogan.png';
import mail from '../assets/img/icons/mail.png';
import instagram from '../assets/img/icons/instagram.png';
import phone from '../assets/img/icons/phone.png';

const Footer = () => {

    return(
        <div className="footer">
            <div className="footer-content">
                <a href='#'>
                    <img src={logo} alt='Viyrul logo with slogan' />
                </a>
                <div className='socials'>
                    <div>
                        <img src={mail} alt='Email logo' />
                        <a href='mailto:viyrulmarketingco@gmail.com'>viyrulmarketingco@gmail.com</a>
                    </div>
                    <div>
                        <img src={phone} alt='Phone logo' />
                        <a href='#'>+1 (778) 123 4567</a>
                    </div>
                    <div>
                        <img src={instagram} alt='Instagram logo' />
                        <a href='#'>Instagram</a>
                    </div>
                </div>
            </div>
            <div className='footer-links'>
                <a href='#'>Contact</a>
                <a href='#'>Services</a>
                <a href='#'>About</a>
                <a href='#'>Style Guide</a>
            </div>
            <span>© Copyright Viyrul 2023</span>
        </div>
    );
}

export default Footer;