Ext.define('casco.view.documents.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-documents',
    requires: [
        'Ext.plugin.Viewport',
        // 'casco.view.main.MainController',
        // 'casco.view.main.MainModel',
        // 'casco.view.manage.Versions',
        // 'casco.model.Version'
    ],
    layout: {
        type: 'border'
    },



    initComponent: function() {
        this.items = [{
            title: '文档树',
            region: 'west',
            width: 200,
            split: true,
            collapsible: true,
            xtype: 'app-documents-tree',
            project: this.project,
            id: 'mtree'
        }, {
            // title: '结构',
            region: 'center',
            xtype: 'tabpanel',
            id: 'docgrid'
        }];
        // var me = this;
        // var store = Ext.create('casco.store.TreeDocuments', {
        //     proxy: {
        //         extraParams: {
        //             project_id: me.project.get('id')
        //         }
        //     }
        // });
        // me.items = [{
        //     region: 'north',
        //     xtype: 'top',
        //     reference:'top',
        //     project: me.project
        // },{
        //     xtype: 'tree',
        //     id: 'mtree',
        //     store: store,
        //     title: me.project.get('name'),
        //     project: me.project,
        //     region: 'west',
        //     width: 200,
        //     split: true,
        //     collapsible: true,
        //     editable: false,
        //     bodyPadding: 0
        // },{
        //     region: 'center',
        //     xtype: 'tabpanel',
        //     title: '',
        //     reference: 'rightpanel',
        //     id: 'workpanel',
        //     items:[{
        //         title: 'Overview',
        //         html: '<iframe  src="/draw/noedit.html?'+me.project.get('id')+'" style="width:100%;height:100%;border:0"></iframe>'
        //     }]
        // }];
        this.callParent();

    }
});