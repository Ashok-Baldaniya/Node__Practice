const jwt = require("jsonwebtoken")

const auth = async (req, resp, next) => {
    const token = req.header("authtoken")
    try {
        const userdata = await jwt.verify(token, "thisismytoken")
        req.uid = userdata._id
        next();
    } catch (error) {
        resp.send("Invalid credentials..")
    }
}

module.exports = auth;