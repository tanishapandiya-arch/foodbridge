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
      required: true
    },

    quantity: {
      type: Number,
      required: true
    },

    description: {
      type: String
    },

    pickupTime: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
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