import '../styles/about.css'
import ContactCTA from "../components/ContactCTA"
import alan from '../assets/img/alan.png'

const About = () => {
    return(
        <div className="pg-container about">
            <h1 className="pg-title">About Us</h1>
            <div className='circle-gradient'></div>     
            <div className="about-blurb">
                <h2>Who <span className="emph">we</span> are</h2>
                <p>At <span className="emph">Viyrul</span>, we are passionate about<br /> turning your web dreams into reality.<br /> Our services are designed to help your<br />business thrive in the digital age.</p>
            </div>
            <div className='team'>
                <h3>Meet the <span className='emph'>team</span></h3>
                <div className='member'>
                    <div className='img'>
                        <img src={alan} alt='Alan headshot' />
                        <h4>Alan Hua</h4>
                        <h5>Founder & CEO</h5>
                    </div>
                    <p>Having dedicated more than five years to the e-commerce and customer support sectors, Alan possesses a profound understanding of how to craft a highly influential online presence that not only benefits your business but also paves the way for efficient growth and exceptional excellence.</p>
                </div>
                <div className='member'>
                    <div className='img'>
                        <img src={alan} alt='Alan headshot' />
                        <h4>Meesh Hwang</h4>
                        <h5>Chief Web Officer (CWO)</h5>
                    </div>
                    <p>Meesh's combination of a solid foundation in web development, coupled with her ongoing skill diversification, positions her as one of our most proficient team members for engaging closely with clients in achieving the results they aspire to attain at Viyrul.</p>
                </div>
            </div>
            <ContactCTA />
        </div>
    )
}

export default About