require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const Listing = require("../models/listing");
const User = require("../models/user");
const sampleListings = require("./data");

main().then(() => {
  console.log("Seeding completed");
  mongoose.connection.close();
});

async function main() {
  await mongoose.connect(process.env.ATLASDB_URL);
  console.log("DB Connected");

  await Listing.deleteMany({});
  console.log("Old listings removed");

  const user = await User.findOne();
  if (!user) {
    console.log("No user found.");
    return;
  }

  for (let listing of sampleListings) {
    listing.owner = user._id;

    if (!listing.category) listing.category = "Trending";
    if (!listing.geometry) {
      listing.geometry = {
        type: "Point",
        coordinates: [77.5946, 12.9716],
      };
    }

    await Listing.create(listing);
  }

  console.log("New listings added");
}
