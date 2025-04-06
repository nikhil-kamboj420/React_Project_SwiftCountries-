# 🌍 SwiftCountries

Welcome to **SwiftCountries** – a blazing-fast web app that allows you to explore countries around the globe at lightning speed! 🚀

## 📖 Overview

SwiftCountries is designed to provide essential country data in a clean and intuitive interface. Whether you're looking for population statistics, capital cities, or interesting facts about countries, SwiftCountries has you covered!

## ✨ Features

- **Fast Data Retrieval**: Fetch country data quickly using the REST Countries API.
- **User-Friendly Interface**: Navigate through countries with ease using a clean and modern design.
- **Country Cards**: View essential information about each country, including:
  - 🌐 Country Name
  - 🌍 Population
  - 🏛️ Capital City
  - 🌎 Region
- **Detailed Country View**: Click on a country card to see more detailed information.
- **Interesting Facts**: Discover unique facts about each country.

## 📁 Project Structure

```
swiftcountries/
├── public/
│   ├── images/
│   ├── vite.svg
├── src/
│   ├── api/
│   │   ├── countryData.json
│   │   ├── footerApi.json
│   │   ├── postApi.jsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppLayout.jsx
│   │   │   ├── CountryCard.jsx
│   │   │   ├── CountryDetails.jsx
│   │   ├── UI/
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── Popup.jsx
│   │   │   ├── SearchFilter.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Country.jsx
│   │   ├── ErrorPage.jsx
│   │   ├── Home.jsx
├── index.html
├── package.json
├── vite.config.js
```

## 🚀 Getting Started

To get started with SwiftCountries, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd swiftcountries
npm install
npm run dev
```

Now you can explore the app at `http://localhost:3000`!

## 🎨 Styling

SwiftCountries uses Tailwind CSS for styling, ensuring a responsive and modern design.

## 📄 License

This project is licensed under the MIT License.

---

Feel free to explore and contribute to SwiftCountries! If you have any questions or suggestions, don't hesitate to reach out! 😊
