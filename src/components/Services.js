import Phone from './Phone';
import { Outlet, Link } from "react-router-dom";
import arrow from '../assets/img/arrow.png';
import { useMediaQuery } from 'react-responsive'
import PulsingCircle from './PulsingCircle';
const Services = () => {

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isDefault = useMediaQuery({ minWidth: 767 })
    return isDefault ? children : null
  }

    return(
    <div className='services'>
      <Mobile>
        <div className='services-container mobile'>

          <Phone />
          <div className='services-text'>
            <p>We offer aaaa<br/> services to help<br/> you bring your<br/> business <span className='emph'> online</span></p>
            <div>
              <Link to="/services" className='pg-link'>
                Services <img src={arrow} alt='arrow' />
              </Link>
            </div>  
          </div>
        </div>
      </Mobile>
      <Default>
        <div className='services-container'>
          <PulsingCircle />
          <Phone />
          <div className='services-text'>
            <p>We offer quality<br/> services to help<br/> you bring your<br/> business <span className='emph'> online</span></p>
            <div>
              <Link to="/services" className='pg-link'>
                Services <img src={arrow} alt='arrow' />
              </Link>
            </div>  
          </div>
        </div>
      </Default>
      <Outlet />
    </div>
    )
} 

export default Services