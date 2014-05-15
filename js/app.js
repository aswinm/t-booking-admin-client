App = Ember.Application.create();
 
 
App.Router.map(function(){
this.resource('movies',function(){
this.resource('createmovies', { path: 'new'});
this.resource('listmovies', {path: 'list'});
});
 
});
 
App.Store = DS.Store.extend({
revision: 1,
url: "http://localhost:3000/api/v1"
});
 
 
 
 
 
App.CreatemoviesController = Ember.ObjectController.extend({
actions: {
createmovie: function() {
console.log('Creating movie');
Ember.$.post("http://localhost:3000/api/v1/movies/create").done(
function(res,status){
console.log(status);
 
})
.fail(
function(res,status){
console.log('Error');
console.log(res);
}
);
}
}
 
});
 
 
App.MoviesController = Ember.ArrayController.extend();
 
var h= [{
name: "Hi"
},
{
name: "Hello"
}
];
 
 
App.MoviesRoute = Ember.Route.extend({
model: function(){
return h;
}
});
