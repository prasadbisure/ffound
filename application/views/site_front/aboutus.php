<script>
    $('header').css('height', '350px')
</script>
<?php //echo $page_content; ?>

<style>
 
img {
    max-width: 100%;
}
/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {   
    float: left;
    width: 68%;
}

/* Right column */
.rightcolumn {
    float: left;
    width: 30%;
    padding-left: 20px;
}

/* Fake image */
.fakeimg {
    
    width: 100%;
    padding: 0px;
        overflow: hidden;
}

/* Add a card effect for articles */
.card {
     background-color: white;
     padding: 20px;
     margin-top: 20px;
        font: 18px;
    color: #6f6f6f;
}
.card h2 {
    text-align: center;
}
/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}

/* Footer */
.footer {
    padding: 20px;
    text-align: center;
    background: #ddd;
    margin-top: 20px;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
    .leftcolumn, .rightcolumn {   
        width: 100%;
        padding: 0;
    }
}
/*custome*/
    .button-style {
          margin: 10px 0px 0px 0px;
    float: right;
    height: 40px;
    padding: 10px 30px 10px 30px;
    border: 1px solid #e6e6e6;
    background-color: transparent;
    color: #a0a0a0;
    transition: all 300ms;
    font-size: 16px;
        
}
       .button-style:hover {
       text-decoration: none;
           background: #000;
           color: #efc90e;
}
    .side-image {
    float: left;
    margin-right: 14px;
}
    .side-image img {
    width: 100px;
    height: 80px;
    object-fit: cover;
}
    .side-item-text a {
    color: #a0a0a0;
}
    span.side-item-meta {
    font-size: 12px;
    color: #a0a0a0;
}
    .widget {
    margin-right: 0;
    float: none;
    margin-bottom: 50px;
    padding: 30px 32px;
    border: 1px solid #e4e4e4;
}
       .widget h3{
      font: 12px;
    font-style: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    position: relative;
    padding:5px 11px 15px 11px;
    line-height: 16px;
    overflow: hidden;
    font-weight: 600;
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    }
 ul.site-social-networks.secondary-2-primary.style-default.show-title {
    text-align: center;
         padding: 0;
}
    ul.site-social-networks.secondary-2-primary.style-default.show-title li {
    margin-bottom: 0px!important;
    padding-bottom: 0px!important;
    border: 1px solid #f0f0f0;
    background-color: #ffffff;
    border-radius: 50%;
}
    .site-social-networks.show-title a {
    margin: 20px auto 0 auto;
    text-transform: uppercase;
    font-size: 10px;
}
    .site-social-networks.style-default i {
    width: 36px;
    height: 36px;
    margin: 0 auto;
    line-height: 36px;
    text-align: center;
    font-size: 15px;
    color: #444444;
}
    .fa-facebook-f:before, .fa-facebook:before {
    content: "\f09a";
}
    .site-social-networks li {
    display: inline-block;
    padding: 0;
}
    .card span:before {
    content: "";
    position: absolute;
    top: 37%;
    right: 68%;
    border-bottom: 1px solid;
    border-color: #eee;
    width: 90px;
    margin: 0 14px;
}
    .card span:after {
    content: "";
    position: absolute;
    top: 37%;
    left: 68%;
    border-bottom: 1px solid;
    border-color: #eee;
    width: 90px;
    margin: 0 14px;
}
/*custome*/    
    
</style>
<!--<div class="col-lg-12  vendor-search-bar">
	<form class="search-box" role="search" method="post" action="/vendorListing">				
	     <div class="input-group add-on" style=" width: 76%;">
			<input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term">
				<div class="input-group-btn">
					<button class="btn btn-default custom-theme-border zero-radius custom-zindex" type="submit" style="border: 1px solid;height: 39px;"><i class="glyphicon glyphicon-search"></i></button>
				</div>
		</div>						
	</form>
</div>-->
<div class="container">
    <div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Dec 7, 2017</h5>
      <div class="fakeimg" style="height:400px;"><img src="../assets/images/dress/d1.jpg"></div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <a class="button-style" href="http://localhost/ffound/index.php/aboutus">Read More</a>
    </div>
    
  </div>
  <div class="rightcolumn">
    <div class="card widget">
      <h3><span>About Me</span></h3>
      <div class="fakeimg" style="height:200px;"><img src="../assets/images/dress/d1.jpg"></div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
    <div class="card widget">
      <h3><span>Popular Post</span></h3>
        
      <div class="fakeimg">
          <div class="side-item"><div class="side-image"><a href="#"><img width="150" height="100" src="../assets/images/dress/d1.jpg"></a></div><div class="side-item-text"><h4><a href="">Papilion Minter Savior</a></h4><span class="side-item-meta">04 Mar 2015</span></div>
        </div>
        </div><br>
      <div class="fakeimg"><div class="side-item"><div class="side-image"><a href="#"><img width="150" height="100" src="../assets/images/dress/d2.jpg"></a></div><div class="side-item-text"><h4><a href="">Papilion Minter Savior</a></h4><span class="side-item-meta">04 Mar 2015</span></div>
        </div></div><br>
      <div class="fakeimg"><div class="side-item"><div class="side-image"><a href="#"><img width="150" height="100" src="../assets/images/dress/d3.jpg"></a></div><div class="side-item-text"><h4><a href="">Papilion Minter Savior</a></h4><span class="side-item-meta">04 Mar 2015</span></div>
        </div></div>
    </div>
    <div class="card widget">
      <h3><span>Follow Me</span></h3>
      <div class="widget-content">
        <ul class="site-social-networks secondary-2-primary style-default show-title">
        <li><a href="http://facebook.com"><i class="fa fa-facebook"></i></a></li>
        <li><a href="http://twitter.com"><i class="fa fa-twitter"></i></a></li>
        <li><a href="http://plus.google.com"><i class="fa fa-google-plus"></i></a></li>
        <li><a href="http://instagram.com"><i class="fa fa-instagram"></i></a></li>
        </ul>
        <div class="clear"></div>
        </div>
    </div>
  </div>
</div>

    
</div>
