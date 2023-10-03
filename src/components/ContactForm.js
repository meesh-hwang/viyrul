import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

 const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    
    // initialize api with public key
    useEffect(() => emailjs.init('F3UE_bpDbqtt1WxsC'), []);
    
    const handleSubmit = async (e) => {
        
        //  Prevent page reload on submit
        e.preventDefault();

        const serviceId = 'service_ViyrulMarketing';
        const templateId = 'template_pm7sqch';
        const autoReplyId = 'template_y53ly9i';

        const autoReply = 
            emailjs.send(serviceId, autoReplyId, {
                name: formValues.name, 
                email: formValues.email
            });
        const sendEmail = 
            emailjs.send(serviceId, templateId, {
                name: formValues.name,
                email: formValues.email,
                subject: formValues.subject,
                message: formValues.message
            });

        try {
            setLoading(true);
            await autoReply;
            await sendEmail;
            alert("email successfully sent check inbox");
        } catch (error) {
            alert("Aurnaur");
            console.log(error);
        } finally {
            setLoading(false);
            setFormValues({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div>
                <input 
                    onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formValues.name}
                    placeholder="NAME"
                    required />
            </div>
            <div>
                <input 
                    onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formValues.email}
                    placeholder="EMAIL"
                    required />
            </div>
            <div>
                <input 
                    onChange={(e) => setFormValues({ ...formValues, subject: e.target.value })}
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formValues.subject}
                    placeholder="SUBJECT"
                    required />
            </div>
            <div>
                <textarea 
                    onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                    id="message" 
                    name="message" 
                    value={formValues.message} 
                    placeholder="MESSAGE"
                    cols="30" rows="15" 
                    required />
            </div>
            <button type="submit" className="contact-btn">SEND</button>
        </form>
    );
};

export default ContactForm;