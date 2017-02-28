var {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} = require('graphql')

var FeatureType = require('./feature')

// following carmen geojson
// https://github.com/mapbox/carmen/blob/master/carmen-geojson.md

module.exports = new GraphQLObjectType({
  name: 'carmen',
  fields: () => {
    return {
      type: {
        type: GraphQLString
      },
      query: {
        type: new GraphQLList(GraphQLString)
      },
      features: {
        type: new GraphQLList(FeatureType)
      },
      attribution: {
        type: GraphQLString
      }
    }
  }
})
