/**
 * Created by Tcho on 30/07/2018.
 */
Ext.define('B2CApp.proxy.Rest', {

    extend:'Ext.data.proxy.Rest',
    alias:'proxy.APIRest',
    url: 'http://tournoi.localhost/restAPI',
    format: 'json',

    method:'post',
    useDefaultXhrHeader:false,
    actionMethods:{
        create: 'POST',
        read: 'GET',
        update: 'PUT',
        destroy: 'DELETE'
    }
    ,
    reader: {
        type: 'json',
        rootProperty: 'data',

    }
});