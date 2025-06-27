# Shop Local Hawaii

A modern React web app to discover, support, and register local Hawaiian businesses—hotels, restaurants, and activities—promoting sustainable tourism and authentic island experiences.

## 🌱 Mission <br>
Shop Local Hawaii connects visitors with authentic, locally-owned businesses to support the indigenous Hawaiian population and promote sustainable tourism. Every visit, meal, and adventure helps preserve the islands' culture, environment, and community. 
---

## 🌺 Features

- **Modern Homepage**: Hero section, mission, quiz, categories, and CTA, all with a Hawaiian look and feel
- **Filterable Card Grids**: Browse hotels, dining, and activities with interactive, responsive cards and sticky filter bars
- **Advanced Filtering**: Search, filter by island, price, amenities, cuisine/type, and more
- **Business Registration**: Local owners can register their business via a modern, Firebase-powered form
- **Interactive Quiz**: Personalized quiz to help visitors find their perfect island and learn about Hawaiian culture
- **Mobile Responsive**: Fully responsive design and navigation, including animated hamburger menu
- **Firebase Integration**: Real-time database for business registration (ready for authentication)
- **Accessible & User-Friendly**: Clean, readable UI with keyboard and screen reader support
- **Error Handling**: Global error boundary for graceful error recovery

---
## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation
```bash
git clone <repository-url>
cd shop-local-hawaii
npm install
npm start
```
### Available Scripts
- `npm start` — Run the app in development mode
- `npm test` — Launch the test runner
- `npm run build` — Build for production
- `npm run eject` — Eject from Create React App

---

## 🏝️ Main Components & Pages

- **HomePage**: Modern hero, mission, quiz, categories, and CTA for business owners
- **HotelsPage / DiningPage / ActivitiesPage**: Filterable, responsive card grids with sticky filter bars and advanced search
- **ModernHotelCard / ModernDiningCard / ModernActivityCard**: Interactive cards with save/share, price, rating, tags, and more
- **FormPage**: Business registration form, integrated with Firebase Realtime Database
- **Quiz**: Engaging, animated quiz with cultural awareness and personalized results
- **NavBar**: Fixed, mobile-friendly navigation with animated hamburger menu
- **LoginPage**: Modern login UI, ready for Firebase Auth
- **About**: Mission, story, and impact of supporting local
- **Footer**: Contact, services, privacy, and credits
- **ErrorBoundary**: Catches and displays errors gracefully

---

## 📊 Data
- **card_data.json**: List of businesses (hotels, dining, activities) with fields: `cardId`, `title`, `description`, `tags`, `island`, `price`, `category`, etc.
- **quiz_data.json**: Array of quiz questions and options for the island/culture quiz

---

## 🛠️ Technologies Used
- React 18
- React Router DOM
- Bootstrap 5
- Lodash
- Firebase (Realtime Database, ready for Auth)- Custom SVG logo & modern CSS

