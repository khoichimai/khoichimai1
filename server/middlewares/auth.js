const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res
            .status(401)
            .json({ success: false, message: "Access token not found" });
    }
    try {
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.idUser = decode;
        next();
    } catch (error) {
        return res
            .status(401)
            .json({ success: false, message: "Access token expired" });
    }
};
module.exports = verifyUser;
