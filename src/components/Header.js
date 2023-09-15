import logo from '../assets/img/logo.png';

const Header = () => {
    return(
        <header className="header">
            <img src={logo} className="logo" alt="logo" />
            <ul className='menu'>
                <li><a href='meeshhwang.ca'>Contact</a></li>
                <li><a href='meeshhwang.ca'>About</a></li>
                <li><a href='meeshhwang.ca'>Services</a></li>
            </ul>
        </header>
    );
}

export default Header