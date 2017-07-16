Ext.define('casco.view.archives.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app.archives.main',
    
    layout: {
        type: 'border'
    },



    initComponent: function() {
        this.items = [{
            title: '归档',
            region: 'west',
            split: true,
            collapsible: true,
            width: 300,
            xtype: 'app.archives.list',
        }, {
            region: 'center',
            xtype: 'tabpanel',
            items: [{
                'title': '文档列表'
            }, {
                'title': '结构关系'
            }, {
                'title': '测试'
            },{
                'title': 'Matrix'
            }, {
                'title': '统计'
            }]
        }];
        
        this.callParent();

    }
});