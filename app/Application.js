/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('B2CApp.Application', {
    extend: 'Ext.app.Application',

    name: 'B2CApp',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    requires:[
        'B2CApp.proxy.Rest',
        'B2CApp.class.Globals',
    ],
    stores: [
        'B2CApp.store.Inscrits',
        'B2CApp.store.Teams',
        'B2CApp.store.Poule'
    ],
    models:[
        'B2CApp.model.Inscrit'

    ],
APIUrl:'http://tournoi.localhost/restAPI/',
    launch: function () {
        // TODO - Launch the application


    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
