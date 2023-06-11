const session = require('express-session');
const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();


app.use(
  session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}));

// app.use(
//   cookieSession({ name: "session", keys: ["Experiment"], maxAge: 24 * 60 * 60 * 100 })
// );

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("8000", () => {
  console.log("Server is running on port 8000 !");
});