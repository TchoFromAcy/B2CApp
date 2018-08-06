/**
 * Created by Tcho on 31/07/2018.
 */
Ext.define('B2CApp.model.Team', {
    extend: 'Ext.data.Model',
    idProperty:'id_team',
    proxy:{type: 'APIRest',url:'http://tournoi.localhost/restAPI/B2cTeams',api: {
            create  : 'http://tournoi.localhost/restAPI/B2cTeams/new',

        }},
    fields:[
        { name: 'id_team', type: 'int' },
        { name: 'nom', type: 'string' },
        { name: 'id_poule', type: 'int' },

    ]
});