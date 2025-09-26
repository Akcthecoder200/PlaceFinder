// DEPRECATED: This file is no longer used.
// Data is now served from the backend API at http://localhost:3001/api
// All mock data has been moved to backend/data/placesData.js

import { Place } from "../types";

// Empty exports for backward compatibility
export const mockPlaces: Place[] = [];
export const locations: string[] = [];
export const activities: string[] = [];
export const priceRangeLabels: string[] = [];

// Deprecated function - use apiService.searchPlaces() instead
export const mockApiSearch = (): Promise<Place[]> => {
  console.warn(
    "mockApiSearch is deprecated. Use apiService.searchPlaces() instead."
  );
  return Promise.resolve([]);
};
