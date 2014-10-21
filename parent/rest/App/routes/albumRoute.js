App.AlbumRoute = Ember.Route.extend({
	model:function(params){
			return this.store.find('album',params.id);
	}
});