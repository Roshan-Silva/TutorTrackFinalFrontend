import React from 'react';
import './Contact.css';
import { useEffect } from 'react';
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='contact'>
      <div className="contact-heading">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Please reach out with any questions or feedback.</p>
      </div>

      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button className='contact-us' type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
