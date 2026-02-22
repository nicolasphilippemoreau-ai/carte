var wms_layers = [];

var format_Prairies_0 = new ol.format.GeoJSON();
var features_Prairies_0 = format_Prairies_0.readFeatures(json_Prairies_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prairies_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prairies_0.addFeatures(features_Prairies_0);
var lyr_Prairies_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prairies_0, 
                style: style_Prairies_0,
                popuplayertitle: 'Prairies',
                interactive: false,
                title: '<img src="styles/legend/Prairies_0.png" /> Prairies'
            });
var format_Haies_arbustives_1 = new ol.format.GeoJSON();
var features_Haies_arbustives_1 = format_Haies_arbustives_1.readFeatures(json_Haies_arbustives_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Haies_arbustives_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Haies_arbustives_1.addFeatures(features_Haies_arbustives_1);
var lyr_Haies_arbustives_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Haies_arbustives_1, 
                style: style_Haies_arbustives_1,
                popuplayertitle: 'Haies_arbustives',
                interactive: false,
                title: '<img src="styles/legend/Haies_arbustives_1.png" /> Haies_arbustives'
            });
var format_Pieces_deau_2 = new ol.format.GeoJSON();
var features_Pieces_deau_2 = format_Pieces_deau_2.readFeatures(json_Pieces_deau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pieces_deau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pieces_deau_2.addFeatures(features_Pieces_deau_2);
var lyr_Pieces_deau_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pieces_deau_2, 
                style: style_Pieces_deau_2,
                popuplayertitle: 'Pieces_deau',
                interactive: false,
                title: '<img src="styles/legend/Pieces_deau_2.png" /> Pieces_deau'
            });
var format_Espaces_boiss_3 = new ol.format.GeoJSON();
var features_Espaces_boiss_3 = format_Espaces_boiss_3.readFeatures(json_Espaces_boiss_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaces_boiss_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaces_boiss_3.addFeatures(features_Espaces_boiss_3);
var lyr_Espaces_boiss_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaces_boiss_3, 
                style: style_Espaces_boiss_3,
                popuplayertitle: 'Espaces_boisés',
                interactive: false,
                title: '<img src="styles/legend/Espaces_boiss_3.png" /> Espaces_boisés'
            });
var format_Rochers_4 = new ol.format.GeoJSON();
var features_Rochers_4 = format_Rochers_4.readFeatures(json_Rochers_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rochers_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rochers_4.addFeatures(features_Rochers_4);
var lyr_Rochers_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rochers_4, 
                style: style_Rochers_4,
                popuplayertitle: 'Rochers',
                interactive: false,
                title: '<img src="styles/legend/Rochers_4.png" /> Rochers'
            });
var format_Cours_d_eau_5 = new ol.format.GeoJSON();
var features_Cours_d_eau_5 = format_Cours_d_eau_5.readFeatures(json_Cours_d_eau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cours_d_eau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cours_d_eau_5.addFeatures(features_Cours_d_eau_5);
var lyr_Cours_d_eau_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cours_d_eau_5, 
                style: style_Cours_d_eau_5,
                popuplayertitle: 'Cours_d_eau',
                interactive: false,
                title: '<img src="styles/legend/Cours_d_eau_5.png" /> Cours_d_eau'
            });
var format_Haies_basses_tailles_6 = new ol.format.GeoJSON();
var features_Haies_basses_tailles_6 = format_Haies_basses_tailles_6.readFeatures(json_Haies_basses_tailles_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Haies_basses_tailles_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Haies_basses_tailles_6.addFeatures(features_Haies_basses_tailles_6);
var lyr_Haies_basses_tailles_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Haies_basses_tailles_6, 
                style: style_Haies_basses_tailles_6,
                popuplayertitle: 'Haies_basses_taillées',
                interactive: false,
                title: '<img src="styles/legend/Haies_basses_tailles_6.png" /> Haies_basses_taillées'
            });
var format_Courbes_de_niveaux_1m_7 = new ol.format.GeoJSON();
var features_Courbes_de_niveaux_1m_7 = format_Courbes_de_niveaux_1m_7.readFeatures(json_Courbes_de_niveaux_1m_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Courbes_de_niveaux_1m_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courbes_de_niveaux_1m_7.addFeatures(features_Courbes_de_niveaux_1m_7);
var lyr_Courbes_de_niveaux_1m_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Courbes_de_niveaux_1m_7, 
                style: style_Courbes_de_niveaux_1m_7,
                popuplayertitle: 'Courbes_de_niveaux_1m',
                interactive: false,
                title: '<img src="styles/legend/Courbes_de_niveaux_1m_7.png" /> Courbes_de_niveaux_1m'
            });
