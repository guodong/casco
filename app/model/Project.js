Ext.define('casco.model.Project', {
	extend: 'Ext.data.Model',
	fields: ['id', 'name'],
	phantom: true,
	proxy: {
		type: 'rest',
		url: API + 'projects',
		headers: {'Authorization': "bearer " + localStorage.getItem('token')},
		reader: {
			type: 'json',
			// rootProperty: 'record'
		}
	}
});