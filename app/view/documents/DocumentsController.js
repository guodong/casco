Ext.define('casco.view.documents.DocumentsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.documents',

    onDelete: function() {
        Ext.Msg.confirm('确认', '确认要删除吗?', function(buttonId) {
            if (buttonId == 'yes') {
                var tree = Ext.getCmp('mtree');
                tree.getSelection()[0].erase();
            }
        });
    },
    onAdd: function(button) {
        var tree = Ext.getCmp('mtree');
        var name = 'Untitled';
        var leaf = true;
        switch (button.attr) {
            case 'rs':
                name = 'Rs';
                break;
            case 'tc':
                name = 'Tc';
                break;
            default:
                name = 'Folder';
                leaf = false;
                break;
        }
        var model = Ext.create('casco.model.Document', {name: name, leaf: leaf, type: button.attr});
        tree.getSelection()[0].appendChild(model);
        tree.getSelectionModel().select(model);
        tree.getStore().sync();
    },
    createVersion: function() {
        var view = this.getView();
        var form = this.lookupReference('methodaddform');
        var method = view.method?view.method:Ext.create('casco.model.Testmethod');
        method.set(form.getValues());
        Ext.MessageBox.buttonText.ok = '确认';
        method.save({
            callback: function(){
                Ext.Msg.alert('成功', '测试方法已更新！', function(){
                    var t = Ext.ComponentQuery.query("#tab-testmethod")[0];//基于属性ID进行检索
                    if(!view.method)t.store.add(method);
                    form.up("window").destroy();//销毁整个窗口
                });
            }
        });
    }

});