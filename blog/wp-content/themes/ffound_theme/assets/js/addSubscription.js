/**
 * File : addUser.js
 * 
 * This file contain the validation of add user form
 * 
 * Using validation plugin : jquery.validate.js
 * 
 * @author Rohan Chaudhari
 */

$(document).ready(function(){
	
	var addSubscriptionForm = $("#addSubscription");
	
	var validator = addSubscriptionForm.validate({
		
		rules:{
			name :{ required : true },			
			productLimit : { required : true, digits : true },
			price : { required : true, digits : true }			
		},
		messages:{
			name :{ required : "This field is required" },
			productLimit : { required : "This field is required", digits : "Please enter numbers only" },
			price : { required : "This field is required", digits : "Please enter numbers only" }						
		}
	});
});
