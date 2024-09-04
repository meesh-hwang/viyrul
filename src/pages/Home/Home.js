import '../../styles/home.css'
import Hero from '../../components/Hero';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import ScrollDown from '../../components/ScrollDown';

const Home = () => {
    

    return(
        <div className='home pg-container'>
            <Hero />
            <ScrollDown />
            <ServicesSection />
            <AboutSection />
        </div >
    );
}

export default Home