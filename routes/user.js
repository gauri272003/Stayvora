// const express = require("express");
// const router = express.Router();
// const passport = require("passport");

// const wrapAsync = require("../utilis/wrapAsync.js");
// const userController = require("../controllers/users.js");

// // ===== SIGNUP =====
// router.route("/signup")
//   .get(userController.renderSignupForm)
//   .post(wrapAsync(userController.signup));

// // ===== LOGIN =====
// router.route("/login")
//   .get(userController.renderLoginForm)
//   .post((req, res, next) => {
//     passport.authenticate("local", (err, user, info) => {
//       if (err) return next(err); // handle errors
//       if (!user) {
//         req.flash("error", "Invalid username or password");
//         return res.redirect("/login");
//       }
//       req.login(user, (err) => {
//         if (err) return next(err);
//         req.flash("success", "Welcome back to Wanderlust!");
//         const redirectUrl = res.locals.redirectUrl || "/listings";
//         return res.redirect(redirectUrl); // safe redirect
//       });
//     })(req, res, next);
//   });

// // ===== LOGOUT =====
// router.get("/logout", userController.logout);

// module.exports = router;



const express = require("express");
const router = express.Router();
const passport = require("passport");
const wrapAsync = require("../utilis/wrapAsync.js");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

// ===== SIGNUP =====
router.route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));

// ===== LOGIN =====
router.route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

// ===== LOGOUT =====
router.get("/logout", userController.logout);

module.exports = router;
