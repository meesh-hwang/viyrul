import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect } from 'react';
import '../styles/services.css'
import ContactCTA from '../components/ContactCTA';
import ServicesCards from '../components/ServicesCards';
import ServicesSlider from '../components/ServicesSlider';

const Services = () => {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            gsap.to(".card", {
                duration: 1,
                opacity: 1, 
                delay: 0.5, 
                stagger: 0.2,
                ease: "sine.out", 
              });
            gsap.to(".services-blurb", {
                ease: "sine.out",
                yPercent: -25,
                duration: 1,
                scale: 1,
                opacity: 1,
            });

            gsap.to(".services-slider-section", {
                ease: 'ease',
                duration: 2,
                scale: 1,
                opacity: 1,
                yPercent: -65,
                scrollTrigger: {
                    toggleActions: "play complete restart",
                    markers: true,
                    trigger: ".services-blurb",
                    start: "-70% top",
                    end: "bottom 30%",
                    scrub: 1
                },
            });

            gsap.to(".contactCTA", {
                ease: 'ease',
                duration: 2,
                opacity: 1,
                yPercent: -150,
                scrollTrigger: {
                    trigger: ".services-slider-section",
                    toggleActions: "play complete restart",
                    start: "-80% top", 
                    end: 'center 60%',
                    scrub: 1
                },
            });
        });
        return () => ctx.revert();
    }, [])

    return(
        <div className="pg-container services">
            <div className="circle-gradient"></div> 
            <div className='services-blurb services-section-container'>
                <h3>We provide quality services<br /> to help you take your <br />business <div className="emph">online</div></h3>
                <ServicesCards />
            </div>
            <div className='services-section-container services-slider-section'>
                <h2>Our <span className='emph'>Process</span></h2>
                <ServicesSlider />
            </div>
                <ContactCTA />
        </div>
    )
};

export default Services