var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NONAGRIALANG_AR_50K_1 = new ol.format.GeoJSON();
var features_NONAGRIALANG_AR_50K_1 = format_NONAGRIALANG_AR_50K_1.readFeatures(json_NONAGRIALANG_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NONAGRIALANG_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NONAGRIALANG_AR_50K_1.addFeatures(features_NONAGRIALANG_AR_50K_1);
var lyr_NONAGRIALANG_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NONAGRIALANG_AR_50K_1, 
                style: style_NONAGRIALANG_AR_50K_1,
                popuplayertitle: "NONAGRIALANG_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/NONAGRIALANG_AR_50K_1.png" /> NONAGRIALANG_AR_50K'
            });
var format_NONAGRIHUTANKERING_AR_50K_2 = new ol.format.GeoJSON();
var features_NONAGRIHUTANKERING_AR_50K_2 = format_NONAGRIHUTANKERING_AR_50K_2.readFeatures(json_NONAGRIHUTANKERING_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NONAGRIHUTANKERING_AR_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NONAGRIHUTANKERING_AR_50K_2.addFeatures(features_NONAGRIHUTANKERING_AR_50K_2);
var lyr_NONAGRIHUTANKERING_AR_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NONAGRIHUTANKERING_AR_50K_2, 
                style: style_NONAGRIHUTANKERING_AR_50K_2,
                popuplayertitle: "NONAGRIHUTANKERING_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/NONAGRIHUTANKERING_AR_50K_2.png" /> NONAGRIHUTANKERING_AR_50K'
            });
var format_NONAGRISEMAKBELUKAR_AR_50K_3 = new ol.format.GeoJSON();
var features_NONAGRISEMAKBELUKAR_AR_50K_3 = format_NONAGRISEMAKBELUKAR_AR_50K_3.readFeatures(json_NONAGRISEMAKBELUKAR_AR_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NONAGRISEMAKBELUKAR_AR_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NONAGRISEMAKBELUKAR_AR_50K_3.addFeatures(features_NONAGRISEMAKBELUKAR_AR_50K_3);
var lyr_NONAGRISEMAKBELUKAR_AR_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NONAGRISEMAKBELUKAR_AR_50K_3, 
                style: style_NONAGRISEMAKBELUKAR_AR_50K_3,
                popuplayertitle: "NONAGRISEMAKBELUKAR_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/NONAGRISEMAKBELUKAR_AR_50K_3.png" /> NONAGRISEMAKBELUKAR_AR_50K'
            });
var format_AGRIKEBUN_AR_50K_4 = new ol.format.GeoJSON();
var features_AGRIKEBUN_AR_50K_4 = format_AGRIKEBUN_AR_50K_4.readFeatures(json_AGRIKEBUN_AR_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRIKEBUN_AR_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIKEBUN_AR_50K_4.addFeatures(features_AGRIKEBUN_AR_50K_4);
var lyr_AGRIKEBUN_AR_50K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRIKEBUN_AR_50K_4, 
                style: style_AGRIKEBUN_AR_50K_4,
                popuplayertitle: "AGRIKEBUN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/AGRIKEBUN_AR_50K_4.png" /> AGRIKEBUN_AR_50K'
            });
var format_PELABUHAN_PT_50K_5 = new ol.format.GeoJSON();
var features_PELABUHAN_PT_50K_5 = format_PELABUHAN_PT_50K_5.readFeatures(json_PELABUHAN_PT_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PELABUHAN_PT_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PELABUHAN_PT_50K_5.addFeatures(features_PELABUHAN_PT_50K_5);
var lyr_PELABUHAN_PT_50K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PELABUHAN_PT_50K_5, 
                style: style_PELABUHAN_PT_50K_5,
                popuplayertitle: "PELABUHAN_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/PELABUHAN_PT_50K_5.png" /> PELABUHAN_PT_50K'
            });
var format_AIRPORT_PT_50K_6 = new ol.format.GeoJSON();
var features_AIRPORT_PT_50K_6 = format_AIRPORT_PT_50K_6.readFeatures(json_AIRPORT_PT_50K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIRPORT_PT_50K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIRPORT_PT_50K_6.addFeatures(features_AIRPORT_PT_50K_6);
var lyr_AIRPORT_PT_50K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIRPORT_PT_50K_6, 
                style: style_AIRPORT_PT_50K_6,
                popuplayertitle: "AIRPORT_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/AIRPORT_PT_50K_6.png" /> AIRPORT_PT_50K'
            });
var format_DERMAGA_PT_50K_7 = new ol.format.GeoJSON();
var features_DERMAGA_PT_50K_7 = format_DERMAGA_PT_50K_7.readFeatures(json_DERMAGA_PT_50K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERMAGA_PT_50K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERMAGA_PT_50K_7.addFeatures(features_DERMAGA_PT_50K_7);
var lyr_DERMAGA_PT_50K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DERMAGA_PT_50K_7, 
                style: style_DERMAGA_PT_50K_7,
                popuplayertitle: "DERMAGA_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/DERMAGA_PT_50K_7.png" /> DERMAGA_PT_50K'
            });
