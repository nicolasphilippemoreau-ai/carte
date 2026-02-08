var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Prairies_1 = new ol.format.GeoJSON();
var features_Prairies_1 = format_Prairies_1.readFeatures(json_Prairies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prairies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prairies_1.addFeatures(features_Prairies_1);
var lyr_Prairies_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prairies_1, 
                style: style_Prairies_1,
                popuplayertitle: 'Prairies',
                interactive: false,
                title: '<img src="styles/legend/Prairies_1.png" /> Prairies'
            });
var format_Etangs_2 = new ol.format.GeoJSON();
var features_Etangs_2 = format_Etangs_2.readFeatures(json_Etangs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etangs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etangs_2.addFeatures(features_Etangs_2);
var lyr_Etangs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Etangs_2, 
                style: style_Etangs_2,
                popuplayertitle: 'Etangs',
                interactive: false,
                title: '<img src="styles/legend/Etangs_2.png" /> Etangs'
            });
var format_Haies_arbustives_3 = new ol.format.GeoJSON();
var features_Haies_arbustives_3 = format_Haies_arbustives_3.readFeatures(json_Haies_arbustives_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Haies_arbustives_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Haies_arbustives_3.addFeatures(features_Haies_arbustives_3);
var lyr_Haies_arbustives_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Haies_arbustives_3, 
                style: style_Haies_arbustives_3,
                popuplayertitle: 'Haies_arbustives',
                interactive: false,
                title: '<img src="styles/legend/Haies_arbustives_3.png" /> Haies_arbustives'
            });
var format_Espaces_boiss_4 = new ol.format.GeoJSON();
var features_Espaces_boiss_4 = format_Espaces_boiss_4.readFeatures(json_Espaces_boiss_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaces_boiss_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaces_boiss_4.addFeatures(features_Espaces_boiss_4);
var lyr_Espaces_boiss_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaces_boiss_4, 
                style: style_Espaces_boiss_4,
                popuplayertitle: 'Espaces_boisés',
                interactive: false,
                title: '<img src="styles/legend/Espaces_boiss_4.png" /> Espaces_boisés'
            });
var format_Rochers_5 = new ol.format.GeoJSON();
var features_Rochers_5 = format_Rochers_5.readFeatures(json_Rochers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rochers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rochers_5.addFeatures(features_Rochers_5);
var lyr_Rochers_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rochers_5, 
                style: style_Rochers_5,
                popuplayertitle: 'Rochers',
                interactive: false,
                title: '<img src="styles/legend/Rochers_5.png" /> Rochers'
            });
var format_Cours_d_eau_6 = new ol.format.GeoJSON();
var features_Cours_d_eau_6 = format_Cours_d_eau_6.readFeatures(json_Cours_d_eau_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cours_d_eau_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cours_d_eau_6.addFeatures(features_Cours_d_eau_6);
var lyr_Cours_d_eau_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cours_d_eau_6, 
                style: style_Cours_d_eau_6,
                popuplayertitle: 'Cours_d_eau',
                interactive: false,
                title: '<img src="styles/legend/Cours_d_eau_6.png" /> Cours_d_eau'
            });
var format_Haies_basses_tailles_7 = new ol.format.GeoJSON();
var features_Haies_basses_tailles_7 = format_Haies_basses_tailles_7.readFeatures(json_Haies_basses_tailles_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Haies_basses_tailles_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Haies_basses_tailles_7.addFeatures(features_Haies_basses_tailles_7);
var lyr_Haies_basses_tailles_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Haies_basses_tailles_7, 
                style: style_Haies_basses_tailles_7,
                popuplayertitle: 'Haies_basses_taillées',
                interactive: false,
                title: '<img src="styles/legend/Haies_basses_tailles_7.png" /> Haies_basses_taillées'
            });
