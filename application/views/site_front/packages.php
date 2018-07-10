<style>
/*pricing table*/


/*PRICE COLOR CODE START*/
#generic_price_table .generic_content{
	background-color: #fff;
}

#generic_price_table .generic_content .generic_head_price{
	background-color: #f6f6f6;
}

#generic_price_table .generic_content .generic_head_price .generic_head_content .head_bg{
	border-color: #e4e4e4 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #e4e4e4;
}

#generic_price_table .generic_content .generic_head_price .generic_head_content .head span{
	color: #525252;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .sign{
    color: #414141;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .currency{
    color: #414141;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .cent{
    color: #414141;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .month{
    color: #414141;
}

#generic_price_table .generic_content .generic_feature_list ul li{	
	color: #a7a7a7;
}

#generic_price_table .generic_content .generic_feature_list ul li span{
	
        font-size: 50px;
    color: #d4b000;
    font-family: sans-serif;
}
/*#generic_price_table .generic_content .generic_feature_list ul li:hover{
	background-color: #E4E4E4;
	border-left: 5px solid #2ECC71;
}*/

#generic_price_table .generic_content .generic_price_btn a{
	border: 1px solid #e0c027; 
    color: #2ECC71;
} 

#generic_price_table .generic_content.active .generic_head_price .generic_head_content .head_bg,
#generic_price_table .generic_content:hover .generic_head_price .generic_head_content .head_bg{
	border-color: #e0c027 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #e0c027;
	color: #fff;
}

#generic_price_table .generic_content:hover .generic_head_price .generic_head_content .head span,
#generic_price_table .generic_content.active .generic_head_price .generic_head_content .head span{
	color: #fff;
}

#generic_price_table .generic_content:hover .generic_price_btn a,
#generic_price_table .generic_content.active .generic_price_btn a{
	background-color: #e0c027;
	color: #fff;
} 
#generic_price_table{
	margin: 50px 0 50px 0;
}
.row .table{
    padding: 28px 0;
}

/*PRICE BODY CODE START*/

#generic_price_table .generic_content{
	overflow: hidden;
	position: relative;
	text-align: center;
    border: 1px solid #e4e4e4;
        box-shadow: 1px 2px 2px #f1f1f1;
}

#generic_price_table .generic_content .generic_head_price {
	margin: 0 0 0px 0;
}

#generic_price_table .generic_content .generic_head_price .generic_head_content{
	margin: 0 0 50px 0;
}

#generic_price_table .generic_content .generic_head_price .generic_head_content .head_bg{
    border-style: solid;
    border-width: 90px 1411px 23px 399px;
	position: absolute;
}

#generic_price_table .generic_content .generic_head_price .generic_head_content .head{
	padding-top: 40px;
	position: relative;
	z-index: 1;
}

#generic_price_table .generic_content .generic_head_price .generic_head_content .head span{
   
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 2px;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag{
	padding: 0 0 20px;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .price{
	display: block;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .sign{
    display: inline-block;
    font-size: 24px;
    font-weight: 700;
    vertical-align: middle;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .currency{
    
    font-size: 30px;
    font-weight: 300;
    letter-spacing: -2px;
    line-height: 60px;
    padding: 0;
    vertical-align: middle;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .cent{
    display: inline-block;
    font-size: 24px;
    font-weight: 400;
    vertical-align: bottom;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .month{
    
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 3px;
    vertical-align: bottom;
}

#generic_price_table .generic_content .generic_feature_list ul{
	list-style: none;
	padding: 0;
	margin: 0;
}

#generic_price_table .generic_content .generic_feature_list ul li{
	
	font-size: 24px;
	padding: 5px 0;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table .generic_content .generic_feature_list ul li:hover{
	transition: all 0.3s ease-in-out 0s;
	-moz-transition: all 0.3s ease-in-out 0s;
	-ms-transition: all 0.3s ease-in-out 0s;
	-o-transition: all 0.3s ease-in-out 0s;
	-webkit-transition: all 0.3s ease-in-out 0s;

}
#generic_price_table .generic_content .generic_feature_list ul li .fa{
	padding: 0 10px;
}
#generic_price_table .generic_content .generic_price_btn{
	margin: 10px 0 10px;
}

#generic_price_table .generic_content .generic_price_btn a{
    border-radius: 50px;
	-moz-border-radius: 50px;
	-ms-border-radius: 50px;
	-o-border-radius: 50px;
	-webkit-border-radius: 50px;
    display: inline-block;
    font-size: 18px;
    outline: medium none;
    padding: 6px 20px;
    text-decoration: none;
    text-transform: uppercase;
}

#generic_price_table .generic_content,
#generic_price_table .generic_content:hover,
#generic_price_table .generic_content .generic_head_price .generic_head_content .head_bg,
#generic_price_table .generic_content:hover .generic_head_price .generic_head_content .head_bg,
#generic_price_table .generic_content .generic_head_price .generic_head_content .head h2,
#generic_price_table .generic_content:hover .generic_head_price .generic_head_content .head h2,
#generic_price_table .generic_content .price,
#generic_price_table .generic_content:hover .price,
#generic_price_table .generic_content .generic_price_btn a,
#generic_price_table .generic_content:hover .generic_price_btn a{
	transition: all 0.3s ease-in-out 0s;
	-moz-transition: all 0.3s ease-in-out 0s;
	-ms-transition: all 0.3s ease-in-out 0s;
	-o-transition: all 0.3s ease-in-out 0s;
	-webkit-transition: all 0.3s ease-in-out 0s;
} 
@media (max-width: 320px) {	
}

