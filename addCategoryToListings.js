// addCategoryToListings.js
const mongoose = require("mongoose");
const Listing = require("./models/listing.js"); // update path if needed
const sampleListings = require("./init/data.js");

// 🧠 Simple category logic based on title keywords
const getCategory = (title) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("beach") || lowerTitle.includes("urban"))
    return "Trending";
  if (lowerTitle.includes("cabin") || lowerTitle.includes("mountain"))
    return "boats";
  if (lowerTitle.includes("apartment") || lowerTitle.includes("room"))
    return "boats";
  return "General"; // default
};

mongoose
  .connect(
    "mongodb+srv://hackerdk555:M0E2yCHPSvJfWBmO@wanderlust.3plv3ll.mongodb.net/?retryWrites=true&w=majority&appName=Wanderlust"
  )
  .then(async () => {
    console.log("Connected to MongoDB...");

    for (const item of sampleListings) {
      const category = getCategory(item.title);

      const updated = await Listing.findOneAndUpdate(
        { title: item.title },
        { $set: { category } },
        { new: true }
      );

      if (updated) {
        console.log(`✅ Updated: ${item.title} -> ${category}`);
      } else {
        console.log(`❌ Not found in DB: ${item.title}`);
      }
    }

    console.log("🎉 All listings updated with categories.");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("❌ MongoDB Error:", err);
  });
