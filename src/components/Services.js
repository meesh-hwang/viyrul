import Phone from './Phone';
import { Outlet, Link } from "react-router-dom";

const Services = () => {

    return(
    <div className='services'>
      <div className='services-container'>
        <div className='services-text'>
          <h3>Quality Services</h3>
          <h2>What We Do</h2>
          <p>From online orders, client management, lead generation, and more, we do everything while you focus on providing the best products and services to your customers and clients.</p>
          <div><Link to="/services" className='btn'>Services</Link></div>
        </div>
        <Phone />
      </div>
      <Outlet />
    </div>
    )
} 

export default Services