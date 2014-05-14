App = Ember.Application.create();

App.Router.map(function(){
	this.resource('movies',function(){
		this.resource('createmovies', { path: 'new'});
	});

});

App.CreatemoviesController = Ember.ObjectController.extend({
	actions: {
		createmovie: function() { 
		},
	}
});

