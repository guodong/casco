Ext.define('casco.view.archives.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'app.archives.list',


    columns: [{
        text: "归档名",
        dataIndex: "name",
        width: 150
    },{
        text: "创建时间",
        dataIndex: "description",
    }],
    initComponent: function() {
        var me = this;
        me.tbar = [{
            text: '新建归档',
            scope: this,
            handler: function() {
                var win = Ext.create('documents.version.create', {
                    document: me.document,
                });
                win.show();
            }
        }];
        
        this.callParent();

    }
});