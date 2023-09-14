import handIcon from '../assets/img/hand-holding-seeding.svg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

const Service = () => {

  const ref = useRef(null);

//   useEffect(() => {

//     let ctx = gsap.context(() => {

//     gsap.registerPlugin(ScrollTrigger);
//     const element = ref.current;

//     let frameCount = 17;
//     let offsetValue = 198;

//     gsap.to(
//     element.querySelector(".service"),
//     {
//       duration: 2,
    
//       scrollTrigger: {
//         trigger: '.services',
//         start: "top top",
//         end: "bottom",
//         pin: true,
//         scrub: true
//       },
//     }
//   );
//     },);
//     return () => ctx.revert();
// }, []);


    return(
    <div className='services' ref={ref}>
        <div className='service'>
          <img src={handIcon} className='service-icon'/>
          <h2>Pussy Marketing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar lectus in quam dictum suscipit. Morbi ultrices malesuada arcu, in dictum ante vulputate ut. Donec eget nibh enim.</p>
        </div>
        <div className='service'>
          <img src={handIcon} className='service-icon'/>
          <h2>Pussy Marketing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar lectus in quam dictum suscipit. Morbi ultrices malesuada arcu, in dictum ante vulputate ut. Donec eget nibh enim.</p>
        </div>
        <div className='service'>
          <img src={handIcon} className='service-icon'/>
          <h2>Pussy Marketing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar lectus in quam dictum suscipit. Morbi ultrices malesuada arcu, in dictum ante vulputate ut. Donec eget nibh enim.</p>
        </div>
    </div>
    )
}

export default Service