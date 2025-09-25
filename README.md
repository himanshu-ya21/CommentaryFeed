# MatchFeed - Real-Time Cricket Commentary App

A React Native application that displays a dynamic, real-time cricket match commentary feed. The app simulates live cricket events and aggregates match statistics from the event stream.

## 🎯 Objective

Build a single-screen component that displays a dynamic feed of events for a live T20 cricket match, creating an engaging user experience by reacting differently to various types of match events.

## ✨ Features

- **Real-Time Commentary**: Simulated live events every 4 seconds with random selection from mock data
- **Dynamic Aggregation**: Score, wickets, overs, and batsman details calculated from event stream
- **Visual Differentiation**: Different styling for BALL, BOUNDARY, WICKET, and MATCH_STATUS events
- **Responsive UI**: Clean, modern interface with team flags and live indicators
- **Resilient Design**: Handles unknown event types gracefully without crashing
- **Modular Architecture**: Organized components and utilities for maintainability

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- React Native development environment
- Android Studio (for Android) or Xcode (for iOS)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd MatchFeed
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. For iOS, install pods:
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

1. Start the Metro server:
   ```bash
   npm start
   ```

2. Run on Android:
   ```bash
   npm run android
   ```

3. Run on iOS:
   ```bash
   npm run ios
   ```

## 📱 App Structure

```
src/
├── components/
│   ├── MatchHeader.js      # Header with match info and stats
│   ├── EventItem.js        # Individual commentary event display
│   └── CommentaryFeed.js   # FlatList for event feed
├── utils/
│   ├── mockData.js         # Mock event data
│   ├── eventProcessor.js   # Event aggregation logic
│   ├── themes.js           # Color scheme and styling constants
│   └── constants.js        # Static text constants
└── App.js                  # Main app component
```

## 🎮 Event Types

The app handles the following event types with appropriate visual representation:

- **BALL**: Standard delivery with runs and commentary
- **BOUNDARY**: Four or six runs with highlighted styling
- **WICKET**: Wicket fall with dismissal details
- **MATCH_STATUS**: Match updates like innings breaks

## 🛠️ Technologies Used

- **React Native**: Cross-platform mobile development
- **React Hooks**: State management and side effects
- **React Native Vector Icons**: Icon library (Ionicons)
- **JavaScript ES6+**: Modern JavaScript features

## 📋 Key Requirements Met

✅ Single-screen dynamic feed  
✅ Real-time simulated event stream  
✅ Intelligent UI interpretation of event types  
✅ Aggregated match statistics from events  
✅ Visual emphasis for different event types  
✅ Resilient handling of unknown events  

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
