# Setup Guide

## Prerequisites
- [Node.js](https://nodejs.org) installed
- [PostgreSQL](https://www.postgresql.org) installed
- [Homebrew](https://brew.sh) (Mac only — used to install PostgreSQL)

To install PostgreSQL on Mac, open a terminal and run:
```bash
brew install postgresql@14
brew services start postgresql@14
echo 'export PATH="/opt/homebrew/opt/postgresql@14/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

---

## 1 — Clone the repo
Open a terminal and paste:
```bash
git clone <repo-url>
cd Youtube_Clone
```

---

## 2 — Install frontend dependencies
In the same terminal, paste:
```bash
cd youtube_frontend
npm install
```

---

## 3 — Install backend dependencies
Then paste:
```bash
cd ../youtube_backend
npm install
```

---

## 4 — Set up Cloudinary
1. Create a free account at [cloudinary.com](https://cloudinary.com)
2. From your dashboard, copy your **Cloud Name** (found on the main dashboard page)
3. Go to **Settings → Upload → Upload Presets** → click **Add upload preset**
   - Set the name to `youtube-clone`
   - Set access mode to **Unsigned**
   - Click Save
4. Open `youtube_frontend/src/Pages/VideoUpload/videoUpload.js` and replace `daargosdm` with your own cloud name

---

## 5 — Set up the database
Open a terminal and paste:
```bash
psql postgres
```

You should see `postgres=#` — that means it worked. Now paste this line **by itself** first:
```sql
CREATE DATABASE youtube_clone;
```

Then connect to it:
```sql
\c youtube_clone
```

You should see `youtube_clone=#`. Now paste the table:
```sql
CREATE TABLE videos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  user_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

You should see `CREATE TABLE`. Type `\q` to exit psql.

---

## 6 — Create your .env file
Inside the `youtube_backend/` folder, create a file called `.env` and paste this inside:
```
DATABASE_URL=postgresql://localhost:5432/youtube_clone
PORT=5000
```

---

## 7 — Run the app

Make sure PostgreSQL is running first:
```bash
brew services start postgresql@14
```

Then open **two separate terminals**:

**Terminal 1 — Backend:**
```bash
cd youtube_backend
node server.js
```
You should see: `Server running on port 5000`

**Terminal 2 — Frontend:**
```bash
cd youtube_frontend
npm start
```

The app will open at `http://localhost:3000`

---

## 8 — Test the upload
To access the upload page you need a userId set. Open the site at `http://localhost:3000`, then press **Cmd + Option + J** (Mac) to open the console. Type `allow pasting` and press Enter, then paste:
```js
localStorage.setItem('userId', 'testuser123')
```
Press Enter, then go to `http://localhost:3000/upload`
