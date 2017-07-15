//主界面Head-样式，按钮，Controller-main.MainController
Ext.define('casco.view.main.Top', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'top',
    controller: 'main',
    style: {background: '#167abc', padding: '10px', color: '#fff'},

    initComponent: function() {
        var store = Ext.create('casco.store.Projects');
        store.load({
            params: {
                // user_id: JSON.parse(localStorage.user).id
            }
        });
//    	console.log(me.project);
        var states = Ext.create('Ext.data.Store', {
            fields: ['abbr', 'name'],
            data: [
                {"abbr": "EditInfo", "name": "1"},
                {"abbr": "Logout", "name": "2"}
            ]
        });

        this.items = [{
            xtype: 'label',
            html: '卡斯科测试系统V2.0',
            style: {'font-size': '27px', 'font-weight': 'bold'}
        }, '->', {
            text: 'Manage',
            xtype: 'button',
            handler: 'manage',
            //hidden: JSON.parse(localStorage.user).role_id == 0 ? true: false
        }, {
            xtype: 'combobox',
            editable: false,
            displayField: 'name',
            valueField: 'id',
            store: store,
            queryMode: 'local',
            itemId: 'switcher',	//ManageController使用
            emptyText: 'Switch Project',
            listeners: {
                select: 'switchProject'
            }
        }, {
            xtype: 'combobox',
            editable: false,
            displayField: 'abbr',
            valueField: 'name',
            store: states,
            width: '10%',
            queryMode: 'local',
            //emptyText: JSON.parse(localStorage.user).realname,
            listeners: {
                select: 'editUser'
            }
        }];
        this.callParent();
    }

})