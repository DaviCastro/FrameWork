App.AlbumController = Ember.ObjectController.extend({

	actions : {
			edit:function(){
				this.transitionToRoute('album.edit'); 
			},
			
			delete:function(){
				this.toggleProperty('deleteMode');
			},
			
			confirmDelete:function(){
				$(".close").click();
				this.get('model').deleteRecord();
				this.get('model').save();
				this.transitionToRoute('albums');
			},
			cancelDelete:function(){
				this.set('deleteMode',false);
				
			}

	}
});