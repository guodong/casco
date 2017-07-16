Ext.define('casco.view.testings.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app.testing.main',
    
    layout: {
        type: 'border'
    },



    initComponent: function() {
        this.items = [{
            title: 'ce',
            region: 'center',
            split: true,
            collapsible: true,
            xtype: 'app.archives.list',
        }, {
            region: 'east',
            width: 400,
            split: true,
            collapsible: true,
            xtype: 'gridpanel',
        }];
        
        this.callParent();

    }
});