/**
 * Created by Tcho on 31/07/2018.
 */
Ext.define('B2CApp.store.Poule', {

    extend: 'B2CApp.store.Base',
    alias: 'store.poule',
    proxy: 'APIRest',
    APICall:'getPoules',
    model:'B2CApp.model.Poule',
    storeId:'B2Cpoule'
});