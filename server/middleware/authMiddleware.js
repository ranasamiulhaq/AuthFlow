import UserModel from "../Model/userModel.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const UserVerification = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.json({ status: false });
        }

        jwt.verify(token, process.env.TOKEN_KEY, async (error, data) => {
            if (error) {
                return res.json({ status: false });
            } else {
                const user = await UserModel.findById(data.id);
                if (user) {
                    return res.json({ status: true, user: user.username });
                } else {
                    return res.json({ status: false });
                }
            }
        });
    } catch (err) {
        console.error("Verification error:", err);
        return res.json({ status: false });
    }
};
