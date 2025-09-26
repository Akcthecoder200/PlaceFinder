import { places } from "../backend/data/placesData.js";

export default function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "GET") {
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

      res.status(200).json({
        success: true,
        data: filteredPlaces,
        total: filteredPlaces.length,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
