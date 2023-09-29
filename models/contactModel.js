import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: [true, "Please enter a Name"],
  },
  subject: {
    type: "string",
    required: [true, "Please enter a suvject for your message"],
  },
  message: {
    type: "string",
    required: [true, "Please enter a message u can't send an empty message"],
  },
  tel: {
    type: "Number",
    required: true,
  },
});

export default mongoose.model("Contact", ContactSchema);
/**
 *
 * Sarah awik 9 - 28 -2023
 */
