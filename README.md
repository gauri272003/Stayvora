Stayvora

Stayvora is a full-stack property booking platform inspired by Airbnb. It provides secure user and admin authentication, interactive map-based property searches, and seamless booking functionality.

This project is open-source and welcomes contributions from the community.

🔧 Tech Stack & Tools
🖥️ Backend

Node.js & Express.js – RESTful API development and server-side logic

Passport.js – User authentication (Signup/Login)

PBKDF2 – Secure password hashing with salt

🎨 Frontend

EJS Templates – Server-side rendering for dynamic views

Bootstrap – Responsive and clean UI/UX design

🗺️ Mapping & Geolocation

Leaflet.js – Interactive map integration

OpenStreetMap – Base map tiles

Nominatim API – Geocoding location names into latitude and longitude

🗄️ Database

MongoDB Atlas – Cloud-hosted NoSQL database

🚀 Deployment

Render – Application hosting and deployment

🧪 API Testing

Hoppscotch – API testing, debugging, and monitoring

✅ Core Features
🔐 User Authentication

Secure signup/login using Passport.js

Salted & hashed passwords with PBKDF2

Separate authentication flows for users and administrators

🛠️ Admin Panel

Add, update, and delete property listings

Manage user bookings

🏡 User Interface

Browse 50+ active property listings

Book and manage reservations

Location-based property search

🗺️ Map Integration

Interactive property map using Leaflet.js

Real-time geocoding with Nominatim API

📁 Project Structure
Stayvora-Project/
│
├── models/        # Mongoose models (User, Property, Admin, etc.)
├── routes/        # Express route handlers
├── views/         # EJS templates
├── public/        # Static files (CSS, JS, images)
├── middleware/    # Custom middlewares (auth, error handling)
├── utils/         # Utility functions (geocoding, hashing)
├── app.js         # Main application file
├── .env           # Environment variables (not pushed to GitHub)
└── package.json   # Dependencies and scripts
🖥️ Local Setup Instructions

Follow these steps to run Stayvora locally:

1️⃣ Clone the Repository
git clone https://github.com/your-username/Stayvora.git
cd Stayvora

2️⃣ Install Dependencies
npm install

3️⃣ Set Up Environment Variables

Create a .env file in the root directory and add:

PORT=8080
MONGODB_URI=your_mongodb_atlas_uri
SESSION_SECRET=your_secret_key

4️⃣ Run the Application
npm start


Access the application at:

http://localhost:8080
🤝 Contributing

Contributions are welcome! Follow the steps below to contribute:

1️⃣ Fork the Repository

Click the Fork button at the top-right corner of the repository.

2️⃣ Clone Your Fork
git clone https://github.com/your-username/Stayvora.git
cd Stayvora

3️⃣ Create a New Branch
git checkout -b feature/your-feature-name

4️⃣ Make Changes and Commit
git add .
git commit -m "Add feature: your description"

5️⃣ Push to Your Fork
git push origin feature/your-feature-name

6️⃣ Create a Pull Request

Go to the original repository and open a Pull Request describing your changes.

All contributors will be credited once their Pull Request is merged.

📧 Contact

For queries, suggestions, or collaboration opportunities:

Gauri Kutarmare
📩 Email: gkutarmare@gmail.com
