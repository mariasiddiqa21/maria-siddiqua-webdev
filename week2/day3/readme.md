# 🚀 Employee Dashboard Web App

A modern **Employee Dashboard** built using **HTML, CSS, and JavaScript** that fetches user data from an external API and displays it in a clean, interactive UI.

---

## 📌 Features

* 📡 Fetch data using Fetch API
* 🔍 Real-time search (by username & email)
* 🎯 Filter users based on latitude (`geo.lat < 0`)
* 🔤 Sort users alphabetically by name
* 🧾 Display users in responsive card layout
* 📊 Show detailed user info in a **modal popup**
* 🎨 Special styling for users with zipcode starting with `5`
* ⚠️ Error handling (API failure)
* ❌ “No users found” message when needed

---

## 🧠 Concepts Used

* Fetch API (Async/Await)
* DOM Manipulation
* Event Handling
* Array Methods (`filter`, `sort`, `map`)
* Conditional Styling
* Responsive Design (CSS Grid)
* Modal UI Component

---

## 📁 Project Structure

```
employee-dashboard/
│
├── index.html   # Complete app (HTML + CSS + JS)
└── README.md    # Project documentation
```

---

## 🌐 API Used

Data is fetched from:

https://jsonplaceholder.typicode.com/users

---

## ⚙️ How It Works

1. Fetch user data from API
2. Filter users where latitude < 0
3. Sort users alphabetically
4. Display users in card layout
5. Search filters users in real-time
6. Clicking "Show Details" opens a modal with:

   * Full address
   * Company catchphrase
7. Special styling applied to specific users
8. Handles errors and empty results

---

## ▶️ How to Run

1. Download or clone this repository
2. Open `index.html` in your browser

OR

Use **Live Server** in VS Code for best experience

---

## 🎨 UI Highlights

* Clean modern card design
* Smooth hover effects
* Centered modal popup
* Responsive layout
* Gradient background

---

## 🚀 Future Improvements

* 🔄 Add loading spinner
* 📄 Add pagination
* ⚛️ Convert to React.js
* 📱 Improve mobile responsiveness
* 🎨 Add dark mode

---

## 👨‍💻 Author

Developed as a frontend practice project to strengthen **JavaScript + UI skills**.

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and keep building!
