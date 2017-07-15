/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('casco.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes : {
        'projects' : 'onProjects'
    },

    switchProject : function(combo, record) {
        this.redirectTo('projects/' + record.get('id'));
        // location.reload();  //否则组件重复注册 可考虑局部刷新？？ Viewport创建一次，必须Refresh
    },
});
