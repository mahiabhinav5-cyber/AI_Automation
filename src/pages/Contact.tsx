import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions, please reach out to us!</p>
      <div className="contact-info">
        <p>Email: <a href="mailto:hello@ai.footprint-creator.io">hello@ai.footprint-creator.io</a></p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;