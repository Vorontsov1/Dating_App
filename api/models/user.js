const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
  crushes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  recievedLikes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  matches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    ],
    profileImages: [
        {
          type: String,
      },
    ],
    description: {
        type: String,
    },
    turnOns: [
        { 
            type: String, //Array of string for turn ons
        },
    ],
    lokkingFor: [
        { 
            type: String, //Array of string for looking for
        },
    ],

});

constUser = mongoose.model('User', userSchema);

module.exports = User