/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('B2CApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    win: null,

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    control: {
        'poulegrid': {
            selectionchange: {
                fn: 'onSelectionChanged',
                args: ['poulegridWindows']
            }
        },
        'button[iconCls="fa fa-trash"]': {
            click: {
                fn: 'onDeleteClick',
                args: ['poulegridWindows']
            }

        },
        'button[iconCls="fa fa-plus"]': {
            click: {
                fn: 'addRecord',
                args: ['poulegridWindows']
            }

        },

        'mainlist':{
            selectionchange:{
                fn:'mainListSelectionChanged'

            }

        },

        'teamcomposer': {

            activate: {
                fn: 'setGridData'
            },

            render: function () {

                Ext.getStore('B2CInscrits').sort('nom','asc');

                var me = this;
                Ext.getStore('B2CTeams').on('update', me.teamStoreUpdate, this);

                Ext.getStore('B2CTeams').sort('nom', 'asc');
                Ext.getStore('B2CTeams').getData().each(function (rec) {

                    var grid = Ext.create({
                        xtype: 'playersposition',
                        isTeam: rec.get('id_team'),
                        collapsible: true,
                        id: 'teamComponent_' + rec.get('id_team')

                    });
                    grid.getStore().on({
                        update: {fn: me.calculateTeamValue, args: [grid]},
                        add: {fn: me.calculateTeamValue, args: [grid]},
                        remove: {fn: me.calculateTeamValue, args: [grid]},
                    });

                    Ext.getCmp('playerCenter').add(grid)
                    grid.fireEvent('update', [grid]);
                    this.calculateTeamValue(grid, grid.getStore());

                }, this);
            }

        }

    },
    setGridData: function (grid) {

        Ext.Array.each(Ext.ComponentQuery.query('playersposition'), function (grid) {

            grid.getStore().un({update: {fn: this.setGridData, scope: this}}).on({
                update: {
                    fn: this.setGridData,
                    scope: this
                }
            });

            grid.setData()
        }, this)


    },
    openGridView: function (storeId, btn) {

        var cols = [{
            dataIndex: 'nom', text: 'Nom', editor: {
                allowBlank: false,

            }
        }];

        if (storeId === 'B2CTeams') cols.push({
            dataIndex: 'id_poule', text: 'Poule', editor: {
                allowBlank: false,
                xtype: 'combobox',
                store: 'B2CPoule',
                displayField: 'nom',
                valueField: 'id_poule',
                queryMode: 'local'

            },
            renderer: function (val, rec) {
                var rec = Ext.getStore('B2CPoule').findRecord('id_poule', val);
                if (!rec) return '';

                return rec.get('nom');


            }
        });

        var win = Ext.create('Ext.window.Window', {
            title: btn.getText(),

            width: 400,
            modal: true,
            minHeight: 300,
            bodyPadding: '0 0 10 0',
            layout: 'fit',
            items: {
                xtype: 'poulegrid',
                border: false,
                reference: 'poulegridWindows',
                store: storeId,
                columns: cols


            }
        });


        win.show();

    },
    addRecord: function (reference, e) {
        var ref = this.lookupReference(reference);
        if (!ref) return;
        var store = ref.getStore();


        store.add(new store.getModel());

    },

    onSelectionChanged: function (reference, cbmodel, selected) {
        var ref = this.lookupReference(reference);
        if (!ref) return;


        var btn = Ext.ComponentQuery.query('button[iconCls="fa fa-trash"]', ref);

        if (!btn.length) return;
        btn[0].setDisabled(!selected.length);

        // console.log(this);

    },

    onDeleteClick: function (reference) {
        var ref = this.lookupReference(reference);
        if (!ref) return;

        Ext.MessageBox.confirm('Supprimer la sélection', 'Voulez-vous supprimer la sélection ?', function (btn) {
            if (btn !== 'yes') return;
            var store = ref.getStore();
            store.remove(ref.getSelection());
        });

    },

    calculateTeamValue: function (grid, store) {

        grid.setData(grid);

        var dataStats = {
            handler: 0,
            middle: 0,
            deep: 0,
            technique: 0,
            physique: 0,
            num: 0,
            male: 0,
            female: 0


        }
        store.getData().each(function (rec) {

            var poste = rec.get('poste').split(',');

            if (Ext.Array.indexOf(poste, '1') > -1) dataStats.handler++;
            if (Ext.Array.indexOf(poste, '2') > -1) dataStats.middle++;
            if (Ext.Array.indexOf(poste, '3') > -1) dataStats.deep++;

            dataStats.physique += rec.get('physique');
            dataStats.technique += rec.get('technique');
            if (rec.get('sexe') === 1) dataStats.female++;
            else dataStats.male++;

            dataStats.num++;


        });

        dataStats.physique = dataStats.physique / dataStats.num;
        dataStats.technique = dataStats.technique / dataStats.num;
        var rec = Ext.getStore('B2CTeams').findRecord('id_team', grid.isTeam);


        grid.setTitle(rec.get('nom') + '<div class="teamStats"><span><em class="fa fa-users"></em> ' + dataStats.num + '</span><span><em class="fa fa-male"></em> ' + dataStats.male + '</span>'+

            '<span><em class="fa fa-female"></em> ' + dataStats.female + '</span>'
            + '<span>H :  ' + dataStats.handler + '</span>'
            + '<span>M :  ' + dataStats.middle + '</span>'
            + '<span>D :  ' + dataStats.deep + '</span>'
            + '<span>Phy. :  ' + (isNaN(dataStats.physique)?0:dataStats.physique.toFixed(2)) + '</span>'
            + '<span>Tech. :  ' + (isNaN(dataStats.technique)?0:dataStats.technique.toFixed(2)) + '</span>'
            +'</div>');

    },

    teamStoreUpdate: function (store, rec) {


        var grid = Ext.getCmp('teamComponent_' + rec.get('id_team'));

        this.calculateTeamValue(grid, grid.getStore());


    },

    mainListSelectionChanged:function(grid, selection){

        Ext.getCmp('btnExport').setDisabled(!selection.length);
        if(!selection.lenth) return;

    var params='';
Ext.Array.each(selection, function(sel){
   params+='&inscr[]='+sel.getId()

});


        Ext.getCmp('btnExport').setHref(B2CApp.class.Globals.siteURL+'/admin/ajax?apiCall=exportInscriptions&format=json'+params);



    }

});
