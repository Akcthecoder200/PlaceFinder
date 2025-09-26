# Search Places

A full-stack React TypeScript application for discovering amazing places with advanced filtering capabilities, featuring a separate backend API server.

## Features

- **Advanced Filtering**: Filter by location, activity type, and price range
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Smooth Animations**: CSS transitions and animations for enhanced user experience
- **Real API Backend**: Express.js server with REST API endpoints
- **Error Handling**: User-friendly error messages and server status indicators
- **Clean Architecture**: Well-structured components with TypeScript interfaces

## Components

- **FilterBar**: Collapsible filter panel with location, activity, and price range controls
- **SearchResults**: Grid layout displaying search results with loading states
- **ResultCard**: Individual place cards with images, ratings, and details
- **SearchPage**: Main page component orchestrating the search functionality

## Tech Stack

**Frontend:**

- React 18 with TypeScript
- Vite for fast development and building
- CSS modules with animations and responsive design
- Fetch API for HTTP requests

**Backend:**

- Node.js with Express.js
- CORS enabled for cross-origin requests
- In-memory data storage
- RESTful API endpoints

## Getting Started

### Option 1: Run Both Frontend and Backend Together

1. Install all dependencies:

   ```bash
   npm install
   cd backend && npm install && cd ..
   ```

2. Install concurrently (if not already installed):

   ```bash
   npm install concurrently --save-dev
   ```

3. Start both servers:
   ```bash
   npm run start:all
   ```

### Option 2: Run Separately

1. **Start the Backend Server:**

   ```bash
   cd backend
   npm install
   npm start
   ```

   Backend will run on [http://localhost:3001](http://localhost:3001)

2. **Start the Frontend (in a new terminal):**
   ```bash
   npm install
   npm run dev
   ```
   Frontend will run on [http://localhost:5173](http://localhost:5173)

## API Endpoints

- `GET /api/places` - Get filtered places
- `GET /api/locations` - Get all locations
- `GET /api/activities` - Get all activities
- `GET /api/places/:id` - Get specific place
- `POST /api/places` - Add new place
- `PUT /api/places/:id` - Update place
- `DELETE /api/places/:id` - Delete place
- `GET /api/health` - Health check

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── FilterBar.tsx        # Search filters component
│   ├── SearchResults.tsx    # Results grid component
│   └── ResultCard.tsx       # Individual place card
├── pages/           # Page components
│   └── SearchPage.tsx       # Main search page
├── services/        # API services
│   └── apiService.ts        # HTTP client for backend API
├── types/           # TypeScript interfaces
│   └── index.ts             # Type definitions
├── data/            # Legacy mock data (deprecated)
└── main.tsx         # Application entry point

backend/
├── server.js        # Express.js server (main entry point)
├── routes/          # API route handlers
│   ├── places.js    # Places CRUD operations
│   └── api.js       # General API endpoints (locations, activities, health)
├── data/            # Data storage and models
│   └── placesData.js # In-memory places database
├── package.json     # Backend dependencies
└── node_modules/    # Backend dependencies
```

## Backend API Features

- **Modular Architecture**: Organized with separate routes, data, and server configuration
- **In-Memory Storage**: Places data stored in server memory with actual price values
- **CORS Enabled**: Cross-origin requests allowed from frontend
- **Error Handling**: Comprehensive error responses with proper HTTP status codes
- **Query Parameters**: Flexible filtering via URL parameters
- **RESTful Design**: Standard HTTP methods and status codes
- **Price Ranges**: Real price values (Free, $1-$20, $21-$50, $51-$100, $100+) instead of generic symbols
- **Logging**: Request logging middleware for debugging

## Deployment

### Deploy to Vercel

This project is configured for easy deployment to Vercel:

1. **Push to GitHub**: Make sure your code is in a GitHub repository
2. **Connect to Vercel**: Import your repository in Vercel dashboard
3. **Deploy**: Vercel will automatically:
   - Build the React frontend
   - Deploy API routes as serverless functions
   - Set up proper routing and CORS

The project includes:

- **Serverless API Functions**: Located in `/api/` directory
- **Environment Configuration**: Automatic API URL switching
- **Vercel Configuration**: Proper routing and headers setup

### Local Development vs Production

- **Development**: Uses Express.js server on `localhost:3001`
- **Production**: Uses Vercel serverless functions at `/api/*`
- **Automatic Switching**: API service detects environment automatically
