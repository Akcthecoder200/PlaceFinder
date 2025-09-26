import React from "react";
import { SearchResultsProps } from "../types";
import ResultCard from "./ResultCard";
import "./SearchResults.css";

const SearchResults: React.FC<SearchResultsProps> = ({ places, loading }) => {
  if (loading) {
    return (
      <div className="search-results__loading">
        <div className="search-results__spinner"></div>
        <p>Searching for amazing places...</p>
      </div>
    );
  }

  if (places.length === 0) {
    return (
      <div className="search-results__empty">
        <div className="search-results__empty-icon">🔍</div>
        <h3>No places found</h3>
        <p>Try adjusting your filters to find more results.</p>
      </div>
    );
  }

  return (
    <div className="search-results">
      <div className="search-results__header">
        <h2>
          Found {places.length} {places.length === 1 ? "place" : "places"}
        </h2>
      </div>

      <div className="search-results__grid">
        {places.map((place) => (
          <ResultCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
