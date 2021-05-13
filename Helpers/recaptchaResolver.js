require("dotenv").config();

const fetch = require("node-fetch");

const validateUser = async (token) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  let validRequest = true;

  await fetch(url, { method: "POST" })
    .then((response) => response.json())
    .then((body) => {
      if (!body.success) validRequest = false;
    });

  return validRequest;
};

module.exports = validateUser;
