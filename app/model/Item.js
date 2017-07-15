Ext.define('casco.model.Item', {
	extend: 'Ext.data.Model',
	proxy: {
		type: 'rest',
		url: API + 'items',
		headers: {'Authorization': "bearer " + localStorage.getItem('token')}
	}
});