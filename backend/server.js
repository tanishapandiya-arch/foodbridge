import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
import cors from "cors";

import authRoutes from "./routes/auth/authRoutes.js";
import foodRoutes from "./routes/food/foodRoutes.js";
import adminRoutes from "./routes/admin/adminRoutes.js";

dns.setDefaultResultOrder("ipv4first");

dotenv.config();

const app = express();

// ==================== MIDDLEWARE ====================

app.use(cors());
app.use(express.json());


// ==================== ROUTES ====================

app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/admin", adminRoutes);


// ==================== DATABASE ====================

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });


// ==================== HOME ROUTE ====================

app.get("/", (req, res) => {
  res.send("Food Donation Backend Running");
});


// ==================== SERVER ====================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});