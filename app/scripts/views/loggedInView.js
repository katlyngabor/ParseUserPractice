var LoggedInView = Backbone.View.extend({

	el: ".loggedInContainer",

	events: {

		'click .logOutBtn' : 'logOut'

	},

	initialize: function(){
		$('.logOutBtn').css('visibility', 'visible');
	},



	logOut: function(user){
		Parse.User.logOut();
	}


});