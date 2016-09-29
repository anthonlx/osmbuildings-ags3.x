/**
 *
 * @copyright (c)2016, Smart Origin SARL
 * @license
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
define([
  "esri/map",
  "osmb-so/OSMBuildingsLayerForArcGIS",
  "esri/layers/VectorTileLayer",
  "dojo/domReady!"
], function (Map, OSMBuildingsLayerForArcGIS, VectorTileLayer)
{
  try
  {
    //Create map
    var map = new Map("map-area", {
      center: [2.1233095, 48.8026876],//[2.339,48.857],//[5.72909, 45.18968],
      zoom  : 20
    });


    //Add basemap
    var vtl = new VectorTileLayer("https://www.arcgis.com/sharing/rest/content/items/dcbbba0edf094eaa81af19298b9c6247/resources/styles/root.json");

    map.addLayer(vtl);
    vtl.on('load', function ()
    {
      map.addLayer(new OSMBuildingsLayerForArcGIS(null, {minZoom: 16}));
    });

  }
  catch (error)
  {
    console.error('[Main] Unable to add OSMBuildings layer', error);
  }

});
