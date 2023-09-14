import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import phones from '../assets/img/phones.png';

function Phone() {

  const ref = useRef(null);

  useEffect(() => {

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
        trigger: '.App',
        start: "top top",
        end: "+=" + (frameCount * offsetValue),
        pin: true,
        scrub: true
      },
    }
  );
    },);
    return () => ctx.revert();
}, []);


  return (

    <div className="scene" ref={ref}>
      <img className='phones' src={phones} />
    </div>

  );

}
export default Phone;