@media (max-width: 767px) {
	#generic_price_table .generic_content{
		margin-bottom:75px;
	}
}
@media (min-width: 768px) and (max-width: 991px) {
	#generic_price_table .col-md-3{
		float:left;
		width:50%;
	}
	
	#generic_price_table .col-md-4{
		float:left;
		width:50%;
	}
	
	#generic_price_table .generic_content{
		margin-bottom:75px;
	}
}
@media (min-width: 992px) and (max-width: 1199px) {
}
@media (min-width: 1200px) {
}


.text-center h1,
.text-center h1 a{
	color: #7885CB;
	font-size: 30px;
	font-weight: 300;
	text-decoration: none;
}
.demo-pic{
	margin: 0 auto;
}
.demo-pic:hover{
	opacity: 0.7;
}

#generic_price_table_home ul{
	margin: 0 auto;
	padding: 0;
	list-style: none;
	display: table;
}
#generic_price_table_home li{
	float: left;
}
#generic_price_table_home li + li{
	margin-left: 10px;
	padding-bottom: 10px;
}
#generic_price_table_home li a{
	display: block;
	width: 50px;
	height: 50px;
	font-size: 0px;
}
#generic_price_table_home .blue{
	background: #3498DB;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table_home .emerald{
	background: #2ECC71;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table_home .grey{
	background: #7F8C8D;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table_home .midnight{
	background: #34495E;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table_home .orange{
	background: #E67E22;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table_home .purple{
	background: #9B59B6;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table_home .red{
	background: #E74C3C;
	transition:all 0.3s ease-in-out 0s;
}
#generic_price_table_home .turquoise{
	background: #1ABC9C;
	transition: all 0.3s ease-in-out 0s;
}

#generic_price_table_home .blue:hover,
#generic_price_table_home .emerald:hover,
#generic_price_table_home .grey:hover,
#generic_price_table_home .midnight:hover,
#generic_price_table_home .orange:hover,
#generic_price_table_home .purple:hover,
#generic_price_table_home .red:hover,
#generic_price_table_home .turquoise:hover{
	border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table_home .divider{
	border-bottom: 1px solid #ddd;
	margin-bottom: 20px;
	padding: 20px;
}
#generic_price_table_home .divider span{
	width: 100%;
	display: table;
	height: 2px;
	background: #ddd;
	margin: 50px auto;
	line-height: 2px;
}
#generic_price_table_home .itemname{
	text-align: center;
	font-size: 50px ;
	padding: 50px 0 20px ;
	border-bottom: 1px solid #ddd;
	margin-bottom: 40px;
	text-decoration: none;
    font-weight: 300;
}
#generic_price_table_home .itemnametext{
    text-align: center;
    font-size: 20px;
    padding-top: 5px;
    text-transform: uppercase;
    display: inline-block;
}
#generic_price_table_home .footer{
	padding:40px 0;
}

.price-heading{
    text-align: center;
}
.price-heading h1{
	color: #666;
	margin: 0;
	padding: 0 0 50px 0;
}
.demo-button {
    background-color: #333333;
    color: #ffffff;
    display: table;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 50px;
    outline-color: -moz-use-text-color;
    outline-style: none;
    outline-width: medium ;
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
}
.bottom_btn{
	background-color: #333333;
    color: #ffffff;
    display: table;
    font-size: 28px;
    margin: 60px auto 20px;
    padding: 10px 25px;
    text-align: center;
    text-transform: uppercase;
}
.demo-button:hover{
	background-color: #666;
	color: #FFF;
	text-decoration:none;
	
}
.bottom_btn:hover{
	background-color: #666;
	color: #FFF;
	text-decoration:none;
}
/*end pricing table*/
</style>
<script type="text/javascript">
 $(document).ready(function() {
    $('.buy-btn').on('click', function(e){
        $('#cd-signup').modal('show');
        $('#subscription_id').val($(this).val());
    });
    
 });
