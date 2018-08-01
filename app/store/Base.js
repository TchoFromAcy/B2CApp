/**
 * Created by Tcho on 30/07/2018.
 */
Ext.define('B2CApp.store.Base', {
    extend: 'Ext.data.Store',
    alias:'store.base',
    APICall:'',
    proxy: 'APIRest',
    autoLoad:true,
    autoSync:true,
    listeners: {
        beforeload: function () {

            this.getProxy().setExtraParams({APICall:this.APICall})


        }, update:function(store, rec, operation){
console.log(rec, operation);

if(operation!=='commit'){
    rec.commit();
    store.sync();
    rec.save();
}

        }

    }
});