import '../styles/home.css'
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Home = () => {

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
        <div>
            <Hero />
            <Services />
            <About />
        </div >
    );
}

export default Home