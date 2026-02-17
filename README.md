🏡 Stayvora

Stayvora is a full-stack property booking platform inspired by Airbnb.
It offers secure user and admin authentication, interactive map integration for location-based searches, and seamless property booking features.

This project is open-source and welcomes contributors.

📍 Live URL

🔗 Project: https://stayvora-5.onrender.com

📂 Repository: https://github.com/gauri272003/Stayvora.git

🔧 Tech Stack & Tools
🖥 Backend

Node.js & Express.js – RESTful backend and server-side logic

Passport.js – Authentication (Signup/Login)

PBKDF2 – Secure password hashing with salt

🎨 Frontend

EJS Templates – Server-side rendered dynamic views

Bootstrap – Responsive and clean UI/UX

🗺 Mapping & Geolocation

Leaflet.js – Interactive maps

OpenStreetMap – Base map tiles

Nominatim API – Geocoding locations to latitude & longitude

🗄 Database

MongoDB Atlas – Cloud-hosted NoSQL database

🚀 Deployment

Render – Cloud deployment platform

🧪 API Testing

Hoppscotch – API testing and debugging

✅ Core Features
🔐 User Authentication

Real-time Signup/Login with Passport.js

Salted & hashed passwords using PBKDF2

Separate authentication flows for users & admins

🛠 Admin Panel

Add, update, and delete property listings

Manage user bookings

👥 User Features

Browse 50+ active property listings

Book and manage reservations

Search properties using dynamic map integration

🗺 Map Integration

Interactive maps with Leaflet.js

Real-time geocoding using Nominatim API

📁 Project Structure
Stayvora/
│
├── models/        # Mongoose models (User, Property, Admin, etc.)
├── routes/        # Express route handlers
├── views/         # EJS templates
├── public/        # Static files (CSS, JS, images)
├── middleware/    # Custom middleware (auth, error handling)
├── utils/         # Utility functions (geocoding, hashing)
├── app.js         # Main application file
├── .env           # Environment variables (not pushed)
└── package.json   # Dependencies and scripts

🖥️ Local Setup Instructions

Follow these steps to run Stayvora locally:

1️⃣ Clone the Repository
git clone https://github.com/gauri272003/Stayvora.git
cd Stayvora

2️⃣ Install Dependencies
npm install

3️⃣ Set Up Environment Variables

Create a .env file in the root directory and add:

PORT=3000
ATLASDB_URL=your_mongodb_atlas_uri
SECRET=your_session_secret

4️⃣ Run the Application
npm start


Access the app at:

http://localhost:3000

🤝 Contributing

We welcome contributions from the community!

1️⃣ Fork the Repository

Click the Fork button on GitHub.

2️⃣ Clone Your Fork
git clone https://github.com/gauri272003/Stayvora.git
cd Stayvora

3️⃣ Create a New Branch
git checkout -b feature/your-feature-name

4️⃣ Make Changes and Commit
git add .
git commit -m "Add feature: your description"

5️⃣ Push to Your Fork
git push origin feature/your-feature-name

6️⃣ Create a Pull Request

Open a Pull Request on the original repository describing your changes.

All contributors will be credited once merged.

📧 Contact

Gauri Kutarmare
📩 Email: gkutarmare@gmail.com
