import '../styles/scrollDown.css'
import { useLayoutEffect, useState } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const ScrollDown = () => {
    // 
    const [scrollTo, setScrollTo] = useState(false);
    const handleScrollToTop = () => {
        window.scrollTo({ top:0, behavior: "smooth"})
    }

    const handleScrollToBottom = () => {
        window.scrollTo({ top:document.querySelector(".App").offsetHeight, behavior: "smooth"})
    }

    gsap.registerPlugin(ScrollTrigger)
    const up = "up";
    const down = "down";
    const [scrollDirection, setScrollDirection] = useState(down)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            
            gsap.to(".scroll", {
                ease: 'ease',
                duration: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger:".app-container",
                    start:"top top",
                    end: "center top",
                },
            }); 
            gsap.from(".scroll", {
                ease: 'ease',
                duration: 1,
                scrollTrigger: {
                    trigger:".footer",
                    start: "-100% bottom", 
                    end: "-100% bottom",
                    onEnter: () => {
                        console.log(document.querySelector(".App").offsetHeight)
                        setScrollDirection(up);
                        setScrollTo(true)
                    },
                    onLeaveBack: () => {
                        setScrollDirection(down);
                        setScrollTo(false)
                    }
                },
            });
      });
      return () => ctx.revert();

  })
    return (
        <div className="scroll"  onClick={scrollTo ? handleScrollToTop : handleScrollToBottom}>
            <div 
                className={`mouse spin scroll-${scrollDirection}`} 
            >
                {scrollTo && 
                    <div className="svg-wrapper">
                        <svg height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="1.5em" cy="1.5em" r="1.4em" fill='#1a1a1a' className="shape" height="3em" width="3em"></circle>
                        </svg>
                        <div className="arrow">
                                <div className="arrow-top"></div>
                                <div className="arrow-bottom"></div>
                            </div>
                    </div>
                }
            </div>
            <p>Scroll {scrollTo && scrollDirection}</p>
        </div>
    );
}

export default ScrollDown