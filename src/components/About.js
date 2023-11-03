import arrow from '../assets/img/arrow.png'
import { Outlet, Link } from 'react-router-dom';
import AboutCards from './AboutCards';
import PulsingCircle from './PulsingCircle';

const About = () => {

    return(
        <div className="about-section">
            <h2 className="about-heading">Why choose <span className='emph'>Viyrul</span>?</h2>
            <AboutCards />
            <div className='about-text'>
                <PulsingCircle />
                <p>We want to welcome you to the digital era. We are here to guide you through the process and ensure your sucess.</p>
                <Link to="/about" className='pg-link'>
                    About us
                    <img src={arrow} alt='arrow' />
                </Link>
            </div>
            <Outlet />
        </div>
    )
}

export default About;