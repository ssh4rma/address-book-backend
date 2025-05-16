const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// GET all contacts
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// GET single contact by id
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

// CREATE a new contact
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({ name, email, phone });
  res.status(201).json(contact);
});

// UPDATE contact by id
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedContact);
});

// DELETE contact by id
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Contact deleted" });
});

module.exports = {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};
