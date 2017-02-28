var {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLList
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'geometry',
  fields: function () {
    return {
      type: {
        type: GraphQLString,
      },
      coordinates: {
        type: new GraphQLList(GraphQLFloat),
      }
    }
  }
})
