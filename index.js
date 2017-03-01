var ol = require('openlayers');
var net = require('net');
var HOST = 'pettinichi.com/openlayers-test/';
var PORT = 3001;


var latitude = 39.772954;
var longitude = -84.065299;

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