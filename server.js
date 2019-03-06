const express = require("express");

const handlebars = require("express-handlebars"); // load the package
const blogPost = require("./data/blogPosts");
const app = express(); // already-existing app initialisation

app.engine("handlebars", handlebars()); // initialise the handlebars engine
app.set("view engine", "handlebars"); // specify engine for page rendering```

app.use(express.static("public"));

options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

app.get("/", (req, res) => {
  //res.sendFile(__dirname + "/views/index.html");
  // res.render("index");
  res.render("index", {
    firstName: "Foluke",
    lastName: "Agbede",
    //date: Date(Date.now())
    //date: `${new Date().getMonth() + 1} / ${new Date().getFullYear()}`
    date: new Date().toLocaleDateString("en-GB", options),
    footerDate: new Date().getFullYear(),
    blogPost: blogPost
  });
});

app.get("/my-cv", (req, res) => {
  //res.sendFile(__dirname + "/views/my-cv.html");
  res.render(__dirname + "/views/my-cv.handlebars", {
    cvPage: "CV Page",
    date: new Date().toLocaleDateString("en-GB", options),
    footerDate: new Date().getFullYear()
  });
});

app.get("/post.html", (req, res) => {
  res.render(__dirname + "/views/post.handlebars", {
    footerDate: new Date().getFullYear()
  });
});

//endpoint for contact me page
app.get("/contact", (req, res) => {
  res.render(__dirname + "/views/contact.handlebars", {
    footerDate: new Date().getFullYear()
  });
});

app.post("newpost", (req, res) => {
  //do some magic
});

const SERVER_PORT = process.env.PORT || 3000;
app.listen(SERVER_PORT, function() {
  console.log(
    `Server is listening on port ${SERVER_PORT}. Ready to accept requests!`
  );
});
