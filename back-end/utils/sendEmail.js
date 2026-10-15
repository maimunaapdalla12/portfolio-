import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();
const sendEmail = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Contact Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}

    `,
  });
};

export default sendEmail;