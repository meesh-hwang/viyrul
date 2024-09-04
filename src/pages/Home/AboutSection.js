import arrow from '../../assets/img/arrow.png';
import { Outlet, Link } from 'react-router-dom';
import PulsingCircle from '../../components/PulsingCircle';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';
import ContactCTA from '../../components/ContactCTA';
import clock from '../../assets/img/icons/clock.png';
import chart from '../../assets/img/icons/chart.png';
import people from '../../assets/img/icons/people.png';
import flexible from '../../assets/img/icons/flexible.png';
import Panels from '../../components/Panels';

const AboutSection = () => {
    const about = [
        {
            title: "Personalized",
            caption: <p>We create <span className='emph'>personalized growth plans</span> and offer the necessary services to achieve it.</p>,
            img: people
        },
        {
            title: "Growth",
            caption: <p>We work to <span className='emph'>maximize</span> your <span className='emph'>growth potential</span> through the various services we offer.</p>,
            img: chart
        },
        {
            title: "Flexible",
            caption: <p>We adapt to each business' <span className='emph'>needs</span> and work to offer the most <span className='emph'>optimal solutions.</span></p>,
            img: flexible
        },
        {
            title: "Reliable",
            caption: <p>We are <span className='emph'>punctual</span>, and we are there when you need us. Your needs are our <span className='emph'>priority.</span></p>,
            img: clock
        },
    ];

    const isLaptop = useMediaQuery({ minWidth: 948 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {

            gsap.fromTo(".about-card", {
                scale: 0.4,
                opacity: 0,
            }, {
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
                    trigger: ".abouts",
                    toggleActions: "play complete restart",
                    start: "center top",
                    end: 'center top',
                    scrub: 1
                },
            });

            gsap.to(".about-text", {
                ease: 'ease',
                duration: 2,
                opacity: 1,
                scale: 1.1,
                scrollTrigger: {
                    trigger: ".abouts",
                    toggleActions: "play complete restart",
                    start: "top top",
                    end: 'center top',
                    scrub: 1,
                },
            });

        });
        return () => ctx.revert();
    }, [isMobile]);


    return (
        <div>
            <div className={isMobile ? "about-section mobile" : isLaptop ? "about-section" : "about-section tablet"}>
                <h2 className="about-heading">Why choose <span className='emph'>Viyrul</span>?</h2>
                <Panels list={about} category="about"/>
                <div className='about-text'>
                    <PulsingCircle />
                    <p>We want to welcome you to the digital era. We are here to guide you through the process and ensure your success.</p>
                    <Link to="/about" reloadDocument className='pg-link'>
                        About us
                        <img src={arrow} alt='arrow' />
                    </Link>
                </div>
                <ContactCTA />
            </div>
            <Outlet />
        </div>
    );
}

export default AboutSection;
