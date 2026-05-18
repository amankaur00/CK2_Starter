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

