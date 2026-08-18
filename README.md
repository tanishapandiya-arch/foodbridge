# 🌱 FoodBridge

> **Reducing Food Waste. Connecting Communities. Creating Impact.**

FoodBridge is a full-stack food donation platform that connects people
with surplus food to **verified NGOs**. The platform makes food donation
simple, organized, and transparent while helping reduce food wastage.

---

## ✨ Features

### 👤 Donor
- Register & login securely
- Post surplus food with quantity, description, pickup time & location
- View personal food posts
- Track donation status

### 🤝 NGO
- Register as an NGO
- Get verified by Admin
- View available food donations
- Claim food donations
- View claimed food

### 👑 Admin
- Secure admin login
- View registered NGOs
- Verify NGOs
- Manage NGO access

---

## 🔄 How It Works

```text
Donor
  ↓
Posts Surplus Food
  ↓
FoodBridge
  ↓
Verified NGO
  ↓
Claims Food
  ↓
Donation Completed 🌱
🛠️ Tech Stack

Frontend: React.js · Vite · React Router · JavaScript · CSS

Backend: Node.js · Express.js · REST API · JWT · bcrypt

Database: MongoDB · MongoDB Atlas · Mongoose

Tools: VS Code · Git · GitHub · REST Client

🔐 Security
JWT-based authentication
Password hashing with bcrypt
Protected routes
Role-based authorization
Verified NGO access
Environment variables for sensitive credentials
📁 Project Structure
Food Donation Platform/
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
└── foodbridge/
    └── src/
        ├── components/
        ├── layouts/
        ├── pages/
        ├── routes/
        ├── services/
        └── styles/
🚀 Run Locally
Backend
cd backend
npm install
npm run dev

Runs on:

http://localhost:5000
Frontend
cd foodbridge
npm install
npm run dev

Runs on:

http://localhost:5173

Create a .env file in the backend:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

⚠️ Never commit your .env file or secret credentials to GitHub.

🔮 Future Scope
📍 Location & map integration
📸 Food image uploads
🔔 Notifications
📧 Email notifications
🔎 Food search & filtering
📊 Admin analytics
📱 Better mobile experience
☁️ Production deployment
👩‍💻 Developer

Tanisha Pandiya

Built with ❤️ using React, Node.js, Express.js & MongoDB

⭐ Food that can help someone shouldn't go to waste.
