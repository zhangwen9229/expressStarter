console.log("test1 page");

function MyViewModel() {
	var self = this;
	self.places = ko.observableArray(['Londontest1', 'Paristest1', 'Tokyotest1']);

	// The current item will be passed as the first parameter, so we know which place to remove
	self.removePlace = function(place) {
		self.places.remove(place);
	};
}

module.exports = (new MyViewModel());