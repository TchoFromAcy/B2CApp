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
        'B2CApp.proxy.Rest'
    ],
    stores: [
        'B2CApp.store.Inscrits'
    ],
    models:[
        'B2CApp.model.Inscrit'

    ],

    launch: function () {
        // TODO - Launch the application
        console.log(this, B2CApp.getApplication());

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