var format_Courbes_de_niveaux_1m_8 = new ol.format.GeoJSON();
var features_Courbes_de_niveaux_1m_8 = format_Courbes_de_niveaux_1m_8.readFeatures(json_Courbes_de_niveaux_1m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Courbes_de_niveaux_1m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courbes_de_niveaux_1m_8.addFeatures(features_Courbes_de_niveaux_1m_8);
var lyr_Courbes_de_niveaux_1m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Courbes_de_niveaux_1m_8, 
                style: style_Courbes_de_niveaux_1m_8,
                popuplayertitle: 'Courbes_de_niveaux_1m',
                interactive: false,
                title: '<img src="styles/legend/Courbes_de_niveaux_1m_8.png" /> Courbes_de_niveaux_1m'
            });
var format_batiments_9 = new ol.format.GeoJSON();
var features_batiments_9 = format_batiments_9.readFeatures(json_batiments_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batiments_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batiments_9.addFeatures(features_batiments_9);
var lyr_batiments_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batiments_9, 
                style: style_batiments_9,
                popuplayertitle: 'batiments',
                interactive: false,
                title: '<img src="styles/legend/batiments_9.png" /> batiments'
            });
var format_Cours_10 = new ol.format.GeoJSON();
var features_Cours_10 = format_Cours_10.readFeatures(json_Cours_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cours_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cours_10.addFeatures(features_Cours_10);
var lyr_Cours_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cours_10, 
                style: style_Cours_10,
                popuplayertitle: 'Cours',
                interactive: false,
                title: '<img src="styles/legend/Cours_10.png" /> Cours'
            });
var format_Murs_11 = new ol.format.GeoJSON();
var features_Murs_11 = format_Murs_11.readFeatures(json_Murs_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Murs_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Murs_11.addFeatures(features_Murs_11);
var lyr_Murs_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Murs_11, 
                style: style_Murs_11,
                popuplayertitle: 'Murs',
                interactive: false,
                title: '<img src="styles/legend/Murs_11.png" /> Murs'
            });
var format_Sentiers_12 = new ol.format.GeoJSON();
var features_Sentiers_12 = format_Sentiers_12.readFeatures(json_Sentiers_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentiers_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentiers_12.addFeatures(features_Sentiers_12);
var lyr_Sentiers_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentiers_12, 
                style: style_Sentiers_12,
                popuplayertitle: 'Sentiers',
                interactive: false,
                title: '<img src="styles/legend/Sentiers_12.png" /> Sentiers'
            });
var format_Chemins_agricoles_et_forestiers_13 = new ol.format.GeoJSON();
var features_Chemins_agricoles_et_forestiers_13 = format_Chemins_agricoles_et_forestiers_13.readFeatures(json_Chemins_agricoles_et_forestiers_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chemins_agricoles_et_forestiers_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chemins_agricoles_et_forestiers_13.addFeatures(features_Chemins_agricoles_et_forestiers_13);
var lyr_Chemins_agricoles_et_forestiers_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chemins_agricoles_et_forestiers_13, 
                style: style_Chemins_agricoles_et_forestiers_13,
                popuplayertitle: 'Chemins_agricoles_et_forestiers',
                interactive: false,
                title: '<img src="styles/legend/Chemins_agricoles_et_forestiers_13.png" /> Chemins_agricoles_et_forestiers'
            });
var format_Route_d_acces_14 = new ol.format.GeoJSON();
var features_Route_d_acces_14 = format_Route_d_acces_14.readFeatures(json_Route_d_acces_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_d_acces_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_d_acces_14.addFeatures(features_Route_d_acces_14);
var lyr_Route_d_acces_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_d_acces_14, 
                style: style_Route_d_acces_14,
                popuplayertitle: 'Route_d_acces',
                interactive: false,
                title: '<img src="styles/legend/Route_d_acces_14.png" /> Route_d_acces'
            });
