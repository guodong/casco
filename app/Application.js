/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('casco.Application', {
    extend: 'Ext.app.Application',

    name: 'casco',

    routes: {
        'projects/:id': {
            action: 'onProjects'
        },
        'selectProject': {
            before: 'onBeforeSelect',
        },
        'manage': {
            action: 'onSelect',
            //before: 'onBeforeManage',
            action: 'onManage'
        },
        'vat/:id': {
            //before: 'onBeforeVat',
            action: 'onVat'
        },
        'matrix/:id': {
            //before: 'onBeforeMatrix',
            action: 'onMatrix',
        },
        'report/:id': {
            //before: //'onBeforeReport',
            action: 'onReport',
        },
        'testing/:id': {
            //before: 'onBeforeTesting',
            action: 'onTest'
        }
    },

    onProjects: function(id) {
        var me = this;
        casco.model.Project.load(id, {
            success: function(project) {
                me.project = project;
                Ext.widget('app-main', {project: project});
            }
        });
    },

    launch: function() {
        var loggedIn;
        var projects = Ext.create('casco.store.Projects');
        projects.load();
        this.projects = projects;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("token");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        // Ext.create({
        //     xtype: loggedIn ? 'app-main' : 'login'
        // });
    }
});
