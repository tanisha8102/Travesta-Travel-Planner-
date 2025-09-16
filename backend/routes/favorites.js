// routes/favorites.js
import express from "express";
import User from "../models/User.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// Get all favorites of logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("favorites");
    res.json(user?.favorites || []);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Toggle favorite
router.post("/toggle", authMiddleware, async (req, res) => {
  try {
    const { itinerary } = req.body; // itinerary object from frontend
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    const exists = user.favorites.some(fav => fav.title === itinerary.title);

    if (exists) {
      // Remove from favorites
      user.favorites = user.favorites.filter(fav => fav.title !== itinerary.title);
    } else {
      // Add to favorites
      user.favorites.push(itinerary);
    }

    await user.save();
    res.json({ favorites: user.favorites });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
