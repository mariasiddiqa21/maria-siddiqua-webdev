# 🏴‍☠️ Treasure Hunt Game

A fun and interactive browser-based game where players act as explorers searching for hidden treasure by guessing a number between **1 and 100**.

---

## 🎮 Game Description

The system randomly generates a number (treasure location), and the player must find it within **7 attempts**. After each guess, the game provides hints to guide the player:

* 📈 If the guess is **too high** → *"Too Far Ahead 🚀"*
* 📉 If the guess is **too low** → *"Too Far Behind 🐢"*
* 🎉 If the guess is correct → *"Treasure Found!"*

If the player fails to find the treasure within 7 attempts, the game ends with *"Game Over 💀"*.

---

## 🚀 Features

* 🎯 Random number generation (1–100)
* 🔁 Maximum of 7 attempts
* 💡 Smart hints after each guess
* 🛑 Game stops after win/loss
* 🔄 “Play Again” button to restart game
* 🎨 Modern and responsive UI design

---

## 🧠 Concepts Used

This project demonstrates important web development concepts:

* **JavaScript Logic**

  * Variables and state management
  * Conditional statements (if-else)
  * Event handling (button clicks)

* **DOM Manipulation**

  * Updating text dynamically
  * Enabling/disabling inputs
  * Showing/hiding elements

* **UI/UX Design**

  * Responsive layout
  * Styled buttons and inputs
  * User feedback messages

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)

---

## ▶️ How to Run

1. Copy the full code into a file named:

   ```
   index.html
   ```
2. Open the file in any web browser.
3. Start guessing and enjoy the game!

---

## 🔄 Game Flow

1. Game starts with a random number.
2. Player enters a guess.
3. System compares guess with treasure.
4. Attempts decrease after each wrong guess.
5. Game ends when:

   * Player finds the treasure ✅
   * Attempts reach zero ❌

---

## 💡 Future Improvements

* ⏱️ Add timer feature
* 🏆 Add scoring system
* 📊 Show previous guesses
* 🎚️ Difficulty levels (Easy/Hard)
* 🔊 Sound effects

---

## 👩‍💻 Author

**Maria Siddiqua**
BSCS Student | Web Development Intern

---

## 📌 Note

For testing purposes, the treasure number is logged in the console. Remove it in production to make the game fair.

---

Enjoy exploring and happy coding! 🏴‍☠️
