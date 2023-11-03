import { Outlet, Link } from "react-router-dom";

const ContactCTA = () => {
    return(
        <div className="contactCTA panel">
            <h3>Find out how we can help you.</h3>
            <Link to="/contact" className='main-btn'>Contact Us</Link>
            <Outlet />
        </div>
    );
}

export default ContactCTA;