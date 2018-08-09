/**
 * This view is an example list of people.
 */
Ext.define('B2CApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    title: 'Liste des inscrits',

    store: 'B2CInscrits',
    collapsible: true,
    selModel: {
        type: 'checkboxmodel',
        checkOnly: true
    },

    width: '100%',
    columns: [
        {text: 'Nom', dataIndex: 'nom',},
        {text: 'Prénom', dataIndex: 'prenom'},
        {text: 'email', dataIndex: 'email'},
        {
            text: 'Type', dataIndex: 'type', renderer: function (val) {


                switch (val) {

                    case 1:
                        return 'Joueur'
                        break;
                    case 2 :
                        return 'Accompagnant'
                        break;
                    case 4:
                        return 'liste d\'attente';
                        break;


                }

                return val;
            },
            editor: {
                allowBlank: true,
                xtype: 'combo',
                store: {data: [{'label': 'Joueur', value: 1}, {'label': 'Accompagnant', value: 2}]},
                displayField: 'label',
                valueField: 'value'

            }


        },

        {
            text: 'Statut', dataIndex: 'confirm', renderer: function (val) {


                return val;
            },
            editor: {
                allowBlank: true,
                xtype: 'numberfield',
                minValue: -1,
                maxValue: 4

            }


        },

        {text: 'Club', dataIndex: 'club', },
        {
            text: 'Dob', dataIndex: 'dob', renderer: function (val) {
                return (Ext.Date.format(val, 'd/m/Y'));

            },
            editor:{
                xtype: 'datefield',
                anchor: '100%',
                format: 'd/m/Y',

            }
        },

        {
            text: 'Sexe', dataIndex: 'sexe', renderer: function (val) {


                return '<em class="fa fa-2x fa-' + (parseInt(val) == 2 ? 'male' : 'female') + '"></em>';


            }
        },
        {
            text: 'Welcome', dataIndex: 'party',
            renderer: function (val) {

                if (val !== 1) return;
                return '<em class="fa fa-2x fa-check"></em>';


            }
        },


        {text: 'poste', dataIndex: 'poste'},
        {
            text: 'Physique', dataIndex: 'physique', editor: {
                allowBlank: true,
                xtype: 'numberfield',
                minValue: 0,
                maxValue: 10

            }
        },
        {
            text: 'Technique', dataIndex: 'technique', editor: {
                allowBlank: true,
                xtype: 'numberfield',
                minValue: 0,
                maxValue: 10

            }
        },

        {text: 'Régime', dataIndex: 'regime'},
        {text: 'Commentaires', dataIndex: 'comment', editor:{
            allowBlank:true,
                xtype:'textarea'

            }},

        {
            text: 'Payé', dataIndex: 'payed', editor: {
                xtype: 'combo',
                store: {data: [{'label': 'Payé', value: 1}, {'label': 'En attente', value: -1}]},
                displayField: 'label',
                valueField: 'value'

            },
            renderer: function (val) {


                return '<em class="fa fa-2x fa-' + (val==1 ? 'check' : 'times') + '"></em>';


            }
        },

    ],
    //  scrollable:true,
    plugins: [{
        ptype: 'rowediting',
        clicksToMoveEditor: 1,
        autoCancel: false
    }],

    listeners: {
        // select: 'onItemSelected'
    }
});