var format_JALAN_LN_50K_8 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_8 = format_JALAN_LN_50K_8.readFeatures(json_JALAN_LN_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_8.addFeatures(features_JALAN_LN_50K_8);
var lyr_JALAN_LN_50K_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_8, 
                style: style_JALAN_LN_50K_8,
                popuplayertitle: "JALAN_LN_50K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_8.png" /> JALAN_LN_50K'
            });
var format_AIRPORT_AR_50K_9 = new ol.format.GeoJSON();
var features_AIRPORT_AR_50K_9 = format_AIRPORT_AR_50K_9.readFeatures(json_AIRPORT_AR_50K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIRPORT_AR_50K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIRPORT_AR_50K_9.addFeatures(features_AIRPORT_AR_50K_9);
var lyr_AIRPORT_AR_50K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIRPORT_AR_50K_9, 
                style: style_AIRPORT_AR_50K_9,
                popuplayertitle: "AIRPORT_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/AIRPORT_AR_50K_9.png" /> AIRPORT_AR_50K'
            });
var format_TOPONIMI_PT_50K_10 = new ol.format.GeoJSON();
var features_TOPONIMI_PT_50K_10 = format_TOPONIMI_PT_50K_10.readFeatures(json_TOPONIMI_PT_50K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIMI_PT_50K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMI_PT_50K_10.addFeatures(features_TOPONIMI_PT_50K_10);
var lyr_TOPONIMI_PT_50K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPONIMI_PT_50K_10, 
                style: style_TOPONIMI_PT_50K_10,
                popuplayertitle: "TOPONIMI_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/TOPONIMI_PT_50K_10.png" /> TOPONIMI_PT_50K'
            });
var format_BANGUNAN_AR_50K_11 = new ol.format.GeoJSON();
var features_BANGUNAN_AR_50K_11 = format_BANGUNAN_AR_50K_11.readFeatures(json_BANGUNAN_AR_50K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_AR_50K_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_AR_50K_11.addFeatures(features_BANGUNAN_AR_50K_11);
var lyr_BANGUNAN_AR_50K_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_AR_50K_11, 
                style: style_BANGUNAN_AR_50K_11,
                popuplayertitle: "BANGUNAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_AR_50K_11.png" /> BANGUNAN_AR_50K'
            });
var format_BANGUNAN_PT_50K_12 = new ol.format.GeoJSON();
var features_BANGUNAN_PT_50K_12 = format_BANGUNAN_PT_50K_12.readFeatures(json_BANGUNAN_PT_50K_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_PT_50K_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_PT_50K_12.addFeatures(features_BANGUNAN_PT_50K_12);
var lyr_BANGUNAN_PT_50K_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_PT_50K_12, 
                style: style_BANGUNAN_PT_50K_12,
                popuplayertitle: "BANGUNAN_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_PT_50K_12.png" /> BANGUNAN_PT_50K'
            });
var format_PEMUKIMAN_AR_50K_13 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_13 = format_PEMUKIMAN_AR_50K_13.readFeatures(json_PEMUKIMAN_AR_50K_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_13.addFeatures(features_PEMUKIMAN_AR_50K_13);
var lyr_PEMUKIMAN_AR_50K_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_13, 
                style: style_PEMUKIMAN_AR_50K_13,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_13.png" /> PEMUKIMAN_AR_50K'
            });
var format_PUSKESMAS_PT_50K_14 = new ol.format.GeoJSON();
var features_PUSKESMAS_PT_50K_14 = format_PUSKESMAS_PT_50K_14.readFeatures(json_PUSKESMAS_PT_50K_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_PT_50K_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESMAS_PT_50K_14.addFeatures(features_PUSKESMAS_PT_50K_14);
var lyr_PUSKESMAS_PT_50K_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUSKESMAS_PT_50K_14, 
                style: style_PUSKESMAS_PT_50K_14,
                popuplayertitle: "PUSKESMAS_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/PUSKESMAS_PT_50K_14.png" /> PUSKESMAS_PT_50K'
            });
var format_RUMAHSAKIT_PT_50K_15 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_15 = format_RUMAHSAKIT_PT_50K_15.readFeatures(json_RUMAHSAKIT_PT_50K_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_15.addFeatures(features_RUMAHSAKIT_PT_50K_15);
var lyr_RUMAHSAKIT_PT_50K_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_50K_15, 
                style: style_RUMAHSAKIT_PT_50K_15,
                popuplayertitle: "RUMAHSAKIT_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_50K_15.png" /> RUMAHSAKIT_PT_50K'
            });
