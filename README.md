# AuthFlow: MERN Stack Authentication System

## 📝 Project Description
AuthFlow is a robust, full-stack authentication system built using the **MERN stack** (MongoDB, Express.js, React, Node.js).  
The frontend is powered by **Vite** for a fast and efficient development experience.  

It provides a complete solution for user authentication, including:
- Secure password handling  
- Token-based sessions  
- Third-party login with Google  

---

## ✨ Features
- **User Registration & Login** – Secure authentication with email & password  
- **Form Validation** – Client-side validation for data integrity and smooth UX  
- **Secure Sessions** – Stateless authentication with JSON Web Tokens (JWT)  
- **Cookie-Based Tokens** – HTTP-only cookies to prevent XSS attacks  
- **Protected Routes** – Middleware to restrict access to private routes  
- **Redirects** – Auto-redirect unauthenticated users to login  
- **Google OAuth 2.0** – Seamless Google Sign-In integration  
- **Password Hashing** – Encrypted with bcrypt for maximum security  

---

## 🚀 Technologies Used

### Frontend (Client)
- **React** – For building UI  
- **Vite** – Lightning-fast dev server & optimized builds  
- **React Router DOM** – Client-side routing & protected routes  
- **Axios** – For making API requests  

### Backend (Server)
- **Node.js** – JavaScript runtime  
- **Express.js** – Minimalist backend framework  
- **MongoDB** – NoSQL database for user data  
- **Mongoose** – ODM for MongoDB  
- **JSON Web Token (JWT)** – Secure token-based sessions  
- **bcryptjs** – Password hashing & salting  
- **cookie-parser** – Parse cookies in requests  
- **dotenv** – Environment variable management  
- **Google OAuth2 Library** – Google authentication support  

---

## 💻 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)  
- **MongoDB** (local or cloud via MongoDB Atlas)  

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=a_very_secure_random_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

MONGO_URI → Your MongoDB connection string
JWT_SECRET → Long, random string to sign JWTs
GOOGLE_CLIENT_ID & GOOGLE_CLIENT_SECRET → Obtained from Google Cloud Console (OAuth 2.0 credentials)

## ▶️ Running the Application

```bash
# Start backend server
cd backend
npm run dev

# Start frontend server
cd ../frontend
npm run dev

The app will run at: http://localhost:5173

## 🔒 Authentication Details

### User Validation & Redirects
- **Frontend**: React state management tracks authentication status  
- **Backend**: Middleware validates & sanitizes incoming data  
- **Redirects**:  
  - ✅ **Successful login** → Redirects user to **dashboard/home**  
  - ❌ **Unauthenticated** → Returns `401 Unauthorized` → Redirect to login  

---

### Tokens & Cookies
- **JWT Generation** – Issued on successful login, contains user ID  
- **Cookie Storage** – Stored in **HTTP-only cookies** (not accessible via JS)  
- **Token Verification** – Every protected request checks & validates JWT  

---

### Google Login Flow
1. **Frontend** gets Google ID token  
2. **Backend** verifies token with Google API  
3. If valid → Finds/creates user → Issues **standard JWT**  
4. JWT stored in cookie → Same behavior as email/password login  

---

## 🤝 Contributing
Contributions are welcome! 🎉  

- Open an issue  
- Submit a pull request  

---

## 📄 License
This project is licensed under the **MIT License**.  