var format_Arbres_remarquables_15 = new ol.format.GeoJSON();
var features_Arbres_remarquables_15 = format_Arbres_remarquables_15.readFeatures(json_Arbres_remarquables_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arbres_remarquables_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arbres_remarquables_15.addFeatures(features_Arbres_remarquables_15);
var lyr_Arbres_remarquables_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arbres_remarquables_15, 
                style: style_Arbres_remarquables_15,
                popuplayertitle: 'Arbres_remarquables',
                interactive: false,
    title: 'Arbres_remarquables<br />\
    <img src="styles/legend/Arbres_remarquables_15_0.png" /> Conifères<br />\
    <img src="styles/legend/Arbres_remarquables_15_1.png" /> Feuillus<br />' });
var format_Hbergements_16 = new ol.format.GeoJSON();
var features_Hbergements_16 = format_Hbergements_16.readFeatures(json_Hbergements_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hbergements_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hbergements_16.addFeatures(features_Hbergements_16);
var lyr_Hbergements_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hbergements_16, 
                style: style_Hbergements_16,
                popuplayertitle: 'Hébergements',
                interactive: true,
                title: '<img src="styles/legend/Hbergements_16.png" /> Hébergements'
            });
var group_RseauViaire = new ol.layer.Group({
                                layers: [lyr_Sentiers_12,lyr_Chemins_agricoles_et_forestiers_13,lyr_Route_d_acces_14,],
                                fold: 'open',
                                title: 'Réseau Viaire'});
var group_Constructions = new ol.layer.Group({
                                layers: [lyr_batiments_9,lyr_Cours_10,lyr_Murs_11,],
                                fold: 'open',
                                title: 'Constructions'});
