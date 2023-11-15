import ContactForm from "../components/ContactForm"
import PulsingCircle from "../components/PulsingCircle"
import '../styles/contact.css'

const Contact = () => {
    return(
        <div className="pg-container contact">
            <div className="contact-text">
                <div>
                    <p className="connect">Let's get connected</p>
                    <h2>We want to <br />hear from <span className="emph">you</span>.<br /> Let us know <br />how we can <br />help.</h2>
                    <p>Contact us using the form or email us at <br /><a href="mailto:contact@viyrul.com
                    ">contact@viyrul.com
                    </a></p>
                </div>
            </div>
            <PulsingCircle />
            <ContactForm />
        </div>
    )
}

export default Contact