var {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'context',
  fields: () => {
    return {
      id: {
        type: GraphQLID,
      },
      text: {
        type: GraphQLString,
      }
    }
  }
})
