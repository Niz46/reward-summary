Here's a `README.md` file for the React project, explaining the project, setup instructions, key features, components, and how to run the project.

---

# RewardReps Transaction Overview and History

This project is a **Reward Representative Transaction Overview** dashboard built with **React.js**, styled with **styled-components**, and animated using **Framer Motion**. The dashboard allows sales representatives to get a summary of their account balance, recent transactions, and detailed analytics for payments and refunds over customizable time frames.

## Table of Contents

1. [Features](#features)
2. [Technology Stack](#technology-stack)
3. [Installation](#installation)
4. [Running the Project](#running-the-project)
5. [Project Structure](#project-structure)
6. [Components](#components)
7. [Animations](#animations)
8. [Available Scripts](#available-scripts)

---

## Features

- **Transaction Overview**: Shows a summary of pending payments, refunds, and transaction details.
- **Analytics Cards**: Summarized financial analytics in card format (e.g., Pending Payments, Refunds Analytics).
- **Recent Transactions**: Displays a history of recent transactions.
- **Account Balance**: Displays the current balance of the sales rep.
- **Payment Analytics**: Visualization of payment and refund analytics via chart.
- **Time Filter**: Filters transaction data based on time periods like `Today`, `7 days`, `30 days`, or `12 Months`.
- **Framer Motion Animations**: Smooth fade-in animations when components load.

## Technology Stack

- **React.js**: Frontend library for building user interfaces.
- **styled-components**: CSS-in-JS styling solution.
- **Framer Motion**: Animations and transitions.
- **TypeScript**: Provides type safety.
- **Icons**: SVG icons used for visual representation.
- **Custom Components**: Built reusable and scalable components.

## Installation

To get the project running locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Niz46/reward-summary.git
   cd sales-rep-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Make sure you have Node.js and npm installed.

## Running the Project

1. To start the development server, run:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

Here’s a breakdown of the project’s directory structure:

```bash
├── src
│   ├── components
│   │   ├── pageHeader       # Component for rendering page headers
│   │   ├── tableWidget      # Reusable table widget component
│   │   ├── buttonDropdown   # Component for dropdown buttons
│   ├── features
│   │   ├── transactionHistory
│   │   ├── salesRepOverview
│   ├── assets
│   │   ├── svgs             # Contains SVG icons
│   ├── styles               # Global styles and themes
├── README.md
└── package.json
```

- **components**: Contains reusable components like `PageHeader`, `TableWidget`, and `ButtonDropdown`.
- **features**: Contains feature-specific components, including `TransactionHistory` and `SalesRepOverview`.
- **assets**: Contains SVG icons and other static assets.
- **styles**: Contains global styling and theme definitions.

## Components

### `SalesRepOverview`

- Displays the account balance and transaction overview.
- Includes tabs for filtering transactions by different time frames (e.g., Today, 7 days, 30 days, etc.).
- Contains cards for payment analytics and refund analytics.

### `TransactionHistory`

- Shows a detailed history of transactions.
- Contains a table widget for filtering transactions.
- Includes pagination and filtering functionalities.

### `RecentTransaction`

- Displays the list of recent transactions made by the sales rep.

### `AnalyticsCard`

- Displays various analytic metrics like `Pending Payments`, `Customer Refunds`, and `Supplier Refunds`.

### `TabHeaderless`

- Renders tab-like navigation without headers.
- Allows sorting transaction data based on the selected tab (e.g., Today, 7 days).

### `TransactionAnalyticsChart`

- A chart component visualizing transaction data (e.g., payment and refund trends over time).

## Animations

Animations are powered by **Framer Motion** to give the app a smooth user experience:

- **Fade-in effect**: Components fade in smoothly with controlled delays and durations.
- **Motion wrapper**: The root of the page is wrapped in `motion.div` for animations.

For example:

```jsx
<motion.div
  initial={{ opacity: 0, y: 150 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 2.5 }}
>
  {/* Your component goes here */}
</motion.div>
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode. The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder.

---

## Future Improvements

- **API Integration**: Replace mock data with real API responses for dynamic data fetching.
- **Mobile Responsiveness**: Enhance the layout to support mobile devices.
- **Unit Testing**: Implement unit tests for the key components and functionalities.

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.

---

## Contact

If you have any questions or feedback, feel free to reach out at [favournzeh02@gmail.com](mailto:favournzeh02@gmail.com).

---

This `README.md` provides an overview of the project, its key features, how to set up the environment, and a detailed description of the components and functionality.