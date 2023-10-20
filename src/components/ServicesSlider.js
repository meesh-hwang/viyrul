import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase, Draggable } from 'gsap/all';
import flexible from '../assets/img/icons/flexible.png';
import { useMediaQuery } from 'react-responsive';
import '../styles/servicesSlider.css';

const cards = [
  {
    name: "Research",
    desc: 
      <p className='process-card-p'>
        Our solutions are never one-size-fits-all. We take the time to understand your business, your goals, and your target audience, and then we craft a customized strategy to ensure your website, web application, or marketing plan is perfectly aligned with your objectives.
      </p>
    ,
    img: flexible,
  },
  {
    name: "Plan",
    desc: 
      <p>
        Planning is a critical step in our process. We develop a tailored roadmap outlining the project scope, milestones, and timelines. Our team collaborates with you to define the project's architecture, features, and design. This phase ensures that we're aligned with your vision and goals.
      </p>
    ,
    img: flexible,
  },
  {
    name: "Optimization",
    desc: 
      <p>
        Optimization is a fundamental aspect of our approach. For web development, we ensure user-friendly, fast, and responsive websites. In marketing projects, we optimize your online presence with SEO and social media optimization strategies to maximize visibility.
      </p>
    ,
    img: flexible,
  },
  {
    name: "Approve",
    desc:
      <p>
        At every significant project juncture, we seek your approval to ensure alignment with your vision and goals. We prioritize transparency and collaboration, giving you the opportunity to provide input and give the green light at each step. Your approval signals us to proceed, ensuring the project meets your expectations.
      </p>
    ,
    img: flexible,
  },
  {
    name: "Viyrulize",
    desc: 
      <p>
        This phase signifies the transition from development to a live project. We ensure smooth web development with rigorous testing and quality assurance. In marketing campaigns, we execute, monitor, and adapt in real-time to maximize your online presence. Time to go Viyrul!
      </p>
    ,
    img: flexible,
  },
];

const ServicesSlider = () => {
  // Refs
  const wrapperRef = useRef();
  const dragElRef = useRef();
  const animationTimeline = useRef();
  // State
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const div = document.createElement("div");

  // Effect for initializing GSAP and Draggable
  useLayoutEffect(() => {
    gsap.registerPlugin(Draggable);

    // Set initial values
    let dragAmount = isMobile ? -1500 : -3000;
    let cardGap = Math.min(window.innerWidth / 1.8, isMobile ? 400 : 520);
    let startProgress;
    let spin;
    let progressLimit = gsap.utils.wrap(0, 1);
    const processCards = gsap.utils.toArray(".process-card")

    // Function to handle resizing and initialize Draggable
    const onResize = () => {
      

      animationTimeline.current = gsap.fromTo(
        ".process-card",
        {
          rotationY: (i) => (i * 360) / processCards.length,
        },
        { 
          rotationY: '+=360',
          transformOrigin: `50% 50% ${-cardGap}em`,
          duration: 50,
          ease: 'none',
          repeat: -1,
        }
      );

      Draggable.create(dragElRef.current, {
        trigger: wrapperRef.current,
        allowNativeTouchScrolling: true,
        inertia: true,
        lockAxis: true,
        onPress() {
          startProgress = animationTimeline.current.progress();
        animationTimeline.current.pause();
        },
        onDrag() {
          let currentProgress = startProgress + (this.startX - this.x) / dragAmount;
          animationTimeline.current.progress(progressLimit(currentProgress));
        },
        onRelease() {
          animationTimeline.current.play();
        },
      });
    };

    // Initial call to onResize
    onResize();

    // Event listener for window resize
    const handleResize = () => {
      onResize();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      animationTimeline.current.kill();
    };
  }, [isMobile, div]);

  return (
    <div className="slider-container">
      <div ref={dragElRef} ></div>
      <div ref={wrapperRef} className="stage services-slider">
        {cards.map((card, index) => (
          <div key={index} className="process-card">
            <img src={card.img} alt={card.name} />
            <h4>{card.name}</h4>
            {card.desc}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSlider;
