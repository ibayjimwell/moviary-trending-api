# 🔥 Moviary Trending API

**Backend service that powers trending movie logic for Moviary**

This is a lightweight backend API responsible for tracking movie search activity and determining **trending movies** for the Moviary web app.

It acts as a custom popularity engine on top of movie data.

---

## 🌐 Used By

🎬 **Frontend App (Moviary):**
[https://moviary.vercel.app/](https://moviary.vercel.app/)

🖥 Main Movie App Repository:
[https://github.com/ibayjimwell/moviary](https://github.com/ibayjimwell/moviary)

---

## 🚀 Tech Stack

![Express](https://img.shields.io/badge/express-%23404d59.svg?style=for-the-badge\&logo=express\&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge\&logo=mongodb\&logoColor=white)

* **Express.js** — Backend server
* **MongoDB** — Stores movie search counts and trending data

---

## 📌 Base URL

```
/api/v1/trending
```

---

## 📚 API Routes

| Method | Endpoint  | Description                     |
| ------ | --------- | ------------------------------- |
| GET    | `/movies` | Get trending movies             |
| POST   | `/update` | Update search count for a movie |

---

## 🧠 How It Works

1. When users search for a movie in Moviary, the frontend calls:

   ```
   POST /api/v1/trending/update
   ```

   This increments the movie's search count in MongoDB.

2. The API calculates trending movies based on **search frequency**.

3. The frontend fetches trending movies using:

   ```
   GET /api/v1/trending/movies
   ```

This creates a dynamic system where trending movies reflect real user interest.

---

## 🧪 Example Requests

### 📈 Update Search Count

```http
POST /api/v1/trending/update
Content-Type: application/json
```

```json
{
  "movieId": "550",
  "title": "Fight Club",
  "posterPath": "/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg"
}
```

---

### 🔥 Get Trending Movies

```http
GET /api/v1/trending/movies
```

---

## ⚙️ Running Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ibayjimwell/moviary-trending-api.git
cd moviary-trending-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file:

```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
```

### 4️⃣ Start the server

```bash
npm run dev
```

Server runs at:

```
http://localhost:4000
```

---

## 🔮 Future Improvements

* Time-based trending (daily/weekly)
* Genre-based trending
* Rate limiting for abuse prevention
* Caching for faster responses

---

## 👨‍💻 Author

**Jimwell Ibay**
Creator & Maintainer
