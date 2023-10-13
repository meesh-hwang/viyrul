import clock from '../assets/img/icons/clock.png';
import chart from '../assets/img/icons/chart.png';
import people from '../assets/img/icons/people.png';
import flexible from '../assets/img/icons/flexible.png';

const AboutCards = () => {
    return (
        <div className="about-cards">
            <div className='flex'>
                <div className='about-card-wrapper'>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <div className='about-card'>
                        <img src={people} alt='people icon' />
                        <h4>Personalized</h4>
                        <p>We create <span className='emph'>personalized growth plans</span> and offer the necessary services to achieve it.</p>
                    </div>
                </div>
                <div className='about-card-wrapper'>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <div className='about-card'>
                        <img src={chart} alt='chart icon' />
                        <h4>Growth</h4>
                        <p>We work to <span className='emph'>maximize</span> your <span className='emph'>growth potential</span> through the various services we offer.</p>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='about-card-wrapper'>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <div className='about-card'>
                        <img src={flexible} alt='flexible person icon' />
                        <h4>Flexible</h4>
                        <p>We adapt to each business' <span className='emph'>needs</span> and work to offer the most <span className='emph'>optimal solutions.</span></p>
                    </div>
                </div>
                <div className='about-card-wrapper'>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <div className='about-card'>
                        <img src={clock} alt='clock icon' />
                        <h4>Reliable</h4>
                        <p>We are <span className='emph'>punctual</span>, and we are there when you need us. Your needs are our <span className='emph'>priority.</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCards