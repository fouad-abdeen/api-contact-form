const mongoose = require("mongoose");

const { Schema } = mongoose;

const SocialAccountSchema = new Schema({
  link: { type: String, required: true },
  platform: { type: String, required: true },
  activated: { type: Boolean, required: true },
});

const SocialAccount = mongoose.model("social_accounts", SocialAccountSchema);
module.exports = SocialAccount;
