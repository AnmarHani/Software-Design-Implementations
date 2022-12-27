// Cache and Redis <----- on Django
// OAuth Tokens <----- Here
// GraphQL <------
// Optimized Performance <---- All
// Paid Users vs UnPaid middleware maybe? <---- umm no.
// Translations for response <----- not now.
// Testing <----- All
// DevOps & CI/CD (Docker, Pipelines) <---- All
// Later then see more optimization options like threading and event loop idk <---- Golang?
// Cohesion and decoupling <---- All

// Better convention for naming "x"."category".js
// For example, "products".model.js | "products".controller.js

// test env variables cross-env NODE_ENV=test jest --testTimeout=5000

require('dotenv').config()
require("./db/connection")

const express = require('express')

const app = express()

const { graphqlHTTP } = require("express-graphql")

const rootResolver = require("./graphql/index.resolver")
const rootSchema = require("./graphql/index.schema")

const productRouter = require('./routes/product.routes')

app.use('/graphql', graphqlHTTP({
  schema: rootSchema,
  rootValue: rootResolver,
  graphiql: process.env.DEV || true
}));

app.use("/products", productRouter)

const PORT = process.env.PORT || 3100
const URL = process.env.URL || `0.0.0.0` 

app.listen(PORT, () => {
  console.log(`Authentication Service listening on: \n${URL}:${PORT}`)
})

module.exports = {
  URL,
  PORT
}


  // Microservices(Python,      
  //               This{NodeJS},
  //               GoLang,      
  //               ASP.NEY)      
  // and proxies/kubernetes
  // infrastracture as code


// mutation SetObject{
//   mutationobj: setObject(hello:"asd", username:"asd") {
//       hello
//       username
//   }
// }

// query GetObjects{
// queryobj: getObject{
//   hello
//   username
// }
// }