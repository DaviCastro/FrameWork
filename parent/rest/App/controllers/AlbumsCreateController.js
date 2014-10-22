App.AlbumsCreateController = Ember.ObjectController.extend({
	content: {},
	actions:{
		salvar:function(){
			var album = this.store.createRecord('album', this.get('model'));
			album.save();
			this.transitionToRoute('album',album);
			
		},
		
	}
	
});