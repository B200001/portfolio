import React from 'react';
import '../styles/contactpage.scss'; // Import the SCSS file for styling

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p><span>Phone:</span> <a href="tel:1234567890">9468886427</a></p>
        <p><span>Email:</span> <a href="mailto:example@example.com">imh10046.20@bitmesra.ac.in</a></p>
        <p><span>LinkedIn:</span> <a href="https://www.linkedin.com/in/bhuwan-jain-533983207/">https://www.linkedin.com/in/bhuwan-jain-533983207/</a></p>
        <p><span>GitHub:</span> <a href="https://github.com/B200001">https://github.com/B200001</a></p>
      </div>
    </div>
  );
}

export default ContactPage;