const User = require("../models/user.model")
const createToken = require("../utils/encode-token")
const decodeToken = require("../utils/decode-token")

const login = async(username, password) => {
    const user = await User.findOne({username, password})
    
    let token = null
    if(user){
        token = await createToken({id: user._id ,username:user.username, password:user.password})
    }

    return token
}

const register = async (username, password) => {
    const newUser = new User({ username, password });

    let token = null
    newUser.save((err) => {
        if (err) return err;
    });
    token = await createToken({id: newUser._id ,username:newUser.username, password:newUser.password})
    return token
}

const validateToken = async(token) => {
    user = await decodeToken(token)
    if(!user) return null
    return {
        id: user.id,
        username: user.username,
        password: user.password
    }
}

module.exports = {
    login,
    register,
    validateToken
}