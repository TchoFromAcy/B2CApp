/**
 * Created by Tcho on 31/07/2018.
 */
Ext.define('B2CApp.view.main.PouleGrid', {
    extend: 'Ext.grid.Panel',
    store:'B2Cpoule',

    xtype: 'poulegrid',
    plugins: [{
        ptype: 'rowediting',
        clicksToMoveEditor: 1,
        autoCancel: false
    }],

    columns:[{dataIndex:'nom', text:'Libellé',  editor: {
            allowBlank: false,

        }}]
});