import jwt from "jsonwebtoken"
export const authMiddleware = (req,res,next) =>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({message : "Unauthorized"})
    }
    try {
        const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        req.user = decoded
        //console.log(decoded);
        
        next()
        
    } catch (error) {
        return res.status(500).json({msg : error.message})
    }

}
    