var format_SARANAIBADAH_PT_50K_16 = new ol.format.GeoJSON();
var features_SARANAIBADAH_PT_50K_16 = format_SARANAIBADAH_PT_50K_16.readFeatures(json_SARANAIBADAH_PT_50K_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAIBADAH_PT_50K_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_PT_50K_16.addFeatures(features_SARANAIBADAH_PT_50K_16);
var lyr_SARANAIBADAH_PT_50K_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SARANAIBADAH_PT_50K_16, 
                style: style_SARANAIBADAH_PT_50K_16,
                popuplayertitle: "SARANAIBADAH_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_PT_50K_16.png" /> SARANAIBADAH_PT_50K'
            });
var format_CAGARBUDAYA_PT_50K_17 = new ol.format.GeoJSON();
var features_CAGARBUDAYA_PT_50K_17 = format_CAGARBUDAYA_PT_50K_17.readFeatures(json_CAGARBUDAYA_PT_50K_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAGARBUDAYA_PT_50K_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAGARBUDAYA_PT_50K_17.addFeatures(features_CAGARBUDAYA_PT_50K_17);
var lyr_CAGARBUDAYA_PT_50K_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAGARBUDAYA_PT_50K_17, 
                style: style_CAGARBUDAYA_PT_50K_17,
                popuplayertitle: "CAGARBUDAYA_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/CAGARBUDAYA_PT_50K_17.png" /> CAGARBUDAYA_PT_50K'
            });
var format_KESEHATAN_PT_50K_18 = new ol.format.GeoJSON();
var features_KESEHATAN_PT_50K_18 = format_KESEHATAN_PT_50K_18.readFeatures(json_KESEHATAN_PT_50K_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KESEHATAN_PT_50K_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESEHATAN_PT_50K_18.addFeatures(features_KESEHATAN_PT_50K_18);
var lyr_KESEHATAN_PT_50K_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KESEHATAN_PT_50K_18, 
                style: style_KESEHATAN_PT_50K_18,
                popuplayertitle: "KESEHATAN_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/KESEHATAN_PT_50K_18.png" /> KESEHATAN_PT_50K'
            });
var format_MAKAM_PT_50K_19 = new ol.format.GeoJSON();
var features_MAKAM_PT_50K_19 = format_MAKAM_PT_50K_19.readFeatures(json_MAKAM_PT_50K_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAKAM_PT_50K_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAKAM_PT_50K_19.addFeatures(features_MAKAM_PT_50K_19);
var lyr_MAKAM_PT_50K_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAKAM_PT_50K_19, 
                style: style_MAKAM_PT_50K_19,
                popuplayertitle: "MAKAM_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/MAKAM_PT_50K_19.png" /> MAKAM_PT_50K'
            });
var format_NIAGA_PT_50K_20 = new ol.format.GeoJSON();
var features_NIAGA_PT_50K_20 = format_NIAGA_PT_50K_20.readFeatures(json_NIAGA_PT_50K_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NIAGA_PT_50K_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NIAGA_PT_50K_20.addFeatures(features_NIAGA_PT_50K_20);
var lyr_NIAGA_PT_50K_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NIAGA_PT_50K_20, 
                style: style_NIAGA_PT_50K_20,
                popuplayertitle: "NIAGA_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/NIAGA_PT_50K_20.png" /> NIAGA_PT_50K'
            });
var format_PEMERINTAHAN_PT_50K_21 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_21 = format_PEMERINTAHAN_PT_50K_21.readFeatures(json_PEMERINTAHAN_PT_50K_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_50K_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_21.addFeatures(features_PEMERINTAHAN_PT_50K_21);
var lyr_PEMERINTAHAN_PT_50K_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_50K_21, 
                style: style_PEMERINTAHAN_PT_50K_21,
                popuplayertitle: "PEMERINTAHAN_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_21.png" /> PEMERINTAHAN_PT_50K'
            });
var format_PENDIDIKAN_PT_50K_22 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_50K_22 = format_PENDIDIKAN_PT_50K_22.readFeatures(json_PENDIDIKAN_PT_50K_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_50K_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_50K_22.addFeatures(features_PENDIDIKAN_PT_50K_22);
var lyr_PENDIDIKAN_PT_50K_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_50K_22, 
                style: style_PENDIDIKAN_PT_50K_22,
                popuplayertitle: "PENDIDIKAN_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_50K_22.png" /> PENDIDIKAN_PT_50K'
            });
var format_KONTUR_LN_50K_23 = new ol.format.GeoJSON();
var features_KONTUR_LN_50K_23 = format_KONTUR_LN_50K_23.readFeatures(json_KONTUR_LN_50K_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KONTUR_LN_50K_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KONTUR_LN_50K_23.addFeatures(features_KONTUR_LN_50K_23);
var lyr_KONTUR_LN_50K_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KONTUR_LN_50K_23, 
                style: style_KONTUR_LN_50K_23,
                popuplayertitle: "KONTUR_LN_50K",
                interactive: true,
                title: '<img src="styles/legend/KONTUR_LN_50K_23.png" /> KONTUR_LN_50K'
            });
