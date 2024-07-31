var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MX1_MX2_MX4_V66_1 = new ol.format.GeoJSON();
var features_MX1_MX2_MX4_V66_1 = format_MX1_MX2_MX4_V66_1.readFeatures(json_MX1_MX2_MX4_V66_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MX1_MX2_MX4_V66_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MX1_MX2_MX4_V66_1.addFeatures(features_MX1_MX2_MX4_V66_1);
var lyr_MX1_MX2_MX4_V66_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MX1_MX2_MX4_V66_1, 
                style: style_MX1_MX2_MX4_V66_1,
                interactive: true,
    title: 'MX1_MX2_MX4_V66<br />\
    <img src="styles/legend/MX1_MX2_MX4_V66_1_0.png" /> MX1<br />\
    <img src="styles/legend/MX1_MX2_MX4_V66_1_1.png" /> MX2<br />\
    <img src="styles/legend/MX1_MX2_MX4_V66_1_2.png" /> MX4<br />\
    <img src="styles/legend/MX1_MX2_MX4_V66_1_3.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_MX1_MX2_MX4_V66_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MX1_MX2_MX4_V66_1];
lyr_MX1_MX2_MX4_V66_1.set('fieldAliases', {'locality': 'locality', 'zonificacion': 'zonificacion', 'station_code': 'station_code', 'station_name': 'station_name', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'cluster_diferenciado': 'cluster_diferenciado', });
lyr_MX1_MX2_MX4_V66_1.set('fieldImages', {'locality': 'TextEdit', 'zonificacion': 'TextEdit', 'station_code': 'TextEdit', 'station_name': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'cluster_diferenciado': 'TextEdit', });
lyr_MX1_MX2_MX4_V66_1.set('fieldLabels', {'locality': 'header label', 'zonificacion': 'header label', 'station_code': 'header label', 'station_name': 'header label', 'coverage_type': 'header label', 'cobertura_diferenciada': 'header label', 'cluster_diferenciado': 'header label', });
lyr_MX1_MX2_MX4_V66_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});