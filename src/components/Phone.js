import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect, useRef } from 'react';
import phones from '../assets/img/phones.png';
import PulsingCircle from './PulsingCircle';

const Phone = () => {

  const ref = useRef(null);

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

    gsap.registerPlugin(ScrollTrigger);
    const element = ref.current;

    let frameCount = 17;
    let offsetValue = 6.5;



    gsap.to(
      element.querySelector(".phones"),
    {
      objectPosition: (-offsetValue * frameCount * 2) + "em 50%",
      ease: "steps(" + frameCount + ")",
      duration: 40000,
    
      scrollTrigger: {
        trigger: '.services',
        start: "center center",
        end: "+=100%",
        pin: true,
        scrub: true,
       },
    }
  );
    });
    return () => ctx.revert();
}, []);


  return (
    <div className="scene" ref={ref}>
      <PulsingCircle />
      <img className='phones' alt='Phone with notifications' src={phones} />
    </div>
  )
}
export default Phone;