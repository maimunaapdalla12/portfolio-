import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.api_key);

const sendEmail = async ({ name, email, message }) => {
const { data, error } = await resend.emails.send({
   from: "Portfolio <onboarding@resend.dev>",
  to: ["maisahabdallah14@gmail.com"],
  replyTo: email,
  subject: `New Contact Message from ${name}`,
  text: `Name: ${name}
Email: ${email}

Message:
${message}`,
});

  if (error) {
    console.error("Resend error:", error.message);
    throw new Error("Email could not be sent");
  }

  return data;
};

export default sendEmail;