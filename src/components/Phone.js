import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect, useRef } from 'react';
import phones from '../assets/img/phones.png';

const Phone = () => {

  const ref = useRef(null);

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

    gsap.registerPlugin(ScrollTrigger);
    const element = ref.current;

    let frameCount = 17;
    let offsetValue = 198;

    gsap.to(
    element.querySelector(".phones"),
    {
      objectPosition: (-offsetValue * frameCount * 2) + "px 50%",
      ease: "steps(" + frameCount + ")",
      duration: 1,
    
      scrollTrigger: {
        trigger: '.services',
        start: "center center",
        end: "+=" + (frameCount * offsetValue),
        pin: true,
        scrub: true
      },
    }
  );
    });
    return () => ctx.revert();
}, []);


  return (
    <div className="scene" ref={ref}>
      <img className='phones' alt='Phone with notifications' src={phones} />
    </div>
  )
}
export default Phone;
