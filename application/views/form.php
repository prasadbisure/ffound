<!doctype html>
<html lang="en" class="no-js">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="<?php echo base_url(); ?>assets/forms/css/reset.css"> <!-- CSS reset -->
	<link rel="stylesheet" href="<?php echo base_url(); ?>assets/forms/css/style.css"> <!-- Gem style -->
	<script src="<?php echo base_url(); ?>assets/forms/js/modernizr.js"></script> <!-- Modernizr -->



	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  	
	<title>Log In &amp; Sign Up Form</title>
</head>
<body>
	<header>
		<nav class="main-nav">
			<ul>
				<!-- inser more links here -->
				<li><a class="cd-signup" href="#0">Sign up</a></li>
			</ul>
		</nav>
	</header>

	<div class="cd-user-modal"> <!-- this is the entire modal form, including the background -->
		<div class="cd-user-modal-container"> <!-- this is the container wrapper -->
			<ul class="cd-switcher">
				<li><a href="#0">Sign in</a></li>
				<li><a href="#0">Register</a></li>
			</ul>

			<div id="cd-login"> <!-- log in form -->
				<form class="cd-form">
					<p class="fieldset">
						<label class="image-replace cd-email" for="signin-email">E-mail</label>
						<input class="full-width has-padding has-border" id="signin-email" type="email" placeholder="E-mail" required>
						<span class="cd-error-message">Error message here!</span>
					</p>

					<p class="fieldset">
						<label class="image-replace cd-password" for="signin-password">Password</label>
						<input class="full-width has-padding has-border" id="signin-password" type="text"  placeholder="Password" required>
						<a href="#0" class="hide-password">Hide</a>
						<span class="cd-error-message">Error message here!</span>
					</p>

					<p class="fieldset">
						<input type="checkbox" id="remember-me" checked>
						<label for="remember-me">Remember me</label>
					</p>

					<p class="fieldset">
						<input class="full-width" type="submit" value="Login">
					</p>
				</form>
				
				<p class="cd-form-bottom-message"><a href="#0">Forgot your password?</a></p>
				<!-- <a href="#0" class="cd-close-form">Close</a> -->
			</div> <!-- cd-login -->

			<div id="cd-signup"> <!-- sign up form -->
				<form class="cd-form" action="<?php echo base_url('site/signup'); ?>" method="post">
					<p class="fieldset">
						<label class="image-replace cd-username" for="signup-username">Username</label>
						<input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="Full Name" name="name"required>
						<span class="cd-error-message">Error message here!</span>
					</p>

					<p class="fieldset">
						<label class="image-replace cd-username" for="signup-address">Address</label>
						<input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="Address" name="address" required>
						<span class="cd-error-message">Error message here!</span>
					</p>

					<p class="fieldset">
						<div class="name">Gender</div>
						<div class="name1">
						<label class="gen"><input name="gender" id="signup-gender" type="radio" value="male" checked>Male</label>
						<label class="gen"><input name="gender" id="signup-gender" type="radio" value="female">Female</label>
						<label class="gen"><input name="gender" id="signup-gender" type="radio" value="other">Other</label>
						</div>
					</p>

					<p class="fieldset">
						<label class="image-replace cd-email" for="signup-mobile">Mobile</label>
						<input class="full-width has-padding has-border mobile" id="signup-mobile" type="text" placeholder="Mobile Number" pattern="[789][0-9]{9}" name="mobile" required>
						<span class="cd-error-message">Wrong mobile number!</span>
					</p>

					<p class="fieldset">
						<label class="image-replace cd-email" for="signup-email">E-mail</label>
						<input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="E-mail" name="email"required>
						<span class="cd-error-message">Error message here!</span>
						
					</p>

					<p class="fieldset">
						<label class="image-replace cd-password" for="signup-password">Password</label>
						<input class="full-width has-padding has-border" id="signup-password" type="text"  placeholder="Password" name="password" required>
						<a href="#0" class="hide-password">Hide</a>
						<span class="cd-error-message">Error message here!</span>
					</p>
					<p class="fieldset">
					<div class="name" >Select Role</div>
					<select class="less-width has-padding has-border" id="role" name="role" value="Select Role">
          				<option value="1" >Botique</option>
          				<option value="2">Designer</option>
       				</select>
       				</p>

					<p class="fieldset">
						<input class="full-width has-padding" type="submit" value="Create account">
					</p>
				</form>

				<!-- <a href="#0" class="cd-close-form">Close</a> -->
			</div> <!-- cd-signup -->

			<div id="cd-reset-password"> <!-- reset password form -->
				<p class="cd-form-message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>

				<form class="cd-form">
					<p class="fieldset">
						<label class="image-replace cd-email" for="reset-email">E-mail</label>
						<input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="E-mail">
						<span class="cd-error-message">Error message here!</span>
					</p>

					<p class="fieldset">
						<input class="full-width has-padding" type="submit" value="Reset password">
					</p>
				</form>

				<p class="cd-form-bottom-message"><a href="#0">Back to log-in</a></p>
			</div> <!-- cd-reset-password -->
			<a href="#0" class="cd-close-form">Close</a>
		</div> <!-- cd-user-modal-container -->
	</div> <!-- cd-user-modal -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="<?php echo base_url(); ?>assets/forms/js/main.js"></script> <!-- Gem jQuery -->
</body>
</html>