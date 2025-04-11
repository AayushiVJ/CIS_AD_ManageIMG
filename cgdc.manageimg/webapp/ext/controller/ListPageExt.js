sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        MenuAction: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