var format_batiments_8 = new ol.format.GeoJSON();
var features_batiments_8 = format_batiments_8.readFeatures(json_batiments_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batiments_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batiments_8.addFeatures(features_batiments_8);
var lyr_batiments_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batiments_8, 
                style: style_batiments_8,
                popuplayertitle: 'batiments',
                interactive: false,
                title: '<img src="styles/legend/batiments_8.png" /> batiments'
            });
var format_Cours_9 = new ol.format.GeoJSON();
var features_Cours_9 = format_Cours_9.readFeatures(json_Cours_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cours_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cours_9.addFeatures(features_Cours_9);
var lyr_Cours_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cours_9, 
                style: style_Cours_9,
                popuplayertitle: 'Cours',
                interactive: false,
                title: '<img src="styles/legend/Cours_9.png" /> Cours'
            });
var format_Murs_10 = new ol.format.GeoJSON();
var features_Murs_10 = format_Murs_10.readFeatures(json_Murs_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Murs_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Murs_10.addFeatures(features_Murs_10);
var lyr_Murs_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Murs_10, 
                style: style_Murs_10,
                popuplayertitle: 'Murs',
                interactive: false,
                title: '<img src="styles/legend/Murs_10.png" /> Murs'
            });
var format_Sentiers_11 = new ol.format.GeoJSON();
var features_Sentiers_11 = format_Sentiers_11.readFeatures(json_Sentiers_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentiers_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentiers_11.addFeatures(features_Sentiers_11);
var lyr_Sentiers_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentiers_11, 
                style: style_Sentiers_11,
                popuplayertitle: 'Sentiers',
                interactive: false,
                title: '<img src="styles/legend/Sentiers_11.png" /> Sentiers'
            });
var format_Chemins_agricoles_et_forestiers_12 = new ol.format.GeoJSON();
var features_Chemins_agricoles_et_forestiers_12 = format_Chemins_agricoles_et_forestiers_12.readFeatures(json_Chemins_agricoles_et_forestiers_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chemins_agricoles_et_forestiers_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chemins_agricoles_et_forestiers_12.addFeatures(features_Chemins_agricoles_et_forestiers_12);
var lyr_Chemins_agricoles_et_forestiers_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chemins_agricoles_et_forestiers_12, 
                style: style_Chemins_agricoles_et_forestiers_12,
                popuplayertitle: 'Chemins_agricoles_et_forestiers',
                interactive: false,
                title: '<img src="styles/legend/Chemins_agricoles_et_forestiers_12.png" /> Chemins_agricoles_et_forestiers'
            });
var format_Route_d_acces_13 = new ol.format.GeoJSON();
var features_Route_d_acces_13 = format_Route_d_acces_13.readFeatures(json_Route_d_acces_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_d_acces_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_d_acces_13.addFeatures(features_Route_d_acces_13);
var lyr_Route_d_acces_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_d_acces_13, 
                style: style_Route_d_acces_13,
                popuplayertitle: 'Route_d_acces',
                interactive: false,
                title: '<img src="styles/legend/Route_d_acces_13.png" /> Route_d_acces'
            });
var format_Arbresremarquables_14 = new ol.format.GeoJSON();
var features_Arbresremarquables_14 = format_Arbresremarquables_14.readFeatures(json_Arbresremarquables_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arbresremarquables_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arbresremarquables_14.addFeatures(features_Arbresremarquables_14);
var lyr_Arbresremarquables_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arbresremarquables_14, 
                style: style_Arbresremarquables_14,
                popuplayertitle: 'Arbres remarquables',
                interactive: true,
                title: '<img src="styles/legend/Arbresremarquables_14.png" /> Arbres remarquables'
            });
var format_Arbresremarquables_15 = new ol.format.GeoJSON();
var features_Arbresremarquables_15 = format_Arbresremarquables_15.readFeatures(json_Arbresremarquables_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arbresremarquables_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arbresremarquables_15.addFeatures(features_Arbresremarquables_15);
var lyr_Arbresremarquables_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arbresremarquables_15, 
                style: style_Arbresremarquables_15,
                popuplayertitle: 'Arbres remarquables',
                interactive: true,
                title: '<img src="styles/legend/Arbresremarquables_15.png" /> Arbres remarquables'
            });
