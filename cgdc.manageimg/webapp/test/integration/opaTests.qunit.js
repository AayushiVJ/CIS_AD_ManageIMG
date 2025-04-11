sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cgdc/manageimg/test/integration/FirstJourney',
		'cgdc/manageimg/test/integration/pages/xCGDCxC_CONFIGIMG_TPList',
		'cgdc/manageimg/test/integration/pages/xCGDCxC_CONFIGIMG_TPObjectPage'
    ],
    function(JourneyRunner, opaJourney, xCGDCxC_CONFIGIMG_TPList, xCGDCxC_CONFIGIMG_TPObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cgdc/manageimg') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThexCGDCxC_CONFIGIMG_TPList: xCGDCxC_CONFIGIMG_TPList,
					onThexCGDCxC_CONFIGIMG_TPObjectPage: xCGDCxC_CONFIGIMG_TPObjectPage
                }
            },
            opaJourney.run
        );
    }
);