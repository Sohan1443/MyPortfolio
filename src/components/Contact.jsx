import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import '../styles/contactStyle.css';
export default function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_ynevbk7', // your EmailJS service ID
      'template_91ynmzi', // your EmailJS template ID
      form.current,
      'wnsOP-KHmI1zoqJrT' // your EmailJS public key
    )
    .then((result) => {
        setDone(true);
        form.current.reset();
    }, (error) => {
        alert('Failed to send message. Please try again.');
    });
  };

  return (
    <>
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="from_name">Name</label>
            <input type="text" id="from_name" name="from_name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="from_email">Email</label>
            <input type="email" id="from_email" name="from_email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
          {done && <p style={{color: 'green', marginTop: '10px'}}>Message sent successfully!</p>}
        </form>
      </div>
    </>
  )
}
