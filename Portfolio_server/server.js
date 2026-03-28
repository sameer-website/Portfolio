const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => res.send("Backend running!"));

// Contact route
app.post("/contact", async (req, res) => {
  console.log("Request received:", req.body);
  const { name, email, phone, subject, reason, message } = req.body;

  // Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // tumhare email pe hi aa jaye
    subject: `New Contact Form: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Reason: ${reason}
      Message: ${message}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Email failed" });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
