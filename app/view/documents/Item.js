Ext.define('casco.view.documents.Item', {
    extend: 'Ext.grid.Panel',
    xtype: 'item',
    initComponent: function() {
        var me = this;
        me.tbar = [{
            xtype: 'combobox',
            //id: 'docv-' + me.document.id,
            fieldLabel: '版本',
            labelWidth: 30,
            store: me.document.versions(),
            displayField: 'name',
            valueField: 'id',
            width: 200,
            queryMode: 'local',
            editable: false,
            listeners: {
                select: function(combo, record) {
                    me.store = record.items();
                    me.store.load();
                    
                    // me.curr_version = record;
                    // Ext.Ajax.request({
                    //     url: API + 'rs', params: {
                    //         version_id: record.get('id')
                    //     }, method: 'get', async: false, callback: function(options, success, response) {
                    //         me.json = new Ext.util.JSON.decode(response.responseText);
                    //     }
                    // });
                    // me.ds = new Ext.data.JsonStore({
                    //     data: me.json.data,
                    //     fields: me.json.fieldsNames
                    // });
                    // me.columns = me.json.columModle;
                    // me.store.setData(me.ds.getData());
                    // me.reconfigure(me.store, me.columns); //用columns 对grid panel 重载
                
                },
                // beforequery: function(e) {
                //     e.query = new RegExp(e.query.trim(), 'i'); //去除string两端空格
                //     e.forceAll = true;
                // }
            }
        }, {
            text: '新建版本',
            scope: this,
            handler: function() {
                var win = Ext.create('documents.version.create', {
                    document: me.document,
                });
                win.show();
            }
        }];

        me.document.versions().load({
            params: {
                document_id: me.document.id
            },
            callback: function() {
                me.down('combobox').select(me.document.versions().getAt(0));  //取最近的版本
                me.store = me.document.versions().getAt(0).items();
                me.store.load({
                    params: {
                        version_id: me.document.versions().getAt(0).id
                    }
                });
                // var latest_v = me.versions.getCount() > 0 ? me.versions.getAt(0) : 0;
                // me.curr_version = latest_v;
                // if (latest_v) {
                //     // me.store_rs.load({
                //     //     scope: this,
                //     //     synchronous: true,
                //     //     params: {
                //     //         version_id: latest_v.get('id')
                //     //     },
                //     //     callback: function() {
                //     //         me.columns = me.store_rs.getAt(0).get('columModle');
                //     //         me.ds = new Ext.data.JsonStore({
                //     //             data: (me.store_rs.getAt(0).get('data')),
                //     //             fields: (me.store_rs.getAt(0).get('fieldsNames'))
                //     //         });
                //     //         me.store_rs.setData(me.ds.getData());
                //     //         me.reconfigure(me.store_rs, me.columns);
                //     //
                //     //     }
                //     // });
                // }
            }
        });
        this.callParent();
    }
});