/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('casco.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'casco.view.main.MainController',
        'casco.view.main.MainModel',
    ],

    controller: 'main',
    viewModel: 'main',
    // plugins: 'viewport',
    layout: {
        type: 'border'
    },

    initComponent: function() {
        this.items = [{
            region: 'north',
            xtype: 'top',
            reference:'top'
        }, {
            region: 'center',
            xtype: 'content',
            title: '123',
            reference: 'rightpanel',
            id: 'workpanel',
            project: this.project
        }];
        this.callParent();
    },

});
