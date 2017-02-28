var {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'dataset',
  fields: () => {
    return {
      id: {
        type: GraphQLID,
      },
      owner: {
        type: GraphQLString,
      },
      name: {
        type: GraphQLString,
      },
      description: {
        type: GraphQLString,
      },
      created: {
        type: GraphQLString,
      },
      modified: {
        type: GraphQLString,
      }
    }
  }
})
