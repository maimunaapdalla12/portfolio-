import Contact from "../models/contactmodel.js";
import sendEmail from "../utils/sendEmail.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    await sendEmail({
      name,
      email,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};