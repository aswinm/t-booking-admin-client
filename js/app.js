App = Ember.Application.create();

 
 
App.Router.map(function(){
this.resource('movies',function(){
this.resource('createmovie', { path: 'new'});
this.resource('listmovie', {path: 'list'});
this.resource('movie', {path: ':movie_id'});
});
 
});
 
 
App.ApplicationAdapter = DS.ActiveModelAdapter.extend({
	host: "http://localhost:3000",
	namespace: "api/v1",
	corsWithCredentials: true
	
	
});
 

App.Movie = DS.Model.extend({
	name: DS.attr('string'),
	description: DS.attr('string'),
	length_minutes: DS.attr('number')
});
 
 
App.CreatemovieController = Ember.ObjectController.extend({
	model: {},
actions: {
createmovie: function(data) {
	console.log(this.get('name'));
	$.get("http://localhost:3000/api/v1/movies/create/",{name: this.get('name'),description: this.get('description'),length: this.get('length')}).done(function(res){
		alert("Created movie");});
}
}
 
});
 
 
App.ListmovieController = Ember.ArrayController.extend();
 
 
 
var x;
App.ListmovieRoute = Ember.Route.extend({
model: function(){
x = this.store.find('movie');
	return x;
}
});


App.MovieRoute = Ember.Route.extend({
	model: function(){
		var z= this.store.find('movie',params.movie_id);
		console.log(z);
		return z;
	},
	reloadmodel: function(){
		this.get('model').reload();
	}
	
});

App.MovieController = Ember.ObjectController.extend({
	model: {},
	isEditing: false,
	actions: {
		edited: function(data){
			this.set('isEditing',false);
			$.get("http://localhost:3000/api/v1/movies/update",{name: this.get('name'),description:this.get('description'),length:this.get('length_minutes'),id:this.get('id')}).done(function(res){
				alert('Edited successfully');
			});
		},
		edit: function(data){
			this.set('isEditing',true);
			console.log('Editing started');
		},
		del: function(data){
			$.get("http://localhost:3000/api/v1/movies/delete",{ id:this.get('id')}).done(function(res){
				alert('Deleted successfully');
				this.get('model').reload();
			});
		}
	}

});
		