var format_SUNGAI_LN_50K_24 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_24 = format_SUNGAI_LN_50K_24.readFeatures(json_SUNGAI_LN_50K_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_50K_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_24.addFeatures(features_SUNGAI_LN_50K_24);
var lyr_SUNGAI_LN_50K_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_50K_24, 
                style: style_SUNGAI_LN_50K_24,
                popuplayertitle: "SUNGAI_LN_50K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_24.png" /> SUNGAI_LN_50K'
            });
var format_GARISRPANTAI_LN_50K_25 = new ol.format.GeoJSON();
var features_GARISRPANTAI_LN_50K_25 = format_GARISRPANTAI_LN_50K_25.readFeatures(json_GARISRPANTAI_LN_50K_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARISRPANTAI_LN_50K_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARISRPANTAI_LN_50K_25.addFeatures(features_GARISRPANTAI_LN_50K_25);
var lyr_GARISRPANTAI_LN_50K_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GARISRPANTAI_LN_50K_25, 
                style: style_GARISRPANTAI_LN_50K_25,
                popuplayertitle: "GARISRPANTAI_LN_50K",
                interactive: true,
                title: '<img src="styles/legend/GARISRPANTAI_LN_50K_25.png" /> GARISRPANTAI_LN_50K'
            });
var format_SUNGAI_AR_50K_26 = new ol.format.GeoJSON();
var features_SUNGAI_AR_50K_26 = format_SUNGAI_AR_50K_26.readFeatures(json_SUNGAI_AR_50K_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_50K_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_50K_26.addFeatures(features_SUNGAI_AR_50K_26);
var lyr_SUNGAI_AR_50K_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_AR_50K_26, 
                style: style_SUNGAI_AR_50K_26,
                popuplayertitle: "SUNGAI_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_50K_26.png" /> SUNGAI_AR_50K'
            });
var format_DANAU_AR_50K_27 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_27 = format_DANAU_AR_50K_27.readFeatures(json_DANAU_AR_50K_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANAU_AR_50K_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_27.addFeatures(features_DANAU_AR_50K_27);
var lyr_DANAU_AR_50K_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANAU_AR_50K_27, 
                style: style_DANAU_AR_50K_27,
                popuplayertitle: "DANAU_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_27.png" /> DANAU_AR_50K'
            });
var format_ADMINISTRASI_LN_50K_28 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_50K_28 = format_ADMINISTRASI_LN_50K_28.readFeatures(json_ADMINISTRASI_LN_50K_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_50K_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_50K_28.addFeatures(features_ADMINISTRASI_LN_50K_28);
var lyr_ADMINISTRASI_LN_50K_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_LN_50K_28, 
                style: style_ADMINISTRASI_LN_50K_28,
                popuplayertitle: "ADMINISTRASI_LN_50K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_50K_28.png" /> ADMINISTRASI_LN_50K'
            });
var format_PILARBATAS_PT_50K_29 = new ol.format.GeoJSON();
var features_PILARBATAS_PT_50K_29 = format_PILARBATAS_PT_50K_29.readFeatures(json_PILARBATAS_PT_50K_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PILARBATAS_PT_50K_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PILARBATAS_PT_50K_29.addFeatures(features_PILARBATAS_PT_50K_29);
var lyr_PILARBATAS_PT_50K_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PILARBATAS_PT_50K_29, 
                style: style_PILARBATAS_PT_50K_29,
                popuplayertitle: "PILARBATAS_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/PILARBATAS_PT_50K_29.png" /> PILARBATAS_PT_50K'
            });