var group_Elmentsnaturels = new ol.layer.Group({
                                layers: [lyr_Prairies_1,lyr_Etangs_2,lyr_Haies_arbustives_3,lyr_Espaces_boiss_4,lyr_Rochers_5,lyr_Cours_d_eau_6,lyr_Haies_basses_tailles_7,lyr_Courbes_de_niveaux_1m_8,],
                                fold: 'open',
                                title: 'Eléments naturels'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Prairies_1.setVisible(true);lyr_Etangs_2.setVisible(true);lyr_Haies_arbustives_3.setVisible(true);lyr_Espaces_boiss_4.setVisible(true);lyr_Rochers_5.setVisible(true);lyr_Cours_d_eau_6.setVisible(true);lyr_Haies_basses_tailles_7.setVisible(true);lyr_Courbes_de_niveaux_1m_8.setVisible(true);lyr_batiments_9.setVisible(true);lyr_Cours_10.setVisible(true);lyr_Murs_11.setVisible(true);lyr_Sentiers_12.setVisible(true);lyr_Chemins_agricoles_et_forestiers_13.setVisible(true);lyr_Route_d_acces_14.setVisible(true);lyr_Arbres_remarquables_15.setVisible(true);lyr_Hbergements_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Elmentsnaturels,group_Constructions,group_RseauViaire,lyr_Arbres_remarquables_15,lyr_Hbergements_16];
lyr_Prairies_1.set('fieldAliases', {'fid': 'fid', });
lyr_Etangs_2.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'Surface': 'Surface', });
lyr_Haies_arbustives_3.set('fieldAliases', {'fid': 'fid', });
lyr_Espaces_boiss_4.set('fieldAliases', {'fid': 'fid', });
lyr_Rochers_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_Cours_d_eau_6.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', });
lyr_Haies_basses_tailles_7.set('fieldAliases', {'fid': 'fid', });
lyr_Courbes_de_niveaux_1m_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ALTITUDE': 'ALTITUDE', });
lyr_batiments_9.set('fieldAliases', {'fid': 'fid', 'gpkg_fid': 'gpkg_fid', 'Nom': 'Nom', });
lyr_Cours_10.set('fieldAliases', {'fid': 'fid', });
lyr_Murs_11.set('fieldAliases', {'fid': 'fid', });
lyr_Sentiers_12.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', });
lyr_Chemins_agricoles_et_forestiers_13.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', });
lyr_Route_d_acces_14.set('fieldAliases', {'fid': 'fid', });
lyr_Arbres_remarquables_15.set('fieldAliases', {'fid': 'fid', 'Nom_usuel': 'Nom_usuel', 'id_botanique_ref': 'id_botanique_ref', 'Age': 'Age', 'Circonférence': 'Circonférence', 'Hauteur': 'Hauteur', 'Nom_latin': 'Nom_latin', 'Type_botanique': 'Type_botanique', });
lyr_Hbergements_16.set('fieldAliases', {'fid': 'fid', 'nom_gite': 'nom_gite', 'Capacité': 'Capacité', 'Descriptif': 'Descriptif', 'Photo': 'Photo', 'Lien': 'Lien', });
lyr_Prairies_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_Etangs_2.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', 'Surface': 'TextEdit', });
lyr_Haies_arbustives_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_Espaces_boiss_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_Rochers_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_Cours_d_eau_6.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Haies_basses_tailles_7.set('fieldImages', {'fid': 'TextEdit', });
lyr_Courbes_de_niveaux_1m_8.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ALTITUDE': 'TextEdit', });
lyr_batiments_9.set('fieldImages', {'fid': 'TextEdit', 'gpkg_fid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Cours_10.set('fieldImages', {'fid': 'TextEdit', });
lyr_Murs_11.set('fieldImages', {'fid': 'TextEdit', });
lyr_Sentiers_12.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Chemins_agricoles_et_forestiers_13.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Route_d_acces_14.set('fieldImages', {'fid': 'TextEdit', });
lyr_Arbres_remarquables_15.set('fieldImages', {'fid': 'Hidden', 'Nom_usuel': 'TextEdit', 'id_botanique_ref': 'ValueRelation', 'Age': 'TextEdit', 'Circonférence': 'TextEdit', 'Hauteur': 'TextEdit', 'Nom_latin': 'TextEdit', 'Type_botanique': 'Range', });
lyr_Hbergements_16.set('fieldImages', {'fid': 'TextEdit', 'nom_gite': 'TextEdit', 'Capacité': 'Range', 'Descriptif': 'TextEdit', 'Photo': 'ExternalResource', 'Lien': 'TextEdit', });
lyr_Prairies_1.set('fieldLabels', {'fid': 'no label', });
lyr_Etangs_2.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', 'Surface': 'no label', });
lyr_Haies_arbustives_3.set('fieldLabels', {'fid': 'no label', });
lyr_Espaces_boiss_4.set('fieldLabels', {'fid': 'no label', });
lyr_Rochers_5.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Cours_d_eau_6.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', });
lyr_Haies_basses_tailles_7.set('fieldLabels', {'fid': 'no label', });
lyr_Courbes_de_niveaux_1m_8.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ALTITUDE': 'no label', });
lyr_batiments_9.set('fieldLabels', {'fid': 'no label', 'gpkg_fid': 'no label', 'Nom': 'no label', });
lyr_Cours_10.set('fieldLabels', {'fid': 'no label', });
lyr_Murs_11.set('fieldLabels', {'fid': 'no label', });
lyr_Sentiers_12.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', });
lyr_Chemins_agricoles_et_forestiers_13.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', });
lyr_Route_d_acces_14.set('fieldLabels', {'fid': 'no label', });
lyr_Arbres_remarquables_15.set('fieldLabels', {'Nom_usuel': 'header label - always visible', 'id_botanique_ref': 'no label', 'Age': 'inline label - always visible', 'Circonférence': 'no label', 'Hauteur': 'no label', 'Nom_latin': 'no label', 'Type_botanique': 'no label', });
lyr_Hbergements_16.set('fieldLabels', {'fid': 'no label', 'nom_gite': 'header label - always visible', 'Capacité': 'inline label - always visible', 'Descriptif': 'inline label - always visible', 'Photo': 'no label', 'Lien': 'no label', });
lyr_Hbergements_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});