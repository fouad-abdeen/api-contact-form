const mongoose = require("mongoose");

const { Schema } = mongoose;

const TitleSchema = new Schema({
  en: { type: String, required: true },
  ar: { type: String, required: true },
  id: { type: String, required: true },
});

const Title = mongoose.model("titles", TitleSchema);
module.exports = Title;
