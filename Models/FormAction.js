const mongoose = require("mongoose");

const { Schema } = mongoose;

const FormActionSchema = new Schema({
  en: { type: String, required: true },
  ar: { type: String, required: true },
});

const FormAction = mongoose.model("form_actions", FormActionSchema);
module.exports = FormAction;
