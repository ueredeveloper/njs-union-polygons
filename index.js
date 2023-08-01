const turf = require('@turf/turf');
const fs = require('fs');
const {
    convertToGeoJSON
} = require('./turf-converter.js')

// Read the polygons from the "polygons.json" file
fs.readFile('polygons.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        // Parse the JSON data from the file
        const polygons = JSON.parse(data);

      console.log(polygons.length)

        const geojsonResult = convertToGeoJSON(polygons);
      
        // Perform the union operation on all the polygons
        const unionedPolygon = turf.union(...geojsonResult.features.map(feature => feature.geometry));

        // Print the resulting unioned polygon
        console.log(unionedPolygon.geometry.coordinates.length);

    } catch (error) {
        console.error('Error parsing JSON:', error);
    }

}); // fim fs read