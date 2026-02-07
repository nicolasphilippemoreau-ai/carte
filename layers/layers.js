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
                interactive: true,
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
                interactive: true,
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
                interactive: true,
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
                interactive: true,
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
                interactive: true,
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
                interactive: true,
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
                interactive: true,
                title: '<img src="styles/legend/Haies_basses_tailles_7.png" /> Haies_basses_taillées'
            });
var format_Gestion_RochesBlanchesbtiments_8 = new ol.format.GeoJSON();
var features_Gestion_RochesBlanchesbtiments_8 = format_Gestion_RochesBlanchesbtiments_8.readFeatures(json_Gestion_RochesBlanchesbtiments_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gestion_RochesBlanchesbtiments_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gestion_RochesBlanchesbtiments_8.addFeatures(features_Gestion_RochesBlanchesbtiments_8);
var lyr_Gestion_RochesBlanchesbtiments_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gestion_RochesBlanchesbtiments_8, 
                style: style_Gestion_RochesBlanchesbtiments_8,
                popuplayertitle: 'Gestion_RochesBlanches — btiments',
                interactive: true,
                title: '<img src="styles/legend/Gestion_RochesBlanchesbtiments_8.png" /> Gestion_RochesBlanches — btiments'
            });
var format_Gestion_RochesBlanchesCours_9 = new ol.format.GeoJSON();
var features_Gestion_RochesBlanchesCours_9 = format_Gestion_RochesBlanchesCours_9.readFeatures(json_Gestion_RochesBlanchesCours_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gestion_RochesBlanchesCours_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gestion_RochesBlanchesCours_9.addFeatures(features_Gestion_RochesBlanchesCours_9);
var lyr_Gestion_RochesBlanchesCours_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gestion_RochesBlanchesCours_9, 
                style: style_Gestion_RochesBlanchesCours_9,
                popuplayertitle: 'Gestion_RochesBlanches — Cours',
                interactive: true,
                title: '<img src="styles/legend/Gestion_RochesBlanchesCours_9.png" /> Gestion_RochesBlanches — Cours'
            });
var format_Gestion_RochesBlanchesMurs_10 = new ol.format.GeoJSON();
var features_Gestion_RochesBlanchesMurs_10 = format_Gestion_RochesBlanchesMurs_10.readFeatures(json_Gestion_RochesBlanchesMurs_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gestion_RochesBlanchesMurs_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gestion_RochesBlanchesMurs_10.addFeatures(features_Gestion_RochesBlanchesMurs_10);
var lyr_Gestion_RochesBlanchesMurs_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gestion_RochesBlanchesMurs_10, 
                style: style_Gestion_RochesBlanchesMurs_10,
                popuplayertitle: 'Gestion_RochesBlanches — Murs',
                interactive: true,
                title: '<img src="styles/legend/Gestion_RochesBlanchesMurs_10.png" /> Gestion_RochesBlanches — Murs'
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
                interactive: true,
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
                interactive: true,
                title: '<img src="styles/legend/Chemins_agricoles_et_forestiers_12.png" /> Chemins_agricoles_et_forestiers'
            });
var format_Route_13 = new ol.format.GeoJSON();
var features_Route_13 = format_Route_13.readFeatures(json_Route_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_13.addFeatures(features_Route_13);
var lyr_Route_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_13, 
                style: style_Route_13,
                popuplayertitle: 'Route',
                interactive: true,
                title: '<img src="styles/legend/Route_13.png" /> Route'
            });
var format_Routedpartementale_14 = new ol.format.GeoJSON();
var features_Routedpartementale_14 = format_Routedpartementale_14.readFeatures(json_Routedpartementale_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routedpartementale_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routedpartementale_14.addFeatures(features_Routedpartementale_14);
var lyr_Routedpartementale_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routedpartementale_14, 
                style: style_Routedpartementale_14,
                popuplayertitle: 'Route départementale',
                interactive: true,
                title: '<img src="styles/legend/Routedpartementale_14.png" /> Route départementale'
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
                interactive: true,
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
                                layers: [lyr_Sentiers_11,lyr_Chemins_agricoles_et_forestiers_12,lyr_Route_13,lyr_Routedpartementale_14,],
                                fold: 'open',
                                title: 'Réseau Viaire'});
