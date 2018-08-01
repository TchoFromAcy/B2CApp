/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('B2CApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },


    OpenPouleView:function(e){

        console.log(arguments);
        Ext.create('Ext.window.Window', {
            title: 'Hello',

            width: '50%',
            modal:true,
            minHeight:300,
            bodyPadding:'0 0 10 0',
            layout: 'fit',
            items: {
                xtype: 'poulegrid',
                border: false,

            }
        }).show();



    }
});
