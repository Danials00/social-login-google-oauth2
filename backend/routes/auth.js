//const router = require("express").Router();
const express = require("express");
const passport = require("passport");
const router = express.Router();

const CLIENT_URL = "http://localhost:3000/";



router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      cookies: req.cookies
    });
  }
});

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", function(req, res, next) {
  req.logout(function(err) {
        if (err) { return next(err);}
  res.redirect(CLIENT_URL);
  });
});

// router.get("/auth/logout", (req, res) => {
//     req.logout();
//     req.session.destroy((err) => {
//       if (err) {
//         console.log(err);
//         // Handle error if session destroy fails
//         res.status(500).json({
//           success: false,
//           message: "Failed to logout",
//         });
//       } else {
//         // Successful logout
//         res.clearCookie("connect.sid");
//         // Redirect the user to the desired location
//         res.redirect(CLIENT_URL);
//       }
//     });
//   });
  

router.get(
    "/google",
     passport.authenticate("google", 
     { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);



module.exports = router