var format_Photos_16 = new ol.format.GeoJSON();
var features_Photos_16 = format_Photos_16.readFeatures(json_Photos_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photos_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photos_16.addFeatures(features_Photos_16);
var lyr_Photos_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Photos_16,
maxResolution:0.963073590976289,
 
                style: style_Photos_16,
                popuplayertitle: 'Photos',
                interactive: true,
                title: '<img src="styles/legend/Photos_16.png" /> Photos'
            });
var format_Hbergements_17 = new ol.format.GeoJSON();
var features_Hbergements_17 = format_Hbergements_17.readFeatures(json_Hbergements_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hbergements_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hbergements_17.addFeatures(features_Hbergements_17);
var lyr_Hbergements_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hbergements_17, 
                style: style_Hbergements_17,
                popuplayertitle: 'Hébergements',
                interactive: true,
                title: '<img src="styles/legend/Hbergements_17.png" /> Hébergements'
            });
var group_Arbresremarquables = new ol.layer.Group({
                                layers: [lyr_Arbresremarquables_14,lyr_Arbresremarquables_15,],
                                fold: 'open',
                                title: 'Arbres remarquables'});
var group_RseauViaire = new ol.layer.Group({
                                layers: [lyr_Sentiers_11,lyr_Chemins_agricoles_et_forestiers_12,lyr_Route_d_acces_13,],
                                fold: 'open',
                                title: 'Réseau Viaire'});
var group_PLANDEGESTION = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'PLAN DE GESTION'});
var group_JeuOrientation = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Jeu Orientation'});
var group_Constructions = new ol.layer.Group({
                                layers: [lyr_batiments_8,lyr_Cours_9,lyr_Murs_10,],
                                fold: 'open',
                                title: 'Constructions'});
var group_Elmentsnaturels = new ol.layer.Group({
                                layers: [lyr_Prairies_0,lyr_Haies_arbustives_1,lyr_Pieces_deau_2,lyr_Espaces_boiss_3,lyr_Rochers_4,lyr_Cours_d_eau_5,lyr_Haies_basses_tailles_6,lyr_Courbes_de_niveaux_1m_7,],
                                fold: 'open',
                                title: 'Eléments naturels'});
var group_Couchesdetravail = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Couches de travail'});

