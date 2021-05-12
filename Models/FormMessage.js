const mongoose = require("mongoose");

const { Schema } = mongoose;

const FormMessageSchema = new Schema({
  en: { type: String, required: true },
  ar: { type: String, required: true },
});

const FormMessage = mongoose.model("form_messages", FormMessageSchema);
module.exports = FormMessage;
