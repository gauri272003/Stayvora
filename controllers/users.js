const User = require("../models/user");

// Render signup form
module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

// Handle user signup
module.exports.signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);

        // Log the user in after registration
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "Welcome to Wanderlust!");
            return res.redirect("/listings"); // return here to prevent double response
        });
    } catch (e) {
        req.flash("error", e.message);
        return res.redirect("/signup"); // return here as well
    }
};

// Render login form
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

// Handle user login
module.exports.login = (req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    const redirectUrl = res.locals.redirectUrl || "/listings";
    return res.redirect(redirectUrl); // use return to prevent double response
};

// Handle logout
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash("success", "You are logged out!");
        return res.redirect("/listings"); // return here
    });
};
