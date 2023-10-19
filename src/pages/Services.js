import '../styles/services.css'
import ContactCTA from '../components/ContactCTA';
import ServicesCards from '../components/ServicesCards';
import ServicesSlider from '../components/ServicesSlider';

const Services = () => {



    return(
        <div className="pg-container services">
            <div className="circle-gradient"></div> 
            <h1 className="pg-title">Our Services</h1>
            <h3 className='services-blurb'>We provide quality services<br /> to help you take your <br />business <div className="emph">online</div></h3>
            <ServicesCards />
            <h2>Our <span className='emph'>Process</span></h2>
            <ServicesSlider />
            <ContactCTA />
        </div>
    )
};

export default Services