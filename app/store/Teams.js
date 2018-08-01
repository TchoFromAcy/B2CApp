/**
 * Created by Tcho on 31/07/2018.
 */
Ext.define('B2CApp.store.Teams', {
    extend: 'B2CApp.store.Base',
    alias: 'store.team',
    APICall:'getTeams',
    model:'B2CApp.model.Team',
    storeId:'B2CTeams'
});