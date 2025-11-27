const jwt = require("jsonwebtoken");
const JWT_SECRET = "pass1212";

function authMiddle(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.id;
        next();
    }else{
        res.status(403).json({
            msg: "Incorrect credentials"
        })
    }  
}


module.exports = authMiddle;