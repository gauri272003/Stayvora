Yes 😄 I know your Stayvora project — the full-stack Airbnb-inspired property booking platform with:

Node.js + Express

MongoDB Atlas

Passport authentication

PBKDF2 password hashing

Leaflet + OpenStreetMap + Nominatim

EJS templates

Bootstrap

Deployed on Render

Port: 8080

Now I’ll give you a complete professional README.md ready to copy-paste into GitHub 👇

🏠 Stayvora – Full Stack Property Booking Platform

Stayvora is a full-stack property booking web application inspired by Airbnb. It allows users to explore properties, search by location using an interactive map, and securely book stays. The platform also includes a powerful admin panel for managing listings and bookings.

🚀 Live | Secure | Map-Based | Open Source

🌟 Features
🔐 Authentication & Security

Secure signup and login using Passport.js

Password hashing with PBKDF2 + Salt

Session-based authentication

Separate admin and user login systems

🏡 Property Management

Add, update, and delete property listings

Browse 50+ property listings

Detailed property view pages

Image support for listings

📍 Location-Based Search

Interactive maps using Leaflet.js

OpenStreetMap integration

Real-time geocoding via Nominatim API

Search properties by location

📅 Booking System

Book properties

Manage reservations

Admin booking management

🛠️ Tech Stack
Backend

Node.js

Express.js

Passport.js

PBKDF2 (crypto)

Express-session

Frontend

EJS Templates

Bootstrap 5

Vanilla JavaScript

Database

MongoDB Atlas

Mongoose

Maps & Geolocation

Leaflet.js

OpenStreetMap

Nominatim API

Deployment

Render

API Testing

Hoppscotch

📁 Project Structure
Stayvora/
│
├── models/         # Mongoose schemas (User, Admin, Property, Booking)
├── routes/         # Express route handlers
├── views/          # EJS templates
├── public/         # Static assets (CSS, JS, images)
├── middleware/     # Custom authentication & error middleware
├── utils/          # Utility functions (hashing, geocoding)
├── app.js          # Main server file
├── .env            # Environment variables (not committed)
└── package.json    # Dependencies and scripts

🖥️ Local Setup Instructions

Follow these steps to run Stayvora locally:

1️⃣ Clone the Repository
git clone https://github.com/gauri272003/Stayvora.git
cd Stayvora

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory and add:

PORT=8080
MONGODB_URI=your_mongodb_atlas_uri
SESSION_SECRET=your_secret_key

4️⃣ Start the Application
npm start


Now open your browser and visit:

http://localhost:8080

🤝 Contributing

Contributions are welcome!

Fork the repository

Create a new branch

git checkout -b feature/your-feature-name


Commit your changes

git commit -m "Add feature: description"


Push to your fork

git push origin feature/your-feature-name


Create a Pull Request

All contributors will be credited once merged.

👩‍💻 Developer

Gauri Kutarmare
Full Stack Developer

📩 Email: gkutarmare@gmail.com
