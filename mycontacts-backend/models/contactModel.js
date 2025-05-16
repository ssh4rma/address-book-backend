const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add the contact name"],
  },
  email: {
    type: String,
    required: [true, "Please enter the contact email address"],
  },
  phone: {
    type: String,
    required: [true, "Please enter the contacat phone number"],
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
