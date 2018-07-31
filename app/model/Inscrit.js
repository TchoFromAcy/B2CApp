Ext.define('B2CApp.model.Inscrit', {
    extend: 'Ext.data.Model',
idProperty:'id_inscription',
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
        {name:'sexe', type:'string', convert:function(value){

            return '<em class="fa fa-2x fa-'+(parseInt(value)==2?'male':'female')+'"></em>';

            }}


    ]
});
