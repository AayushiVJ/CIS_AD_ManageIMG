sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'cgdc.manageimg',
            componentId: 'xCGDCxC_CONFIGIMG_TPObjectPage',
            contextPath: '/xCGDCxC_CONFIGIMG_TP'
        },
        CustomPageDefinitions
    );
});