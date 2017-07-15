/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'casco.Application',

    name: 'casco',

    requires: [
        // This will automatically load all classes in the casco namespace
        // so that application classes do not need to require each other.
        'casco.*'
    ],

    // The name of the initial view to create.
    //mainView: 'casco.view.main.Main'
});
