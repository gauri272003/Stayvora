const express = require("express");
const router = express.Router();
const wrapAsync = require("../utilis/wrapAsync.js");

const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer = require("multer");

const{storage}=require("../cloudConfig.js");
const upload = multer({ storage });



// Home + Create
router.route("/")
    .get(wrapAsync(listingController.index))
   .post(
        isLoggedIn,
       upload.single('listing[image]'),
        validateListing,
     
        wrapAsync(listingController.createlisting)
       

   );
   

// New Listing Form
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Show + Update + Delete
router.route("/:id")
    .get(wrapAsync(listingController.showlisting))
    .put(
        isLoggedIn,
        isOwner,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.updatelisting)
    )
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.destroylisting)
    );

// Edit Form
router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm)
);

module.exports = router;
