require("dotenv").config();

const fetch = require("node-fetch");

const validateUser = async (req, res, next) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const token = req.headers["recaptcha-token"];
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  let validRequest = true;

  try {
    await fetch(url, { method: "POST" })
      .then((response) => response.json())
      .then((body) => {
        if (!body.success) validRequest = false;
      });

    if (!validRequest) throw new Error("recaptcha failed!");

    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = validateUser;
