const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save contact to DB
    await Contact.create({ name, email, message });

    // Send email to yourself (site owner)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
exports.createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body); // ✅ this saves to MongoDB
    res.status(201).json({ success: true, message: 'Message sent!', contact });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
