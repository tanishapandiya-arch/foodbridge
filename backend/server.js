import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
import authRoutes from "./routes/auth/authRoutes.js";
import foodRoutes from "./routes/food/foodRoutes.js";

dns.setDefaultResultOrder("ipv4first");

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req,res)=>{
    res.send("Food Donation Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});