import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect } from 'react';
import '../styles/services.css'
import ContactCTA from '../components/ContactCTA';
import ServicesCards from '../components/ServicesCards';
import ServicesSlider from '../components/ServicesSlider';
import PulsingCircle from '../components/PulsingCircle';import { useMediaQuery } from 'react-responsive'
import ScrollDown from '../components/ScrollDown';

const Services = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isDesktop = useMediaQuery({ minWidth: 769 });

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
                    trigger: ".services-blurb h3",
                    toggleActions: "play complete restart",
                    start: "top bottom", 
                    end: 'bottom center',
                    scrub: 1
                },
            });
            gsap.to(".services-blurb", {
                ease: "sine.out",
                yPercent: isDesktop ? -35 : -15 ,
                duration: 1,
                scale: 1,
                opacity: 1,
            });

            gsap.to(".services-slider-section", {
                ease: 'ease',
                duration: 2,
                scale: 1,
                opacity: 1,
                yPercent: isDesktop ? -10 : -30,
                scrollTrigger: {
                    toggleActions: "play complete restart",
                    trigger: ".services-blurb",
                    start: "center center",
                    end: "center top",
                    scrub: 1
                },
            });

            gsap.to(".services-pg .contactCTA", {
                ease: 'ease',
                duration: 2,
                opacity: 1,
                yPercent: isDesktop ? -150 : -175 ,
                scale: 1,
                scrollTrigger: {
                    trigger: ".services-slider-section",
                    toggleActions: "play complete restart",
                    start: "top bottom", 
                    end: isDesktop ? 'top top' : "top center",
                    scrub: 1
                },
            });
        });
        return () => ctx.revert();
    }, [])

    return(
        <div className={isDesktop ? "pg-container services-pg" : "pg-container services-pg tablet"}>
            <div className='services-blurb services-section-container'>
                <PulsingCircle />
                <h3>We provide quality services<br /> to help you take your <br />business <div className="emph">online</div></h3>
                <ServicesCards />
            </div>
            <ScrollDown />

            <div className='services-section-container services-slider-section'>
                <h2>Our <span className='emph'>Process</span></h2>
                <ServicesSlider />
            </div>
                <ContactCTA />
        </div>
    )
};

export default Services