<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta http-equiv="cache-control" content="max-age=0" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
        <meta http-equiv="pragma" content="no-cache" />
		<title><?php echo "$pageTitle" ?></title>
		
		<!--Bootstrap CDN CSS-->
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
		<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css" />
        <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/xzoom.css">
        <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/AllPages.css">  
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/modalreset.css">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/datatables.min.css">
		<script src="<?php echo base_url(); ?>assets/js/libs.js"></script>
		<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.16/datatables.min.css"/>
        <script src="<?php echo base_url(); ?>assets/js/xzoom.min.js"></script>
		
		<link rel="icon" href="/assets/images/favicon.png">
	<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> -->
	</head>
	<body>
    <?php if($heading != 'login'){ ?>
	<header>
	 <!---------------Toggle ---------------------->	
		<div id="gnavi" class="nav">
			<div id="gnavi-btn" class="nav-btn">
				<a href="#gnavi-list"><span>MENU</span></a>
			</div> 
			<div id="gnavi-list" class="nav-list">
				<ul>
				<li><a href="<?php echo base_url(); ?>"><span>HOME</span></a></li>
				<li><a href="<?php echo base_url(); ?>vendorslisting/designer"><span>DESIGNER</span></a></li>
                <li><a href="<?php echo base_url(); ?>vendorslisting/boutique"><span>BOUTIQUE</span></a></li>
				<li><a href="http://www.fashionfound.in/commingsoon"><span>MAKEUP & HAIR</span></a></li>
				<li><a href="<?php echo base_url(); ?>aboutus"><span>ABOUT FF</span></a></li>
				<li class="main-nav">
				    <?php if($loggedIn){ ?>
				    <a href="<?php echo base_url(); ?>site/vendoradmin">
				        <span>PROFILE</span>
			        </a>
			        <?php } else {?>
			            <a href="<?php echo base_url(); ?>login-register">
    				        <span>SIGN UP & LOG IN</span>
    			        </a>
			        <?php } ?>
		        </li>
				<li><a href="<?php echo base_url(); ?>contactus"><span>CONTACT US</span></a></li>
				<li><a href="<?php echo base_url();?>packages"><span>BUSINESS WITH FF</span></a></li>
					
				</ul>
			</div>
		</div>	
		<!--------------------- header content ---------------------->
		<div class="container">
			<section class="header-content">				
                <div class="container">
                    <?php if($heading != 'product'){ ?>
                    <div class="starter-template">
                    <?php 
                        // var_dump($val); die;
                    	if($heading=='vendorLogin')
                    	{
                    		if(!empty($val))
        					{	$flag=0;
					            foreach ($val as $val)
					            {	if($flag==0){
                        			echo "<p class='vender-name'>".$val->name."</p>";
									echo "<hr class='vender-hr'>";
									$flag=1;
								}
								}
							}
                    	}elseif($heading=='vendorInfo')
                    	{
                    	    echo ($val[0]->logo != '')? "<img src=".$val[0]->logo." class='view-logo'>" : '';
                    	    echo "<p class='vendor-name-header'>".$val[0]->brandName."</p>";
							echo "<p class='ff-txt1'>Owner Name: ".$val[0]->name." | Phone Number -". $val[0]->mobile."</p> " ;
							echo "<hr class='vender-hr'>";
							echo "<p class='ff-txt1'>".$heading2."</p>";
							
						}elseif($heading=='product'){
							if(!empty($val))
        					{	echo "<img src=".$val[0]->logo." class='view-logo'>";
                    	        echo "<p class='vendor-name-header'>".$val[0]->brandName."</p>";
							    echo "<p class='ff-txt1'>Owner Name: ".$val[0]->name." | Phone Number -". $val[0]->mobile."</p> " ;
							    echo "<hr class='vender-hr'>";
							    echo "<p class='ff-txt1'>".$heading2."</p>";
							}else{
							    echo "<p class='ff-txt'>".$heading1."</p>";
							    echo "<hr class='vender-hr'>";
							}
						}
                    	else
                    	{
							echo "<p class='ff-txt'>".$heading1."</p>";
                        	echo "<hr class='hr-of-allpages'>";
                    		echo "<p class='ff-txt1'>".$heading2."</p>";
                        }
                    ?>
                    </div>
                    <?php } ?>
                </div>     
            </section>   
		</div><!-- /.container -->
	</header>
	<?php } ?>
	<?php if(isset($isVendorAdmin) && $isVendorAdmin == true){ ?>
	<div class="vendor-menu">
        <div class="col-md-12">
            <div class="designer-command">
                <?php if($role == 4) { ?>
                    <a href="/site/vendoradmin" class="command-btn <?php echo ($active_flag == 'order-history') ? 'active-opt' : '';  ?>">My Orders</a>
                <?php }else{  if($profileStatus == 1){?>
               <a href="/site/vendoradmin" class="command-btn <?php echo ($active_flag == 'home') ? 'active-opt' : '';  ?>">Products</a>
               <a href="/orders" class="command-btn <?php echo ($active_flag == 'order') ? 'active-opt' : '';  ?>">Order</a>
                <a href="/order-history" class="command-btn <?php echo ($active_flag == 'order-history') ? 'active-opt' : '';  ?>">History</a>
                <a href="/packages/upgrade" class="command-btn <?php echo ($active_flag == 'upgrade') ? 'active-opt' : '';  ?>">Upgrade</a>
                <a href="#" class="command-btn topup-modal <?php echo ($active_flag == 'topup') ? 'active-opt' : '';  ?> ">Topup</a>
                 <?php }} ?>
                <a href='/profile' class="command-btn <?php echo ($active_flag == 'profile') ? 'active-opt' : '';  ?>" >Profile</a>
                <a href="<?php echo base_url(); ?>logout" class="command-btn">Logout</a>
            </div>
        </div>
    </div>
    <?php } ?>


