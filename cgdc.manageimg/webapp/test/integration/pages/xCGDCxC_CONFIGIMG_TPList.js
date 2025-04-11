sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'cgdc.manageimg',
            componentId: 'xCGDCxC_CONFIGIMG_TPList',
            contextPath: '/xCGDCxC_CONFIGIMG_TP'
        },
        CustomPageDefinitions
    );
});