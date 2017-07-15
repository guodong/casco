Ext.define('casco.view.auth.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onKeyEnter: function(field,e){
		if(e.getKey() == e.ENTER){
			var form = field.up('form').getForm();
			this.doLogin(form.getValues());
		}
	},

	doLogin: function(params) {
		Ext.Ajax.request({
			url: API + 'token',
			method: 'get',
			params: params,
			success: function(response){
				if (response.status != 200) {
					var d = Ext.decode(response.responseText);
					if (d && d.error)
						Ext.Msg.alert('Error', d.error);
				} else {
					var d = Ext.decode(response.responseText);
					localStorage.setItem("token", d.token);
					location.reload();
				}
			}
		});
	},

    onLoginClick: function(){
    	var view = this.getView();
    	var form = view.down("form");
    	this.doLogin(form.getValues());
    },

    onSelectClick: function(){
    	var me = this;
    	var project_id = this.getView().down('combo').getValue();
    	this.redirectTo('project/'+project_id, true);
    	location.reload();
    },

    onManage: function(){
    	this.redirectTo('manage', true);
    	location.reload();
    }
});