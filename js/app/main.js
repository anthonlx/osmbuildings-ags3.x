/**
 * Created by tony on 16/12/2015.
 */
define([
         "dojo/has!esri-3x?esri/map:esri/Map",
         "osmb-so/OSMBuildingsLayerForArcGIS",
         "esri/layers/VectorTileLayer",
         "dojo/domReady!"
       ], function (
  Map, OSMBuildingsLayerForArcGIS, VectorTileLayer
) {
  var map = new Map("map-area", {
    basemap: "streets",
    center: [5.72909, 45.18968],
    zoom:20
  });
  //map.addLayer(new VectorTileLayer("http://basemaps.arcgis.com/arcgis/rest/services/World_Basemap/VectorTileServer"));
  map.on('load', function() {
    try
    {
      map.addLayer(new OSMBuildingsLayerForArcGIS());
    }
    catch(error)
    {
      console.error('Unable to add OSMBuildings layer', error);
    }

  });
});