lyr_GoogleEarth_0.setVisible(true);lyr_NONAGRIALANG_AR_50K_1.setVisible(true);lyr_NONAGRIHUTANKERING_AR_50K_2.setVisible(true);lyr_NONAGRISEMAKBELUKAR_AR_50K_3.setVisible(true);lyr_AGRIKEBUN_AR_50K_4.setVisible(true);lyr_PELABUHAN_PT_50K_5.setVisible(true);lyr_AIRPORT_PT_50K_6.setVisible(true);lyr_DERMAGA_PT_50K_7.setVisible(true);lyr_JALAN_LN_50K_8.setVisible(true);lyr_AIRPORT_AR_50K_9.setVisible(true);lyr_TOPONIMI_PT_50K_10.setVisible(true);lyr_BANGUNAN_AR_50K_11.setVisible(true);lyr_BANGUNAN_PT_50K_12.setVisible(true);lyr_PEMUKIMAN_AR_50K_13.setVisible(true);lyr_PUSKESMAS_PT_50K_14.setVisible(true);lyr_RUMAHSAKIT_PT_50K_15.setVisible(true);lyr_SARANAIBADAH_PT_50K_16.setVisible(true);lyr_CAGARBUDAYA_PT_50K_17.setVisible(true);lyr_KESEHATAN_PT_50K_18.setVisible(true);lyr_MAKAM_PT_50K_19.setVisible(true);lyr_NIAGA_PT_50K_20.setVisible(true);lyr_PEMERINTAHAN_PT_50K_21.setVisible(true);lyr_PENDIDIKAN_PT_50K_22.setVisible(true);lyr_KONTUR_LN_50K_23.setVisible(true);lyr_SUNGAI_LN_50K_24.setVisible(true);lyr_GARISRPANTAI_LN_50K_25.setVisible(true);lyr_SUNGAI_AR_50K_26.setVisible(true);lyr_DANAU_AR_50K_27.setVisible(true);lyr_ADMINISTRASI_LN_50K_28.setVisible(true);lyr_PILARBATAS_PT_50K_29.setVisible(true);
var layersList = [lyr_GoogleEarth_0,lyr_NONAGRIALANG_AR_50K_1,lyr_NONAGRIHUTANKERING_AR_50K_2,lyr_NONAGRISEMAKBELUKAR_AR_50K_3,lyr_AGRIKEBUN_AR_50K_4,lyr_PELABUHAN_PT_50K_5,lyr_AIRPORT_PT_50K_6,lyr_DERMAGA_PT_50K_7,lyr_JALAN_LN_50K_8,lyr_AIRPORT_AR_50K_9,lyr_TOPONIMI_PT_50K_10,lyr_BANGUNAN_AR_50K_11,lyr_BANGUNAN_PT_50K_12,lyr_PEMUKIMAN_AR_50K_13,lyr_PUSKESMAS_PT_50K_14,lyr_RUMAHSAKIT_PT_50K_15,lyr_SARANAIBADAH_PT_50K_16,lyr_CAGARBUDAYA_PT_50K_17,lyr_KESEHATAN_PT_50K_18,lyr_MAKAM_PT_50K_19,lyr_NIAGA_PT_50K_20,lyr_PEMERINTAHAN_PT_50K_21,lyr_PENDIDIKAN_PT_50K_22,lyr_KONTUR_LN_50K_23,lyr_SUNGAI_LN_50K_24,lyr_GARISRPANTAI_LN_50K_25,lyr_SUNGAI_AR_50K_26,lyr_DANAU_AR_50K_27,lyr_ADMINISTRASI_LN_50K_28,lyr_PILARBATAS_PT_50K_29];
lyr_NONAGRIALANG_AR_50K_1.set('fieldAliases', {'AQDATE': 'AQDATE', 'FCODE': 'FCODE', 'KLSRMP': 'KLSRMP', 'KODATC': 'KODATC', 'NAMOBJ': 'NAMOBJ', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'JNSPDG': 'JNSPDG', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NONAGRIHUTANKERING_AR_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'JNSPHN': 'JNSPHN', 'JNSHTN': 'JNSHTN', 'KRPPHN': 'KRPPHN', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'KLSLCO': 'KLSLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TKTHTN': 'TKTHTN', 'TIPHTN': 'TIPHTN', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NONAGRISEMAKBELUKAR_AR_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSSMK': 'JNSSMK', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRIKEBUN_AR_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PELABUHAN_PT_50K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ADMPEL': 'ADMPEL', 'JNSPEL': 'JNSPEL', 'FGSPEL': 'FGSPEL', 'PJAPEL': 'PJAPEL', 'LAMPEL': 'LAMPEL', 'STUPEL': 'STUPEL', 'KONKON': 'KONKON', 'LUAS': 'LUAS', 'KMXPEL': 'KMXPEL', 'KMNPEL': 'KMNPEL', 'STPPEL': 'STPPEL', 'SRPPEL': 'SRPPEL', 'ALJPEL': 'ALJPEL', 'REMARK': 'REMARK', 'KLSPEL': 'KLSPEL', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KODPEL': 'KODPEL', });
lyr_AIRPORT_PT_50K_6.set('fieldAliases', {'KOBDMI': 'KOBDMI', 'KDICAO': 'KDICAO', 'KDIATA': 'KDIATA', 'ELEVAS': 'ELEVAS', 'MAVBMI': 'MAVBMI', 'LGTBMI': 'LGTBMI', 'KLSBMI': 'KLSBMI', 'ADABMI': 'ADABMI', 'ADRBMI': 'ADRBMI', 'REMARK': 'REMARK', 'TIPAIP': 'TIPAIP', 'TIPLOK': 'TIPLOK', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'KATKBM': 'KATKBM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DERMAGA_PT_50K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'PMLDRM': 'PMLDRM', 'OPRDRM': 'OPRDRM', 'LGTDRM': 'LGTDRM', 'LBRDRM': 'LBRDRM', 'LUAS': 'LUAS', 'KDLDRM': 'KDLDRM', 'KSTDRM': 'KSTDRM', 'STRDRM': 'STRDRM', 'REMARK': 'REMARK', 'FGSDRM': 'FGSDRM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_JALAN_LN_50K_8.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AIRPORT_AR_50K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'KOBDMI': 'KOBDMI', 'KDICAO': 'KDICAO', 'KDIATA': 'KDIATA', 'ELEVAS': 'ELEVAS', 'MAVBMI': 'MAVBMI', 'LGTBMI': 'LGTBMI', 'KATBMI': 'KATBMI', 'KLSBMI': 'KLSBMI', 'ADABMI': 'ADABMI', 'ADRBMI': 'ADRBMI', 'REMARK': 'REMARK', 'TIPAIP': 'TIPAIP', 'TIPLOK': 'TIPLOK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'RUNWAY': 'RUNWAY', 'PARK': 'PARK', 'LPG': 'LPG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TOPONIMI_PT_50K_10.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'ALIAS': 'ALIAS', 'LOKTPN': 'LOKTPN', 'REMARK': 'REMARK', 'KLSTPN': 'KLSTPN', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FTYPE': 'FTYPE', 'LAT': 'LAT', 'LON': 'LON', 'KOORDY': 'KOORDY', 'KOORDX': 'KOORDX', 'KOORDINAT1': 'KOORDINAT1', 'KORDINTAT2': 'KORDINTAT2', 'LUAS': 'LUAS', 'Elevasi': 'Elevasi', 'NAMLOK': 'NAMLOK', 'NAMSPE': 'NAMSPE', 'NAMMAP': 'NAMMAP', 'NAMGAZ': 'NAMGAZ', 'SJHNAM': 'SJHNAM', 'ARTINAM': 'ARTINAM', 'ASLBHS': 'ASLBHS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'STATUS': 'STATUS', });
lyr_BANGUNAN_AR_50K_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BANGUNAN_PT_50K_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PEMUKIMAN_AR_50K_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PUSKESMAS_PT_50K_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_RUMAHSAKIT_PT_50K_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_SARANAIBADAH_PT_50K_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_CAGARBUDAYA_PT_50K_17.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KESEHATAN_PT_50K_18.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_MAKAM_PT_50K_19.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TPMKM': 'TPMKM', });
lyr_NIAGA_PT_50K_20.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FUNGSI': 'FUNGSI', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FGSKOD': 'FGSKOD', 'JNSPSR': 'JNSPSR', 'JNSTKO': 'JNSTKO', 'JNSKTR': 'JNSKTR', 'PRSTRP': 'PRSTRP', });
lyr_PEMERINTAHAN_PT_50K_21.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PENDIDIKAN_PT_50K_22.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_KONTUR_LN_50K_23.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'VALKNT': 'VALKNT', 'TIPKNT': 'TIPKNT', 'IDXKNT': 'IDXKNT', 'FCODE': 'FCODE', 'JNSKNT': 'JNSKNT', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_50K_24.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_GARISRPANTAI_LN_50K_25.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'DTMVER': 'DTMVER', 'KARGPN': 'KARGPN', 'FCODE': 'FCODE', 'KODGPN': 'KODGPN', 'TIPGPN': 'TIPGPN', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_AR_50K_26.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DANAU_AR_50K_27.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_LN_50K_28.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PILARBATAS_PT_50K_29.set('fieldAliases', {'IDENTF': 'IDENTF', 'NAMOBJ': 'NAMOBJ', 'METUKR': 'METUKR', 'AKURAH': 'AKURAH', 'KARKTR': 'KARKTR', 'MONUMN': 'MONUMN', 'TIPHPT': 'TIPHPT', 'LOKASI': 'LOKASI', 'FCODE': 'FCODE', 'AKURAV': 'AKURAV', 'KLSPLR': 'KLSPLR', 'ELEVAS': 'ELEVAS', 'REMARK': 'REMARK', 'KLBADM': 'KLBADM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_NONAGRIALANG_AR_50K_1.set('fieldImages', {'AQDATE': '', 'FCODE': '', 'KLSRMP': '', 'KODATC': '', 'NAMOBJ': '', 'PUDATE': '', 'REMARK': '', 'SRS_ID': '', 'JNSPDG': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_NONAGRIHUTANKERING_AR_50K_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'JNSPHN': '', 'JNSHTN': '', 'KRPPHN': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'KLSLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TKTHTN': '', 'TIPHTN': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_NONAGRISEMAKBELUKAR_AR_50K_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSSMK': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AGRIKEBUN_AR_50K_4.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PELABUHAN_PT_50K_5.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'ADMPEL': '', 'JNSPEL': '', 'FGSPEL': '', 'PJAPEL': '', 'LAMPEL': '', 'STUPEL': '', 'KONKON': '', 'LUAS': '', 'KMXPEL': '', 'KMNPEL': '', 'STPPEL': '', 'SRPPEL': '', 'ALJPEL': '', 'REMARK': '', 'KLSPEL': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KODPEL': '', });
lyr_AIRPORT_PT_50K_6.set('fieldImages', {'KOBDMI': '', 'KDICAO': '', 'KDIATA': '', 'ELEVAS': '', 'MAVBMI': '', 'LGTBMI': '', 'KLSBMI': '', 'ADABMI': '', 'ADRBMI': '', 'REMARK': '', 'TIPAIP': '', 'TIPLOK': '', 'NAMOBJ': '', 'FCODE': '', 'KATKBM': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DERMAGA_PT_50K_7.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'PMLDRM': '', 'OPRDRM': '', 'LGTDRM': '', 'LBRDRM': '', 'LUAS': '', 'KDLDRM': '', 'KSTDRM': '', 'STRDRM': '', 'REMARK': '', 'FGSDRM': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_JALAN_LN_50K_8.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_AIRPORT_AR_50K_9.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'KOBDMI': '', 'KDICAO': '', 'KDIATA': '', 'ELEVAS': '', 'MAVBMI': '', 'LGTBMI': '', 'KATBMI': '', 'KLSBMI': '', 'ADABMI': '', 'ADRBMI': '', 'REMARK': '', 'TIPAIP': '', 'TIPLOK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'RUNWAY': '', 'PARK': '', 'LPG': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_TOPONIMI_PT_50K_10.set('fieldImages', {'FCODE': '', 'NAMOBJ': '', 'ALIAS': '', 'LOKTPN': '', 'REMARK': '', 'KLSTPN': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FTYPE': '', 'LAT': '', 'LON': '', 'KOORDY': '', 'KOORDX': '', 'KOORDINAT1': '', 'KORDINTAT2': '', 'LUAS': '', 'Elevasi': '', 'NAMLOK': '', 'NAMSPE': '', 'NAMMAP': '', 'NAMGAZ': '', 'SJHNAM': '', 'ARTINAM': '', 'ASLBHS': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'STATUS': '', });
lyr_BANGUNAN_AR_50K_11.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_BANGUNAN_PT_50K_12.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_PEMUKIMAN_AR_50K_13.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PUSKESMAS_PT_50K_14.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'SRS_ID': '', 'REMARK': '', 'METADATA': '', 'KWKPKM_': '', 'KMPPKM_': '', 'JPLPKM_': '', 'PKMKODE_': '', 'PKMKAT_': '', 'PKMLMT_': '', });
lyr_RUMAHSAKIT_PT_50K_15.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'TIPRST': '', 'JPLYRS': '', 'ALAMAT': '', });
lyr_SARANAIBADAH_PT_50K_16.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FGSIBD': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_CAGARBUDAYA_PT_50K_17.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KESEHATAN_PT_50K_18.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'REMARK': '', 'TIPSHT': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FSKADD': '', });
lyr_MAKAM_PT_50K_19.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TPMKM': '', });
lyr_NIAGA_PT_50K_20.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FUNGSI': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FGSKOD': '', 'JNSPSR': '', 'JNSTKO': '', 'JNSKTR': '', 'PRSTRP': '', });
lyr_PEMERINTAHAN_PT_50K_21.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_PENDIDIKAN_PT_50K_22.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_KONTUR_LN_50K_23.set('fieldImages', {'NAMOBJ': '', 'VALKNT': '', 'TIPKNT': '', 'IDXKNT': '', 'FCODE': '', 'JNSKNT': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_SUNGAI_LN_50K_24.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_GARISRPANTAI_LN_50K_25.set('fieldImages', {'NAMOBJ': 'TextEdit', 'DTMVER': 'TextEdit', 'KARGPN': 'TextEdit', 'FCODE': 'TextEdit', 'KODGPN': 'TextEdit', 'TIPGPN': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SUNGAI_AR_50K_26.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DANAU_AR_50K_27.set('fieldImages', {'NAMOBJ': 'TextEdit', 'OTODAN': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'VOLTAP': 'TextEdit', 'DTA': 'TextEdit', 'SEDIMN': 'TextEdit', 'VLCSDN': 'TextEdit', 'QUAAR': 'TextEdit', 'CRH': 'TextEdit', 'KPTS': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'LOKASI': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASI_LN_50K_28.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_PILARBATAS_PT_50K_29.set('fieldImages', {'IDENTF': '', 'NAMOBJ': '', 'METUKR': '', 'AKURAH': '', 'KARKTR': '', 'MONUMN': '', 'TIPHPT': '', 'LOKASI': '', 'FCODE': '', 'AKURAV': '', 'KLSPLR': '', 'ELEVAS': '', 'REMARK': '', 'KLBADM': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_NONAGRIALANG_AR_50K_1.set('fieldLabels', {'AQDATE': 'no label', 'FCODE': 'no label', 'KLSRMP': 'no label', 'KODATC': 'no label', 'NAMOBJ': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'JNSPDG': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NONAGRIHUTANKERING_AR_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'JNSPHN': 'no label', 'JNSHTN': 'no label', 'KRPPHN': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'KLSLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TKTHTN': 'no label', 'TIPHTN': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NONAGRISEMAKBELUKAR_AR_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSSMK': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRIKEBUN_AR_50K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PELABUHAN_PT_50K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'ADMPEL': 'no label', 'JNSPEL': 'no label', 'FGSPEL': 'no label', 'PJAPEL': 'no label', 'LAMPEL': 'no label', 'STUPEL': 'no label', 'KONKON': 'no label', 'LUAS': 'no label', 'KMXPEL': 'no label', 'KMNPEL': 'no label', 'STPPEL': 'no label', 'SRPPEL': 'no label', 'ALJPEL': 'no label', 'REMARK': 'no label', 'KLSPEL': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KODPEL': 'no label', });
lyr_AIRPORT_PT_50K_6.set('fieldLabels', {'KOBDMI': 'no label', 'KDICAO': 'no label', 'KDIATA': 'no label', 'ELEVAS': 'no label', 'MAVBMI': 'no label', 'LGTBMI': 'no label', 'KLSBMI': 'no label', 'ADABMI': 'no label', 'ADRBMI': 'no label', 'REMARK': 'no label', 'TIPAIP': 'no label', 'TIPLOK': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'KATKBM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_DERMAGA_PT_50K_7.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'PMLDRM': 'no label', 'OPRDRM': 'no label', 'LGTDRM': 'no label', 'LBRDRM': 'no label', 'LUAS': 'no label', 'KDLDRM': 'no label', 'KSTDRM': 'no label', 'STRDRM': 'no label', 'REMARK': 'no label', 'FGSDRM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_JALAN_LN_50K_8.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AIRPORT_AR_50K_9.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'KOBDMI': 'no label', 'KDICAO': 'no label', 'KDIATA': 'no label', 'ELEVAS': 'no label', 'MAVBMI': 'no label', 'LGTBMI': 'no label', 'KATBMI': 'no label', 'KLSBMI': 'no label', 'ADABMI': 'no label', 'ADRBMI': 'no label', 'REMARK': 'no label', 'TIPAIP': 'no label', 'TIPLOK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'RUNWAY': 'no label', 'PARK': 'no label', 'LPG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TOPONIMI_PT_50K_10.set('fieldLabels', {'FCODE': 'no label', 'NAMOBJ': 'no label', 'ALIAS': 'no label', 'LOKTPN': 'no label', 'REMARK': 'no label', 'KLSTPN': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FTYPE': 'no label', 'LAT': 'no label', 'LON': 'no label', 'KOORDY': 'no label', 'KOORDX': 'no label', 'KOORDINAT1': 'no label', 'KORDINTAT2': 'no label', 'LUAS': 'no label', 'Elevasi': 'no label', 'NAMLOK': 'no label', 'NAMSPE': 'no label', 'NAMMAP': 'no label', 'NAMGAZ': 'no label', 'SJHNAM': 'no label', 'ARTINAM': 'no label', 'ASLBHS': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'STATUS': 'no label', });
lyr_BANGUNAN_AR_50K_11.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BANGUNAN_PT_50K_12.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PEMUKIMAN_AR_50K_13.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PUSKESMAS_PT_50K_14.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', });
lyr_RUMAHSAKIT_PT_50K_15.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_SARANAIBADAH_PT_50K_16.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_CAGARBUDAYA_PT_50K_17.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KESEHATAN_PT_50K_18.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_MAKAM_PT_50K_19.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TPMKM': 'no label', });
lyr_NIAGA_PT_50K_20.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FUNGSI': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FGSKOD': 'no label', 'JNSPSR': 'no label', 'JNSTKO': 'no label', 'JNSKTR': 'no label', 'PRSTRP': 'no label', });
lyr_PEMERINTAHAN_PT_50K_21.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PENDIDIKAN_PT_50K_22.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_KONTUR_LN_50K_23.set('fieldLabels', {'NAMOBJ': 'no label', 'VALKNT': 'no label', 'TIPKNT': 'no label', 'IDXKNT': 'no label', 'FCODE': 'no label', 'JNSKNT': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_50K_24.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_GARISRPANTAI_LN_50K_25.set('fieldLabels', {'NAMOBJ': 'no label', 'DTMVER': 'no label', 'KARGPN': 'no label', 'FCODE': 'no label', 'KODGPN': 'no label', 'TIPGPN': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_AR_50K_26.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DANAU_AR_50K_27.set('fieldLabels', {'NAMOBJ': 'no label', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASI_LN_50K_28.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PILARBATAS_PT_50K_29.set('fieldLabels', {'IDENTF': 'no label', 'NAMOBJ': 'no label', 'METUKR': 'no label', 'AKURAH': 'no label', 'KARKTR': 'no label', 'MONUMN': 'no label', 'TIPHPT': 'no label', 'LOKASI': 'no label', 'FCODE': 'no label', 'AKURAV': 'no label', 'KLSPLR': 'no label', 'ELEVAS': 'no label', 'REMARK': 'no label', 'KLBADM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PILARBATAS_PT_50K_29.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});