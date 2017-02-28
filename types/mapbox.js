var {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql')

var CarmenType = require('./carmen')
var DatasetType = require('./dataset')
var MapboxClient = require('mapbox')

/*
query {
  geocodeForward(location: "Chester, NJ", mapbox_id: "pk.eyJ1Ijoiam9vdHNlODQiLCJhIjoiY2lrandjOTFyMDh5bHUybTZsMnQzZGhzYiJ9.v4EUTBiszBVhvt1wNek2DQ") {
    features{
      id
      geometry {
        coordinates
      }
    }
    attribution
  }
  createDataset(name:"n1", description:"dq", mapbox_id: "pk.eyJ1Ijoiam9vdHNlODQiLCJhIjoiY2lrandjOTFyMDh5bHUybTZsMnQzZGhzYiJ9.v4EUTBiszBVhvt1wNek2DQ") {
    name
    owner
  }
}
*/

module.exports = new GraphQLObjectType({
  name: 'mapbox',
  fields: () => {
    return {
      geocodeForward: {
        type: new GraphQLNonNull(CarmenType),
        args: {
          mapbox_id: {
            type: GraphQLString
          },
          location: {
            type: GraphQLString
          }
        },
        resolve: (_, { mapbox_id, location }) => {
          return new Promise((resolve, reject) => {
            new MapboxClient(mapbox_id).geocodeForward(location, (err, res) => resolve(res))
          })
        }
      },
      createDataset: {
        type: new GraphQLNonNull(DatasetType),
        args: {
          mapbox_id: {
            type: GraphQLString
          },
          name: {
            type: GraphQLString
          },
          description: {
            type: GraphQLString
          }
        },
        resolve: (_, { mapbox_id, name, description }) => {
          var options = { name, description }
          return new Promise((resolve, reject) => {
            new MapboxClient(mapbox_id).createDataset(options, (err, dataset) => { console.log(err); resolve(dataset); })
          })
        }
      }
    }
  }
})
