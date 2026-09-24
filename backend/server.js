const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("LMS Backend is running");
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}
module.exports = app;
