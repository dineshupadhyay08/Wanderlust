const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utlls/wrapAsync.js");
const ExpressError = require("../utlls/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const methodOverride = require("method-override");
const {validateReview, isLoggedIn, isReviewAuther} = require("../middleware.js");

const reviewController = require("../controllers/review.js")


//REVIEW
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));



//delete reviews
router.delete("/:reviewId", isLoggedIn, isReviewAuther, wrapAsync(reviewController.deleteReview))

module.exports = router;