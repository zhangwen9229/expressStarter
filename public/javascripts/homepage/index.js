 function MyViewModel() {
 	var self = this;
 	self.places = ko.observableArray(['London', 'Paris', 'Tokyo']);

 	// The current item will be passed as the first parameter, so we know which place to remove
 	self.removePlace = function(place) {
 		self.places.remove(place);
 	};
 }

 module.exports = (new MyViewModel());