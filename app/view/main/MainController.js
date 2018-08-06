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
        'teamcomposer':{

            activate:{fn:'setGridData'
            },
            render:function(){
                

                Ext.getStore('B2CTeams').sort('nom','asc');
                Ext.getStore('B2CTeams').getData().each(function(rec){

                    var grid=Ext.create({xtype:'playersposition', isTeam:   rec.get('id_team'), collapsible:true, title:rec.get('nom')});
    Ext.getCmp('playerCenter').add(grid)

                });
            }

        }

    },
setGridData:function (grid) {

    Ext.Array.each(Ext.ComponentQuery.query('playersposition'), function(grid){
        grid.setData(grid);
        console.log('update', grid);
    })



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

        console.log(cols);
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

        console.log(ref, ref.getSelection());
        Ext.MessageBox.confirm('Supprimer la sélection', 'Voulez-vous eupprimer la sélection ?', function (btn) {
            if (btn !== 'yes') return;
            var store = ref.getStore();
            store.remove(ref.getSelection());
        });

    }
});
