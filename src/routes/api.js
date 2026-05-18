const db = require("../db");

router.get("/db-status", (req, res) => {
  const status = db.getStatus();

  res.json({
    connected: status,
  });
});

