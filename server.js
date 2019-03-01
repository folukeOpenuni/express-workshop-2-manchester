const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/views/index.html");
  res.render("index");
});

app.get("/my-cv", (req, res) => {
  // res.sendFile(__dirname + "/views/my-cv.html");
  res.render("my-cv")
});

const SERVER_PORT = process.env.PORT || 3000;
app.listen(SERVER_PORT, function() {
  console.log(
    `Server is listening on port ${SERVER_PORT}. Ready to accept requests!`
  );
});
