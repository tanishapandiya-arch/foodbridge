import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    foodType: {
      type: String,
      required: true,
      trim: true
    },

    quantity: {
      type: Number,
      required: true,
      min: 1
    },

    description: {
      type: String,
      trim: true
    },

    pickupTime: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true,
      trim: true
    },

    status: {
      type: String,
      enum: ["available", "claimed"],
      default: "available"
    },

    claimedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    }
  },
  {
    timestamps: true
  }
);

const Food = mongoose.model("Food", foodSchema);

export default Food;