</script>

<?php if($upgrade != 'upgrade'){ ?>
<div class="modal fade" id="cd-signup" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog" style="margin-top: 12%;">
        <div class="loader">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
        </div>
        <div class="modal-content">
            <div class="modal-header" style="text-align: center;">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" style="font-size: 36px;">×</span><span class="sr-only">Close</span></button>
                <h3 class="modal-title" id="lineModalLabel" >Welcome To FF</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" action="" method="post" id="sign-up">
                    <input type="hidden" id="subscription_id" name="subscription_id">
                    <input type="hidden" name="vendor" value="vendor">
                  <div class="form-group">
                    <label class="control-label col-sm-3" for="name">Name:</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" name="name" id="name" placeholder="Full Name" pattern="[A-Za-z\s]+" maxlength=25 required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3" for="email">Email:</label>
                    <div class="col-sm-9"> 
                      <input type="email" class="form-control" id="email" name="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required>
                    </div>
                    <span class="error email-error"></span>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3" for="mobile">Brand Name:</label>
                    <div class="col-sm-9"> 
                      <input type="text" class="form-control" id="brandName" name="brandName" placeholder="Brand Name" pattern="[A-Za-z0-9\s]+" maxlength=25 required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3" for="mobile">Mobile:</label>
                    <div class="col-sm-9"> 
                      <input type="text" class="form-control" id="mobile" name="mobile" onkeypress='return event.charCode >= 48 && event.charCode <= 57' minlength=9 maxlength="10" placeholder="Mobile" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3" for="pwd">Password:</label>
                    <div class="col-sm-9"> 
                      <input type="password" class="form-control" id="pwd" name="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
                    </div>
                  </div>
                    <div class="form-group">
                        <label class="control-label col-sm-3" for="confirmpwd">Confirm Password:</label>
                        <div class="col-sm-9">
                            <input type="password" class="form-control" id="confirmpwd" name="confirm_password" placeholder="Confirm Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
                        </div>
                        <span class="error pass-error"></span>
                    </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3">Signup as:</label>
                    <div class="col-sm-9" style="padding-top: 8px;"> 
                        <!--<label class="radio-inline label-sign-up">-->
                        <!--  <input type="radio" name="role" value=2 checked>Designer-->
                        <!--</label>-->
                        <!--<label class="radio-inline label-sign-up">-->
                        <!--  <input type="radio" name="role" value=3>Boutique-->
                        <!--</label>-->
                        <input type="radio" id="r-designer" name="role" class="aaa" value="2" checked>
                        <label for="r-designer">Designer</label>
                        <input type="radio" id="r-boutique" name="role" class="aaa" value="3">
                        <label for="r-boutique">Boutique</label>
                    </div>
                  </div>
                  <div class="form-group"> 
                    <div class="col-sm-offset-5 col-sm-10">
                      <input type="submit" class="btn btn-default submit-btn-style" value="Get Started">
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
</div>
<?php } ?>

<section class="content">
    <div class="container">
        <div class="table-responsive">
            <table class="packagestable-style">
                <tr><?php
                    if(!empty($list))
                    {
                        foreach ($list as $li)
                        {?>
                            <td>
                                <table>
                                    <col class="col-width">
                                <tr class='theading'><td class='rstyle'><b><?php echo $li->name; ?></b></td></tr>
                                <tr class='trow1-style'><td class="">INR</td></tr>
                                <tr class='trow2-style'><td><?php echo $li->price ?></td></tr>
                                <tr><td><hr class='tablehr-style'></td></tr>
                                <tr>
                                    <td class='trow3-style'>
                                        <b>
                                            <?php echo $li->productLimit; ?>
                                        </b>
                                    </td>
                                </tr>
                                <tr><td class='nstyle'>PRODUCTS</td></tr>
				<?php if($li->productLimit == 0){ ?>
				<tr><td class="olisting-style"><b>(Only Listing)</b></td></tr>
				<?php }else{ ?>
				<tr><td><br></td></tr>
				<?php } ?>
                                <tr><td class='rstyle'>
                                <nav class=main-nav>
                                <?php if($upgrade == 'upgrade'){ ?>
                                    <button class='cd-signup tablebuy-style upgrade-btn' value="<?php  echo $li->id; ?>">UPGRADE</button>
                                <?php }else{ ?>
                                    <button class='cd-signup tablebuy-style buy-btn' value="<?php  echo $li->id; ?>">BUY</button>
                                <?php } ?>
                                </nav>
                                </td></tr>
                                </table>
                            </td>
                    <?php }
                    }
                    ?>
                </tr>
            </table>
        </div>
        
       <div id="generic_price_table">   
