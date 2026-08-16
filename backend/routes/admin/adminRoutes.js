import express from "express";
import User from "../../models/User.js";
import authMiddleware from "../../middleware/authMiddleware.js";
import adminMiddleware from "../../middleware/adminMiddleware.js";

const router = express.Router();

// ==================== GET ALL NGOS ====================

router.get(
  "/ngos",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const ngos = await User.find({ role: "ngo" })
        .select("-password")
        .sort({ createdAt: -1 });

      res.status(200).json({
        message: "NGOs fetched successfully",
        ngos
      });

    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Server error"
      });
    }
  }
);


// ==================== VERIFY NGO ====================

router.patch(
  "/ngos/:id/verify",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const ngo = await User.findOneAndUpdate(
        {
          _id: req.params.id,
          role: "ngo"
        },
        {
          isVerified: true
        },
        {
          new: true
        }
      ).select("-password");

      if (!ngo) {
        return res.status(404).json({
          message: "NGO not found"
        });
      }

      res.status(200).json({
        message: "NGO verified successfully",
        ngo
      });

    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Server error"
      });
    }
  }
);


// ==================== EXPORT ====================

export default router;