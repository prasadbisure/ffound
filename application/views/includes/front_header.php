<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="cache-control" content="max-age=0" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
        <meta http-equiv="pragma" content="no-cache" />
		<title><?php echo $pageTitle ?></title>
        <link rel="icon" href="assets/images/favicon.png">
		
		<!--Bootstrap CDN CSS-->
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
		
        <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/xzoom.css">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/modalreset.css">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/style.css">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/media-queries.css">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/component.css">
		<script src="<?php echo base_url(); ?>assets/js/libs.js"></script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-114687243-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-114687243-1');
</script>
	</head>
	<body>
<!----------------------------------   header section   -------------------------->
	<header>	

        <!----------------------  Toggle content  ---------------------------->    
		<div id="gnavi" class="nav">    
			<div id="gnavi-btn" class="nav-btn">
				<a href="#gnavi-list"><span>MENU</span></a>
			</div>
			<div id="gnavi-list" class="nav-list">
				<ul>
						<li><a href="<?php echo site_url(); ?>"><span>HOME</span></a></li>
						<li><a href="<?php echo site_url(); ?>vendorslisting/designer"><span>DESIGNER</span></a></li>
                        <li><a href="<?php echo site_url(); ?>vendorslisting/boutique"><span>BOUTIQUE</span></a></li>
                        <li><a href="http://www.fashionfound.in/commingsoon"><span>MAKEUP & HAIR</span></a></li>
						<li><a href="<?php echo site_url(); ?>aboutus"><span>ABOUT FF</span></a></li>
                        <li class="main-nav">
        				    <?php if($loggedIn){ ?>
        				    <a href="<?php echo site_url(); ?>site/vendoradmin">
        				        <span>PROFILE</span>
        			        </a>
        			        <?php } else {?>
        			            <a href="<?php echo site_url(); ?>login-register">
            				        <span>SIGN UP & LOG IN</span>
            			        </a>
        			        <?php } ?>
        		        </li>
                        <li><a href="<?php echo site_url(); ?>contactus"><span>CONTACT US</span></a></li>
						<li><a href="<?php echo site_url();?>packages"><span>BUSINESS WITH FF</span></a></li>
				</ul>
			</div>
		</div>	
		<!---------------------------- header Content -------------------------->	
		<div class="container">
			<div class="starter-template">
				<img src="assets/images/logo.png" class="view-logo">
				<p class="ff-txt">FASHION FOUND</p>
			</div>
			<hr class="header-hr">
			<div class="header-toggle-opt">
            <a href="<?php echo site_url('vendorslisting/designer'); ?>"><button type="button" class="btn">DESIGNERS</button></a>
            <a href="<?php echo site_url(); ?>vendorslisting/boutique"><button type="button" class="btn col-md-offset-1">BOUTIQUES</button></a>
				</div>
				<div class="col-lg-6 col-lg-offset-3">
					<form class="search-box" role="search" method="post" action="<?php echo site_url(); ?>vendorListing">
					     <div class="input-group add-on">
							<input type="text" class="form-control" name="srch-term" id="srch-term" >
								<div class="input-group-btn">
									<button class="btn btn-default custom-theme-border zero-radius custom-zindex" type="submit"><i class="glyphicon glyphicon-search" style="color:white;"></i></button>
								</div>
						</div>						
					</form>
                </div>
                 <!--<li class="main-nav"><a class="cd-signup" href="#0"><span>Sign up & Log in</span></a></li>  -->
				<!--</div>-->
				<div class="arrow bounce"></div>
			</div>			
		</div><!-- /.container -->
<script>
        function isTouchDevice(){
	    try{
		document.createEvent("TouchEvent");
		return true;
	    }catch(e){
		return false;
	    }
    }


       function touchScroll(){
	        if(isTouchDevice()){ //if touch events exist...
		    var el=document.getElementById("gnavi-list");
		    var scrollStartPos=0;

		    document.getElementById("gnavi-list").addEventListener("touchstart", function(event) {
			scrollStartPos=this.scrollTop+event.touches[0].pageY;
			event.preventDefault();
		    },false);

		    document.getElementById("gnavi-list").addEventListener("touchmove", function(event) {
			this.scrollTop=scrollStartPos-event.touches[0].pageY;
			event.preventDefault();
		    },false);
        }}
</script>
    		
	</header>
