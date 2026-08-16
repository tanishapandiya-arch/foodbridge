import express from "express";
import Food from "../../models/Food.js";
import authMiddleware from "../../middleware/authMiddleware.js";
import roleMiddleware from "../../middleware/roleMiddleware.js";

const router = express.Router();

// ==================== POST FOOD ====================

router.post(
  "/",
  authMiddleware,
  roleMiddleware("donor"),
  async (req, res) => {
    try {
      const {
        foodType,
        quantity,
        description,
        pickupTime,
        location
      } = req.body;

      // Check required fields
      if (!foodType || !quantity || !pickupTime || !location) {
        return res.status(400).json({
          message: "Please fill all required fields"
        });
      }

      // Create food
      const food = await Food.create({
        donor: req.user.userId,
        foodType,
        quantity,
        description,
        pickupTime,
        location
      });

      res.status(201).json({
        message: "Food posted successfully",
        food
      });

    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Server error"
      });
    }
  }
);


// ==================== GET MY FOODS ====================

router.get(
  "/my-food",
  authMiddleware,
  roleMiddleware("donor"),
  async (req, res) => {
    try {
      const foods = await Food.find({
        donor: req.user.userId
      }).sort({ createdAt: -1 });

      res.status(200).json({
        message: "Your food posts fetched successfully",
        foods
      });

    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Server error"
      });
    }
  }
);


// ==================== GET ALL FOOD ====================

router.get(
  "/",
  authMiddleware,
  roleMiddleware("ngo"),
  async (req, res) => {
    try {
      const foods = await Food.find()
        .populate("donor", "name email")
        .sort({ createdAt: -1 });

      res.status(200).json({
        message: "Food posts fetched successfully",
        foods
      });

    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Server error"
      });
    }
  }
);
// ==================== CLAIM FOOD ====================

// ==================== CLAIM FOOD ====================

router.patch(
  "/:id/claim",
  authMiddleware,
  roleMiddleware("ngo"),
  async (req, res) => {
    try {
      console.log("CLAIM ID:", req.params.id);

      const food = await Food.findOne({
        _id: req.params.id
      });

      console.log("FOUND FOOD:", food);

      if (!food) {
        return res.status(404).json({
          message: "Food not found"
        });
      }

      if (food.status === "claimed") {
        return res.status(400).json({
          message: "Food has already been claimed"
        });
      }

      food.status = "claimed";
      food.claimedBy = req.user.userId;

      await food.save();

      res.status(200).json({
        message: "Food claimed successfully",
        food
      });

    } catch (error) {
      console.log("CLAIM ERROR:", error);

      res.status(500).json({
        message: "Server error"
      });
    }
  }
);
// ==================== GET MY CLAIMED FOODS ====================

router.get(
  "/claimed-food",
  authMiddleware,
  roleMiddleware("ngo"),
  async (req, res) => {
    try {
      const foods = await Food.find({
        claimedBy: req.user.userId
      }).sort({ updatedAt: -1 });

      res.status(200).json({
        message: "Your claimed foods fetched successfully",
        foods
      });

    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Server error"
      });
    }
  }
);

export default router;