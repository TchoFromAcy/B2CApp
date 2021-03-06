/**
 * Created by Tcho on 30/07/2018.
 */
Ext.define('B2CApp.view.main.TeamComposer', {
    extend: 'Ext.panel.Panel',

    xtype: 'teamcomposer',

    require: ['B2CApp.view.main.PlayersPosition', 'B2CApp.view.main.TeamView','B2CApp.view.main.TeamDetail'],

    layout: {
        type: 'border',

    },

    defaults:{
        bodyPadding:0

    },

    items: [
        {
            xtype: 'panel',width:'50%', layout: 'accordion', id: 'playersLeft',region:'west', items: [
                {xtype: 'playersposition', posteTitle: 'Handler', flex: 2, poste: 1},
                {xtype: 'playersposition', posteTitle: 'Middle', flex: 2, poste: 2},
                {xtype: 'playersposition', posteTitle: 'Deep', flex: 2, poste: 3}
            ]
        },
        {xtype:'teamview',width:'50%', region:'center', id:'playerCenter', layout: 'accordion',}
    ],

});