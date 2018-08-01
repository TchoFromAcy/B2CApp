/**
 * Created by Tcho on 31/07/2018.
 */
Ext.define('B2CApp.model.Poule', {
    extend: 'Ext.data.Model',
    idProperty:'id_poule',
    proxy:{type: 'APIRest',url:'http://tournoi.localhost/restAPI/poule'},
fields:[
    { name: 'id_poule', type: 'int' },
    { name: 'nom', type: 'string' },

]



});