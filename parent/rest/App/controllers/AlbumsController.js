App.AlbumsController = Ember.ArrayController.extend({
	sortProperties : [ 'name' ],
	sortAscending : true,

	albumContador : function() {
		return this.get('model.length');
	}.property('@each'),

	arrayActions : [ Em.Object.create({
		name : 'New'
	}, {
		action : 'newAlbum'
	}) ],

	actions : {
		panelActions : function(obj) {
			this.send(obj);
		},

		newAlbum : function() {
			this.transitionToRoute('albums.create');
		}
	}

});