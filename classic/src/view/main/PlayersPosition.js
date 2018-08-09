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

    columns:[

        { text: 'Nom',  dataIndex: 'nom', },
        { text: 'Prénom',  dataIndex: 'prenom' },
        { text: 'Club',  dataIndex: 'club' },
        { text: 'Physique',  dataIndex: 'physique', editor:{
            allowBlank:true,
                xtype:'numberfield',
                minValue:0,
                maxValue:10

            } },
        { text: 'Technique',  dataIndex: 'technique',editor:{
                allowBlank:true,
                xtype:'numberfield',
                minValue:0,
                maxValue:10

            }  },
        { text: 'Sexe',  dataIndex: 'sexe',renderer:function(val){


                return '<em class="fa fa-2x fa-'+(parseInt(val)==2?'male':'female')+'"></em>';


            } },
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
console.log(this.isTeam)
var data =Ext.Array.filter( store.getData().items,function(it, index) {

    if(Ext.isEmpty(it.get('poste'))||it.get('id_team')>0&&!this.isTeam||it.get('confirm')!==1)return false;

    if(!this.isTeam) {
        var poste = it.get('poste').split(',');


        return Ext.Array.indexOf(poste, this.poste.toString()) > -1;
    }else return(this.isTeam===it.get('id_team'));


}, this);

        this.getStore().setData(data);
        this.getStore().sort('nom','asc')
if(!this.isTeam)this.getHeader().setTitle(this.getPosteName()+ ' ('+data.length+')');

    },
    getPosteName:function(){
        return this.posteTitle;

    },



});