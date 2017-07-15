Ext.define('casco.store.Versions', {
    extend: 'Ext.data.Store',
    model: 'casco.model.Version',
    proxy: {
        type: 'rest',
        url: API+'versions',
        headers: {'Authorization': "bearer " + localStorage.getItem('token')},
        reader: {
            type: 'json',
        },
        writer: {
            type: 'json'
        }
    }
});