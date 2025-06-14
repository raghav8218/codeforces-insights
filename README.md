# Codeforces Insights 🔍

**Codeforces Insights** is a React-based web app that visualizes a user's Codeforces submissions. It helps you analyze your problem-solving patterns by grouping submissions by verdicts like Correct, Wrong Answer, Time Limit Exceeded, and Others. You can also sort them based on difficulty rating.

This project blends functionality, learning, and experimentation — crafted using a mix of AI assistance and personal debugging.

---

## 🧠 How It Was Made

I recently discovered that **"vibe coding" is getting popular** — where you let creativity, curiosity, and AI tools guide your way instead of rigid planning. I thought, **why not try it myself?**

So, this app was **vibe-coded with AI assistance**, meaning:
- AI helped with structuring the app, writing some logic, and building the UI.
- **I debugged and refined functionalities myself**, including:
  - Grouping verdicts and removing duplicates from WA/TLE/Others
  - Sorting submissions by problem rating, with fallback for unrated ones
  - Managing tab switching and error states in a clean way

This was not just a code dump — I genuinely learned, fixed issues, and built upon the AI's foundation. It was a refreshing way to build!

---

## 🚀 Features

- 🧑‍💻 Enter your Codeforces handle and fetch your recent submissions.
- ✅ Grouped verdicts:
  - Correct
  - Wrong Answer (only first attempt shown for each problem)
  - Time Limit Exceeded
  - Other verdicts (like Compilation Error, Skipped, etc.)
- 📊 Sort problems by their **difficulty rating** (asc/desc toggle).
- 📆 See when each problem was submitted.
- 🔗 Clickable links to each problem on Codeforces.

---

## 📸 Preview

![image](https://github.com/user-attachments/assets/9c13c22a-f60f-404b-8f1f-33752042e5ab)
![image](https://github.com/user-attachments/assets/d53aa3dc-804b-4844-b07b-c8a5cb930ca3)
![image](https://github.com/user-attachments/assets/5b614dc3-1650-473a-91ea-7b8cf7a64637)
![image](https://github.com/user-attachments/assets/0084a4f4-6fc7-4275-a894-3671427a6faa)


---

## ⚙️ Getting Started

To run this app locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/raghav8218/codeforces-insights.git
   cd codeforces-insights
