App.Router.map(function(){
	this.resource('albums',function(){
		this.resource('album',{ path: ':id' },function(){
			this.route('edit');
		});
	});
});

