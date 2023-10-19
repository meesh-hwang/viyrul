import { Outlet, Link } from "react-router-dom";
import globe from '../assets/img/globe.png';

const Hero = () => {
    return(
        <div className='hero'>
            <img src={globe} alt="globe" className="globe"/>
            <div className='hero-text'>
                    <h1><span className='emph'>Go</span> Viral <span className='emph'>with</span> Viyrul.</h1>
                    <p>Bring your business online</p>
                    <Link to="/contact" className='main-btn'>Book Now</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Hero;