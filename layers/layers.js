var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_bbnpaline_1 = new ol.format.GeoJSON();
var features_bbnpaline_1 = format_bbnpaline_1.readFeatures(json_bbnpaline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bbnpaline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bbnpaline_1.addFeatures(features_bbnpaline_1);
var lyr_bbnpaline_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bbnpaline_1, 
                style: style_bbnpaline_1,
                interactive: true,
                title: '<img src="styles/legend/bbnpaline_1.png" /> bbnpaline'
            });
var format_ancient_notable_and_veteran_trees_2 = new ol.format.GeoJSON();
var features_ancient_notable_and_veteran_trees_2 = format_ancient_notable_and_veteran_trees_2.readFeatures(json_ancient_notable_and_veteran_trees_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ancient_notable_and_veteran_trees_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ancient_notable_and_veteran_trees_2.addFeatures(features_ancient_notable_and_veteran_trees_2);
var lyr_ancient_notable_and_veteran_trees_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ancient_notable_and_veteran_trees_2, 
                style: style_ancient_notable_and_veteran_trees_2,
                interactive: true,
    title: 'ancient_notable_and_veteran_trees<br />\
    <img src="styles/legend/ancient_notable_and_veteran_trees_2_0.png" /> ancient<br />\
    <img src="styles/legend/ancient_notable_and_veteran_trees_2_1.png" /> notable<br />\
    <img src="styles/legend/ancient_notable_and_veteran_trees_2_2.png" /> veteran<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_bbnpaline_1.setVisible(true);lyr_ancient_notable_and_veteran_trees_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_bbnpaline_1,lyr_ancient_notable_and_veteran_trees_2];
lyr_bbnpaline_1.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'name': 'name', 'welshname': 'welshname', 'designatio': 'designatio', 'variation_': 'variation_', 'hectares': 'hectares', 'edit_date': 'edit_date', });
lyr_ancient_notable_and_veteran_trees_2.set('fieldAliases', {'fid': 'fid', 'data_location_repeat_name': 'data_location_repeat_name', 'data_location_repeat_date_time': 'data_location_repeat_date_time', 'data_location_repeat_geopoint': 'data_location_repeat_geopoint', 'data_location_repeat_geopoint_altitude': 'data_location_repeat_geopoint_altitude', 'data_location_repeat_geopoint_accuracy': 'data_location_repeat_geopoint_accuracy', 'data_location_repeat_bearing_widget': 'data_location_repeat_bearing_widget', 'data_location_repeat_tree_species': 'data_location_repeat_tree_species', 'data_location_repeat_note': 'data_location_repeat_note', 'data_location_repeat_girth': 'data_location_repeat_girth', 'data_location_repeat_girth_class': 'data_location_repeat_girth_class', 'data_location_repeat_public_private': 'data_location_repeat_public_private', 'data_location_repeat_take_photo': 'data_location_repeat_take_photo', 'parent_key': 'parent_key', 'key': 'key', '_coordsys': '_coordsys', 'data_name': 'data_name', 'data_start_new_survey': 'data_start_new_survey', 'data_location_repeat': 'data_location_repeat', 'data_meta_instanceid': 'data_meta_instanceid', '_list{}': '_list{}', 'latitude': 'latitude', 'longitude': 'longitude', 'fme_rejection_code': 'fme_rejection_code', '_units': '_units', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_bbnpaline_1.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'name': 'TextEdit', 'welshname': 'TextEdit', 'designatio': 'TextEdit', 'variation_': 'TextEdit', 'hectares': 'TextEdit', 'edit_date': 'DateTime', });
lyr_ancient_notable_and_veteran_trees_2.set('fieldImages', {'fid': 'TextEdit', 'data_location_repeat_name': 'TextEdit', 'data_location_repeat_date_time': 'TextEdit', 'data_location_repeat_geopoint': 'TextEdit', 'data_location_repeat_geopoint_altitude': 'TextEdit', 'data_location_repeat_geopoint_accuracy': 'TextEdit', 'data_location_repeat_bearing_widget': 'TextEdit', 'data_location_repeat_tree_species': 'TextEdit', 'data_location_repeat_note': 'TextEdit', 'data_location_repeat_girth': 'TextEdit', 'data_location_repeat_girth_class': 'TextEdit', 'data_location_repeat_public_private': 'TextEdit', 'data_location_repeat_take_photo': 'TextEdit', 'parent_key': 'TextEdit', 'key': 'TextEdit', '_coordsys': 'TextEdit', 'data_name': 'TextEdit', 'data_start_new_survey': 'TextEdit', 'data_location_repeat': 'TextEdit', 'data_meta_instanceid': 'TextEdit', '_list{}': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'fme_rejection_code': 'TextEdit', '_units': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_bbnpaline_1.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'name': 'no label', 'welshname': 'no label', 'designatio': 'no label', 'variation_': 'no label', 'hectares': 'no label', 'edit_date': 'no label', });
lyr_ancient_notable_and_veteran_trees_2.set('fieldLabels', {'fid': 'no label', 'data_location_repeat_name': 'no label', 'data_location_repeat_date_time': 'no label', 'data_location_repeat_geopoint': 'no label', 'data_location_repeat_geopoint_altitude': 'no label', 'data_location_repeat_geopoint_accuracy': 'no label', 'data_location_repeat_bearing_widget': 'no label', 'data_location_repeat_tree_species': 'no label', 'data_location_repeat_note': 'no label', 'data_location_repeat_girth': 'no label', 'data_location_repeat_girth_class': 'no label', 'data_location_repeat_public_private': 'no label', 'data_location_repeat_take_photo': 'no label', 'parent_key': 'no label', 'key': 'no label', '_coordsys': 'no label', 'data_name': 'no label', 'data_start_new_survey': 'no label', 'data_location_repeat': 'no label', 'data_meta_instanceid': 'no label', '_list{}': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'fme_rejection_code': 'no label', '_units': 'no label', 'Easting': 'no label', 'Northing': 'no label', });
lyr_ancient_notable_and_veteran_trees_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});