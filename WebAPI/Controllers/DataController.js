const express = require("express");

const router = express.Router();

const recaptcha = require("../Middlewars/ReCaptcha");

// Names of Routes
const {
  CREATE_CONTACT,
  GET_SOCIAL_ACCOUNTS,
  GET_TITLES,
} = require("../Names.Routes");

// Business Logic Component
const BLC = require("../../BLC/BLC");

// Language String Formatter
const FORMAT_LANG = require("../../Helpers/langStringFormatter");

// #region Controllers
const createContact = async (req, res) => {
  const { language } = req.body;
  try {
    const oBLC = new BLC();
    await oBLC.setLanguage(FORMAT_LANG(language));
    const userStatus = await oBLC.createContact(req);
    res.send(userStatus);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occured while sending your email!",
    });
  }
};

const getSocialAccounts = async (req, res) => {
  try {
    const oBLC = new BLC();
    const userTypes = await oBLC.getSocialAccounts();
    res.send(userTypes);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occured while retrieving social accounts!",
    });
  }
};

const getTitles = async (req, res) => {
  try {
    const oBLC = new BLC();
    const userTypes = await oBLC.getTitles();
    res.send(userTypes);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occured while retrieving the titles!",
    });
  }
};
// #endregion

// #region Routes

router.post(`/${CREATE_CONTACT}`, recaptcha, createContact);
router.get(`/${GET_SOCIAL_ACCOUNTS}`, getSocialAccounts);
router.get(`/${GET_TITLES}`, getTitles);

// #endregion

module.exports = router;
