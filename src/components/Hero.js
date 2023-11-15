import { Outlet, Link } from "react-router-dom";
import SpinningSphere from "./SpinningSphere";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useLayoutEffect } from 'react';
import { TextPlugin } from "gsap/all";
const Hero = () => {

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 768 })
        return isMobile ? children : null
      }
      const Default = ({ children }) => {
        const isDefault = useMediaQuery({ minWidth: 769 })
        return isDefault ? children : null
      }
      gsap.registerPlugin(TextPlugin)
      
      useLayoutEffect(() => {
          let ctx = gsap.context(() => {
            gsap.to("h1", {
                duration: 0.8, 
                delay:2, 
                
                text: {
                    value:"Go <span>Viral</span> with <span>Viyrul</span>.", 
                    newClass: "anim-emph",
                    preserveSpaces:true,
                    type: "diff", 
                }})
           
        });
        return () => ctx.revert();
    })
    return(
        <div className='hero'>
            <SpinningSphere />
            <div className='hero-text'>
                <Mobile>
                    <h1>Inspiring <span className='emph'>growth</span> <br />through <span className='emph'>innovation</span>.</h1>
                </Mobile>
                <Default>
                <h1><span className='emph'>Inspiring</span> growth <span className='emph'><br />through</span> innovation.</h1>
                </Default>
                <p>Bring your business online</p>
                <Link to="/contact" className='main-btn'>Book Now</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Hero;