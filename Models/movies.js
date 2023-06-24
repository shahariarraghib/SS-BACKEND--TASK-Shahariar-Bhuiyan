const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const moviesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: ["provide movie name"],
      lowercase: true,
      unique: true,
    },

    actors: [
      {
        name: {
          type: String,
          required: ["provide actors name"],
        },
      },
    ],

    crewmembers: [
      {
        name: {
          type: String,
          required: ["provide crew members name"],
        },
      },
    ],

    directorname: {
      type: String,
      required: ["provide director name"],
    },

    producer: {
      type: String,
      required: ["provide Producer name"],
    },

    runtime: {
      type: String,
      required: ["provide runtime"],
    },

    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },

  { timestamps: true }
);

const movieInfo = mongoose.model("movieInfo", moviesSchema);
module.exports = movieInfo;
