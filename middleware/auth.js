const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
    //get token from header
    const token = req.header("x-auth-token");

    //check if no token is provided
    if (!token) {
        return res.status(403).json({ msg: "No token, authorization denied" });
    }

    //verify token validity
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // console.log(decoded)
        // console.log(req.user)
        req.user = decoded.user;
        // console.log(req.user)
        next();
    } catch (err) {
        res.status(401).json({ msg: "Invalid Token" });
    }
}