Ext.define('casco.store.Projects', {
    extend: 'Ext.data.Store',
    model: 'casco.model.Project',
    pageSize: 0,
    //autoLoad : true,
    proxy: {
        type: 'rest',
        url: API + 'projects',
        headers: {'Authorization': "bearer " + localStorage.getItem('token')}
    }
});