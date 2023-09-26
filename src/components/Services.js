import Phone from './Phone';
import laptop from '../assets/img/laptops.png';
import phones from '../assets/img/phones.png';

const Services = () => {

    return(
    <div className='services'>
      <div className='services-container'>
        <div className='services-text'>
          <h3>Quality Services</h3>
          <h2>What We Do</h2>
          <p>From online orders, client management, lead generation, and more, we do everything while you focus on providing the best products and services to your customers and clients.</p>
          <div><a href='#' className='btn'>Services</a></div>
        </div>
        <Phone />
      </div>
    </div>
    )
} 

export default Services