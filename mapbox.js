var {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLFloat
} = require('graphql')

var CarmenType = require('./types/carmen')
var DatasetType = require('./types/dataset')
var API = require('./mapbox-sdk-js/api.js')

module.exports = new GraphQLObjectType({
  name: 'mapbox',
  fields: () => {
    return {
      geocodeForward: {
        type: new GraphQLNonNull(CarmenType),
        args: {
          mapbox_id: {
            type: new GraphQLNonNull(GraphQLString)
          },
          location: {
            type: new GraphQLNonNull(GraphQLString)
          },
          latitude: {
            type: GraphQLFloat
          },
          longitude: {
            type: GraphQLFloat
          },
          bbox: {
            type: GraphQLString
          }
        },
        resolve: (_, { mapbox_id, location, bbox, latitude, longitude }) => {
          if (bbox) {
            return API.geocodeForward(mapbox_id, location, { bbox: JSON.parse(bbox) })
          }
          else if (latitude && longitude) {
            var proximity = { latitude, longitude }
            return API.geocodeForward(mapbox_id, location, proximity)
          }
          return API.geocodeForward(mapbox_id, location)
        }
      }
    }
  }
})
