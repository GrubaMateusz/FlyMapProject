function initOpenStreetMap() {

    const map = new OpenLayers.Map("map");
    const mapnik         = new OpenLayers.Layer.OSM();
    const fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
    const toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
    const position = new OpenLayers.LonLat(positionOfZielonaGora.lng,positionOfZielonaGora.lat).transform(fromProjection, toProjection);
    const zoom           = 10;

    map.addLayer(mapnik);
    map.setCenter(position, zoom );
}