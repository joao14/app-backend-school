const jwt = require("jsonwebtoken");

const validate = function(req, res, next) {
    const token = req.header("auth-token");
    if (!token) return res.status(400).send("Access Denied!, no token entered");
    try {
        const verified = jwt.verify(token, process.env.JWTSECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send({
            error: "auth failed, check auth-token222"
        });
    }
};

module.exports = {
    validate
}