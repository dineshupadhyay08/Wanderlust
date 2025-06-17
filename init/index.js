const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js"); 

const MONGO_URN = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URN);
}

const initDB = async () => {
  
  const userId = "682d9bd39898984250885748";
  const existingUser = await User.findById(userId);
  if (!existingUser) {
    await User.create({
      _id: userId,
      username: "demo22",
      email: "demo@gmail.com",
    });
    console.log("✅ Owner user restored.");
  }

  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: userId,
  }));

};

initDB();
