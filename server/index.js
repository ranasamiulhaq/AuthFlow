import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from "./Routes/authRouter.js";

dotenv.config(); 
 

const app = express();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB Connection Successful!');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};
connectDB();

// Middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/auth",authRoutes);


// Start Server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
