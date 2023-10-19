import React, { useEffect, useRef } from 'react';
import { gsap, Linear } from 'gsap';
import flexible from '../assets/img/icons/flexible.png';
import '../styles/servicesSlider.css'

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
  const stageRef = useRef(null);
  const boxesRef = useRef([]);
  
  useEffect(() => {
      const stage = stageRef.current;
      const boxes = boxesRef.current;
      let cardGap = 520;
      cardGap = Math.min(window.innerWidth / 1.8, 520);

    gsap.set(stage, {
      css: {
        perspective: 1100,
        transformStyle: 'preserve-3d',
      },
    });

    const duration = 30;
    const totalCards = cards.length;

    boxes.forEach((element, index) => {
      const rotationY = (360 / totalCards) * index;

      gsap.set(element, {
        css: {
          rotationY,
          transformOrigin: `50% 50% -${cardGap}px`,
        },
      });

      gsap.to(element, {
        duration,
        css: {
          z: 0.01,
          rotationY: `+=360`,
        },
        repeat: -1,
        ease: Linear.easeNone,
      });
    });
  }, []);

  return (
      <div ref={stageRef} className="stage services-slider">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (boxesRef.current[index] = el)}
            className="box process-card"
          >
            <img src={card.img} alt={card.name} />
            <h4>{card.name}</h4>
            {card.desc}
          </div>
        ))}
      </div>
  );
};

export default ServicesSlider;