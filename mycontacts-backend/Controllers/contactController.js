// Contains all the logic for request/response and will be connected with the DB
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc    Get all contacts
//@route   GET /api/contacts/
//@access  Public
const getContacts = async (req, res) => {
  console.log("GET /api/contacts hit"); // Add this
  const contacts = await Contact.find();
  console.log("Contacts from DB:", contacts); // Add this
  res.status(200).json(contacts);
};

//@desc    Get a single contact
//@route   GET /api/contacts/:id
//@access  Public
const getContact = async (req, res) => {
  res.status(200).json({ message: `Contact for ${req.params.id}` });
};

//@desc    Create a new contact
//@route   POST /api/contacts/
//@access  Public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  res.status(201).json({ message: "Create contact" });
});

//@desc    Update a contact
//@route   PUT /api/contacts/:id
//@access  Public
const updateContact = async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc    Delete a contact
//@route   DELETE /api/contacts/:id
//@access  Public
const deleteContact = async (req, res) => {
  res.status(200).json({ message: `Contact deleted for ${req.params.id}` });
};

module.exports = {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};
