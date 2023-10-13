import Phone from './Phone';
import { Outlet, Link } from "react-router-dom";
import arrow from '../assets/img/arrow.png';

const Services = () => {

    return(
    <div className='services'>
      <div className='services-container'>
        <div className='circle-gradient'></div>
        <Phone />
        <div className='services-text'>
          <p>We offer a variety<br/> of services to help<br/> you bring your<br/> business <span className='emph'> online</span></p>
          <div>
            <Link to="/services" className='pg-link'>
              Services <img src={arrow} alt='arrow' />
            </Link>
          </div>  
        </div>
      </div>
      <Outlet />
    </div>
    )
} 

export default Services