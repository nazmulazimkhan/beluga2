# UrbanCoDe
UrbanCoDe can be used as a visualiser for GeoJSON files produced by the Grasshopper plugin Humpback. We use the Mapbox GL JS API to extract information embedded within the GeoJSON to render and manipulate the geometry within the server. 
To work with this website, your GeoJSON will need to use the following keys: 

	height
    base_height
    colour 
    layer
    tag
When different buildings are in different layers, we can toggle the visibility on and off. This allows easy representation, showing multiple map configurations to clients, layers of building, etc <br>
Next, using the tag property from the GeoJSON file, we can extract the text describing aspects of the building and place them in a pop up when a certain area is clicked. Toggle the layer visability off and on for this feature to work.<br>
Please note that the keys are case sensitive.<br>
#### Links
Download Humpback for Grasshopper here: http://www.food4rhino.com/app/humpback <br>
Humpback Repo: https://github.com/madeleinejohanson/Humpback
