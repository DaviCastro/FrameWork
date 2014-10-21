App.AlbumEditController = Ember.ObjectController.extend({
	actions:{
		salvar:function(){
			var album = this.get("model");
				album.save();
				this.transitionToRoute('album',album);
		}
	}
	
});