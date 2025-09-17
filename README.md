🎬 Netflix GPT

An AI-powered movie discovery web app inspired by Netflix.
Built with React, Tailwind CSS, Redux Toolkit, Firebase, TMDB API, and Google Gemini for AI movie suggestions.

🚀 Tech Stack

Frontend: React, Redux Toolkit, Tailwind CSS

Backend / Auth: Firebase Authentication

APIs:

TMDB
– movie data & trailers

Google Gemini
– AI movie recommendations

✨ Features
🔑 Authentication

Secure Sign Up / Login using Firebase

Profile update & persistent sessions

Route protection (auto-redirects if not logged in)

🎥 Browse Page

Dynamic Header with sign-out and language selector

Hero section with autoplay background trailer (muted)

Multiple movie carousels: Now Playing, Popular, Top Rated, Upcoming

Fully responsive design for mobile, tablet, and desktop

🤖 Netflix GPT

AI Search Bar powered by Google Gemini

Multi-language support (English, Hindi, Spanish, French, German, Japanese…)

Personalized “AI Picks” section with smart movie recommendations

🛠️ Development Highlights

Bootstrapped with create-react-app

Configured Tailwind CSS for styling

Built reusable components: Header, MovieList, GPTWelcomeMessage, etc.

Managed global state with Redux slices (userSlice, moviesSlice, gptSlice)

Created custom React hooks for fetching:

Now-Playing Movies

Category-wise movie data

Trailer video

Implemented memoization for performance

Secured API keys with .env and added .gitignore
