Ext.define('casco.model.Version', {
	extend: 'Ext.data.Model',
	proxy: {
		type: 'rest',
		url: API + 'versions',
		headers: {'Authorization': "bearer " + localStorage.getItem('token')},
	},
	hasMany: {
		name: 'items',
		model: 'casco.model.Item'
	}
});