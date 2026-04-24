# Smart Registration Form (Vanilla JavaScript)

A modern, responsive, and interactive **user registration form** built using **HTML, CSS, and Vanilla JavaScript**. This project simulates a real-world company signup system with live validation, dynamic UI updates, and local storage support.

---

## 🚀 Features

* ✅ Real-time form validation
* ✅ Strong password checker (regex-based)
* ✅ Age restriction (18+ validation)
* ✅ Dynamic country → city dropdown
* ✅ Profile image upload with preview
* ✅ Rounded profile image in summary
* ✅ Data saved in browser localStorage
* ✅ Auto-fill form on page reload
* ✅ Summary modal instead of alerts
* ✅ Back & Next navigation buttons
* ✅ Professional UI with background image support

---

## 📸 UI Preview

> A clean, modern registration form with a glass-style card layout over a professional background image (laptop/coding workspace theme).

---

## 🧠 Technologies Used

* HTML5
* CSS3 (Flexbox, gradients, responsive design)
* JavaScript (DOM manipulation, events, validation)
* LocalStorage API
* FileReader API (image preview)

---

## 📂 Project Structure

```
project-folder/
│
├── index.html        # Main UI + JavaScript
├── style.css         # Styling (if separated)
├── mainlogic.js      # JavaScript logic (optional split)
└── README.md         # Project documentation
```

---

## ⚙️ How It Works

### 1. User Input

User enters:

* Name
* Email
* Password
* Phone number
* Date of birth
* Country & City
* Profile image

---

### 2. Validation

* Password must include:

  * At least 8 characters
  * Number
  * Special character

* Age must be 18 or older

---

### 3. Dynamic UI

* Cities update based on selected country
* Image preview shows instantly after upload

---

### 4. Submission

* Data is stored in `localStorage`
* Summary modal displays user details
* User can go back or proceed

---

### 5. Auto-Fill

* When user revisits page, data is automatically loaded

---

## 🎯 Key Learning Outcomes

This project helps you understand:

* DOM manipulation in JavaScript
* Event handling (`input`, `change`, `click`)
* Form validation logic
* Regex usage for passwords
* Working with localStorage
* FileReader API for images
* UI/UX design basics

---

## 💡 Future Improvements

* Add backend (Django / Node.js)
* Add database storage (MySQL / MongoDB)
* Multi-step form design
* Email verification system
* User authentication (login system)

---

## 📌 Author

Built for learning and portfolio development as a **junior web developer project**.

---

## ⭐ Outcome

This project simulates a real-world **company registration system UI**, making it suitable for portfolio and internship showcase.
