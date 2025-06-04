import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

const Contact = () => {
  const form = useRef();
  const handleCombinedSubmit = async (e) => {
      e.preventDefault();

      sendEmail(e);           // Send email via EmailJS first
      await handleSubmit(e);  // Then handle the form logic (e.g., show message, reset form)
    }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x8yyacq', 'template_q1651gh', form.current, {
        publicKey: 'Ige6zuCqFXM_pSemu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This would normally be an API call to your backend
      // For demo purposes, we'll simulate the email sending
      console.log('Email would be sent to palleharsha455@gmail.com with:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitMessage('Message sent successfully! We will contact you soon.');
      
      // Reset form
      setFormData({
        user_name: '',
        user_email: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
    

  };
  return (
    <div>
    <section className="snaptosite-contact-section" id="contact">
      <h2 className="snaptosite-contact-title">Get In Touch</h2>
      <p className="snaptosite-contact-subtitle">
        Want a website for your business? Let's connect!
      </p>
      <div className="snaptosite-contact-info">
        <p><strong>📞 Phone:</strong> +91-91216-47398</p>
        <p><strong>✉️ Email:</strong> palleharsha455@gmail.com</p>
        <p><strong>📍 Location:</strong> Hyderabad, India</p>
      </div>
    </section>
    <div className="snaptosite_contact_right_section">
          <h2 className="snaptosite_contact_section_title">Send us a Message</h2>
    <form className="snaptosite_contact_form" ref={form} onSubmit={handleCombinedSubmit}>
            <div className="snaptosite_contact_form_group">
              <input
                type="text"
                name="user_name"
                value={formData.name}
                onChange={handleChange}
                className="snaptosite_contact_form_input"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="snaptosite_contact_form_group">
              <input
                type="email"
                name="user_email"
                value={formData.email}
                onChange={handleChange}
                className="snaptosite_contact_form_input"
                placeholder="Enter email address"
                required
              />
            </div>

            <div className="snaptosite_contact_form_group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="snaptosite_contact_form_textarea"
                placeholder="Enter Message"
                rows="5"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              value="Send"
              className="snaptosite_contact_submit_button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'SUBMIT'}
            </button>
            
            {submitMessage && (
              <div className={`snaptosite_contact_submit_message ${submitMessage.includes('success') ? 'success' : 'error'}`}>
                {submitMessage}
              </div>
            )}
          </form>
          </div>
    </div>
  );
};

export default Contact;
