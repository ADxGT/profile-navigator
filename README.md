# 🌍 Profile Explorer

Profile Explorer is a React web app that allows users to view, search, and manage personal profiles — complete with photo, contact details, location map, and interests. It includes an admin panel to manage profiles and uses Leaflet for maps with OpenCage Geocoder.

---

## ✨ Features

- 🔍 Searchable profile list
- 🧭 Interactive map (address → coordinates)
- 👤 Admin panel to add/delete profiles

---

Install Dependencies

npm install

Set Up JSON Server

Create `db.json` in the root directory:

```json
{
  "profiles": []
}
Then start JSON server:
npx json-server --watch db.json --port 3001

Add OpenCage API Key
Sign up at https://opencagedata.com/api to get a free API key.

Create a .env file in the root and add:
REACT_APP_OPENCAGE_KEY=your_api_key_here

📁 Project Structure

src/
├── App.js
├── index.js
└── components/
    ├── AdminPanel.jsx
    ├── ProfileList.jsx
    └── ProfileCard.jsx


🗺 Map Integration
Uses OpenCage Geocoder for geolocation
Leaflet for interactive map rendering

🧰 Built With
React + React Router
Axios for HTTP requests
Bootstrap 5
Leaflet.js + OpenStreetMap
JSON Server (mock API)#   p r o f i l e - n a v i g a t o r 
 

To run run the project

start JSON server:
npx json-server --watch db.json --port 3001

then in open another terminal:
npm start
 
