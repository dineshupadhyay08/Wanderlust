const mongoose = require("mongoose");
const Listing = require("./models/listing");

const updates = [
  { title: "Historic Villa in Tuscany", category: "pools" },
  { title: "Historic Villa in Tuscany", category: "pools" },
  { title: "Beachfront Paradise", category: "pools" },
  { title: "Mountain Retreat", category: "pools" },
];

async function assignCategories() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");

  for (const item of updates) {
    const result = await Listing.updateOne(
      { title: item.title },
      { $set: { category: item.category } }
    );
    console.log(`${item.title} -> ${item.category} | Updated: ${result.modifiedCount}`);
  }

  mongoose.connection.close();
}

assignCategories();
