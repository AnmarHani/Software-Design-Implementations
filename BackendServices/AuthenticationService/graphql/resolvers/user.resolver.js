const userController = require("../../controllers/user.controller")

const resolver = {
    // Queries
    login: async ({username, password}) => {
        return await userController.login(username, password)
    },
    validateToken: async ({token}) => {
        return await userController.validateToken(token)
    },

    // Mutations
    register: async ({username, password}) => {
        return await userController.register(username, password)
    },
}

module.exports = resolver