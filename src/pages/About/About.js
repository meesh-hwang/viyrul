import '../../styles/about.css'
import ContactCTA from "../../components/ContactCTA"
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import PulsingCircle from '../../components/PulsingCircle'
import ScrollDown from '../../components/ScrollDown'
import Panels from '../../components/Panels'

import alan from '../../assets/img/avatar.png'
import meesh from '../../assets/img/avatar.png'

const team = [
    {
        id: 1,
        title: "Alan Hua",
        caption: "Founder & CEO",
        img: alan,
        desc: "Having dedicated more than five years to the e-commerce and customer support sectors, Alan possesses a profound understanding of how to craft a highly influential online presence that not only benefits your business but also paves the way for efficient growth and exceptional excellence."
    },
    {
        id: 2,
        title: "Meesh Hwang",
        caption: "Chief Web Officer (CWO)",
        img: meesh,
        desc: "Meesh's combination of a solid foundation in web development, coupled with her ongoing skill diversification, positions her as one of our most proficient team members for engaging closely with clients in achieving the results they aspire to attain at Viyrul."
    },
]

const About = () => {

   
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {

            let welcome = document.querySelector(".about-hero h2");

            gsap.to(welcome, {
                ease: "linear",
                xPercent: -110,
                scrollTrigger: {
                    trigger: ".about-hero",
                    toggleActions: "play complete reverse reset",
                    start: "20",
                    scrub: 1,
                }
            });

            let panels = document.querySelectorAll(".panel");

            for ( let i = 1; i < panels.length; i++ ) {

                if( i !== 4 ) {
                    gsap.fromTo(panels[i], 
                        {
                            scale: 0.6,
                            yPercent: 0,
                            opacity:0
                        },{
                        opacity: 1,
                        yPercent: -150,
                        ease: 'ease',
                        scale: 1.1,
                        scrollTrigger: {
                            trigger: panels[i-1],
                            start: 'top center',
                            end: 'bottom center',
                            scrub: 1
                        },
                    });

                    gsap.fromTo(panels[i],
                        {
                            yPercent: -150,
                            scale: 1.1,    
                        },{
                        opacity: 0,
                        yPercent: -250,
                        ease: 'ease',
                        scale: 0.6,
                        scrollTrigger: {
                            trigger: panels[i],
                            start: 'center center',
                            end: 'bottom top',
                            scrub: 1
                        },
                    });
                } else {

                    // last panel
                    gsap.fromTo(panels[i], 
                        {
                            scale: 0.6,
                            yPercent: 0,
                            opacity:0
                        },{
                        opacity: 1,
                        yPercent: -250,
                        ease: 'ease',
                        scale: 1.1,
                        scrollTrigger: {
                            trigger: panels[i-1],
                            start: 'top',
                            end: 'center center',
                            scrub: 1
                        },
                    });
                }
                
    
                

            }
        });
        return () => ctx.revert();
    }, [])

    return (
        <div className="about pg-container">
                <ScrollDown />
            
                <div className='about-hero panel'>
                    <PulsingCircle />
                    <div className='section inner'>
                        <h2>Welcome to <span className='emph'>Viyrul</span></h2>
                    </div>
                </div>

                <div className='about-intro panel'>
                    <div className='section'>
                        <p>With a shared vision and a deep-seated passion for social media management, digital marketing, and web development, we embarked on a journey fueled by innovation. Recognizing the need for businesses to thrive in the digital age, we set out to provide extraordinary solutions that empower our clients.</p>                </div>
                </div>

                <div className="about-blurb panel">
                    <div className='section'>
                        <p>At <span className="emph">Viyrul</span>, we are passionate about turning your web dreams into reality. Our services are designed to help your business thrive in the digital age.</p>                </div>
                </div>

                <div className='team panel'>
                    <h2>Meet the <span className='emph'>team</span></h2>
                    <Panels list={team} category="member" />
                </div>
                    <ContactCTA />
        </div>
    )
}

export default About