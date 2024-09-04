import Phone from './Phone';
import { Outlet, Link } from "react-router-dom";
import arrow from '../../assets/img/arrow.png';
import { useMediaQuery } from 'react-responsive';
import PulsingCircle from '../../components/PulsingCircle';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';

const ServiceBlurbs = () => (
  <div className='services-text'>
    <div className='blurb blurb-1'>
      <p>We offer services to help you bring your business <span className='emph'>online</span></p>
    </div>
    <div className='blurb blurb-2'>
      <p>Unlock the <span className='emph'>full potential</span> of your business in the digital age</p>
    </div>
    <div className='blurb blurb-3'>
      <p>Fueling your digital success with <span className='emph'>tailored online solutions</span>.</p>
    </div>
  </div>
);

const ServicesSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isLaptop = useMediaQuery({ minWidth: 913 });

  gsap.registerPlugin(TextPlugin, ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".blurb-1", { opacity: 1 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".services",
          start: "center center",
          scrub: true,
          end: "+=100%",
          pin: isMobile, // Pin only on mobile
        }
      });

      timeline
        .to(".blurb-1", { opacity: 0, stagger: 0.5 })
        .to(".blurb-2", { opacity: 1 })
        .to(".blurb-2", { opacity: 0 })
        .to(".blurb-3", { opacity: 1 });

      gsap.to("h1", {
        duration: 0.8,
        delay: 2,
        text: {
          value: "Go <span>Viral</span> with <span>Viyrul</span>.",
          newClass: "anim-emph",
          preserveSpaces: true,
          type: "diff",
        }
      });
    });

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div className='services'>
      {isMobile ? (
        <div className='services-container mobile'>
          <div className='services-text'>
            <PulsingCircle />
            <ServiceBlurbs />
            <Link to="/services" className='pg-link'>
              Services <img src={arrow} alt='arrow' />
            </Link>
          </div>
        </div>
      ) : (
        <div className={isLaptop ? 'services-container' : 'services-container tablet'}>
          <Phone />
          <div className='services-text'>
            <ServiceBlurbs />
            <div>
              <Link to="/services" className='pg-link'>
                Services <img src={arrow} alt='arrow' />
              </Link>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default ServicesSection;
