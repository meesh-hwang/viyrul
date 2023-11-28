import arrow from '../assets/img/arrow.png'
import { Outlet, Link } from 'react-router-dom';
import AboutCards from './AboutCards';
import PulsingCircle from './PulsingCircle';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';
import ContactCTA from '../components/ContactCTA'

const AboutSection = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 })

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {

            gsap.fromTo(".card", {
                scale: 0.4,
                opacity: 0,
            },{
                ease: 'ease',
                duration: 3,
                stagger: 0.5,
                ease: "sine.out",
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: ".about-heading",
                    toggleActions: "play complete restart",
                    start: "top center", 
                    end: 'bottom bottom',
                    scrub: 1
                },
            });

            gsap.to(".contactCTA", {
                ease: 'ease',
                duration: 2,
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: ".about-text",
                    toggleActions: "play complete restart",
                    markers:true,
                    start: "top center", 
                    end: 'top center',
                    scrub: 1
                },
            });

            gsap.to(".about-text", {
                ease: 'ease',
                duration: 2,
                opacity: 1,
                yPercent: -50,
                scale: 1.1,
                scrollTrigger: {
                    trigger: ".about-cards",
                    toggleActions: "play complete restart",
                    start: "center top", 
                    end: 'center top',
                    scrub: 1
                },
            });
        });
        return () => ctx.revert();
    }, [])
    return(
        <div className={isMobile ? "about-section mobile" : "about-section"}>
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
            <ContactCTA />
            <Outlet />
        </div>
    )
}

export default AboutSection;