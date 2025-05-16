const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const protect = require("../middleware/protect");

// every route below now needs a valid Bearer token
router.route("/").get(protect, getContacts).post(protect, createContact);

router
  .route("/:id")
  .get(protect, getContact)
  .put(protect, updateContact)
  .delete(protect, deleteContact);

module.exports = router;
