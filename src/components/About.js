import clock from '../assets/img/icons/clock.png';
import chart from '../assets/img/icons/chart.png';
import people from '../assets/img/icons/people.png';
import flexible from '../assets/img/icons/flexible.png';
import { Outlet, Link } from 'react-router-dom';

const About = () => {

    return(
        <div className="about">
            <div className="about-heading">
                <h3>Services</h3>
                <h2>Why <span>Viyrul</span></h2>
            </div>
            <div className="about-cards">
                <div>
                    <img src={clock} alt='clock icon' />
                    <h4>Reliable</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar lectus in quam dictum suscipit.</p>
                    <Link to='/services'>MORE</Link>
                </div>
                <div>
                    <img src={chart} alt='chart icon' />
                    <h4>Growth</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar lectus in quam dictum suscipit.</p>
                    <Link to='/services'>MORE</Link>
                </div>
                <div>
                    <img src={people} alt='people icon' />
                    <h4>Personalized</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar lectus in quam dictum suscipit.</p>
                    <Link to='/services'>MORE</Link>
                </div>
                <div>
                    <img src={flexible} alt='flexible person icon' />
                    <h4>Flexible</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar lectus in quam dictum suscipit.</p>
                    <Link to='/services'>MORE</Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default About