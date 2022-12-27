const jose = require('jose')

const secret = new TextEncoder().encode(
    'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
)

const decode = async(token) => {
    const { payload, protectedHeader } = await jose.jwtVerify(token, secret)
    return payload
}

module.exports = decode