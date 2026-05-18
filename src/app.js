const express = require("express");

const viewRouter = require("./routes/views");
const apiRouter = require("./routes/api");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/", viewRouter);
app.use("/api", apiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});