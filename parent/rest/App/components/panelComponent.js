App.PanelPrimaryComponent = Ember.Component.extend({	
	actions : {
		panelActions : function(obj) {
			
			if(obj.acao==="delete") this.send('delete');
			else
			 this.sendAction('panelActions',obj.acao);
		},
		delete:function(){
			this.toggleProperty('deleteMode');
			$('#myModal').modal('toggle')
		},
		cancelDelete:function(){
			this.set('deleteMode',false);				
		},
		confirmDelete:function(){
			$(".close").click();
			this.sendAction('panelActions','confirmDelete');
		}

	}

});