var group_Constructions = new ol.layer.Group({
                                layers: [lyr_Gestion_RochesBlanchesbtiments_8,lyr_Gestion_RochesBlanchesCours_9,lyr_Gestion_RochesBlanchesMurs_10,],
                                fold: 'open',
                                title: 'Constructions'});
var group_Elmentsnaturels = new ol.layer.Group({
                                layers: [lyr_Prairies_1,lyr_Etangs_2,lyr_Haies_arbustives_3,lyr_Espaces_boiss_4,lyr_Rochers_5,lyr_Cours_d_eau_6,lyr_Haies_basses_tailles_7,],
                                fold: 'open',
                                title: 'Eléments naturels'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Prairies_1.setVisible(true);lyr_Etangs_2.setVisible(true);lyr_Haies_arbustives_3.setVisible(true);lyr_Espaces_boiss_4.setVisible(true);lyr_Rochers_5.setVisible(true);lyr_Cours_d_eau_6.setVisible(true);lyr_Haies_basses_tailles_7.setVisible(true);lyr_Gestion_RochesBlanchesbtiments_8.setVisible(true);lyr_Gestion_RochesBlanchesCours_9.setVisible(true);lyr_Gestion_RochesBlanchesMurs_10.setVisible(true);lyr_Sentiers_11.setVisible(true);lyr_Chemins_agricoles_et_forestiers_12.setVisible(true);lyr_Route_13.setVisible(true);lyr_Routedpartementale_14.setVisible(true);lyr_Arbres_remarquables_15.setVisible(true);lyr_Hbergements_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Elmentsnaturels,group_Constructions,group_RseauViaire,lyr_Arbres_remarquables_15,lyr_Hbergements_16];
lyr_Prairies_1.set('fieldAliases', {'fid': 'fid', 'gpkg_fid': 'gpkg_fid', 'felt:feature': 'felt:feature', 'felt:has_geometry': 'felt:has_geometry', 'felt:h3_index': 'felt:h3_index', 'felt:geometry_size': 'felt:geometry_size', 'Name': 'Name', 'Untitled': 'Untitled', 'Untitled 2': 'Untitled 2', 'Untitled 3': 'Untitled 3', 'Untitled 4': 'Untitled 4', 'Untitled 5': 'Untitled 5', 'Untitled 6': 'Untitled 6', 'Untitled 7': 'Untitled 7', 'Untitled 8': 'Untitled 8', 'Untitled 9': 'Untitled 9', });
lyr_Etangs_2.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'Surface': 'Surface', });
lyr_Haies_arbustives_3.set('fieldAliases', {'fid': 'fid', 'gpkg_fid': 'gpkg_fid', 'felt:feature': 'felt:feature', 'felt:has_geometry': 'felt:has_geometry', 'felt:h3_index': 'felt:h3_index', 'felt:geometry_size': 'felt:geometry_size', 'Name': 'Name', 'Untitled': 'Untitled', 'Untitled 2': 'Untitled 2', 'Untitled 3': 'Untitled 3', 'Untitled 4': 'Untitled 4', 'Untitled 5': 'Untitled 5', 'Untitled 6': 'Untitled 6', 'Untitled 7': 'Untitled 7', 'Untitled 8': 'Untitled 8', 'Untitled 9': 'Untitled 9', 'Untitled 10': 'Untitled 10', });
lyr_Espaces_boiss_4.set('fieldAliases', {'fid': 'fid', 'gpkg_fid': 'gpkg_fid', 'felt:feature': 'felt:feature', 'felt:has_geometry': 'felt:has_geometry', 'felt:h3_index': 'felt:h3_index', 'felt:geometry_size': 'felt:geometry_size', 'Nom': 'Nom', 'Untitled': 'Untitled', 'Untitled 2': 'Untitled 2', 'Untitled 3': 'Untitled 3', 'Untitled 4': 'Untitled 4', 'Untitled 5': 'Untitled 5', 'Untitled 6': 'Untitled 6', 'Untitled 7': 'Untitled 7', 'Untitled 8': 'Untitled 8', 'Untitled 9': 'Untitled 9', 'Untitled 10': 'Untitled 10', 'Untitled 11': 'Untitled 11', 'Untitled 12': 'Untitled 12', 'Untitled 13': 'Untitled 13', });
lyr_Rochers_5.set('fieldAliases', {'fid': 'fid', 'gpkg_fid': 'gpkg_fid', 'felt:feature': 'felt:feature', 'felt:has_geometry': 'felt:has_geometry', 'felt:h3_index': 'felt:h3_index', 'felt:geometry_size': 'felt:geometry_size', 'Name': 'Name', 'Untitled': 'Untitled', 'Untitled 2': 'Untitled 2', 'Untitled 3': 'Untitled 3', 'Untitled 4': 'Untitled 4', 'Untitled 5': 'Untitled 5', 'Untitled 6': 'Untitled 6', 'Untitled 7': 'Untitled 7', });
lyr_Cours_d_eau_6.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', });
lyr_Haies_basses_tailles_7.set('fieldAliases', {'fid': 'fid', 'gpkg_fid': 'gpkg_fid', 'felt:feature': 'felt:feature', 'felt:has_geometry': 'felt:has_geometry', 'felt:h3_index': 'felt:h3_index', 'felt:geometry_size': 'felt:geometry_size', 'Nom': 'Nom', 'Untitled': 'Untitled', 'Untitled 2': 'Untitled 2', 'Untitled 3': 'Untitled 3', 'Untitled 4': 'Untitled 4', 'Untitled 5': 'Untitled 5', 'Untitled 6': 'Untitled 6', 'Untitled 7': 'Untitled 7', 'Untitled 8': 'Untitled 8', 'Untitled 9': 'Untitled 9', 'Untitled 10': 'Untitled 10', 'Untitled 11': 'Untitled 11', });
lyr_Gestion_RochesBlanchesbtiments_8.set('fieldAliases', {'fid': 'fid', 'gpkg_fid': 'gpkg_fid', 'Nom': 'Nom', });
lyr_Gestion_RochesBlanchesCours_9.set('fieldAliases', {'fid': 'fid', 'gpkg_fid': 'gpkg_fid', 'felt:feature': 'felt:feature', 'felt:has_geometry': 'felt:has_geometry', 'felt:h3_index': 'felt:h3_index', 'felt:geometry_size': 'felt:geometry_size', 'Name': 'Name', 'Untitled': 'Untitled', 'Untitled 2': 'Untitled 2', 'Untitled 3': 'Untitled 3', 'Untitled 4': 'Untitled 4', 'Untitled 5': 'Untitled 5', 'Untitled 6': 'Untitled 6', });
lyr_Gestion_RochesBlanchesMurs_10.set('fieldAliases', {'fid': 'fid', 'gpkg_fid': 'gpkg_fid', 'felt:feature': 'felt:feature', 'felt:has_geometry': 'felt:has_geometry', 'felt:h3_index': 'felt:h3_index', 'felt:geometry_size': 'felt:geometry_size', 'Nom': 'Nom', 'Untitled': 'Untitled', 'Untitled 2': 'Untitled 2', 'Untitled 3': 'Untitled 3', 'Untitled 4': 'Untitled 4', 'Untitled 5': 'Untitled 5', 'Untitled 6': 'Untitled 6', 'Untitled 7': 'Untitled 7', 'Untitled 8': 'Untitled 8', 'Untitled 9': 'Untitled 9', 'Untitled 10': 'Untitled 10', });
lyr_Sentiers_11.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', });
lyr_Chemins_agricoles_et_forestiers_12.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', });
lyr_Route_13.set('fieldAliases', {'fid': 'fid', 'gpkg_fid': 'gpkg_fid', 'felt:feature': 'felt:feature', 'felt:has_geometry': 'felt:has_geometry', 'felt:h3_index': 'felt:h3_index', 'felt:geometry_size': 'felt:geometry_size', 'Name': 'Name', 'Untitled': 'Untitled', 'Untitled 2': 'Untitled 2', 'Untitled 3': 'Untitled 3', 'Untitled 4': 'Untitled 4', 'Untitled 5': 'Untitled 5', 'Untitled 6': 'Untitled 6', 'Untitled 7': 'Untitled 7', 'Untitled 8': 'Untitled 8', 'Untitled 9': 'Untitled 9', 'Untitled 10': 'Untitled 10', 'Untitled 11': 'Untitled 11', });
lyr_Routedpartementale_14.set('fieldAliases', {'fid': 'fid', 'gpkg_fid': 'gpkg_fid', 'felt:feature': 'felt:feature', 'felt:has_geometry': 'felt:has_geometry', 'felt:h3_index': 'felt:h3_index', 'felt:geometry_size': 'felt:geometry_size', 'Name': 'Name', 'Untitled': 'Untitled', 'Untitled 2': 'Untitled 2', 'Untitled 3': 'Untitled 3', 'Untitled 4': 'Untitled 4', 'Untitled 5': 'Untitled 5', 'Untitled 6': 'Untitled 6', 'Untitled 7': 'Untitled 7', 'Untitled 8': 'Untitled 8', 'Untitled 9': 'Untitled 9', 'Untitled 10': 'Untitled 10', 'Untitled 11': 'Untitled 11', });
lyr_Arbres_remarquables_15.set('fieldAliases', {'fid': 'fid', 'Nom_usuel': 'Nom_usuel', 'id_botanique_ref': 'id_botanique_ref', 'Age': 'Age', 'Circonférence': 'Circonférence', 'Hauteur': 'Hauteur', 'Nom_latin': 'Nom_latin', 'Type_botanique': 'Type_botanique', });
lyr_Hbergements_16.set('fieldAliases', {'fid': 'fid', 'nom_gite': 'nom_gite', });
lyr_Prairies_1.set('fieldImages', {'fid': 'TextEdit', 'gpkg_fid': 'TextEdit', 'felt:feature': 'TextEdit', 'felt:has_geometry': 'CheckBox', 'felt:h3_index': 'TextEdit', 'felt:geometry_size': 'TextEdit', 'Name': 'TextEdit', 'Untitled': 'TextEdit', 'Untitled 2': 'TextEdit', 'Untitled 3': 'TextEdit', 'Untitled 4': 'TextEdit', 'Untitled 5': 'TextEdit', 'Untitled 6': 'TextEdit', 'Untitled 7': 'CheckBox', 'Untitled 8': 'CheckBox', 'Untitled 9': 'TextEdit', });
lyr_Etangs_2.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', 'Surface': 'TextEdit', });
lyr_Haies_arbustives_3.set('fieldImages', {'fid': 'TextEdit', 'gpkg_fid': 'TextEdit', 'felt:feature': 'TextEdit', 'felt:has_geometry': 'CheckBox', 'felt:h3_index': 'TextEdit', 'felt:geometry_size': 'TextEdit', 'Name': 'TextEdit', 'Untitled': 'TextEdit', 'Untitled 2': 'TextEdit', 'Untitled 3': 'TextEdit', 'Untitled 4': 'TextEdit', 'Untitled 5': 'TextEdit', 'Untitled 6': 'TextEdit', 'Untitled 7': 'TextEdit', 'Untitled 8': 'CheckBox', 'Untitled 9': 'CheckBox', 'Untitled 10': 'TextEdit', });
lyr_Espaces_boiss_4.set('fieldImages', {'fid': 'TextEdit', 'gpkg_fid': 'TextEdit', 'felt:feature': 'TextEdit', 'felt:has_geometry': 'CheckBox', 'felt:h3_index': 'TextEdit', 'felt:geometry_size': 'TextEdit', 'Nom': 'TextEdit', 'Untitled': 'TextEdit', 'Untitled 2': 'TextEdit', 'Untitled 3': 'TextEdit', 'Untitled 4': 'TextEdit', 'Untitled 5': 'TextEdit', 'Untitled 6': 'TextEdit', 'Untitled 7': 'TextEdit', 'Untitled 8': 'TextEdit', 'Untitled 9': 'TextEdit', 'Untitled 10': 'CheckBox', 'Untitled 11': 'CheckBox', 'Untitled 12': 'TextEdit', 'Untitled 13': 'TextEdit', });
lyr_Rochers_5.set('fieldImages', {'fid': 'TextEdit', 'gpkg_fid': 'TextEdit', 'felt:feature': 'TextEdit', 'felt:has_geometry': 'CheckBox', 'felt:h3_index': 'TextEdit', 'felt:geometry_size': 'TextEdit', 'Name': 'TextEdit', 'Untitled': 'TextEdit', 'Untitled 2': 'TextEdit', 'Untitled 3': 'TextEdit', 'Untitled 4': 'TextEdit', 'Untitled 5': 'CheckBox', 'Untitled 6': 'CheckBox', 'Untitled 7': 'TextEdit', });
lyr_Cours_d_eau_6.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Haies_basses_tailles_7.set('fieldImages', {'fid': 'TextEdit', 'gpkg_fid': 'TextEdit', 'felt:feature': 'TextEdit', 'felt:has_geometry': 'CheckBox', 'felt:h3_index': 'TextEdit', 'felt:geometry_size': 'TextEdit', 'Nom': 'TextEdit', 'Untitled': 'TextEdit', 'Untitled 2': 'TextEdit', 'Untitled 3': 'TextEdit', 'Untitled 4': 'TextEdit', 'Untitled 5': 'TextEdit', 'Untitled 6': 'TextEdit', 'Untitled 7': 'TextEdit', 'Untitled 8': 'TextEdit', 'Untitled 9': 'CheckBox', 'Untitled 10': 'CheckBox', 'Untitled 11': 'TextEdit', });
lyr_Gestion_RochesBlanchesbtiments_8.set('fieldImages', {'fid': 'TextEdit', 'gpkg_fid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Gestion_RochesBlanchesCours_9.set('fieldImages', {'fid': 'TextEdit', 'gpkg_fid': 'TextEdit', 'felt:feature': 'TextEdit', 'felt:has_geometry': 'CheckBox', 'felt:h3_index': 'TextEdit', 'felt:geometry_size': 'TextEdit', 'Name': 'TextEdit', 'Untitled': 'TextEdit', 'Untitled 2': 'TextEdit', 'Untitled 3': 'TextEdit', 'Untitled 4': 'TextEdit', 'Untitled 5': 'CheckBox', 'Untitled 6': 'CheckBox', });
lyr_Gestion_RochesBlanchesMurs_10.set('fieldImages', {'fid': 'TextEdit', 'gpkg_fid': 'TextEdit', 'felt:feature': 'TextEdit', 'felt:has_geometry': 'CheckBox', 'felt:h3_index': 'TextEdit', 'felt:geometry_size': 'TextEdit', 'Nom': 'TextEdit', 'Untitled': 'TextEdit', 'Untitled 2': 'TextEdit', 'Untitled 3': 'TextEdit', 'Untitled 4': 'TextEdit', 'Untitled 5': 'TextEdit', 'Untitled 6': 'TextEdit', 'Untitled 7': 'TextEdit', 'Untitled 8': 'CheckBox', 'Untitled 9': 'CheckBox', 'Untitled 10': 'TextEdit', });
lyr_Sentiers_11.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Chemins_agricoles_et_forestiers_12.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Route_13.set('fieldImages', {'fid': 'TextEdit', 'gpkg_fid': 'TextEdit', 'felt:feature': 'TextEdit', 'felt:has_geometry': 'CheckBox', 'felt:h3_index': 'TextEdit', 'felt:geometry_size': 'TextEdit', 'Name': 'TextEdit', 'Untitled': 'TextEdit', 'Untitled 2': 'TextEdit', 'Untitled 3': 'TextEdit', 'Untitled 4': 'TextEdit', 'Untitled 5': 'TextEdit', 'Untitled 6': 'TextEdit', 'Untitled 7': 'CheckBox', 'Untitled 8': 'CheckBox', 'Untitled 9': 'CheckBox', 'Untitled 10': 'TextEdit', 'Untitled 11': 'TextEdit', });
lyr_Routedpartementale_14.set('fieldImages', {'fid': 'TextEdit', 'gpkg_fid': 'TextEdit', 'felt:feature': 'TextEdit', 'felt:has_geometry': 'CheckBox', 'felt:h3_index': 'TextEdit', 'felt:geometry_size': 'TextEdit', 'Name': 'TextEdit', 'Untitled': 'TextEdit', 'Untitled 2': 'TextEdit', 'Untitled 3': 'TextEdit', 'Untitled 4': 'TextEdit', 'Untitled 5': 'TextEdit', 'Untitled 6': 'TextEdit', 'Untitled 7': 'CheckBox', 'Untitled 8': 'CheckBox', 'Untitled 9': 'CheckBox', 'Untitled 10': 'TextEdit', 'Untitled 11': 'TextEdit', });
lyr_Arbres_remarquables_15.set('fieldImages', {'fid': 'Hidden', 'Nom_usuel': 'TextEdit', 'id_botanique_ref': 'ValueRelation', 'Age': 'TextEdit', 'Circonférence': 'TextEdit', 'Hauteur': 'TextEdit', 'Nom_latin': 'TextEdit', 'Type_botanique': 'Range', });
lyr_Hbergements_16.set('fieldImages', {'fid': 'TextEdit', 'nom_gite': 'TextEdit', });
lyr_Prairies_1.set('fieldLabels', {'fid': 'no label', 'gpkg_fid': 'no label', 'felt:feature': 'no label', 'felt:has_geometry': 'no label', 'felt:h3_index': 'no label', 'felt:geometry_size': 'no label', 'Name': 'no label', 'Untitled': 'no label', 'Untitled 2': 'no label', 'Untitled 3': 'no label', 'Untitled 4': 'no label', 'Untitled 5': 'no label', 'Untitled 6': 'no label', 'Untitled 7': 'no label', 'Untitled 8': 'no label', 'Untitled 9': 'no label', });
lyr_Etangs_2.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', 'Surface': 'no label', });
lyr_Haies_arbustives_3.set('fieldLabels', {'fid': 'no label', 'gpkg_fid': 'no label', 'felt:feature': 'no label', 'felt:has_geometry': 'no label', 'felt:h3_index': 'no label', 'felt:geometry_size': 'no label', 'Name': 'no label', 'Untitled': 'no label', 'Untitled 2': 'no label', 'Untitled 3': 'no label', 'Untitled 4': 'no label', 'Untitled 5': 'no label', 'Untitled 6': 'no label', 'Untitled 7': 'no label', 'Untitled 8': 'no label', 'Untitled 9': 'no label', 'Untitled 10': 'no label', });
lyr_Espaces_boiss_4.set('fieldLabels', {'fid': 'no label', 'gpkg_fid': 'no label', 'felt:feature': 'no label', 'felt:has_geometry': 'no label', 'felt:h3_index': 'no label', 'felt:geometry_size': 'no label', 'Nom': 'no label', 'Untitled': 'no label', 'Untitled 2': 'no label', 'Untitled 3': 'no label', 'Untitled 4': 'no label', 'Untitled 5': 'no label', 'Untitled 6': 'no label', 'Untitled 7': 'no label', 'Untitled 8': 'no label', 'Untitled 9': 'no label', 'Untitled 10': 'no label', 'Untitled 11': 'no label', 'Untitled 12': 'no label', 'Untitled 13': 'no label', });
lyr_Rochers_5.set('fieldLabels', {'fid': 'no label', 'gpkg_fid': 'no label', 'felt:feature': 'no label', 'felt:has_geometry': 'no label', 'felt:h3_index': 'no label', 'felt:geometry_size': 'no label', 'Name': 'no label', 'Untitled': 'no label', 'Untitled 2': 'no label', 'Untitled 3': 'no label', 'Untitled 4': 'no label', 'Untitled 5': 'no label', 'Untitled 6': 'no label', 'Untitled 7': 'no label', });
lyr_Cours_d_eau_6.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', });
lyr_Haies_basses_tailles_7.set('fieldLabels', {'fid': 'no label', 'gpkg_fid': 'no label', 'felt:feature': 'no label', 'felt:has_geometry': 'no label', 'felt:h3_index': 'no label', 'felt:geometry_size': 'no label', 'Nom': 'no label', 'Untitled': 'no label', 'Untitled 2': 'no label', 'Untitled 3': 'no label', 'Untitled 4': 'no label', 'Untitled 5': 'no label', 'Untitled 6': 'no label', 'Untitled 7': 'no label', 'Untitled 8': 'no label', 'Untitled 9': 'no label', 'Untitled 10': 'no label', 'Untitled 11': 'no label', });
lyr_Gestion_RochesBlanchesbtiments_8.set('fieldLabels', {'fid': 'no label', 'gpkg_fid': 'no label', 'Nom': 'no label', });
lyr_Gestion_RochesBlanchesCours_9.set('fieldLabels', {'fid': 'no label', 'gpkg_fid': 'no label', 'felt:feature': 'no label', 'felt:has_geometry': 'no label', 'felt:h3_index': 'no label', 'felt:geometry_size': 'no label', 'Name': 'no label', 'Untitled': 'no label', 'Untitled 2': 'no label', 'Untitled 3': 'no label', 'Untitled 4': 'no label', 'Untitled 5': 'no label', 'Untitled 6': 'no label', });
lyr_Gestion_RochesBlanchesMurs_10.set('fieldLabels', {'fid': 'no label', 'gpkg_fid': 'no label', 'felt:feature': 'no label', 'felt:has_geometry': 'no label', 'felt:h3_index': 'no label', 'felt:geometry_size': 'no label', 'Nom': 'no label', 'Untitled': 'no label', 'Untitled 2': 'no label', 'Untitled 3': 'no label', 'Untitled 4': 'no label', 'Untitled 5': 'no label', 'Untitled 6': 'no label', 'Untitled 7': 'no label', 'Untitled 8': 'no label', 'Untitled 9': 'no label', 'Untitled 10': 'no label', });
lyr_Sentiers_11.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', });
lyr_Chemins_agricoles_et_forestiers_12.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', });
lyr_Route_13.set('fieldLabels', {'fid': 'no label', 'gpkg_fid': 'no label', 'felt:feature': 'no label', 'felt:has_geometry': 'no label', 'felt:h3_index': 'no label', 'felt:geometry_size': 'no label', 'Name': 'no label', 'Untitled': 'no label', 'Untitled 2': 'no label', 'Untitled 3': 'no label', 'Untitled 4': 'no label', 'Untitled 5': 'no label', 'Untitled 6': 'no label', 'Untitled 7': 'no label', 'Untitled 8': 'no label', 'Untitled 9': 'no label', 'Untitled 10': 'no label', 'Untitled 11': 'no label', });
lyr_Routedpartementale_14.set('fieldLabels', {'fid': 'no label', 'gpkg_fid': 'no label', 'felt:feature': 'no label', 'felt:has_geometry': 'no label', 'felt:h3_index': 'no label', 'felt:geometry_size': 'no label', 'Name': 'no label', 'Untitled': 'no label', 'Untitled 2': 'no label', 'Untitled 3': 'no label', 'Untitled 4': 'no label', 'Untitled 5': 'no label', 'Untitled 6': 'no label', 'Untitled 7': 'no label', 'Untitled 8': 'no label', 'Untitled 9': 'no label', 'Untitled 10': 'no label', 'Untitled 11': 'no label', });
lyr_Arbres_remarquables_15.set('fieldLabels', {'Nom_usuel': 'no label', 'id_botanique_ref': 'no label', 'Age': 'no label', 'Circonférence': 'no label', 'Hauteur': 'no label', 'Nom_latin': 'no label', 'Type_botanique': 'no label', });
lyr_Hbergements_16.set('fieldLabels', {'fid': 'no label', 'nom_gite': 'no label', });
lyr_Hbergements_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});