
/**
 * Created by Tcho on 31/07/2018.
 */
Ext.define('B2CApp.view.main.TeamView', {
    extend: 'Ext.panel.Panel',
    xtype:'teamview',
    controller:'main',
    layout:'fit',
    bodyPadding:'0 20',
    margin:15,
    tbar: {
        items: [{ text: 'Gestion des poules',
            iconCls: 'fa fa-cog',
            listeners:{
            click:'OpenPouleView'

            }


        },]
    },

    items: [
        {
            html:'ok'


        }
        /* include child components here */
    ]
});