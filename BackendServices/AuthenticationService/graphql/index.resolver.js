const userResolver = require("./resolvers/user.resolver")

const rootResolver = {
    ...userResolver,
}

module.exports = rootResolver