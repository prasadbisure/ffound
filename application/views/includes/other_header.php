<!DOCTYPE html>

<?php die; ?>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title><?php echo "$pageTitle" ?></title>
		
		<!--Bootstrap CDN CSS-->
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
		<link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet">
		<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet">
        <script data-require="jquery@*" data-semver="2.2.0" src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
        <script data-require="bootstrap@*" data-semver="3.3.6" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css" />
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css" />
        <link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/designer.css">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/style1.css">   
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/modalstyle.css">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/modalreset.css">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/media-queries.css">
	</head>
	<body>

	<header>
	<?php if($login1=='true'){	
	echo "<div class=col-md-6>";
	echo "<nav class=main-nav>";
	echo "  <ul>";
	echo " 	<li><a class=cd-signup href=#0>Sign up & Log in</a></li>";
	echo "  </ul>";
	echo " </nav>";
	echo "</div> ";
} ?>
  <!--modal-->
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
                        <form class="cd-form" action="<?php echo base_url(); ?>designer_insert" method="post">
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
                                <label class="image-replace cd-username" for="signup-mobile">Mobile</label>
                                <input class="full-width has-padding has-border mobile" id="signup-mobile" type="text" placeholder="Mobile Number" name="mobile" required>
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
                                  <option value="boutique">Boutique</option>
                                  <option value="designer">Designer</option>
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

		<div id="gnavi" class="nav">
			<div id="gnavi-btn" class="nav-btn">
				<a href="#gnavi-list"><span>MENU</span></a>
			</div>
			<div id="gnavi-list" class="nav-list">
				<ul>
						<li><a href="<?php echo base_url(); ?>"><span>HOME</span></a></li>
						<li><a href="<?php echo base_url(); ?>designer"><span>DESIGNER</span></a></li>
						<li><a href="<?php echo base_url(); ?>boutique"><span>BOUTIQUE</span></a></li>
						<li><a href="<?php echo base_url(); ?>aboutus"><span>ABOUT US</span></a></li>	
				</ul>
			</div>
		</div>	
			
		<div class="container">
				
				<section class="header-content">				
                <div class="container">
                    <div class="starter-template">
                        <p class="ff-txt"><?php echo "$heading1"; ?></p>
                    </div>	
                    <hr class="hr-color">
                    <p class="ff-txt1"><?php echo "$heading2" ?></p>
                </div>     
            </section>   
						
		</div><!-- /.container -->
				
	</header>


