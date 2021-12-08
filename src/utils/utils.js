const jwt = require("jsonwebtoken");

const generateJWT = (user) => {
    return jwt.sign({ identification: user.user_identification, iat: Math.floor(Date.now() / 1000) - 30 }, process.env.JWTSECRET)
}

module.exports = {
    generateJWT
}