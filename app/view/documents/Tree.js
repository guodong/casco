Ext.define('casco.view.documents.Tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'app-documents-tree',
    // requires: ['casco.view.tc.Tc', 'casco.view.rs.Rs'],
    controller: 'documents',
    ctxMenu: Ext.create('Ext.menu.Menu', {
        controller: 'documents',
        items: [{
            itemId: 'add',
            text: '新建',
            menu: {
                items: [{
                    text: '新建RS文档',
                    attr: 'rs',
                    handler: 'onAdd'
                }, {
                    text: '新建TC文档',
                    attr: 'tc',
                    handler: 'onAdd'
                }, {
                    text: '新建文件夹',
                    attr: 'folder',
                    handler: 'onAdd'
                }]
            }
        }, {
            itemId: 'edit',
            handler: 'onEdit',
            text: '重命名'
        }, {
            itemId: 'delete',
            handler: 'onDelete',
            text: '删除'
        }]
    }),
    listeners: {
        itemdblclick: function(view, record, item, index, e, eOpts) {
            var me = this;
            if (!record.get('leaf')) return;
            var tabs = Ext.getCmp('docgrid');
            var tab = tabs.child('#tab-' + record.get('id'));
            if (tab) {
                tabs.remove(tab);
            }

            casco.model.Document.load(record.get('id'), {
                success: function(record) {
                    tab = tabs.add({
                        id: 'tab-' + record.get('id'),
                        xtype: 'item',
                        title: record.get('name'),
                        document: record,
                        closable: true,
                    });
                    tabs.setActiveTab(tab);
                }
            });
        },//itemdbclick
        itemcontextmenu: function(view, record, element, index, evtObj) {

            evtObj.stopEvent();
            var ctxMenu = this.ctxMenu;

            ctxMenu.showAt(evtObj.getXY());
            view.select(record);
        }
    },//listeners
    displayField: 'name',
    rootVisible: true,

    initComponent: function() {
        var me = this;
        this.store = Ext.create('casco.store.TreeDocuments', {
            proxy: {
                extraParams: {
                    project_id: me.project ? me.project.get('id') : ''
                }
            }
        });
        this.callParent();
    }
});