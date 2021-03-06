<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

get_header();
?>
<style>

	img {
		max-width: 100%;
	}
	/* Create two unequal columns that floats next to each other */
	/* Left column */
	.leftcolumn {
		float: left;
		width: 67%;
	}

	/* Right column */
	.rightcolumn {
		float: left;
		width: 28%;
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
		font: 18px Maven Pro;
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
		font-family: Raleway-Regular;
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
		font: 12px Open Sans;
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
	/*custome*/

</style>
<?php
	while ( have_posts() ) : the_post();
	?>
		<div class="container">
			<div class="row">
				<div class="leftcolumn">
					<div class="card">
						<h2><?php echo the_title();?></h2>
						<h5>By <?php echo get_the_author();?> - <?php echo get_the_date();?></h5>
						<div class="fakeimg" style="height:400px;">
							<img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID), 'thumbnail' );?>">
						</div>
						<?php echo the_content();?>
						<!--						<p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>-->
<!--						<a class="button-style" href="http://localhost/ffound/index.php/aboutus">Read More</a>-->
					</div>

				</div>
				<div class="rightcolumn">
					<div class="card widget">
						<h3><span>About Me</span></h3>
						<div class="fakeimg" style="height:200px;">
<!--							<img src="../assets/images/dress/d1.jpg">-->
							<?php
							if (function_exists ( 'mt_profile_img' ) ) {
								$author_id=$post->post_author;
								mt_profile_img( $author_id, array(
										'size' => 'medium',
										'attr' => array( 'alt' => 'Alternative Text' ),
										'echo' => true )
								);
							}
							?>
						</div>

						<p><?php echo the_author_meta( 'user_description', $post->post_author ); ?></p>
					</div>
					<div class="card widget">
						<h3><span>Popular Post</span></h3>

						<?php
						$args = ['numberposts'=>5,'post_type' => 'post','exclude'=> get_the_ID()];
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
<!--					<div class="card widget">-->
<!--						<h3><span>Follow Me</span></h3>-->
<!--						<div class="widget-content">-->
<!--							<ul class="site-social-networks secondary-2-primary style-default show-title">-->
<!--								<li><a href="http://facebook.com"><i class="fa fa-facebook"></i></a></li>-->
<!--								<li><a href="http://twitter.com"><i class="fa fa-twitter"></i></a></li>-->
<!--								<li><a href="http://plus.google.com"><i class="fa fa-google-plus"></i></a></li>-->
<!--								<li><a href="http://instagram.com"><i class="fa fa-instagram"></i></a></li>-->
<!--							</ul>-->
<!--							<div class="clear"></div>-->
<!--						</div>-->
<!--					</div>-->

				</div>
			</div>


		</div>
	<?php
	endwhile;
?>

<?php get_footer();
?>



<!--<div class="wrap">-->
<!--	<div id="primary" class="content-area">-->
<!--		<main id="main" class="site-main" role="main">-->
<!---->
<!--			--><?php
//			/* Start the Loop */
//			while ( have_posts() ) : the_post();
//
//				get_template_part( 'template-parts/post/content', get_post_format() );
//
//				// If comments are open or we have at least one comment, load up the comment template.
//				if ( comments_open() || get_comments_number() ) :
//					comments_template();
//				endif;
//
//				the_post_navigation( array(
//					'prev_text' => '<span class="screen-reader-text">' . __( 'Previous Post', 'twentyseventeen' ) . '</span><span aria-hidden="true" class="nav-subtitle">' . __( 'Previous', 'twentyseventeen' ) . '</span> <span class="nav-title"><span class="nav-title-icon-wrapper">' . twentyseventeen_get_svg( array( 'icon' => 'arrow-left' ) ) . '</span>%title</span>',
//					'next_text' => '<span class="screen-reader-text">' . __( 'Next Post', 'twentyseventeen' ) . '</span><span aria-hidden="true" class="nav-subtitle">' . __( 'Next', 'twentyseventeen' ) . '</span> <span class="nav-title">%title<span class="nav-title-icon-wrapper">' . twentyseventeen_get_svg( array( 'icon' => 'arrow-right' ) ) . '</span></span>',
//				) );
//
//			endwhile; // End of the loop.
//			?>
<!---->
<!--		</main><!-- #main -->-->
<!--	</div><!-- #primary -->-->
<!--	--><?php //get_sidebar(); ?>
<!--</div><!-- .wrap -->-->




