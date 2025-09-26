import { Place, Filters, PriceRange } from "../types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  total?: number;
  message?: string;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  // Search places with filters
  async searchPlaces(filters: Filters): Promise<Place[]> {
    const params = new URLSearchParams();

    if (filters.location && filters.location !== "All Locations") {
      params.append("location", filters.location);
    }

    if (filters.activity && filters.activity !== "All Activities") {
      params.append("activity", filters.activity);
    }

    params.append("minPrice", filters.priceRange[0].toString());
    params.append("maxPrice", filters.priceRange[1].toString());

    const queryString = params.toString();
    const endpoint = `/places${queryString ? `?${queryString}` : ""}`;

    const response = await this.request<Place[]>(endpoint);
    return response.data;
  }

  // Get all locations
  async getLocations(): Promise<string[]> {
    const response = await this.request<string[]>("/locations");
    return response.data;
  }

  // Get all activities
  async getActivities(): Promise<string[]> {
    const response = await this.request<string[]>("/activities");
    return response.data;
  }

  // Get price ranges with actual values
  async getPriceRanges(): Promise<PriceRange[]> {
    const response = await this.request<PriceRange[]>("/price-ranges");
    return response.data;
  }

  // Get place by ID
  async getPlaceById(id: string): Promise<Place> {
    const response = await this.request<Place>(`/places/${id}`);
    return response.data;
  }

  // Add new place
  async addPlace(place: Omit<Place, "id">): Promise<Place> {
    const response = await this.request<Place>("/places", {
      method: "POST",
      body: JSON.stringify(place),
    });
    return response.data;
  }

  // Update place
  async updatePlace(id: string, updates: Partial<Place>): Promise<Place> {
    const response = await this.request<Place>(`/places/${id}`, {
      method: "PUT",
      body: JSON.stringify(updates),
    });
    return response.data;
  }

  // Delete place
  async deletePlace(id: string): Promise<Place> {
    const response = await this.request<Place>(`/places/${id}`, {
      method: "DELETE",
    });
    return response.data;
  }

  // Health check
  async healthCheck(): Promise<{ message: string; timestamp: string }> {
    const response = await this.request<{ message: string; timestamp: string }>(
      "/health"
    );
    return response.data;
  }
}

export const apiService = new ApiService();
export default apiService;
