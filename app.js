if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const flash = require("connect-flash");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./models/user.js");
const ExpressError = require("./utlls/ExpressError.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const dbUrl = process.env.ATLASDB_URL;

// ----------------------
// 🟢 MONGODB CONNECTION
// ----------------------
async function main() {
  await mongoose.connect(dbUrl);
}
main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// ----------------------
// 🟢 SESSION STORE
// ----------------------
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: { secret: process.env.SECRET || "fallbacksecret123" },
  touchAfter: 24 * 3600,
});

store.on("error", (e) => {
  console.log("❌ Session Store Error", e);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET || "fallbacksecret123",
  resave: false,

  // ⭐⭐ MOST IMPORTANT FIX ⭐⭐
  saveUninitialized: false, // Render compatible

  cookie: {
    // ⭐ correct key is "expires", not "expire"
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
// ----------------------
// 🟢 EXPRESS SETUP
// ----------------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(session(sessionOptions));
app.use(flash());

// ----------------------
// 🟢 PASSPORT AUTH
// ----------------------
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash + CurrentUser Middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// ----------------------
// 🟢 ROUTES
// ----------------------
app.get("/", (req, res) => {
  res.redirect("/listings");
});
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter); // ⭐ IMPORTANT

// ----------------------
// 🟢 404 Error
// ----------------------
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

// ----------------------
// 🟢 ERROR HANDLER
// ----------------------
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("listings/error.ejs", { message });
});

// ----------------------
// 🟢 START SERVER
// ----------------------
app.listen(8080, () => {
  console.log("Server is started....");
});
