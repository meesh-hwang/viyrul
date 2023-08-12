import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import phones from '../assets/img/phones.png';

function Phone() {
  const ref = useRef(null);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    const element = ref.current;

    let frameCount = 7;
    let offsetValue = 166;

    gsap.to(
    document.querySelector(".phones"),
    {
      objectPosition: (-offsetValue * frameCount * 2) + "px 50%",
      ease: "steps(" + frameCount + ")",
      duration: 1,
    
      scrollTrigger: {
        trigger: "",
        start: "top top",
        end: "+=" + (frameCount * offsetValue),
        scrub: 1,
      },
    }
  );
}, []);


  return (

    <div class="scene" ref={ref}>
      <img className='phones' src={phones} />
    </div>

  );

}
export default Phone;
