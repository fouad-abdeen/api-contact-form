const mongoose = require("mongoose");

const { Schema } = mongoose;

const ContactSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailAddress: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contacts", ContactSchema);

module.exports = Contact;
