<div style="text-align:center;">

	<img src="http://smart-origin.com/images/so_logo_or_seul.png" height="73px">

</div>

# OSM Buildings for ArcGIS by Smart / Origin


This sample repository demonstrate the usage of OSM Buildings forked repo into an ArcGIS for JavaScript environment.

Feel free to contact us for details and informations (usage, bugs, etc) at contact[at]smart-origin.com or via github.


## Documentation

To make it work, you have to follow a few steps

1- install dependencies using bower : 

    bower install
    npm install
    
2- build osmbuildings S/O extension :
    
    cd js/osmbuildings-smartorigin
    git checkout origin/so/arcgis
    npm install
    cd build
    . build.sh
    
3- start using it in debug mode :
    
    cd ../..
    grunt serve
    
    
4- build it in release ?
    
    grunt build

## Contact

For any question or feedbacks, please contact us at contact[at]smart-origin.com or visit www.smart-origin.com 
