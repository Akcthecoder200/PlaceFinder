import React from "react";
import { ResultCardProps } from "../types";
import "./ResultCard.css";

const ResultCard: React.FC<ResultCardProps> = ({ place }) => {
  const getPriceDisplay = (price: number) => {
    if (price === 0) {
      return "Free";
    }
    return `$${price}`;
  };

  return (
    <div className="result-card">
      <div className="result-card__image-container">
        <img
          src={place.imageUrl}
          alt={place.name}
          className="result-card__image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE4NVYxNzVIMTc1VjEyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+bFwiaGQ9Ik0yMjUgMTI1SDIxNVYxNzVIMjI1VjEyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+";
          }}
        />
        <div className="result-card__rating">⭐ {place.rating}</div>
      </div>

      <div className="result-card__content">
        <h3 className="result-card__title">{place.name}</h3>

        <div className="result-card__meta">
          <span className="result-card__location">📍 {place.location}</span>
          <span className="result-card__activity">🎯 {place.activity}</span>
          <span className="result-card__price">
            {getPriceDisplay(place.price)}
          </span>
        </div>

        <p className="result-card__description">{place.description}</p>
      </div>
    </div>
  );
};

export default ResultCard;
