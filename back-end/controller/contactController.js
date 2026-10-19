import { log } from "console";
import Contact from "../models/contactmodel.js";
import sendEmail from "../utils/sendEmail.js";

export const createContact = async (req, res) => {
  console.log("CONTACT ROUTE REACHED");

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

    console.log("Contact saved successfully");

    return res.status(201).json({
      success: true,
      message: "Message saved successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Contact error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to save message",
    });
  }}