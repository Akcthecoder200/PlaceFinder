import React, { useState, useEffect } from "react";
import { FilterBarProps, PriceRange } from "../types";
import { apiService } from "../services/apiService";
import "./FilterBar.css";

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFiltersChange,
  onSearch,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [locations, setLocations] = useState<string[]>(["All Locations"]);
  const [activities, setActivities] = useState<string[]>(["All Activities"]);
  const [priceRanges, setPriceRanges] = useState<PriceRange[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadFilterOptions();
  }, []);

  const loadFilterOptions = async () => {
    try {
      setLoading(true);
      const [locationsData, activitiesData, priceRangesData] =
        await Promise.all([
          apiService.getLocations(),
          apiService.getActivities(),
          apiService.getPriceRanges(),
        ]);
      setLocations(locationsData);
      setActivities(activitiesData);
      setPriceRanges(priceRangesData);
    } catch (error) {
      console.error("Failed to load filter options:", error);
      // Fallback to default values
      setLocations([
        "All Locations",
        "New York",
        "San Francisco",
        "Los Angeles",
        "Paris",
        "Wyoming",
        "Denver",
      ]);
      setActivities([
        "All Activities",
        "Walking",
        "Sightseeing",
        "Sports",
        "Culture",
        "Dining",
        "Hiking",
        "Entertainment",
        "Beach",
      ]);
      setPriceRanges([
        { label: "Free", min: 0, max: 0 },
        { label: "$1-$20", min: 1, max: 20 },
        { label: "$21-$50", min: 21, max: 50 },
        { label: "$51-$100", min: 51, max: 100 },
        { label: "$100+", min: 101, max: 999 },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationChange = (location: string) => {
    onFiltersChange({
      ...filters,
      location,
    });
  };

  const handleActivityChange = (activity: string) => {
    onFiltersChange({
      ...filters,
      activity,
    });
  };

  const handlePriceRangeChange = (type: "min" | "max", value: number) => {
    const newPriceRange: [number, number] = [...filters.priceRange];
    if (type === "min") {
      newPriceRange[0] = value;
      if (value > newPriceRange[1]) {
        newPriceRange[1] = value;
      }
    } else {
      newPriceRange[1] = value;
      if (value < newPriceRange[0]) {
        newPriceRange[0] = value;
      }
    }

    onFiltersChange({
      ...filters,
      priceRange: newPriceRange,
    });
  };

  const handleReset = () => {
    onFiltersChange({
      location: "All Locations",
      activity: "All Activities",
      priceRange: [0, 4],
    });
  };

  const getPriceRangeDisplay = () => {
    const [min, max] = filters.priceRange;
    if (priceRanges.length === 0) return "Loading...";

    if (min === max) {
      return priceRanges[min]?.label || "Free";
    }
    return `${priceRanges[min]?.label || "Free"} - ${
      priceRanges[max]?.label || "Free"
    }`;
  };

  return (
    <div className="filter-bar">
      <div className="filter-bar__header">
        <h2>🔍 Search Filters</h2>
        <button
          className="filter-bar__toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Collapse filters" : "Expand filters"}
        >
          <span
            className={`filter-bar__toggle-icon ${
              isExpanded ? "expanded" : ""
            }`}
          >
            ▼
          </span>
        </button>
      </div>

      <div className={`filter-bar__content ${isExpanded ? "expanded" : ""}`}>
        <div className="filter-bar__filters">
          {/* Location Filter */}
          <div className="filter-group">
            <label className="filter-group__label">📍 Location</label>
            <select
              className="filter-group__select"
              value={filters.location}
              onChange={(e) => handleLocationChange(e.target.value)}
              disabled={loading}
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Activity Filter */}
          <div className="filter-group">
            <label className="filter-group__label">🎯 Activity</label>
            <select
              className="filter-group__select"
              value={filters.activity}
              onChange={(e) => handleActivityChange(e.target.value)}
              disabled={loading}
            >
              {activities.map((activity) => (
                <option key={activity} value={activity}>
                  {activity}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="filter-group filter-group--price">
            <label className="filter-group__label">💰 Price Range</label>
            <div className="price-range">
              <div className="price-range__inputs">
                <select
                  className="price-range__select"
                  value={filters.priceRange[0]}
                  onChange={(e) =>
                    handlePriceRangeChange("min", parseInt(e.target.value))
                  }
                >
                  {priceRanges.map((range, index) => (
                    <option key={index} value={index}>
                      {range.label}
                    </option>
                  ))}
                </select>

                <span className="price-range__separator">to</span>

                <select
                  className="price-range__select"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    handlePriceRangeChange("max", parseInt(e.target.value))
                  }
                >
                  {priceRanges.map((range, index) => (
                    <option key={index} value={index}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="price-range__display">
                Selected: {getPriceRangeDisplay()}
              </div>
            </div>
          </div>
        </div>

        <div className="filter-bar__actions">
          <button
            className="filter-bar__reset"
            onClick={handleReset}
            type="button"
          >
            🔄 Reset Filters
          </button>

          <button
            className="filter-bar__search"
            onClick={onSearch}
            type="button"
          >
            🔍 Search Places
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
