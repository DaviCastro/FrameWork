App.AlbumsCreateController = Ember.ObjectController.extend({
	content: {},
	arrayActions : [Em.Object.create({name: 'Save'},{action:'save'})],
	
	actions:{
		
		panelActions:function(action){
			this.send(action);
		},	
			
		save:function(){
			var album = this.store.createRecord('album', this.get('model'));
			album.save();
			this.transitionToRoute('album',album);		
		},
		
	}
	
});