Ext.define('casco.model.Token', {
    extend: 'casco.model.Base',
	
    proxy: {
        type: 'rest',
        url: API + 'role'
    }
});