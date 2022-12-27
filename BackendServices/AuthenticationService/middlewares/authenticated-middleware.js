const decodeToken = require("../utils/decode-token")

const isAuthenticated = async(req, res, next) => {
    token = req.headers.authorization.split(" ")[1]
    user = await decodeToken(token)
    if(!user){
        res.json({
            "msg":"error"
        })
    }
    next()
}

module.exports = isAuthenticated