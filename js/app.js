App = Ember.Application.create();

 
 
App.Router.map(function(){
this.resource('movie',function(){
this.resource('createmovie', { path: 'new'});
this.resource('listmovie', {path: 'list'});
});
 
});
 
 
App.ApplicationAdapter = DS.ActiveModelAdapter.extend({
	host: "http://localhost:3000",
	namespace: "api/v1"
	
	
});
 

App.Movie = DS.Model.extend({
	name: DS.attr('string'),
	description: DS.attr('string'),
	length: DS.attr('number')
});
 
 
App.CreatemovieController = Ember.ObjectController.extend({
actions: {
createmovie: function() {
	var x = this.store.createRecord('movies',{
		name:'hi',
	    description: 'hello',
	    length: 45
	});
	x.save();
}
}
 
});
 
 
App.MovieController = Ember.ArrayController.extend();
 
 
 
App.MovieRoute = Ember.Route.extend({
model: function(){
var x = this.store.find('movie');
	return x;
}
});
