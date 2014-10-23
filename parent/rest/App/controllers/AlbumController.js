App.AlbumController = App.BasicObjectController.extend({
	init:function (){
		var acoes = Ember.ArrayController.create();
		var acao = App.Acao.create();
		acao.set('nome','Salvar');
		acao.set('acao','Salvar');
		acoes.pushObject(acao);
	},

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