<section>
        <div class="container">
            
            <!--BLOCK ROW START-->
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-2">
                    <div class="generic_content active clearfix">
                       <div class="generic_head_price clearfix">
                            <div class="generic_head_content clearfix">
                                <div class="head_bg"></div>
                                <div class="head">
                                    <span>Bronze</span>
                                </div>
                            </div>
                            <div class="generic_price_tag clearfix">	
                                <span class="price">
                                    <span class="sign">RS.</span>
                                    <span class="currency">500</span>
                                    <!--<span class="cent">.99</span>
                                    <span class="month">/MON</span>-->
                                </span>
                            </div>
                         </div>                            
                         <div class="generic_feature_list">
                        	<ul>
                            	<li><span>0</span></li>
                                <li> Products</li>
                            </ul>
                        </div>
                        <div class="generic_price_btn clearfix">
                        	<a class="" href="">BUY</a>
                        </div>
                    </div>
                 </div>
                <div class="col-md-2">
                    <div class="generic_content active clearfix">
                       <div class="generic_head_price clearfix">
                            <div class="generic_head_content clearfix">
                                <div class="head_bg"></div>
                                <div class="head">
                                    <span>Silver</span>
                                </div>
                            </div>
                            <div class="generic_price_tag clearfix">	
                                <span class="price">
                                    <span class="sign">RS.</span>
                                    <span class="currency">1000</span>
                                    <!--<span class="cent">.99</span>
                                    <span class="month">/MON</span>-->
                                </span>
                            </div>
                         </div>                            
                         <div class="generic_feature_list">
                        	<ul>
                            	<li><span>20</span></li>
                                <li> Products</li>
                            </ul>
                        </div>
                        <div class="generic_price_btn clearfix">
                        	<a class="" href="">BUY</a>
                        </div>
                    </div>
                 </div>
                <div class="col-md-2">
                    <div class="generic_content active clearfix">
                       <div class="generic_head_price clearfix">
                            <div class="generic_head_content clearfix">
                                <div class="head_bg"></div>
                                <div class="head">
                                    <span>Gold</span>
                                </div>
                            </div>
                            <div class="generic_price_tag clearfix">	
                                <span class="price">
                                    <span class="sign">RS.</span>
                                    <span class="currency">1300</span>
                                    <!--<span class="cent">.99</span>
                                    <span class="month">/MON</span>-->
                                </span>
                            </div>
                         </div>                            
                         <div class="generic_feature_list">
                        	<ul>
                            	<li><span>30</span></li>
                                <li> Products</li>
                            </ul>
                        </div>
                        <div class="generic_price_btn clearfix">
                        	<a class="" href="">BUY</a>
                        </div>
                    </div>
                 </div>
                <div class="col-md-2">
                    <div class="generic_content active clearfix">
                       <div class="generic_head_price clearfix">
                            <div class="generic_head_content clearfix">
                                <div class="head_bg"></div>
                                <div class="head">
                                    <span>Platinum</span>
                                </div>
                            </div>
                            <div class="generic_price_tag clearfix">	
                                <span class="price">
                                    <span class="sign">RS.</span>
                                    <span class="currency">1700</span>
                                    <!--<span class="cent">.99</span>
                                    <span class="month">/MON</span>-->
                                </span>
                            </div>
                         </div>                            
                         <div class="generic_feature_list">
                        	<ul>
                            	<li><span>45</span></li>
                                <li> Products</li>
                            </ul>
                        </div>
                        <div class="generic_price_btn clearfix">
                        	<a class="" href="">BUY</a>
                        </div>
                    </div>
                 </div>
                <div class="col-md-2">
                    <div class="generic_content active clearfix">
                       <div class="generic_head_price clearfix">
                            <div class="generic_head_content clearfix">
                                <div class="head_bg"></div>
                                <div class="head">
                                    <span>Diamond</span>
                                </div>
                            </div>
                            <div class="generic_price_tag clearfix">	
                                <span class="price">
                                    <span class="sign">RS.</span>
                                    <span class="currency">2000</span>
                                    <!--<span class="cent">.99</span>
                                    <span class="month">/MON</span>-->
                                </span>
                            </div>
                         </div>                            
                         <div class="generic_feature_list">
                        	<ul>
                            	<li><span>60</span></li>
                                <li> Products</li>
                            </ul>
                        </div>
                        <div class="generic_price_btn clearfix">
                        	<a class="" href="">BUY</a>
                        </div>
                    </div>
                 </div>
                <div class="col-md-1"></div>
            </div>	
        </div>
    </section>  
</div>
    </div>   
<?php echo $page_content; ?>  



      
