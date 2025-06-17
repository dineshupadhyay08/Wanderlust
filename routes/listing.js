
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utlls/wrapAsync.js");

const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listing.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync (listingController.createListing)
);


//Room listing 
router.get("/room", wrapAsync(listingController.roomListings));


//treanding listings
router.get('/trending', wrapAsync(listingController.trendingListings));


router.get("/new",isLoggedIn, listingController.renderNewForm);

//boats
router.get("/boats", wrapAsync(listingController.boatsListing));

//Iconic Cities
router.get("/Iconic-cities", wrapAsync( listingController.iconicCitiesListing));

//mountain
router.get("/mountain", wrapAsync(listingController.mountainListing));

//arctic
router.get("/arctic", wrapAsync(listingController.arcticListing));

//pools
router.get("/pools", wrapAsync(listingController.poolsListing));




router.route("/:id")
.get(wrapAsync(listingController.showListing))
// .put(...) // etc.



//new listing//


router.route("/:id")
.get(wrapAsync(listingController.showListing)
)
.put(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
       (req, res, next) => {
        console.log("BODY:", req.body);
        next();
    },
    validateListing,
    wrapAsync(listingController.updateListing)
)
.delete( 
    isLoggedIn, 
    isOwner, 
    validateListing,
    wrapAsync(listingController.deleteListing)
);


//edit route
router.get("/:id/edit", isLoggedIn, isOwner,wrapAsync(listingController.editListing)
);



module.exports = router;