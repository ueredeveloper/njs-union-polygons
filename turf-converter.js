function convertToGeoJSON(data) {
  const geojson = {
    type: 'FeatureCollection',
    features: [],
  };

  data.forEach((item) => {
    const feature = {
      type: 'Feature',
      properties: item.attributes,
      geometry: {
        type: 'Polygon',
        coordinates: [item.geometry.rings],
      },
    };

    geojson.features.push(feature);
  });

  return geojson;
}

module.exports = {convertToGeoJSON}
