App.AlbumsController = Ember.ArrayController.extend({
sortProperties:['nome'],
sortAscending:true,

albumContador:function(){
	return this.get('model.length');
}.property('@each')

});