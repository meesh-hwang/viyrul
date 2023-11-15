import clock from '../assets/img/icons/clock.png';
import chart from '../assets/img/icons/chart.png';
import people from '../assets/img/icons/people.png';
import flexible from '../assets/img/icons/flexible.png';

const AboutCards = () => {
    const about = [
        {
            name: "Personalized",
            desc: <p>We create <span className='emph'>personalized growth plans</span> and offer the necessary services to achieve it.</p>,
            img: people
        },
        {
            name: "Growth",
            desc: <p>We work to <span className='emph'>maximize</span> your <span className='emph'>growth potential</span> through the various services we offer.</p>,
            img: chart
        },
        {
            name: "Flexible",
            desc: <p>We adapt to each business' <span className='emph'>needs</span> and work to offer the most <span className='emph'>optimal solutions.</span></p>,
            img: flexible
        },
        {
            name: "Reliable",
            desc: <p>We are <span className='emph'>punctual</span>, and we are there when you need us. Your needs are our <span className='emph'>priority.</span></p>,
            img: clock
        },

    ]
    const renderedItems = [];

    for (let i = 0; i < about.length; i += 2) {
        const row1 = about[i];
        const row2 = about[i + 1];
        renderedItems.push(
            <div key={`row-${i}`} className='row'>
                <div className='card-wrapper'>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <div className='card'>
                        <img src={row1.img} alt="Icon" />
                        <h4>{row1.name}</h4>
                        {row1.desc}
                    </div>
                </div>
                {row2 && (
                    <div className='card-wrapper' >
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                       
                            <div className='card'>
                                <img src={row2.img} alt="Icon" />
                                <h4>{row2.name}</h4>
                                {row2.desc}
                            </div>
                       
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="about-cards">
            {renderedItems}
        </div>
    );
}

export default AboutCards