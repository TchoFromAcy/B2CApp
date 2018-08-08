/**
 * This view is an example list of people.
 */
Ext.define('B2CApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    title: 'Liste des inscrits',

    store: 'B2CInscrits',
    collapsible:true,
    selModel: {
        type: 'checkboxmodel',
        checkOnly: true
    },

width:'100%',
    columns: [
        { text: 'Nom',  dataIndex: 'nom', },
        { text: 'Prénom',  dataIndex: 'prenom' },
        { text: 'email',  dataIndex: 'email' },
        { text: 'Statut',  dataIndex: 'type', renderer: function(rec){


        return rec;
        }
        },
        { text: 'Club',  dataIndex: 'club',width:300 },
        { text: 'Dob',  dataIndex: 'dob' , renderer: function(val){
               return (Ext.Date.format(val, 'd/m/Y'));

            }},

        {text:'Sexe',dataIndex:'sexe', renderer:function(val){


                    return '<em class="fa fa-2x fa-'+(parseInt(val)==2?'male':'female')+'"></em>';


            }},
        {text:'poste', dataIndex:'poste'},
        {text:'Physique', dataIndex:'physique'},
        {text:'Tactique', dataIndex:'tactique'},

    ],
    scrollable:true,
    listeners: {
       // select: 'onItemSelected'
    }
});
