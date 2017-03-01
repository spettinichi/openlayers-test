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