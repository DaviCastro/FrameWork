App.AlbumController = Ember.ObjectController.extend({
	
	arrayActions : [Em.Object.create({name: 'Edit'},{action:'edit'}),Em.Object.create({name: 'Delete'},{action:'delete'})],
	
	actions : {
		
		panelActions:function(action){
			this.send(action);
		},	
			edit:function(){
				this.transitionToRoute('album.edit'); 
			},
			confirmDelete:function(){
				this.get('model').deleteRecord();
				this.get('model').save();
				this.transitionToRoute('albums');
			}

	}
});