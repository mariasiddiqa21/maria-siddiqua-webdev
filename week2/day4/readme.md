# 🛍️ ShopHub - Mini E-Commerce Website

## 📌 Project Overview

ShopHub is a simple mini e-commerce web application built using **HTML, CSS, and JavaScript (Vanilla JS)**.
It allows users to create an account, log in, browse products, add items to a cart, and place an order.

This project demonstrates **frontend development skills, DOM manipulation, LocalStorage usage, and UI design**.

---

## 🚀 Features

### 🔐 Authentication

* User Signup with validation
* User Login with credential checking
* Data stored using LocalStorage
* Logout functionality

### 🏠 Home Page

* Product grid layout
* Product cards with images, name, and price
* Add to Cart functionality
* Cart item count badge

### 🛒 Cart Page

* View added products
* Increase / decrease quantity
* Remove items
* Dynamic total price calculation

### 💳 Checkout Page

* Shipping form (Name, Address, Phone)
* Form validation
* Order summary display
* Order confirmation (no real payment)

---

## 🧠 Validations Implemented

### Signup

* Name must be at least 3 characters
* Valid email format required
* Password must be at least 6 characters
* Duplicate users are not allowed

### Login

* Valid email format
* Required fields check
* Incorrect credentials handling

### Checkout

* Name, address, and phone required
* Address must be detailed
* Phone number must be 10–12 digits
* Prevent checkout with empty cart

---

## 💾 Technologies Used

* HTML5
* CSS3 (Flexbox & Grid)
* JavaScript (ES6)
* LocalStorage (for data persistence)

---

## 📂 Project Structure

```
project/
│── index.html        (Login Page)
│── signup.html       (Signup Page)
│── home.html         (Product Listing)
│── cart.html         (Cart Page)
│── checkout.html     (Checkout Page)
│── style.css         (Global Styling)
│── app.js            (Main JavaScript Logic)
```

---

## ▶️ How to Run the Project

1. Download or clone the project
2. Open the folder
3. Run `index.html` in your browser
4. Signup → Login → Start Shopping

---

## ⚠️ Notes

* No backend is used (frontend only)
* Data is stored in browser LocalStorage
* No real payment integration

---

## 🌟 Future Improvements

* Product details page
* Search & filter functionality
* UI error messages (instead of alerts)
* Payment gateway integration
* Backend integration (Django / Node.js)

---

## 👩‍💻 Author

Developed as a learning project to practice **frontend web development and JavaScript logic building**.

---

## 📢 Conclusion

This project is a great starting point for understanding how e-commerce systems work on the frontend.
It can be extended into a **full-stack application** with backend and database integration.

---
