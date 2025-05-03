import { z } from "zod";
import emailjs from 'emailjs-com';

// Get EmailJS credentials from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID as string;
const EMAILJS_USER_ID = import.meta.env.EMAILJS_USER_ID as string;

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// Initialize EmailJS
emailjs.init(EMAILJS_USER_ID);

// Function to send email using EmailJS directly
export const sendContactForm = async (data: ContactFormValues): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
