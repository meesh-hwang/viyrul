import seo from '../assets/img/icons/seo.png'
import ecommerce from '../assets/img/icons/ecommerce.png'
import marketing from '../assets/img/icons/marketing.png'
import uiux from '../assets/img/icons/uiux.png'
import smm from '../assets/img/icons/smm.png'
import webdev from '../assets/img/icons/webdev.png'
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const ServicesCards = () => {
    const [serviceTxt, setServiceTxt] = useState(null);

    const clickHandler = (id) => {
        setServiceTxt((prev) => {
            return prev === id ? null : id;
        });
    };

    const services = [
        {
            id: 1,
            name: <h4>UI and UX<br />Design</h4>,
            img: uiux,
            desc: "Our development process focuses on creating intuitive navigation, fast load times, and engaging interactions to keep visitors on your site."
        },
        {
            id: 2,
            name: <h4>Web<br />Development</h4>,
            img: webdev,
            desc: "We stay at the forefront of web development technologies, ensuring that your website or application is built using the latest tools and platforms."
        },
        {
            id: 3,
            name: <h4>Digital<br />Marketing</h4>,
            img: marketing,
            desc: "From SEO and content marketing to pay-per-click advertising, we'll drive qualified traffic to your website and enhance your brand's online reach."
        },
        {
            id: 4,
            name: <h4>Social Media<br />Management</h4>,
            img: smm,
            desc: "Our social media management services will help you create and maintain a dynamic social presence, build brand loyalty, and increase conversions."
        },
        {
            id: 5,
            name: <h4>Search Engine<br />Optimization</h4>,
            img: seo,
            desc: "We implement on-page and technical SEO best practices to help your site rank well on search engines, driving more organic traffic to your business."
        },
        {
            id: 6,
            name: <h4>E-commerce<br />Solutions</h4>,
            img: ecommerce,
            desc: "We have extensive experience in e-commerce development. From payment gateways to inventory management, we've got you covered."
        }
    ];

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)'
      })

    const renderedItems = [];

    if(!isMobile) {
        for (let i = 0; i < services.length; i += 2) {
            const row1 = services[i];
            const row2 = services[i + 1];
            renderedItems.push(
                <div key={`row-${i}`} className='row'>
                    
                    <div className='card-wrapper' onClick={() => clickHandler(row1.id)}>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        {serviceTxt === row1.id ? (
                            <div className='card'>
                                <p>{row1.desc}</p>
                            </div>
                        ) : (
                            <div className='card'>
                                <img src={row1.img} alt="Icon" />
                                {row1.name}
                            </div>
                        )}
                    </div>
                    {row2 && (
                        <div className='card-wrapper' onClick={() => clickHandler(row2.id)}>
                            <span className="t_over"></span>
                            <span className="t_over"></span>
                            <span className="t_over"></span>
                            <span className="t_over"></span>
                            <span className="t_over"></span>
                            <span className="t_over"></span>
                            <span className="t_over"></span>
                            <span className="t_over"></span>
                            <span className="t_over"></span>
                            {serviceTxt === row2.id ? (
                                <div className='card'>
                                    <p>{row2.desc}</p>
                                </div>
                            ) : (
                                <div className='card'>
                                    <img src={row2.img} alt="Icon" />
                                    {row2.name}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            );}
    } else {
        for (let i = 0; i < services.length; i += 3) {
            const row1 = services[i];
            const row2 = services[i + 1];
            const row3 = services[i + 2];
        renderedItems.push(
            <div key={`row-${i}`} className='row'>               
                <div className='card-wrapper' onClick={() => clickHandler(row1.id)}>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    {serviceTxt === row1.id ? (
                        <div className='card'>
                            <p>{row1.desc}</p>
                        </div>
                    ) : (
                        <div className='card'>
                            <img src={row1.img} alt="Icon" />
                            {row1.name}
                        </div>
                    )}
                </div>
                {row2 && (
                    <div className='card-wrapper' onClick={() => clickHandler(row2.id)}>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        {serviceTxt === row2.id ? (
                            <div className='card'>
                                <p>{row2.desc}</p>
                            </div>
                        ) : (
                            <div className='card'>
                                <img src={row2.img} alt="Icon" />
                                {row2.name}
                            </div>
                        )}
                    </div>
                )}
                {row3 && (
                    <div className='card-wrapper' onClick={() => clickHandler(row3.id)}>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        {serviceTxt === row3.id ? (
                            <div className='card'>
                                <p>{row3.desc}</p>
                            </div>
                        ) : (
                            <div className='card'>
                                <img src={row3.img} alt="Icon" />
                                {row3.name}
                            </div>
                        )}
                    </div>
                )}
            </div>
            )
        }
    }
    return (
        <div className='service-cards'>
            {renderedItems}
        </div>
    )
}

export default ServicesCards;