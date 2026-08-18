# 🌱 FoodBridge

> **Reducing Food Waste. Connecting Communities. Creating Impact.**

FoodBridge is a full-stack food donation platform that connects people with surplus food to **verified NGOs**. The platform makes food donation simple, organized, and transparent while helping reduce food wastage.

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
```
## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React.js, Vite, React Router, JavaScript, CSS |
| **Backend** | Node.js, Express.js, REST API |
| **Authentication** | JWT, bcrypt |
| **Database** | MongoDB, MongoDB Atlas, Mongoose |
| **Tools** | VS Code, Git, GitHub, REST Client |

---

## 🔐 Security

- 🔑 JWT-based authentication
- 🔒 Password hashing with bcrypt
- 🛡️ Protected routes
- 👥 Role-based authorization
- ✅ Verified NGO access
- 🔐 Environment variables for sensitive credentials

---

## 📁 Project Structure

```text
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

⭐ Food that can help someone shouldn't go to waste.
```
