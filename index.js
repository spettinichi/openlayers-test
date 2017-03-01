var ol = require('openlayers');

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