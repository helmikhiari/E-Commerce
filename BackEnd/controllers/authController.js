const userService=require("../services/userService")
const authService=require("../services/authService")
const jwtService=require("jsonwebtoken");
exports.login=async (req,res)=>
{
    try
    {
        const {email,password}=req.body;
        if (! await userService.checkUserExists(email))
        {
            return res.status(404).json({message:"User Not Found"});
        }
        const id=await authService.login(email,password);
        if (!id)
        {
            return res.status(401).json({message:"Check your password"});
        }
        const token=jwtService.sign({id},process.env.JWT_SECRET_KEY,{expiresIn:"8h"});
        return res.status(200).json({token})
        
    }
    catch(error)
    {
        console.log("controller error "+error);
    }
}
