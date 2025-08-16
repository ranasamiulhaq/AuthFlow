import { createSecretToken } from "../auth/secretToken.js";
import UserModel from "../Model/userModel.js";
import bcrypt from 'bcrypt';


export const SignUp = async (req,res)=>{
    try{
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);

        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ success: false, message: "User Already Exists" });
}


        const user = await UserModel.create({username,email,password:hashedPassword,createdAt: new Date()});
        
        const Token = createSecretToken(user._id);
        res.cookie("token" , Token,{
            httpOnly:true,
            secure:true,
            sameSite:"Strict",
            maxAge: 60 * 60 * 1000
        });

        res.status(201).json({message: "Account Created Successfully", success:true});
    }
    catch(error){
        res.status(500).json({success:false, message:error.message});
    }

}

export const Login = async(req,res)=> {
    try{
        const {email , password} = req.body;

        const loginUser = await UserModel.findOne({email});

        if(!loginUser){
            return res.json({success:false,message : "Incorrect Email or Email Don't Exists"});
        }

        const isPassValid = await bcrypt.compare(password,loginUser.password);
        if(!isPassValid){
            return res.json({success:false,message : "Password Incorrect"});
        }

        const token = createSecretToken(loginUser._id);
        res.cookie("token",token,
            {
                httpOnly:true,
                secure:true,
                sameSite:"Strict",
                maxAge: 60 * 60 * 1000 
            }
        )

        res.status(200).json({success: true, message : " Login Successful"})
    }
    catch(error){
        res.status(500).json({success:false,message:error.message});
    }

}

export const Logout = (req, res) => {
  res.clearCookie('token'); 
  res.status(200).json({ message: "Logged out successfully" });
};