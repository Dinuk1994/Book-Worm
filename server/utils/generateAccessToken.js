import jwt from "jsonwebtoken"
const GenerateAccessToken = ({userId,role,userName}) => {
    return jwt.sign({userId,role,userName},process.env.ACCESS_TOKEN_SECRET,{expiresIn : "1d"})
}

export default GenerateAccessToken;