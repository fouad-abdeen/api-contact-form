const MESSAGES = {
  EN: {
    FORM: {
      EMAIL_ADDRESS: "Invalid Email Address!",
      FIRST_NAME_LENGTH: "First Name must consist of at least 2 characters!",
      LAST_NAME_LENGTH: "Last Name must consist of at least 2 characters!",
      SUBJECT_LENGTH: "Subject must consist of at least 4 characters!",
      MESSAGE_LENGTH: "Message must consist of at least 16 characters!",
      SUCCESSFULL_SUBMISSION: "Email sent successfully.",
    },
  },
  AR: {
    FORM: {
      EMAIL_ADDRESS: "البريد الإلكتروني غير صالح",
      FIRST_NAME_LENGTH: "يجب أن يتكوّن الاسم الأول من حرفين على الأقل",
      LAST_NAME_LENGTH: "يجب أن يتكوّن الاسم الأخير من حرفين على الأقل",
      SUBJECT_LENGTH: "يجب أن يتكوّن العنوان من 4 أحرف على الأقل",
      MESSAGE_LENGTH: "يجب أن تتكوّن الرسالة من 16 أحرف على الأقل",
      SUCCESSFULL_SUBMISSION: "تم إسال البريد الإلكتروني بنجاح",
    },
  },
};

module.exports = MESSAGES;
