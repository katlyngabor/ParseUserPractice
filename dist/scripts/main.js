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
Parse.initialize("6gGK63GTHMwX7lnyuvWAXAzFUgLYP77ij2zfnlgD", "764pOAlIIUrlViscttYLY834OcAaWXyFpzO3lrcb");

var SignUpView = Backbone.View.extend({

	el:'.wrapper',

	events:{
		'click .submit' : 'setNewUser',
		'click .submit1' : 'logInUser'
	},
		


	// var currentUser = Parse.User.current();
	// 	if (currentUser) {
 //    // do stuff with the user
	// 	} else {
 //    // show the signup or login page
	// 	},

	setNewUser: function(){
		var user = new Parse.User();
		user.set("username", $('#userName').val() );
		user.set("password", $('#password').val() );
		 
		 
		user.signUp(null, {
		  success: function(user) {
		    // Hooray! Let them use the app now.
		  },
		  error: function(user, error) {
		    // Show the error message somewhere and let the user try again.
		    alert("Error: " + error.code + " " + error.message);
		  }
	});
},

	logInUser: function(){
		Parse.User.logIn($('#userName1').val(), $('#password1').val(), {
		  success: function(user) {
		   	$('.wrapper').hide();
		   	$('.loggedInContainer').show();
		   	
		  },
		  error: function(user, error) {
		    // The login failed. Check error to see why.
		  }
		});

	}



});
var new_user = new SignUpView();


