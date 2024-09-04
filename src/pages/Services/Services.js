import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect } from 'react';
import '../../styles/services.css'
import ContactCTA from '../../components/ContactCTA';
import ServicesSlider from './ServicesSlider';
import PulsingCircle from '../../components/PulsingCircle';import { useMediaQuery } from 'react-responsive'
import ScrollDown from '../../components/ScrollDown';
import seo from '../../assets/img/icons/seo.png'
import ecommerce from '../../assets/img/icons/ecommerce.png'
import marketing from '../../assets/img/icons/marketing.png'
import uiux from '../../assets/img/icons/uiux.png'
import smm from '../../assets/img/icons/smm.png'
import webdev from '../../assets/img/icons/webdev.png'
import Panels from '../../components/Panels';

const Services = () => {
    
    const isDesktop = useMediaQuery({ minWidth: 769 });

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            gsap.fromTo(".service-card", {
                scale: 0.4,
                opacity: 0,
            },{
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
                yPercent: isDesktop ? -15 : -10,
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
    }, [isDesktop]);
    
    const handleClick = (id) => {
    };

    const services = [
        {
            id: 1,
            title: <h4>UI and UX<br />Design</h4>,
            img: uiux,
            desc: "Our development process focuses on creating intuitive navigation, fast load times, and engaging interactions to keep visitors on your site."
        },
        {
            id: 2,
            title: <h4>Web<br />Development</h4>,
            img: webdev,
            desc: "We stay at the forefront of web development technologies, ensuring that your website or application is built using the latest tools and platforms."
        },
        {
            id: 3,
            title: <h4>Digital<br />Marketing</h4>,
            img: marketing,
            desc: "From SEO and content marketing to pay-per-click advertising, we'll drive qualified traffic to your website and enhance your brand's online reach."
        },
        {
            id: 4,
            title: <h4>Social Media<br />Management</h4>,
            img: smm,
            desc: "Our social media management services will help you create and maintain a dynamic social presence, build brand loyalty, and increase conversions."
        },
        {
            id: 5,
            title: <h4>Search Engine<br />Optimization</h4>,
            img: seo,
            desc: "We implement on-page and technical SEO best practices to help your site rank well on search engines, driving more organic traffic to your business."
        },
        {
            id: 6,
            title: <h4>E-commerce<br />Solutions</h4>,
            img: ecommerce,
            desc: "We have extensive experience in e-commerce development. From payment gateways to inventory management, we've got you covered."
        }
    ];


    return(
        <div className={isDesktop ? "pg-container services-pg" : "pg-container services-pg tablet"}>
            <div className='services-blurb services-section-container'>
                <PulsingCircle />
                <h3>We provide quality services<br /> to help you take your <br />business <div className="emph">online</div></h3>
                <Panels list={services} category="service" onClick={handleClick}/>
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