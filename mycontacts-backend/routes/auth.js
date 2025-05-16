const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const getToken = (id) => jwt.sign({ id }, process.env.KEY, { expiresIn: "1d" });

// POST /api/auth/login  – returns { token: "..." }
router.post("/login", (req, res) => {
  const fakeUserId = "user1234"; // hard-coded demo ID
  const token = getToken(fakeUserId);
  res.json({ token });
});

module.exports = router;