lyr_Prairies_0.setVisible(true);lyr_Haies_arbustives_1.setVisible(true);lyr_Pieces_deau_2.setVisible(true);lyr_Espaces_boiss_3.setVisible(true);lyr_Rochers_4.setVisible(true);lyr_Cours_d_eau_5.setVisible(true);lyr_Haies_basses_tailles_6.setVisible(true);lyr_Courbes_de_niveaux_1m_7.setVisible(true);lyr_batiments_8.setVisible(true);lyr_Cours_9.setVisible(true);lyr_Murs_10.setVisible(true);lyr_Sentiers_11.setVisible(true);lyr_Chemins_agricoles_et_forestiers_12.setVisible(true);lyr_Route_d_acces_13.setVisible(true);lyr_Arbresremarquables_14.setVisible(true);lyr_Arbresremarquables_15.setVisible(true);lyr_Photos_16.setVisible(true);lyr_Hbergements_17.setVisible(true);
var layersList = [group_Elmentsnaturels,group_Constructions,group_RseauViaire,group_Arbresremarquables,lyr_Photos_16,lyr_Hbergements_17];
lyr_Prairies_0.set('fieldAliases', {'fid': 'fid', });
lyr_Haies_arbustives_1.set('fieldAliases', {'fid': 'fid', });
lyr_Pieces_deau_2.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'Surface': 'Surface', });
lyr_Espaces_boiss_3.set('fieldAliases', {'fid': 'fid', });
lyr_Rochers_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_Cours_d_eau_5.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', });
lyr_Haies_basses_tailles_6.set('fieldAliases', {'fid': 'fid', });
lyr_Courbes_de_niveaux_1m_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ALTITUDE': 'ALTITUDE', });
lyr_batiments_8.set('fieldAliases', {'fid': 'fid', 'gpkg_fid': 'gpkg_fid', 'Nom': 'Nom', });
lyr_Cours_9.set('fieldAliases', {'fid': 'fid', });
lyr_Murs_10.set('fieldAliases', {'fid': 'fid', });
lyr_Sentiers_11.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', });
lyr_Chemins_agricoles_et_forestiers_12.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', });
lyr_Route_d_acces_13.set('fieldAliases', {'fid': 'fid', });
lyr_Arbresremarquables_14.set('fieldAliases', {'fid': 'fid', 'Nom_usuel': 'Nom_usuel', 'Essence': 'Essence', 'Age': 'Age', 'hauteur': 'hauteur', 'Circonférence': 'Circonférence', 'Photo': 'Photo', });
lyr_Arbresremarquables_15.set('fieldAliases', {'fid': 'fid', 'nom_usuel': 'nom_usuel', 'essence': 'essence', 'âge': 'âge', 'hauteur': 'hauteur', 'circonférence': 'circonférence', 'photo': 'photo', });
lyr_Photos_16.set('fieldAliases', {'fid': 'fid', 'Image': 'Image', });
lyr_Hbergements_17.set('fieldAliases', {'fid': 'fid', 'nom_gite': 'nom_gite', 'Photo': 'Photo', });
lyr_Prairies_0.set('fieldImages', {'fid': 'TextEdit', });
lyr_Haies_arbustives_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_Pieces_deau_2.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', 'Surface': 'TextEdit', });
lyr_Espaces_boiss_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_Rochers_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_Cours_d_eau_5.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Haies_basses_tailles_6.set('fieldImages', {'fid': 'TextEdit', });
lyr_Courbes_de_niveaux_1m_7.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ALTITUDE': 'TextEdit', });
lyr_batiments_8.set('fieldImages', {'fid': 'TextEdit', 'gpkg_fid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Cours_9.set('fieldImages', {'fid': 'TextEdit', });
lyr_Murs_10.set('fieldImages', {'fid': 'TextEdit', });
lyr_Sentiers_11.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Chemins_agricoles_et_forestiers_12.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Route_d_acces_13.set('fieldImages', {'fid': 'TextEdit', });
lyr_Arbresremarquables_14.set('fieldImages', {'fid': 'TextEdit', 'Nom_usuel': 'TextEdit', 'Essence': 'TextEdit', 'Age': 'Range', 'hauteur': 'Range', 'Circonférence': 'Range', 'Photo': 'ExternalResource', });
lyr_Arbresremarquables_15.set('fieldImages', {'fid': 'TextEdit', 'nom_usuel': 'TextEdit', 'essence': 'TextEdit', 'âge': 'Range', 'hauteur': 'Range', 'circonférence': 'Range', 'photo': 'ExternalResource', });
lyr_Photos_16.set('fieldImages', {'fid': 'TextEdit', 'Image': 'ExternalResource', });
lyr_Hbergements_17.set('fieldImages', {'fid': 'TextEdit', 'nom_gite': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_Prairies_0.set('fieldLabels', {'fid': 'no label', });
lyr_Haies_arbustives_1.set('fieldLabels', {'fid': 'no label', });
lyr_Pieces_deau_2.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', 'Surface': 'no label', });
lyr_Espaces_boiss_3.set('fieldLabels', {'fid': 'no label', });
lyr_Rochers_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Cours_d_eau_5.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', });
lyr_Haies_basses_tailles_6.set('fieldLabels', {'fid': 'no label', });
lyr_Courbes_de_niveaux_1m_7.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ALTITUDE': 'no label', });
lyr_batiments_8.set('fieldLabels', {'fid': 'no label', 'gpkg_fid': 'no label', 'Nom': 'no label', });
lyr_Cours_9.set('fieldLabels', {'fid': 'no label', });
lyr_Murs_10.set('fieldLabels', {'fid': 'no label', });
lyr_Sentiers_11.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', });
lyr_Chemins_agricoles_et_forestiers_12.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', });
lyr_Route_d_acces_13.set('fieldLabels', {'fid': 'no label', });
lyr_Arbresremarquables_14.set('fieldLabels', {'fid': 'hidden field', 'Nom_usuel': 'no label', 'Essence': 'no label', 'Age': 'inline label - always visible', 'hauteur': 'inline label - always visible', 'Circonférence': 'inline label - always visible', 'Photo': 'no label', });
lyr_Arbresremarquables_15.set('fieldLabels', {'fid': 'hidden field', 'nom_usuel': 'no label', 'essence': 'no label', 'âge': 'inline label - always visible', 'hauteur': 'inline label - always visible', 'circonférence': 'inline label - always visible', 'photo': 'no label', });
lyr_Photos_16.set('fieldLabels', {'fid': 'hidden field', 'Image': 'no label', });
lyr_Hbergements_17.set('fieldLabels', {'fid': 'hidden field', 'nom_gite': 'no label', 'Photo': 'no label', });
lyr_Hbergements_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});