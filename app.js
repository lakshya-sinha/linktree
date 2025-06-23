const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));


app.listen(port, () => {
  console.log("🔥")
})

app.get("/", (req, res) => {
  res.render("linktree")
})
app.get("/portfolio", (req, res) => {
  res.render("home")
})
