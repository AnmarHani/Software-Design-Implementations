const jose = require('jose')

const secret = new TextEncoder().encode(
    'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
)
const alg = 'HS256'

const encode = async(user) => {
  const jwt = await new jose.SignJWT(user)
    .setProtectedHeader({ alg })
    .sign(secret)
  return jwt
}
module.exports = encode