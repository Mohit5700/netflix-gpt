# 🎬 Netflix GPT

An AI-powered movie discovery web app inspired by Netflix.
Built with **React**, **Tailwind CSS**, **Redux Toolkit**, **Firebase**, **TMDB API**, and **Google Gemini** for AI movie suggestions.

---

## 🚀 Tech Stack

* **Frontend**: React, Redux Toolkit, Tailwind CSS
* **Backend / Auth**: Firebase Authentication
* **APIs**:

  * [TMDB](https://www.themoviedb.org/) – movie data & trailers
  * [Google Gemini](https://ai.google.dev/) – AI movie recommendations

---

## ✨ Features

### 🔑 Authentication

* Secure **Sign Up** / **Login** using Firebase
* Profile update & persistent sessions
* Route protection (auto-redirects if not logged in)

### 🎥 Browse Page

* Dynamic **Header** with sign-out and language selector
* Hero section with **autoplay background trailer** (muted)
* Multiple **movie carousels**: Now Playing, Popular, Top Rated, Upcoming
* Fully **responsive** design for mobile, tablet, and desktop

### 🤖 Netflix GPT

* **AI Search Bar** powered by Google Gemini
* **Multi-language support** (English, Hindi, Spanish, French, German, Japanese…)
* Personalized **“AI Picks”** section with smart movie recommendations

---

## 🛠️ Development Highlights

* Bootstrapped with `create-react-app`
* Configured **Tailwind CSS** for styling
* Built reusable components: `Header`, `MovieList`, `GPTWelcomeMessage`, etc.
* Managed global state with **Redux slices** (`userSlice`, `moviesSlice`, `gptSlice`)
* Created custom React hooks for fetching:

  * Now-Playing Movies
  * Category-wise movie data
  * Trailer video
* Implemented memoization for performance
* Secured API keys with `.env` and added `.gitignore`

---

## 📦 Setup & Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/<your-username>/netflix-gpt.git
   cd netflix-gpt
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment variables** – create a `.env` file:

   ```
   REACT_APP_TMDB_API_KEY=your_tmdb_key
   REACT_APP_GEMINI_API_KEY=your_gemini_key
   ```

4. **Run locally**

   ```bash
   npm start
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

---

## 📚 Learning Takeaways

* Deep dive into **React + Redux Toolkit** architecture
* Integration of multiple third-party APIs
* Handling authentication flows and route protection
* Implementing **internationalization (i18n)**
* Real-world app deployment to production

---

**Enjoy discovering movies with AI! 🍿🚀**
* Replace `<your-username>` with your GitHub handle.
* Add screenshots/GIFs for extra polish.
