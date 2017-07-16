Ext.define('casco.view.main.Content', {
    extend: 'Ext.tab.Panel',
    xtype: 'content',

    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    headerPosition: 'left',
    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    defaults: {
        // bodyPadding: 10,
    },
    initComponent: function() {console.log(casco.getApplication().project)
        this.items = [{
            title: '文档',
            iconCls: 'fa-file',
            xtype: 'app-documents',
            project: this.project
        }, {
            title: '归档',
            iconCls: 'fa-server',
            xtype: 'app.archives.main'
        },{
            title: '结构',
            iconCls: 'fa-share-alt',
            // The following grid shares a store with the classic version's grid as well!
            html: '<iframe id="draw" src="/draw/demo.html?'+'&_d='+Date.parse(new Date())+'" style="width:100%;height:100%;border:0"></iframe>'
        },  {
            title: '测试',
            iconCls: 'fa-rocket',
            bind: {
                html: '{loremIpsum}'
            }
        }, {
            title: 'Matrix',
            iconCls: 'fa-recycle',
            bind: {
                html: '{loremIpsum}'
            }
        }, {
            title: '报表',
            iconCls: 'fa-bar-chart'
        }];
        this.callParent();
    }
});