import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Error sending message');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h3>Send a Message</h3>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Send</button>

      {success && <p style={{ color: 'green' }}>Message sent successfully!</p>}
    </form>
  );
};

export default ContactForm;
