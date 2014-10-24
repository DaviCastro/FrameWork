App.AlbumController = Ember.ObjectController.extend({
	
	criarAcoes : [Em.Object.create({nome: 'Editar'},{acao:'edit'}),Em.Object.create({nome: 'Deletar'},{acao:'delete'})],
	
	actions : {
		
		panelActions:function(action){
			this.send(action);
		},
		
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