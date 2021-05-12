/* eslint-disable class-methods-use-this */

// Mongoose Models
const ContactModel = require("../Models/Contact");
const SocialAccountModel = require("../Models/SocialAccount");
const TitleModel = require("../Models/Title");

// Messages
const MESSAGES = require("../Messages/Messages");
const LANGUAGE = require("../Messages/Language");

class DALC {
  constructor(language) {
    this._language = language;
    this.setLanguage();
  }

  setLanguage() {
    this._language = LANGUAGE.getLanguage();
  }

  async createContact(contact) {
    const { FORM } = MESSAGES[this._language];
    try {
      const newContact = new ContactModel(contact);
      await newContact.save();
      return FORM.SUCCESSFULL_CREATION;
    } catch (error) {
      return error.message;
    }
  }

  getSocialAccounts() {
    try {
      return SocialAccountModel.find({});
    } catch (error) {
      return error.message;
    }
  }

  getTitles() {
    try {
      return TitleModel.find({});
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = DALC;
