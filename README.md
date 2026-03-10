# Product Search & Filter App

A responsive, high-performance React application that lets users effortlessly search and filter through a list of products. Features real-time search, category filtering, and a premium dark-mode UI with glassmorphic elements and clean typography.

![Preview App Design](./src/assets/preview.png) *(Preview placeholder)*

## Features

- **Real-Time Search:** Instantly filters products by name as you type. Case-insensitive matching.
- **Category Filtering:** Quickly narrow down products to specific categories (e.g., Electronics, Clothing, Home) using simple toggle buttons.
- **Combined Logic:** Search text and category filters work together seamlessly to provide exact results.
- **Premium UI/UX:** Built with a stunning dark-mode aesthetic featuring subtle gradients, shadows, responsive grid layouts, and active/focus states for accessibility.
- **Graceful Empty State:** Displays a helpful, visually-appealing empty state when no products match the current filters.
- **Currency Formatting:** Automatically formats product prices to Indian Rupees (INR).

## Technologies Used

- **React 18:** Using functional components and Hooks (`useState`).
- **Vite:** Next-generation frontend tooling for ultra-fast hot module replacement (HMR) and optimized builds.
- **CSS3:** Custom styling from scratch using CSS Variables for easy theming, responsive designs with CSS Grid/Flexbox, and modern pseudo-selectors. 
- **Google Fonts:** Utilizing 'Inter' for crisp and modern typography.

## Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

You need to have Node.js and npm (Node Package Manager) installed. 
- [Download Node.js](https://nodejs.org/)

### Installation

1. **Clone the repository** (or download and extract the ZIP):
   ```bash
   git clone <repository-url>
   cd product-search
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View the app**:
   Open your browser and navigate to `http://localhost:5173` (or the URL provided in your terminal).

## Usage Examples (Test Cases Supported)

The application handles various scenarios reliably:
1. **Default State:** Shows all available products.
2. **Search Only:** Searching "shoe" returns all matching products like "Shoes".
3. **Category Only:** Selecting "Electronics" lists only laptops, headphones, etc.
4. **Combined Queries:** Having "Clothing" selected and typing "t" accurately returns "T-shirt".
5. **No Results:** Showing clear visual feedback when an impossible combination (like "Phone" in "Clothing") is queried.

## Project Structure

```
product-search/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable React components
│   │   ├── FilterBar.jsx  # Search input & category buttons
│   │   ├── ProductList.jsx# Grid layout and empty state handling
│   │   └── ProductCard.jsx# Individual product UI representation
│   ├── App.jsx            # Main app component and state logic
│   ├── index.css          # Global and component styling
│   └── main.jsx           # React app entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## Customization

To edit the initial product data, simply modify the `productsData` array located at the top of `src/App.jsx`.

To adjust colors or styles, modify the CSS variables (e.g., `--primary`, `--bg-color`) inside the `:root` block at the top of `src/index.css`.
