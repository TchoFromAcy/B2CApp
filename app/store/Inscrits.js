Ext.define('B2CApp.store.Inscrits', {
    extend: 'B2CApp.store.Base',
    alias: 'store.inscrits',
    APICall:'getAllUsers',
    model:'B2CApp.model.Inscrit',
    storeId:'B2CInscrits'



});
