const express = require("express");
const router = express.Router();
const {
  places,
  locations,
  activities,
  priceRanges,
} = require("../data/placesData");

// Get all places with optional filtering
router.get("/", (req, res) => {
  try {
    const { location, activity, minPrice, maxPrice } = req.query;

    let filteredPlaces = [...places];

    // Filter by location
    if (location && location !== "All Locations") {
      filteredPlaces = filteredPlaces.filter(
        (place) => place.location.toLowerCase() === location.toLowerCase()
      );
    }

    // Filter by activity
    if (activity && activity !== "All Activities") {
      filteredPlaces = filteredPlaces.filter(
        (place) => place.activity.toLowerCase() === activity.toLowerCase()
      );
    }

    // Filter by price range
    if (minPrice !== undefined && maxPrice !== undefined) {
      const min = parseInt(minPrice);
      const max = parseInt(maxPrice);
      filteredPlaces = filteredPlaces.filter(
        (place) => place.priceRange >= min && place.priceRange <= max
      );
    }

    // Simulate network delay
    setTimeout(() => {
      res.json({
        success: true,
        data: filteredPlaces,
        total: filteredPlaces.length,
      });
    }, 300);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Get place by ID
router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const place = places.find((p) => p.id === id);

    if (!place) {
      return res.status(404).json({
        success: false,
        message: "Place not found",
      });
    }

    res.json({
      success: true,
      data: place,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Add new place
router.post("/", (req, res) => {
  try {
    const {
      name,
      location,
      activity,
      priceRange,
      price,
      description,
      imageUrl,
      rating,
    } = req.body;

    if (!name || !location || !activity || priceRange === undefined) {
      return res.status(400).json({
        success: false,
        message:
          "Missing required fields: name, location, activity, priceRange",
      });
    }

    const newPlace = {
      id: String(places.length + 1),
      name,
      location,
      activity,
      priceRange: parseInt(priceRange),
      price: price || 0,
      description: description || "",
      imageUrl: imageUrl || "",
      rating: rating || 0,
    };

    places.push(newPlace);

    res.status(201).json({
      success: true,
      data: newPlace,
      message: "Place added successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Update place
router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const placeIndex = places.findIndex((p) => p.id === id);

    if (placeIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Place not found",
      });
    }

    places[placeIndex] = { ...places[placeIndex], ...updates };

    res.json({
      success: true,
      data: places[placeIndex],
      message: "Place updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Delete place
router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const placeIndex = places.findIndex((p) => p.id === id);

    if (placeIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Place not found",
      });
    }

    const deletedPlace = places.splice(placeIndex, 1)[0];

    res.json({
      success: true,
      data: deletedPlace,
      message: "Place deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
