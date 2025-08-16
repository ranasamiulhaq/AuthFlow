import { SignUp , Login , Logout } from "../Controller/authController.js";
import {UserVerification} from '../middleware/authMiddleware.js'
import express from 'express';

const authRouter = express.Router();

authRouter.post("/signup",SignUp);
authRouter.post("/login",Login);
authRouter.post("/logout",Logout);
authRouter.post("/userVerification",UserVerification);


export default authRouter;