Ext.define('casco.model.Document', {
	extend: 'Ext.data.Model',
	fields : [{
		name: 'leaf',
		convert : function(value, record) {
			return record.get('type') == 'rs' || record.get('type') == 'tc';
		}
	}],
	proxy: {
		type: 'rest',
		url: API + 'documents',
		headers: {'Authorization': "bearer " + localStorage.getItem('token')}
	},
	hasMany: {
		model: 'casco.model.Version',
		name: 'versions'
	}
});