var {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
  GraphQLList
} = require('graphql')

var PropertyType = require('./property')
var GeometryType = require('./geometry')
var ContextType = require('./context')

module.exports = new GraphQLObjectType({
  name: 'feature',
  fields: () => {
    return {
      type: {
        type: GraphQLString
      },
      id: {
        type: GraphQLID
      },
      text: {
        type: GraphQLString
      },
      place_name: {
        type: GraphQLString
      },
      place_type: {
        type: new GraphQLList(GraphQLString)
      },
      bbox: {
        type: new GraphQLList(GraphQLFloat)
      },
      center: {
        type: new GraphQLList(GraphQLFloat)
      },
      geometry: {
        type: GeometryType
      },
      properties: {
        type: PropertyType
      },
      context: {
        type: new GraphQLList(ContextType)
      }
    }
  }
})
