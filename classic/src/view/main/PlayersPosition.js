/**
 * Created by Tcho on 30/07/2018.
 */
Ext.define('B2CApp.view.main.PlayersPosition', {
    extend: 'Ext.grid.Panel',
    xtype: 'playersposition',
    store: {
       // type: 'inscrits'
    },

    listeners:{

    },
    bodyPadding:'0 20',
    columns:[

        { text: 'Nom',  dataIndex: 'nom', },
        { text: 'Prénom',  dataIndex: 'prenom' },
        { text: 'Club',  dataIndex: 'club' },
        { text: 'Physique',  dataIndex: 'physique' },
        { text: 'Technique',  dataIndex: 'technique' },
        { text: 'Sexe',  dataIndex: 'sexe' },

    ],
    setData:function(grid){
        var store=Ext.getStore('B2CInscrits');

var data =Ext.Array.filter( store.getData().items,function(it, index) {
var poste=it.get('poste').split(',');


    return Ext.Array.indexOf(poste,grid.poste.toString())>-1;


});


grid.getHeader().setTitle(grid.getPosteName()+ ' ('+data.length+')')
        grid.getStore().setData(data);
    },
    getPosteName:function(){
        return this.posteTitle;

    }
});