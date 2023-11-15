import gsap from "gsap";
import { useLayoutEffect } from "react";

const PulsingCircle = () => {

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".circle-ring", {
                scale: 2.6,
                opacity: 0,
                duration: 2,
                stagger: {
                    each: 0.6,
                    repeat: -1
                }
            });
        });
        return () => ctx.revert();

    })

    return (
        <div className='circle-pulse'>
            <div className='circle'>
                <div className='circle-ring'></div>
                <div className='circle-ring'></div>
                <div className='circle-ring'></div>
            </div>
        </div>
    )
}

export default PulsingCircle