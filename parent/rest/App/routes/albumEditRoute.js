App.AlbumEditRoute = Ember.Route.extend({
	model:function(){
		return this.modelFor("album");
	}
});