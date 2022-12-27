const userTypes = require("./types/user.type")
const { buildSchema } = require('graphql');

const rootSchema = buildSchema(`
    ${userTypes}
`)

module.exports = rootSchema