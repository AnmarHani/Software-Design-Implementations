const userTypes = `
    type User {
        id: ID!
        username: String
        password: String
    }

    type Query {
        login(username: String, password: String): String #returns Token
        validateToken(token: String): User #returns a User object
    }

    type Mutation {
        register(username: String, password: String): String #returns Token
    }
`
module.exports = userTypes