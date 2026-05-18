const express = require("express");

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = router;

router.post("/message", (req, res) => {
  const { message } = req.body;


  if (!message) {
    return res.status(400).json({
      error: "Message is required",
    });
  }

  return res.json({
    received: message,
  });
});

router.post("/validate", (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({
      error: "Valid email required",
    });
  }

  return res.json({
    success: true,
  });
});

