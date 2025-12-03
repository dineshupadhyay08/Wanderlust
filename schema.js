// const Joi = require("joi");
// const review = require("./models/review");

// // module.exports.listingSchema = Joi.object({
// //     listing: Joi.object({
// //         title: Joi.string().required(),
// //         description: Joi.string().required(),
// //         location: Joi.string().required(),
// //         country: Joi.string().required(),
// //         price: Joi.string().required(),
// //         image: Joi.string().allow("", null),
// //     }).required(),
// // });

// module.exports.reviewSchema = Joi.object({
//     review: Joi.object({
//         rating: Joi.number().required().min(1).max(5),
//         comment: Joi.string().required(),
//     }).required(),
// });

// utils/validationSchemas.js or wherever you validate

const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.string().required(),
    image: Joi.string().allow("", null),

    // ✅ category added here
    category: Joi.string()
      .valid(
        "Trending",
        "Room",
        "boats",
        "arctic",
        "pools",
        "Iconic-cities",
        "Popular",
        "Top Rated",
        "Budget",
        "Luxury"
      )
      .required(), // or .optional() if not always needed
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
