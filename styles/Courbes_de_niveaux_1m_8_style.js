var size = 0;
var placement = 'point';

var style_Courbes_de_niveaux_1m_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10.4px \'Calibri\', sans-serif";
    var labelFill = "#8d614c";
    var bufferColor = "#fafafa";
    var bufferWidth = 2.4000000000000004;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (exp_label_Courbes_de_niveaux_1m_8_eval_expression(context) !== null && resolution > 0 && resolution < 2) {
        labelText = String(exp_label_Courbes_de_niveaux_1m_8_eval_expression(context));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,160,132,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.494}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
