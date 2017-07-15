Ext.define('casco.view.documents.VersionCreate', {
    extend: 'Ext.window.Window',
    alias: 'documents.version.create',
    controller: 'documents',
    modal: true,
    title: '创建新版本',
    width: 400,

    initComponent: function() {
        var me = this;
        this.items = [{
            xtype: 'form',
            bodyPadding: '10',
            items: [{
                anchor: '100%',
                fieldLabel: '版本名称',
                name: 'name',
                msgTarget: 'under',
                xtype: 'textfield',
                allowBlank: false
            }, {
                name: 'document_id',
                xtype: 'hiddenfield',
                value: me.document.id
            }],
            buttons: ['->', {
                text: '保存',
                formBind: true,
                handler: function() {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        console.log(form.getValues())
                        var version = Ext.create('casco.model.Version', form.getValues());
                        me.document.versions().add(version);
                        me.document.versions().sync();
                        me.destroy();
                    }
                }
            }]

        }];

        this.callParent(arguments);
    },


});