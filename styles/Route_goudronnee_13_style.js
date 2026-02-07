var size = 0;
var placement = 'point';

var style_Route_goudronnee_13 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Garamond\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 2.4000000000000004;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (exp_label_Route_goudronnee_13_eval_expression(context) !== null) {
        labelText = String(exp_label_Route_goudronnee_13_eval_expression(context));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,66,63,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
