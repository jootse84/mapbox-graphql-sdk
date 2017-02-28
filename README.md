# A GraphQL wrapper for the Mapbox SDK JS

**DEMO**: https://damp-badlands-23673.herokuapp.com/

A client-side GraphQL wrapper for the [Mapbox SDK JS api](https://github.com/mapbox/mapbox-sdk-js/blob/master/API.md)

## geocodeForward

[more here](https://github.com/mapbox/mapbox-sdk-js/blob/master/API.md#geocodeforward)

Query examples for location + bounding box + proximity.

```
query {
  geocodeForward(location: "Chester, NJ", mapbox_id: "YOUR_MAPBOX_ID") {
    features{
      id
      geometry {
        coordinates
      }
    }
    attribution
  }
}
```

```
query {
  geocodeForward(location: "Starbucks", bbox: "[-77.083056,38.908611,-76.997778,38.959167]", mapbox_id: "YOUR_MAPBOX_ID") {
    features {
      id
      geometry {
        coordinates
      }
    }
    attribution
  }
}
```

```
query {
  geocodeForward(location: "Paris, France", latitude: 33.6875431, longitude: -95.4431142, mapbox_id: "YOUR_MAPBOX_ID") {
    features {
      id
      geometry {
        coordinates
      }
    }
    attribution
  }
}
```
