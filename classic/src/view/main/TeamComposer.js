/**
 * Created by Tcho on 30/07/2018.
 */
Ext.define('B2CApp.view.main.TeamComposer', {
    extend: 'Ext.panel.Panel',

    xtype: 'teamcomposer',

require:['B2CApp.view.main.PlayersPosition'],

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },

    items: [
        {xtype:'panel', width:'50%',layout:'accordion',id:'playersLeft', items:[
        {xtype:'playersposition', posteTitle:'Handler', flex:2,poste:1},
        {xtype:'playersposition', posteTitle:'Middle', flex:2,poste:2},
                {xtype:'playersposition', posteTitle:'Deep', flex:2,poste:3}
        ]}
    ],
    listeners:{

        activate:function(){
            Ext.getCmp('playersLeft').items.each(function(grid){
grid.setData(grid);


            });

}


    }
});