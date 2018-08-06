/**
 * Created by Tcho on 30/07/2018.
 */
Ext.define('B2CApp.view.main.PlayersPosition', {
    extend: 'Ext.grid.Panel',
    xtype: 'playersposition',
    isTeam:false,
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
        { text: 'Poste',  dataIndex: 'poste' },
        {text:'equipe', dataIndex:'id_team',editor: {
                allowBlank: true,
                xtype: 'combobox',
                store: 'B2CTeams',
                displayField: 'nom',
                valueField: 'id_team',
                queryMode: 'local'

            },
            renderer: function (val, rec) {


                var rec = Ext.getStore('B2CTeams').findRecord('id_team', val);
                if (!rec) return '';

                return rec.get('nom');


            }}

    ],
    plugins: [{
        ptype: 'rowediting',
        clicksToMoveEditor: 1,
        autoCancel: false
    }],
    setData:function(grid){
        var store=Ext.getStore('B2CInscrits');

var data =Ext.Array.filter( store.getData().items,function(it, index) {

    if(Ext.isEmpty(it.get('poste'))||it.get('id_team')>0&&!grid.isTeam)return false;

    if(!grid.isTeam) {
        var poste = it.get('poste').split(',');


        return Ext.Array.indexOf(poste, grid.poste.toString()) > -1;
    }else return(grid.isTeam===it.get('id_team'));


});


if(!grid.isTeam)grid.getHeader().setTitle(grid.getPosteName()+ ' ('+data.length+')')
        grid.getStore().setData(data);
    },
    getPosteName:function(){
        return this.posteTitle;

    },



});