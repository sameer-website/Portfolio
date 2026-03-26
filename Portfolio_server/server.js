const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.post("/contact", async (req, res) => {
  const { name, email, phone, subject, reason, message } = req.body;

  console.log("/contact received", {
    name,
    email,
    phone,
    subject,
    reason,
    message,
  });

  // ✅ Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Required fields missing",
    });
  }

  try {
    // ✅ Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
    });

    // ✅ Email to YOU
    const adminMail = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New ${reason || "General"} Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Subject: ${subject || "N/A"}
Reason: ${reason || "N/A"}

Message:
${message}
      `,
    };

    // ✅ Auto-reply to USER
    const userMail = {
      from: `"Sameer Khan" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting me",
      text: `
Hi ${name},

Thank you for reaching out regarding "${reason || "your query"}".

I have received your message and will get back to you within 24 hours.

Best Regards,
Sameer Khan
      `,
    };

    // ✅ Send emails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
    });
  } catch (error) {
    console.error("Email Error:", error);

    res.status(500).json({
      success: false,
      message: "Error sending message",
    });
  }
});

//  PORT (important for Render)
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
