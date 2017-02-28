var express = require('express')
var graphqlHTTP = require('express-graphql')
var { GraphQLSchema } = require('graphql')
var MapboxAPIType = require('./mapbox')

var app = express()
app.use('/mapbox', graphqlHTTP({
  schema: new GraphQLSchema({
    query: MapboxAPIType
  }),
  graphiql: true,
}))

app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/mapbox')
