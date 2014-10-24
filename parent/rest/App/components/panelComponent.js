App.PanelPrimaryComponent = Ember.Component.extend({	
	actions : {
		panelActions : function(obj) {
			 this.sendAction('panelActions',obj.acao);
		}
	}

});