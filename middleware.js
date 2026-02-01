// const Listing = require("./models/listing");
// const Review = require("./models/review");
// const Expresserror = require("./utilis/Expresserror.js");
// const { listingSchema, reviewSchema } = require("./schema.js");

// // Check if user is logged in
// module.exports.isLoggedIn = (req, res, next) => {
//     if (!req.isAuthenticated()) {
//         req.session.redirectUrl = req.originalUrl;
//         req.flash("error", "You must be logged in to create a listing!");
//         return res.redirect("/login");
//     }
//     next();
// };

// // Save redirect URL after login
// module.exports.saveRedirectUrl = (req, res, next) => {
//     if (req.session.redirectUrl) {
//         res.locals.redirectUrl = req.session.redirectUrl;
//     }
//     next();
// };

// // Check if current user is owner of the listing
// module.exports.isOwner = async (req, res, next) => {
//     let { id } = req.params;
//     let listing = await Listing.findById(id);
//     if (!listing.owner._id.equals(res.locals.currentUser._id)) {
//         req.flash("error", "You don't have permission to edit");
//         return res.redirect(`/listings/${id}`);
//     }
//     next();
// };

// // Validate listing form
// module.exports.validateListing = (req, res, next) => {
//     let { error } = listingSchema.validate(req.body);
//     if (error) {
//         let errormsg = error.details.map((el) => el.message).join(",");
//         throw new Expresserror(404, errormsg);
//     } else {
//         next();
//     }
// };

// // Validate review form
// module.exports.ValidateReview = (req, res, next) => {
//     let { error } = reviewSchema.validate(req.body);
//     if (error) {
//         let errormsg = error.details.map((el) => el.message).join(",");
//         throw new Expresserror(404, errormsg);
//     } else {
//         next();
//     }
// };

// // Check if current user is the author of the review
// module.exports.isReviewAuthor = async (req, res, next) => {
//     let { id, reviewId } = req.params; // note: reviewId must match route param
//     let review = await Review.findById(reviewId);

//     if (!review.author.equals(res.locals.currentUser._id)) {
//         req.flash("error", "You are not the author of this review");
//         return res.redirect(`/listings/${id}`);
//     }
//     next();
// };


const Listing = require("./models/listing");
const Review = require("./models/review");
const Expresserror = require("./utilis/Expresserror.js");
const { listingSchema, reviewSchema } = require("./schema.js");

// Check if user is logged in
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to create a listing!");
        return res.redirect("/login");
    }
    next();
};

// Save redirect URL after login
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

// Check if current user is owner of the listing
module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    
    if (!listing.owner._id.equals(res.locals.currentUser._id)) {
        req.flash("error", "You don't have permission to edit");
        return res.redirect(`/listings/${id}`); // FIXED: was using backtick incorrectly
    }
    next();
};

// Validate listing form
module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errormsg = error.details.map((el) => el.message).join(",");
        throw new Expresserror(404, errormsg);
    } else {
        next();
    }
};

// Validate review form
module.exports.ValidateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errormsg = error.details.map((el) => el.message).join(",");
        throw new Expresserror(404, errormsg);
    } else {
        next();
    }
};

// Check if current user is the author of the review
module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    
    if (!review) {
        req.flash("error", "Review not found");
        return res.redirect(`/listings/${id}`);
    }
    
    if (!review.author.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not the author of this review");
        return res.redirect(`/listings/${id}`); // FIXED: was using backtick incorrectly
    }
    next();
};