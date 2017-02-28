var MapboxClient = require('mapbox')

var handleError = (resolve, reject) => {
  return (err) => {
    if (!err) resolve({ ok: 1 })
  }
}

module.exports = {
  geocodeForward: (mapbox_id, location, obj) => {
    return new Promise((resolve, reject) => {
      var client = new MapboxClient(mapbox_id) 
      if (obj) {
        client.geocodeForward(location, obj, (err, geo) => resolve(geo))
      } else {
        client.geocodeForward(location, (err, geo) => resolve(geo))
      }
    })
  },
  createDataset: (mapbox_id, options) => {
    return new Promise((resolve, reject) => {
      new MapboxClient(mapbox_id).createDataset(options, (err, dataset) => resolve(dataset))
    })
  },
  deleteDataset: (mapbox_id, dataset_id) => {
    return new Promise((resolve, reject) => {
      new MapboxClient(mapbox_id).deleteDataset(dataset_id, handleError(resolve, reject))
    })
  },
  deleteFeature: (mapbox_id, id) => {
    return new Promise((resolve, reject) => {
      new MapboxClient(mapbox_id).deleteDataset(dataset_id, handleError(resolve, reject))
    })
  },
  insertFeature: (mapbox_id, id, feature) => {
    return new Promise((resolve, reject) => {
      new MapboxClient(mapbox_id).insertFeature(dataset_id, (err, feature) => resolve(feature))
    })
  }
}
