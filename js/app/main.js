/**
 * Created by tony on 16/12/2015.
 *
 * @copyright (c)2015, Smart Origin SARL
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
         "dojo/domReady!"
       ], function (
  Map, OSMBuildingsLayerForArcGIS
)
{
  //Create map
  var map = new Map("map-area", {
    basemap: "streets",
    center: [5.72909, 45.18968],
    zoom:20
  });
  //Add layer OSMBuildings when map load
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
