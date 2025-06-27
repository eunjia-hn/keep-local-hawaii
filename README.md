# Shop Local Hawaii

A modern React web app to discover, support, and register local Hawaiian businesses—hotels, restaurants, and activities—promoting sustainable tourism and authentic island experiences.

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

## 🖼️ Demo

![Shop Local Hawaii Screenshot](public/img/hawaii-coast.png)

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
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts
- `npm start` — Run the app in development mode
- `npm test` — Launch the test runner
- `npm run build` — Build for production
- `npm run eject` — Eject from Create React App

---

## 🗂️ Project Structure

```
src/
├── components/          # React components
│   ├── App.js           # Main app & routing
│   ├── NavBar.js        # Responsive navigation
│   ├── HomePage.js      # Modern homepage
│   ├── HotelsPage.js    # Hotels grid & filter
│   ├── DiningPage.js    # Dining grid & filter
│   ├── ActivitiesPage.js# Activities grid & filter
│   ├── ModernHotelCard.js   # Modern hotel card
│   ├── ModernDiningCard.js  # Modern dining card
│   ├── ModernActivityCard.js# Modern activity card
│   ├── FilterBar.js         # Hotels filter bar
│   ├── DiningFilterBar.js   # Dining filter bar
│   ├── ActivityFilterBar.js # Activities filter bar
│   ├── FormPage.js      # Business registration (Firebase)
│   ├── LoginPage.js     # Login (Firebase-ready)
│   ├── Quiz.js          # Interactive quiz
│   ├── About.js         # About & mission
│   ├── Footer.js        # Footer & credits
│   └── ErrorBoundary.js # Global error handler
├── data/                # JSON data
│   ├── card_data.json   # Business listings
│   └── quiz_data.json   # Quiz questions
├── firebase.js          # Firebase config
├── index.js             # Entry point
├── index.css            # Global & theme styles
└── ...
```

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
- Firebase (Realtime Database, ready for Auth)
- Custom SVG logo & modern CSS

---

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📄 License
MIT License

---

## 🙏 Credits & Contact
- By Eunji Ahn — eunjia@outlook.com
- Original & Redesign: 2022–2025
- [Shop Local Hawaii Logo](public/logo.svg) — Custom SVG

---

## 🌱 Mission

Shop Local Hawaii connects visitors with authentic, locally-owned businesses to support the indigenous Hawaiian population and promote sustainable tourism. Every visit, meal, and adventure helps preserve the islands' culture, environment, and community. 
