const mongoose = require("mongoose");
const Listing = require("../models/listing");
const User = require("../models/user"); 
const { data: sampleListings } = require("./data");

main().then(() => {
  console.log("Seeding completed");
  mongoose.connection.close();
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
  console.log("DB Connected");

  // Delete old listings
  await Listing.deleteMany({});
  console.log("Old listings removed");

  const user = await User.findOne(); 
  if (!user) {
    console.log("No user found. Please seed a user first.");
    return;
  }

  // Insert sample listings
  for (let listing of sampleListings) {
    if (!listing.category) {
      listing.category = "Trending";
    }
    if (!listing.geometry) {
      listing.geometry = {
        type: "Point",
        coordinates: [77.5946, 12.9716],
      };
    }

    listing.owner = user._id; 

    const newListing = new Listing(listing);
    await newListing.save();
  }

  console.log("New listings added");
}

