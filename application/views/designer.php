<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title>Designers</title>
		
	
        <!--Bootstrap CDN CSS-->
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet">
        <script data-require="jquery@*" data-semver="2.2.0" src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
        <script data-require="bootstrap@*" data-semver="3.3.6" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css" />
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css" />


        <link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/designer.css">
        <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/style1.css">
        <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/modalreset.css"> <!-- CSS reset -->
        <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/modalstyle.css"> <!-- Gem style -->
            <script src="<?php echo base_url(); ?>assets/js/modernizr.js"></script> <!-- Modernizr -->
    </head>
    <body>
        <header>	
            <div class="row row-margin-zero">
                <div class="col-md-6">
                        <nav class="main-nav">
                                <ul>
                                    <!-- inser more links here -->
                                    <li><a class="cd-signup" href="#0">Sign up & Log in</a></li>
                                </ul>
                            </nav>
                </div>
                <div class="col-md-6"></div>
            </div>
                <div id="gnavi" class="nav">
                        <div id="gnavi-btn" class="nav-btn">
                            <a href="#gnavi-list"><span>MENU</span></a>
                        </div>
                        <div id="gnavi-list" class="nav-list">
                            <ul>
                                    <li><a href="index.html"><span>HOME</span></a></li>
                                    <li><a href="designer.html"><span>DESIGNER</span></a></li>
                                    <li><a href="boutique.html"><span>BOUTIQUE</span></a></li>
                                    <li><a href="about.html"><span>ABOUT US</span></a></li>					
                                    <li><a href=""><span>CONTACT</span></a></li>
                            </ul>
                        </div>
                    </div>
            <section class="header-content">				
                <div class="container">
                    <div class="starter-template">
                        <p class="ff-txt">DESIGNERS</p>
                    </div>	
                    <hr class="hr-color">
                    <p class="ff-txt1">Here we are to style you up!</p>
                </div>     
            </section>    	
        </header>
        <!--middle content-->
        <div class="container">
                
                <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 class="modal-title" id="myModalLabel">Designer</h4>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          <label for="recipient-name" class="control-label">Product Name:</label>
                          <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                          <label for="message-text" class="control-label">Description:</label>
                          <textarea class="form-control" id="message-text"></textarea>
                        </div>
                        <div class="form-group">
                          <label for="message-text" class="control-label">Specification:</label>
                          <textarea class="form-control" id="message-text"></textarea>
                        </div>
                        <div class="form-group">
                          <label for="recipient-name" class="control-label">Oneliner Text:</label>
                          <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <div class="row row-margin-zero">
                                <div class="col-md-12">
                                    <div class="col-md-6">
                                        <input type="file" name="upload"/>
                                        <input type="submit" name="submit" value="Upload">
                                    </div>
                                    <div class="col-md-6">
                                          <label for="recipient-name" class="control-label">Price:</label>
                                          <input type="text" class="form-control" id="recipient-name">                
                                    </div>
                                </div> 
                            </div>     
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
                    
                <div class="row row-margin-zero r-margin">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <form class="navbar-form" role="search">				
                            <div class="input-group add-on">
                                <input class="textbox-style" placeholder="Search" name="srch-term" id="srch-term" type="text">
                                <div class="input-group-btn">
                                    <button class="btn btn-default custom-theme-border" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-3">
                        <div class="designer-btn-style">
                            <button class="btnstyle" type="button" value="history">History</button>
                            <button class="btnstyle" type="button" value="order">Order</button>
                            <button class="btnstyle" type="button" value="profile">Profile</button>
                        </div>

                    </div>
                </div>
    
                <div class="row row-margin-zero row-image-style">
                    <div class="col-md-2 col-md-offset-2">
                        <div class="nd-wrap nd-style-1">
                          <img src="<?php echo base_url(); ?>assets/images/product.jpg" alt="">
                            <div class="nd-content">
                                <div class="nd-content_inner">
                                    <div class="nd-content_inner1">
                                        <span class="nd-icon">
                                                <a href="#" data-toggle="modal" data-target="#myModal">
                                                    
                                                <span class="fa fa-pencil-square-o fa-fw"></span></a>
                                        </span>
                                    </div>					
                                </div>				
                            </div>
                        </div>
                        <div class="info">
                            <div class="datails">
                                <p class="text-style">Lorem ipsum dolor sit amet, consectetur..</p>
                                <p class="price-style">Rs.1100</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="nd-wrap nd-style-1">
                         <img src="<?php echo base_url(); ?>assets/images/product.jpg" alt="">
                            <div class="nd-content">
                                <div class="nd-content_inner">
                                    <div class="nd-content_inner1">
                                        <span class="nd-icon">
                                                <a href="#" data-toggle="modal" data-target="#myModal">
                                                        
                                                    <span class="fa fa-pencil-square-o fa-fw"></span></a>
                                        </span>
                                    </div>					
                                </div>				
                            </div>
                        </div>
                        <div class="info">
                            <div class="datails">
                             <p class="text-style">Lorem ipsum dolor sit amet, consectetur..</p>
                             <p class="price-style">Rs.1100</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="nd-wrap nd-style-1">
                         <img src="<?php echo base_url(); ?>assets/images/product.jpg" alt="">
                            <div class="nd-content">
                                <div class="nd-content_inner">
                                    <div class="nd-content_inner1">
                                        <span class="nd-icon">
                                                <a href="#" data-toggle="modal" data-target="#myModal">
                                                        
                                                    <span class="fa fa-pencil-square-o fa-fw"></span></a>
                                        </span>
                                    </div>					
                                </div>				
                            </div>
                        </div>
                        <div class="info">
                            <div class="datails">
                              <p class="text-style">Lorem ipsum dolor sit amet, consectetur..</p>
                             <p class="price-style">Rs.1100</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="nd-wrap nd-style-1">
                          <img src="<?php echo base_url(); ?>assets/images/product.jpg" alt="">
                            <div class="nd-content">
                                <div class="nd-content_inner">
                                    <div class="nd-content_inner1">
                                        <span class="nd-icon">
                                                <a href="#" data-toggle="modal" data-target="#myModal">
                                                        
                                                    <span class="fa fa-pencil-square-o fa-fw"></span></a>
                                        </span>
                                    </div>					
                                </div>				
                            </div>
                        </div>
                        <div class="info">
                            <div class="datails">
                             <p class="text-style">Lorem ipsum dolor sit amet, consectetur..</p>
                             <p class="price-style">Rs.1100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                        <form class="cd-form" action="#" method="post">
                            <p class="fieldset">
                                <label class="image-replace cd-username" for="signup-username">Username</label>
                                <input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="Full Name" name="name"required>
                                <span class="cd-error-message">Error message here!</span>
                            </p>
        
                            <p class="fieldset">
                                <label class="image-replace cd-username" for="signup-address">Address</label>
                                <input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="Address" required>
                                <span class="cd-error-message">Error message here!</span>
                            </p>
        
                            <p class="fieldset">
                                <div class="name">Gender</div>
                                <div class="name1">
                                <label class="gen"><input name="gender" id="signup-gender" type="radio" checked>Male</label>
                                <label class="gen"><input name="gender" id="signup-gender" type="radio" >Female</label>
                                <label class="gen"><input name="gender" id="signup-gender" type="radio" >Other</label>
                                </div>
                            </p>
        
                            <p class="fieldset">
                                <label class="image-replace cd-username" for="signup-mobile">Mobile</label>
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
            

        <!--footer-->
        <footer>
            <section id="contact" class="content-section text-center">
            <div class="contact-section">
                <div class="container" id="content">
                  <p>I you have any option</p>
                  <h2>Contact Us</h2>      
                  <h3>WE WILL BE HAPPY TO BE ANSWER You</h3>        
                  <div class="row row-margin-zero">
                    <div class="col-md-4 col-md-offset-4">
                      <form class="form-horizontal">
                        <div class="form-group">
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="Name">
                        </div>
                        <div class="form-group">
                          <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email-Id">
                        </div>
                        <div class="form-group ">
                          <label for="exampleInputText" class="label-style">Enter Your Message</label>
                         <textarea  class="form-control" placeholder="Description"></textarea> 
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="row row-margin-zero">
                    <div class="col-md-12">
                        <div class="col-md-6"></div>
                        <div class="col-md-6">
                            <div class="icons-info">
                                <a href="#"><img src="<?php echo base_url(); ?>assets/images/facebook.png" alt="icons" class="icons-style"></a>
                                <a href="#"><img src="<?php echo base_url(); ?>assets/images/google.png" alt="icons" class="icons-style"></a>
                                <a href="#"><img src="<?php echo base_url(); ?>assets/images/instagram.png" alt="icons" class="icons-style"></a>
                                <a href="#"><img src="<?php echo base_url(); ?>assets/images/twitter.png" alt="icons" class="icons-style"></a>
                                <a href="#"><img src="<?php echo base_url(); ?>assets/images/pinterest.png" alt="icons" class="icons-style"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </footer>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="js/main.js"></script> <!-- Gem jQuery -->

	  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
      <script src="https://code.jquery.com/ui/1.11.3/jquery-ui.min.js"></script>
    
      <script src="<?php echo base_url(); ?>assets/js/main.js"></script>
      <script src="<?php echo base_url(); ?>assets/js/libs.js"></script>
      <script src="<?php echo base_url(); ?>assets/js/common.js"></script>
	</body>
</html>