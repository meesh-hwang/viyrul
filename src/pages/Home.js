import '../styles/home.css'
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';

const Home = () => {
    return(
        <>
            <Hero />
            <Services />
            <About />
        </>
    );
}

export default Home