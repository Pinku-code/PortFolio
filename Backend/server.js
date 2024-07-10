import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any email service
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS,  
  },
});

// Routes
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form Data:', { name, email, message });

  const mailOptions = {
    from: email, // The user's email address
    to: process.env.EMAIL_USER, // Your email address
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
    console.log('Email sent:', info.response);
    res.json({ message: 'Meassage Sent. Thank You.' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

