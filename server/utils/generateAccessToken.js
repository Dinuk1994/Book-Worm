import jwt from "jsonwebtoken"
const GenerateAccessToken = ({userId,role,fullName}) => {
    return jwt.sign({id : userId , role : role , fullName : fullName},process.env.ACCESS_TOKEN_SECRET,{expiresIn : "1d"})
}

export default GenerateAccessToken;