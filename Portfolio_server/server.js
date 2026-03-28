const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { Resend } = require("resend");

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_USER,
      subject: "New Contact Form",
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    });

    res.status(200).json({ message: "Message sent " });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed " });
  }
});

app.listen(5000, () => console.log("Server running"));
