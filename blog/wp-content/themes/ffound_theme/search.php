<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

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
    margin-bottom: 12px;
    margin-bottom: 16px!important;
    padding-bottom: 11px!important;
}
    .recent_post .fakeimg {
        
    border-bottom: 1px solid #eee;
        
    }
    .fakeimg:last-child {
    border-bottom: none;
}

/* Add a card effect for articles */
.card {
     background-color: white;
     padding: 20px;
     margin-top: 0px;
        font: 18px;
    color: #6f6f6f;
        overflow: hidden;
}
    .card.main_block {
    border-bottom: 1px solid #dcdcdc;
}
.card h2,.card h3 {
    text-align: left;
    color: #5f5f5f;
    font-weight: 600;
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
               color: #000;
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
    right: 69%;
    border-bottom: 1px solid;
    border-color: #eee;
    width: 90px;
    margin: 0 14px;
}
    .card span:after {
    content: "";
    position: absolute;
    top: 37%;
    left: 69%;
    border-bottom: 1px solid;
    border-color: #eee;
    width: 90px;
    margin: 0 14px;
}
    span.side-item-meta:before, span.side-item-meta:after {
    content: none;
}
    .side-item-text h4 {
    font-size: 14px;
    text-decoration: none;
}
     .side-item-text h4 a {
    color: #888888;
    font-weight: 500;
}
    .about_us p{
        text-align: center;
    }
    @media screen and (max-width: 800px) {
  .fakeimg {
    text-align: center;
}
   
}
       @media screen and (max-width: 620px) {
  .fakeimg.main_img {
    display: none;
}
           .main_block p {
    margin-left: 0%!important;
}
   
}
    .fakeimg.main_img {
    float: left;
        width: 15%;
}
    .main_block p {
    margin-left: 17%;
            margin-top: 1%;
            font-size: 18px;
}
/*custome*/    
    


</style>

<div class="col-lg-12  vendor-search-bar">
	<form class="search-box" role="search" method="get" action="<?php echo site_url();?>">
	     <div class="input-group add-on" style=" width: 76%;">
			<input type="text" class="form-control" placeholder="Search" name="s" id="srch-term">
				<div class="input-group-btn">
					<button class="btn btn-default custom-theme-border zero-radius custom-zindex" type="submit" style="border: 1px solid;height: 39px;"><i class="glyphicon glyphicon-search"></i></button>
				</div>
		</div>
	</form>
</div>



		<div class="container">
			<div class="row">
				<div class="leftcolumn">
				<?php if ( have_posts() ) :?>
					<?php while ( have_posts() ) : the_post(); ?>
						<div class="card main_block">
						<h2><?php echo the_title();?></h2>
						<h5 style="margin-bottom:3%;">By <?php echo get_the_author();?> - <?php echo get_the_date();?></h5>
						<div class="fakeimg main_img">
							<img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID), 'thumbnail' );?>">
						</div>
						<?php echo the_content();?>
                        <a class="button-style" href="<?php echo the_permalink();?>">READ MORE</a>
					</div>
					<?php endwhile;?>
					<?php else : ?>
					<h2>No Post Found!</h2>
				</div>
				<?php endif;  ?>
				<div class="rightcolumn">
					
					<div class="card widget recent_post">
						<h3><span>Recent Post</span></h3>

						<?php
						$args = ['numberposts'=>4,'post_type' => 'post','exclude'=> get_the_ID()];
						$recent_posts = wp_get_recent_posts( $args );
						foreach ($recent_posts as $post){
							?><div class="fakeimg">
								<div class="side-item">
									<div class="side-image">
										<a href="#"><img width="150" height="100" src="<?php echo wp_get_attachment_url( get_post_thumbnail_id($post['ID']), 'thumbnail' );?>"></a>
									</div>
									<div class="side-item-text">
										<h4><a href=""><?php echo $post['post_title'];?></a></h4>
										<span class="side-item-meta"><?php echo get_the_date();?></span>
									</div>
								</div>
							</div><?php
						}

						?>

					</div>

				</div>
			</div>
		</div>



<?php get_footer();
