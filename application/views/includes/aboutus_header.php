<!DOCTYPE html>
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
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/about.css">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/style1.css"> 
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
                        <p class="ff-txt"><?php echo "$heading1" ?></p>
                    </div>	
                    <hr class="hr-color">
                    <p class="ff-txt1"><?php echo "$heading2" ?></p>
                </div>     
            </section>   
						
		</div><!-- /.container -->
				
	</header>


