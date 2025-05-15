const express = require('express');
const router = express.Router();

const {
  getContact,
  getContacts, 
  createContact, 
  updateContact, 
  deleteContact, 
} = require("../Controllers/contactController")

//those who have the same route (file location) you can combine them together. 

router.route("/")
  .get(getContacts)       
  .post(createContact);  

router.route("/:id")
  .get(getContact)         
  .put(updateContact)     
  .delete(deleteContact); 

module.exports = router;
