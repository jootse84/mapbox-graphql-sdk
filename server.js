var express = require('express')
var graphqlHTTP = require('express-graphql')
var { GraphQLSchema } = require('graphql')
var MapboxAPIType = require('./mapbox')

var app = express()

app.set('port', (process.env.PORT || 5000))
app.use('/', graphqlHTTP({
  schema: new GraphQLSchema({
    query: MapboxAPIType
  }),
  graphiql: true,
}))

app.listen(app.get('port'), function() {
  console.log('Server is running on port', app.get('port'));
})
