var {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'property',
  fields: () => {
    return {
      title: {
        type: GraphQLString,
      },
      type: {
        type: GraphQLString,
      },
      score: {
        type: GraphQLFloat,
      }
    }
  }
})
