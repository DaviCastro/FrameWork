App.AlbumController = Ember.ObjectController.extend({

	actions : {
			edit:function(){
				this.transitionToRoute('album.edit'); 
			}
	}
});