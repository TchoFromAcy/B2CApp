/**
 * Created by Tcho on 31/07/2018.
 */
Ext.define('B2CApp.view.main.PouleGrid', {
    extend: 'Ext.grid.Panel',
   // store:'B2Cpoule',
    controller:'main',
    reference:'poulegrid',
    xtype: 'poulegrid',
    tbar:{
        items:[
            {text:'Ajouter',
                iconCls: 'fa fa-plus',

            }, {text:'Supprimer',
                iconCls: 'fa fa-trash',
                disabled:true,


            }

        ]


    },
    selModel: {
        type: 'checkboxmodel',
        checkOnly: true,

    },
    plugins: [{
        ptype: 'rowediting',
        clicksToMoveEditor: 1,
        autoCancel: false
    }],


});