console.log("ye");
mapboxgl.accessToken = 'pk.eyJ1IjoibWFkZWxlaW5lam9oYW5zb24iLCJhIjoiY2lzczduYzJ4MDZrODJucGh0Mm1xbmVxNCJ9.i7q4iT8FFgh_y5v4we5UhQ';
var map = new mapboxgl.Map({
    style: 'mapbox://styles/nazmulkhan/cj9o2355m3zee2sno482rpchg',
    center: [151.2090, -33.8752],

    // homebush [151.08223, -33.8680],
    // sydney pier [151.2056, -33.8572],
    zoom: 14.5,
    pitch: 45,
    bearing: -45,
    container: 'map'
});

//LOAD GEOJSON
map.on('load', function() {
    map.addSource('BelugaGen_HobSunFsr', {
                    'type': 'geojson',
                    'data': './GeoJSON/BelugaGen_HobSunFsr.geojson'
                })


//ADD LAYER TO MAP
    map.addLayer({
        "id": "buildingEnvelopes",
        "type": "fill-extrusion",
        "source": "BelugaGen_HobSunFsr",
        'layout': {
            'visibility': 'visible'
            },
        'paint': {
                'fill-extrusion-color' : {
                    'property': 'colour',
                    'type': 'identity'
                },
                'fill-extrusion-height' : {
                    'type': 'identity',
                    'property': 'height'
                },
                'fill-extrusion-base' : {
                    'type': 'identity',
                    'property': 'base_height'
                },
                 'fill-extrusion-opacity': .5
            }
    });

//LIST OF LayerIDs and Display Text
var toggleableLayerIds = ['buildingEnvelopes'];
var toggleableLayerText = ['envelopes'];

//TOGGLE
for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];
    var idText= toggleableLayerText[i];
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = idText;
    link.textId = id;

    link.onclick = function (e) {
        var clickedLayer = this.textId;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}




});