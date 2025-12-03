// ✅ Load .env (optional)
require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

// ⚠️ LOCAL DB — You can delete this file later if not needed
const MONGO_URN = "mongodb://127.0.0.1:27017/wanderlust";

// ---------------------------
// 🔵 CONNECT TO MONGO
// ---------------------------
async function main() {
  await mongoose.connect(MONGO_URN);
  console.log("Connected to MongoDB");
}

main().catch((err) => console.log(err));

// ---------------------------
// 🔵 SAFE USER + LISTING SEED
// ---------------------------
const initDB = async () => {
  try {
    // 🔵 Find existing demo user OR create once
    let user = await User.findOne({ username: "demo22" });

    if (!user) {
      user = await User.create({
        username: "demo22",
        email: "demo@gmail.com",
      });
      console.log("New demo user created");
    } else {
      console.log("Demo user already exists");
    }

    // 🔵 Add owner to all listings
    initData.data = initData.data.map((obj) => ({
      ...obj,
      owner: user._id,
    }));

    console.log("Listing owners assigned successfully");
  } catch (err) {
    console.log("Error seeding DB:", err);
  }
};

initDB();
