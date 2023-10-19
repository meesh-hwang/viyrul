
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/all';
import flexible from '../assets/img/icons/flexible.png';
import '../styles/servicesSlider.css';

// Define onResize outside of the component


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
  gsap.registerPlugin(Draggable);
  const boxesRef = useRef([]);
  const wrapperRef = useRef();
  const dragElRef = useRef();
  const cardRef = (el) => {
    if (boxesRef.current) {
      boxesRef.current.push(el);
    }
  };

  const onResize = (spin, boxes, dragAmount, cardGap, dragElRef, startProgress, progressLimit) => {

    cardGap = Math.min(window.innerWidth / 1.8, 520);
  
    if (matchMedia("(max-width: 480px)").matches) {
      dragAmount = -1500;
    }
  
    if (spin) {
      gsap.killTweensOf(spin);
      spin.timeScale(0);
      startProgress = spin.progress();
    }
  
    spin = gsap.fromTo(
      boxes,
      {
        rotationY: (i) => (i * 360) / boxes.length,
      },
      {
        rotationY: "+=360",
        transformOrigin: `50% 50% ${-cardGap}px`,
        duration: 50,
        ease: "none",
        repeat: -1,
      }
    );
  
    // Create Draggable
  
    Draggable.create(dragElRef.current, {
      trigger: [wrapperRef.current],
      allowNativeTouchScrolling: true,
      onPress() {
        gsap.killTweensOf(spin);
        spin.timeScale(0);
        startProgress = spin.progress();
      },
      onDrag() {
        let currentProgress = startProgress + (this.startX - this.x) / dragAmount;
        spin.progress(progressLimit(currentProgress));
      },
      onRelease() {
        if (!this.tween || !this.tween.isActive()) {
          gsap.to(spin, { timeScale: 1, duration: 1 });
        }
      },
    });
  };

  let dragAmount = -3000;
  let cardGap = 520;
  let startProgress;
  let spin;
  let progressLimit = gsap.utils.wrap(0, 1);

  useEffect(() => {
    onResize(spin, boxesRef.current, dragAmount, cardGap, dragElRef, startProgress, progressLimit);

    const handleResize = () => {
      onResize(spin, boxesRef.current, dragAmount, cardGap, dragElRef, startProgress, progressLimit);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call onResize when the component mounts
    onResize(spin, boxesRef.current, dragAmount, cardGap, dragElRef, startProgress, progressLimit);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [spin, boxesRef, dragAmount, cardGap, dragElRef, startProgress, progressLimit]);

  return (
    <div className='slider-container'>
      <div ref={wrapperRef} className="stage services-slider">
        <div ref={dragElRef} className='drag-el' ></div>
        {cards.map((card, index) => (
          <div
            key={index}
            ref={cardRef}
            className="box process-card"
          >
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
