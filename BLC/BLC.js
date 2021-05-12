/* eslint-disable class-methods-use-this */

const validator = require("validator");

// Data Access Layer Component
const DALC = require("../DALC/DALC");

// Business Rules' Messages
const MESSAGES = require("../Messages/Messages");
const LANGUAGE = require("../Messages/Language");

class BLC {
  constructor(language) {
    this._language = language;
  }

  setLanguage(lan) {
    LANGUAGE.init(lan);
    this._language = LANGUAGE.getLanguage();
  }

  async createContact(req) {
    const { FORM } = MESSAGES[this._language];

    const contact = req.body;
    const { firstName, lastName, emailAddress, subject, message } = contact;

    const isValidEmail = validator.isEmail(emailAddress);

    if (!isValidEmail) {
      throw new Error(FORM.EMAIL_ADDRESS);
    } else if (firstName.length < 2) {
      throw new Error(FORM.FIRST_NAME_LENGTH);
    } else if (lastName.length < 2) {
      throw new Error(FORM.LAST_NAME_LENGTH);
    } else if (subject.length < 4) {
      throw new Error(FORM.SUBJECT_LENGTH);
    } else if (message.length < 16) {
      throw new Error(FORM.MESSAGE_LENGTH);
    }

    try {
      const oDALC = new DALC();
      const status = await oDALC.createContact(contact);
      return status;
    } catch (error) {
      return error.message;
    }
  }

  async getSocialAccounts() {
    try {
      const oDALC = new DALC();
      const userTypes = await oDALC.getSocialAccounts();
      return userTypes;
    } catch (error) {
      return error.message;
    }
  }

  async getTitles() {
    try {
      const oDALC = new DALC();
      const userTypes = await oDALC.getTitles();
      return userTypes;
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = BLC;
