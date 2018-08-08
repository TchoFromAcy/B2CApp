Ext.define('B2CApp.model.Inscrit', {
    extend: 'Ext.data.Model',
idProperty:'id_inscription',
    proxy:{type: 'APIRest',url:B2CApp.class.Globals.APIUrl+'Tournoi',api: {
            create  : B2CApp.class.Globals.APIUrl+'Tournoi/new',

        }},
    fields: [
        { name: 'id_inscription', type: 'int' },
        { name: 'nom', type: 'string' },
        { name: 'prenom', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'date', type: 'auto' },
        {name:'club',type:'string'},
        { name: 'dob', type: 'date',format:'Y-m-d'},
        {name:'physique', type:'int'},
        {name:'technique', type:'int'},
        {name:'sexe', type:'string'},
        {name:'id_team', type:'int'}


    ]
});
