const express = require("express");
const router = express.Router();
const { locations, activities, priceRanges } = require("../data/placesData");

// Get all locations
router.get("/locations", (req, res) => {
  res.json({
    success: true,
    data: locations,
  });
});

// Get all activities
router.get("/activities", (req, res) => {
  res.json({
    success: true,
    data: activities,
  });
});

// Get price ranges with actual values
router.get("/price-ranges", (req, res) => {
  res.json({
    success: true,
    data: priceRanges,
  });
});

// Health check
router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

module.exports = router;
