import React, { useState, useEffect } from "react";
import FilterBar from "../components/FilterBar";
import SearchResults from "../components/SearchResults";
import { Place, Filters } from "../types";
import { apiService } from "../services/apiService";
import "./SearchPage.css";

const SearchPage: React.FC = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({
    location: "All Locations",
    activity: "All Activities",
    priceRange: [0, 4],
  });

  // Initial search on component mount
  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    setServerError(null);
    try {
      const results = await apiService.searchPlaces(filters);
      setPlaces(results);
    } catch (error) {
      console.error("Search failed:", error);
      setPlaces([]);
      setServerError(
        "Failed to connect to server. Please make sure the backend is running on http://localhost:3001"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleFiltersChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  return (
    <div className="search-page">
      <div className="search-page__container">
        <header className="search-page__header">
          <h1 className="search-page__title">Discover Amazing Places</h1>
          <p className="search-page__subtitle">
            Find the perfect destination for your next adventure
          </p>
        </header>

        <FilterBar
          filters={filters}
          onFiltersChange={handleFiltersChange}
          onSearch={handleSearch}
        />

        {serverError && (
          <div className="search-page__error">
            <div className="search-page__error-content">
              <h3>⚠️ Server Connection Error</h3>
              <p>{serverError}</p>
              <p>
                To start the backend server:
                <br />
                1. Open a new terminal
                <br />
                2. Run: <code>cd backend && npm start</code>
              </p>
              <button
                className="search-page__retry-button"
                onClick={handleSearch}
              >
                🔄 Retry Connection
              </button>
            </div>
          </div>
        )}

        <SearchResults places={places} loading={loading} />
      </div>
    </div>
  );
};

export default SearchPage;
