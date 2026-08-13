# 🍽️ AI Recipe Finder

An AI-powered full-stack recipe application built with React, FastAPI, PostgreSQL, SQLAlchemy, and Groq Llama AI. Users can create accounts, generate recipes, save favorites, and track cooking history through a responsive web interface.

## 🌐 Live Demo

**Live Application:** https://recipeaifinder.netlify.app

---
## 📸 Screenshots

### 🏠 Home Page

![Home Page](screenshots/home.png)

### 🤖 AI Generated Recipe

![Recipe Details](screenshots/recipe-details.png)

### ❤️ Favorites

![Favorites](screenshots/favorites.png)

### 📜 Cooking History

![History](screenshots/history.png)

# ✨ Features

### 🔐 Authentication

* User Registration & Login
* JWT Authentication
* Protected API Endpoints
* Secure Logout

### 🤖 AI Recipe Generation

* Generate recipes using **Groq Llama AI**
* AI-generated recipes with ingredients 
* Step-by-step cooking instructions
* Recipes automatically saved to the database
* Tab-based recipe details (Ingredients & Instructions)

### ❤️ User Features

* Save favorite recipes
* Remove favorites
* Cooking history
* Paginated favorites and history
* Responsive design for desktop and mobile
* Loading states for better user experience

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* React Router


## Backend

* FastAPI
* SQLAlchemy
* Pydantic
* JWT Authentication

## Database

* PostgreSQL (Production - Neon)
* SQLite (Local Development)

## AI

* Groq Llama API

## Deployment

* Frontend: Netlify
* Backend: Render
* Database: Neon PostgreSQL

---

# 📂 Project Structure

```text
AI Powered Recipe Finder App
│
├── backend
│   ├── models
│   ├── ai_service.py
│   ├── auth.py
│   ├── env.example
│   ├── database.py
│   ├── image_service.py
│   ├── main.py
│   ├── requirements.txt
│   ├── schemas.py
│   └── security.py
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public
│   └── package.json
│──.gitignore
└── README.md
```





# 🚀 Installation

## Clone the repository

```bash
git clone https://github.com/aparnavv373/Recipe-Finder
cd Recipe-Finder
```

## Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt

uvicorn main:app --reload
```

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** directory.

```env
SECRET_KEY=
DATABASE_URL=
GROQ_API_KEY=
PEXELS_API_KEY=
PEXELS_API_URL=
```

---

# 📌 API Overview

Some of the major API endpoints include:

| Method | Endpoint            | Description            |
| ------ | ------------------- | ---------------------- |
| POST   | `/signup`           | Register a new user    |
| POST   | `/login`            | User login             |
| GET    | `/details/{recipe_id}`   | Get recipe details         |
| POST   | `/generate-recipe` | Generate AI recipe     |
| GET    | `/favorites`        | Fetch favorite recipes |
| POST   | `/favorites/{recipe_id}`        | Save a favorite recipe |
| DELETE | `/favorites/{recipe_id}`   | Remove favorite        |
| GET    | `/history`          | Fetch cooking history  |

---

# 🚀 Deployment

| Service  | Platform        |
| -------- | --------------- |
| Frontend | Netlify         |
| Backend  | Render          |
| Database | Neon PostgreSQL |


---
## 🤖 How It Works

1. The user submits a recipe request through the React frontend.
2. The frontend sends the request to the FastAPI backend through a REST API.
3. The backend validates the request and communicates with the Groq Llama API.
4. The AI-generated recipe is processed by the backend.
5. Recipe data is stored in PostgreSQL using SQLAlchemy.
6. The backend returns the recipe data to the React frontend for display.

# 🔮 Future Enhancements

- Email Verification
- Forgot Password
- Password Reset
- Refresh Tokens
- Generate Recipes from Available Ingredients




## ⭐ Highlights

- Full-stack application architecture using React and FastAPI
- REST API development with FastAPI
- JWT authentication and protected API endpoints
- SQLAlchemy ORM and PostgreSQL database integration
- Groq Llama API integration
- Responsive UI development with React and Tailwind CSS
- Deployed on Netlify, Render, and Neon