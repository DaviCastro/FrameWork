App.AlbumEditController = Ember.ObjectController.extend({
	
	arrayActions : [Em.Object.create({name: 'Save'},{action:'save'}),Em.Object.create({name: 'Cancel'},{action:'cancel'})],
	actions:{
		panelActions:function(action){
			this.send(action);
		},	
		save:function(){
			var album = this.get("model");
				album.save();
				this.transitionToRoute('album',album);
		},
		cancel:function(){
			var album = this.get("model");
			this.transitionToRoute('album',album);
		}
	}
	
});