import ContactForm from "../components/ContactForm"
import '../styles/contact.css'

const Contact = () => {
    return(
        <div className="pg-container contact">
            <div className="contact-text">
                <div>
                    <h2>We want to <br />hear from <span className="emph">you</span>.<br /> Let us know <br />how we can <br />help.</h2>
                    <p>Contact us using the form or email us at <br /><a href="mailto:contact@viyrul.com
                    ">contact@viyrul.com
                    </a></p>
                </div>
            </div>
            <div className="circle-gradient"></div> 
            <ContactForm />
        </div>
    )
}

export default Contact