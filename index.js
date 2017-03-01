var ol = require('openlayers');

var map = new ol.Map({
	target: 'map',
	layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM()
	  })
	],
	view: new ol.View({
		center: [latitude, longitude],
		zoom: 4
	})
});
var starship = new ol.Overlay({
	element: document.getElementById('enterprise'),
	offset: [-200,-200]
});
map.addOverlay(starship);
starship.setPosition([latitude, longitude]);

map.on('click', function(event){
	var coords = event.coordinate;
	starship.setPosition(coords);
});