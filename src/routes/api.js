router.post("/auth/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password required",
    });
  }

  return res.json({
    message: "Login successful",
  });
});

 feature/api-endpoints
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

 main
