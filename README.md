# 🛍️ MyStore – E-commerce Frontend

A modern e-commerce web application built with React and Vite.  
This project demonstrates authentication, profile management, cart functionality, and protected routing using localStorage.

---

## 🚀 Live Demo

- http://mystore-ecomm.vercel.app

---

## 📌 Features

### 🔐 Authentication
- User Registration
- Login & Logout
- Session management with expiration
- Protected routes
- Redirect on session expiry

### 👤 Profile Management
- View user profile
- Update name & email
- Update password
- Automatic logout after password change

### 🛒 Cart System
- Add to cart
- Remove from cart
- Update quantity
- Prevent quantity below 1
- Cart data persisted in localStorage
- Dynamic total amount calculation

### 🎨 UI & UX
- Fully responsive layout
- Clean minimal design
- Animated loader
- Modern cart badge indicator
- Smooth hover transitions

---

## 🛠️ Tech Stack

- React
- Vite
- React Router DOM
- Context API
- Tailwind CSS
- LocalStorage for persistence

---

## 🔄 State Management

- Cart handled using React Context API
- User session stored in localStorage
- Registered user stored separately
- Session expiration handled manually

---

## 🧠 Learning Objectives

This project demonstrates:

- Client-side authentication logic
- State synchronization between session and stored user
- Context API usage
- Route protection
- Clean UI structuring
- Basic cart architecture logic

---

## ⚠️ Important Note

This project uses localStorage to store user credentials.

⚠ This is NOT secure for production use.  
In real-world applications:
- Passwords should be hashed
- Authentication should be handled by a backend
- Sensitive data should never be stored in localStorage

---

## 📦 Installation

```bash
git clone <your-repo-link>
cd project-folder
npm install
npm run dev
```

---

## 👩‍💻 Author

Abhay Panchal  

---

## ✨ Future Improvements

- Backend integration with Express & MongoDB
- JWT authentication
- Multi-user support
- Order history
- Payment gateway integration
- Admin dashboard

---

