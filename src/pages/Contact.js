import ContactForm from "../components/ContactForm"

const Contact = () => {
    return(
        <div>
            <div className="pg-title">
                <hr/>
                <h1>Contact</h1>
                <hr/>
            </div>
            <div className="contact-container">
                <h2>How can we help you?</h2>
                <h3>Phone: <a href="tel:7781234567"> (778) 123 - 4567</a></h3>
                <h3>Email: <a href="viyrulmarketingco@gmail.com"> viyrulmarketingco@gmail.com</a></h3>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact