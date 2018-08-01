/**
 * Created by Tcho on 30/07/2018.
 */
Ext.define('B2CApp.proxy.Rest', {

    extend:'Ext.data.proxy.Rest',
    alias:'proxy.APIRest',
    url: 'http://tournoi.localhost/restAPI',
    format: 'json',
    autoSync:true,

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
        transform:function(data){



            console.log(data);
            if(!data.success) Ext.Msg.alert('Erreur', '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Une erreur est survenue lors de l\'appel'+(data.data.error?'<br /><strong>'+data.data.error+'</strong>':''), Ext.emptyFn);
            
            return data;

        }

    }
});