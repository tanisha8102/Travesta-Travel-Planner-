// models/User.js
import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
  title: String,
  duration: String,
  days: Number,
  perks: [String],
  price: String,
  discount: String,
  oldPrice: String,
  details: [String],
  imageUrl: String,
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: [itinerarySchema],
});

export default mongoose.model("User", userSchema);
