const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const tvShowsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: ["provide TV shows name"],
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

const tvShowsInfo = mongoose.model("tvShowsInfo", tvShowsSchema);
module.exports = tvShowsInfo;
