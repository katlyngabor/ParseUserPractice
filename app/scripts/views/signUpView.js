Parse.initialize("6gGK63GTHMwX7lnyuvWAXAzFUgLYP77ij2zfnlgD", "764pOAlIIUrlViscttYLY834OcAaWXyFpzO3lrcb");

var SignUpView = Backbone.View.extend({

	className: 'signUp',	

	el:'.	signUpContainer',

	events:{
		'click .submit' : 'setNewUser'
	},

	setNewUser: function(){
		console.log('buttony');
		var user = new Parse.User();
		user.set("username", $('#username').val() );
		user.set("password", "my pass");
		user.set("email", "email@example.com");
		 
		// other fields can be set just like with Parse.Object
		user.set("phone", "415-392-0202");
		 
		user.signUp(null, {
		  success: function(user) {
		    // Hooray! Let them use the app now.
		  },
		  error: function(user, error) {
		    // Show the error message somewhere and let the user try again.
		    alert("Error: " + error.code + " " + error.message);
		  }
	});
}

});