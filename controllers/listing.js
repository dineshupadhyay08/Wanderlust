const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  res.render("listings/show", {
    listing,
    mapToken: process.env.MAPBOX_TOKEN,
  });
};

module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  let url = req.file.path;
  let filename = req.file.filename;
  // console.log(url, "..",  filename);
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  //  newListing.geometry = geoData[0].geometry;
  newListing.geometry = response.body.features[0].geometry;

  let savedListing = await newListing.save();
  console.log(savedListing);

  req.flash("success", "New Listing Created?");
  res.redirect("/listings");
};

module.exports.editListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }

  res.render("listings/edit.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  // let listing = await Listing.findById(id);
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    console.log(req.body);
    await listing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let listingDelete = await Listing.findByIdAndDelete(id);
  console.log(req.body);
  console.log(listingDelete);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};

module.exports.trendingListings = async (req, res) => {
  const trendingListings = await Listing.find({ category: "Trending" });
  console.log("TRENDING LISTINGS:", trendingListings); // Debug output
  res.render("listings/trending", { trendingListings });
};

module.exports.roomListings = async (req, res) => {
  try {
    const roomListings = await Listing.find({ category: "Room" });
    res.render("listings/room", { roomListings });
  } catch (err) {
    console.error("Error fetching Room listings:", err);
    res.status(500).send("Something went wrong.");
  }
};

//boats
module.exports.boatsListing = async (req, res) => {
  try {
    const boatsListings = await Listing.find({ category: "boats" });
    res.render("listings/boats", { boatsListings });
  } catch (err) {
    console.error("Error fetching boats listings:", err);
    res.status(500).send("Something went wrong.");
  }
};

module.exports.iconicCitiesListing = async (req, res) => {
  try {
    const iconicListings = await Listing.find({ category: "Iconic-cities" });
    res.render("listings/iconicCities", { iconicListings });
  } catch (err) {
    console.error("Error fetching Iconic Cities listings:", err);
    res.status(500).send("Something went wrong.");
  }
};

module.exports.mountainListing = async (req, res) => {
  try {
    const mountainListings = await Listing.find({ category: "mountain" });
    res.render("listings/mountain", { mountainListings });
  } catch (err) {
    console.error("Error fetching Mountain listings:", err);
    res.status(500).send("Something went wrong.");
  }
};

module.exports.arcticListing = async (req, res) => {
  try {
    const arcticListings = await Listing.find({ category: "arctic" });
    res.render("listings/arctic", { arcticListings });
  } catch (err) {
    console.error("Error fetching Arctic listings:", err);
    res.status(500).send("Something went wrong.");
  }
};

module.exports.poolsListing = async (req, res) => {
  try {
    const poolsListings = await Listing.find({ category: "pools" });
    res.render("listings/pools", { poolsListings });
  } catch (err) {
    console.error("Error fetching Pools listings:", err);
    res.status(500).send("Something went wrong.");
  }
};
