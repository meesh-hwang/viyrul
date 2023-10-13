import clock from '../assets/img/icons/clock.png'
import { useState } from 'react';

const ServicesCards = () => {

    const [serviceTxt, setServiceTxt] = useState(null);

    const clickHandler = (id) => {
        setServiceTxt((prev) => {
            return prev === id ? null : id;
        });
        console.log('clicked', id);
    };

    const services = [
        {
            id: 1,
            name: <h4>UI and UX<br />Design</h4>,
            img: clock,
            id: 1,
            desc: "Our development process focuses on creating intuitive navigation, fast load times, and engaging interactions to keep visitors on your site."
        },
        {
            id: 2,
            name: <h4>Web<br />Development</h4>,
            img: clock,
            id: 2,
            desc: "We stay at the forefront of web development technologies, ensuring that your website or application is built using the latest tools and platforms."
        },
        {
            id: 3,
            name: <h4>Digital<br />Marketing</h4>,
            img: clock,
            id: 3,
            desc: "From SEO and content marketing to pay-per-click advertising, we'll drive qualified traffic to your website and enhance your brand's online reach."
        },
        {
            name: <h4>Social Media<br />Management</h4>,
            img: clock,
            id: 4,
            desc: "Our social media management services will help you create and maintain a dynamic social presence, build brand loyalty, and increase conversions."
        },
        {
            name: <h4>Search Engine<br />Optimization</h4>,
            img: clock,
            id: 5,
            desc: "We implement on-page and technical SEO best practices to help your site rank well on search engines, driving more organic traffic to your business."
        },
        {
            name: <h4>E-commerce<br />Solutions</h4>,
            img: clock,
            id: 6,
            desc: "We have extensive experience in e-commerce development. From payment gateways to inventory management, we've got you covered."
        }
    ];

    const renderedItems = [];

    for (let i = 0; i < services.length; i += 2) {
        const row1 = services[i];
        const row2 = services[i + 1];
        console.log(row1.name)

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
                        {/* Your card content here */}
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
        );
    }
    return (

        <div className='service-cards'>
            {renderedItems}
        </div>
    )
}

export default ServicesCards;