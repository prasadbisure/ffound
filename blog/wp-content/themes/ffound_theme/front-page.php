<?php
/**
 * The front page template file
 *
 * If the user has selected a static page for their homepage, this is what will
 * appear.
 * Learn more: https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */
get_header(); ?>
<style>
* {
    box-sizing: border-box;
}

.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap; 
    flex-wrap: wrap;
    padding: 0 4px;
}

.column {
    -ms-flex: 100%; 
    flex: 100%;
    max-width: 100%;
    padding: 0 20px;
}

.column img {
    margin-top: 0px;
    vertical-align: middle;
}

@media screen and (max-width: 800px) {
    .column {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
    }
    .view{
            height: 310px!important;
    }
}

@media screen and (max-width: 500px) {
    .view {
   
    width: 100%!important;
}
    
}
    

        
    .view {
    overflow: hidden;
    position: relative;
    text-align: center;
    height: 350px;
    margin-top: 40px;
   /*box-shadow: 1px 1px 2px #e6e6e6;*/
    cursor: pointer;
    /*background: #fff url(../images/bgimg.jpg) no-repeat center center*/
            float: left;
    width: 48%;
    margin-left: 2%;
}
.view .mask, .view .content, .view .book_mask {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0
}
.view img {
    display: block;
    position: relative
}
.view h2 {
        color: #000;
    text-align: left;
    font-weight: 500;
    width: 100%;
    position: absolute;
    bottom: 0;
    font-size: 16px;
    line-height: 1.3em;
    padding: 16px 20px;
    background: #d4b000;
    margin: 20px 0 0 0;
    
}
    h2 span:nth-child(2) {
        font-weight: bolder;
    display: block;
        font-size: 18px;
        
    }
    .view .mask h2{
        background: none;
    color: #000000;
    font-size: 17px;
    line-height: 1.5em;
            font-weight: 500;
    text-shadow: 1px 1px 1px #fff;
        
    }
   
.view p {
   /* font-family: Georgia, serif;*/
    font-weight: 600;
    font-size: 18px;
    position: relative;
    color: #fff;
    padding: 10px 20px 20px;
    text-align: center
}
.view a.info {
    display: inline-block;
    text-decoration: none;
    padding: 7px 14px;
    background: #d4b00b;
    color: #000;
        font-weight: 700;
    text-transform: uppercase;
    box-shadow: 0 0 1px #000;
        font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
}
    
.view a.info:hover {
    box-shadow: 0 0 5px #000
}


       .view-eighth .mask { 
	background-color: rgba(212, 176, 0, 0.7);
	top: -200px;
	opacity: 0;
	transition: all 0.3s ease-out 0.5s;
}
.view-eighth h2{
    transform: translateY(0px);
	transition: all 0.2s ease-in-out 0.1s;
    
}
    .view-eighth .mask h2{
    transform: translateY(-135px);
	transition: all 0.2s ease-in-out 0.1s;
    
}
.view-eighth p { 
    color: #fff;
    transform: translateY(-200px);
	transition: all 0.2s ease-in-out 0.2s;
}
     .view-eighth .book_mask h2 { 
   transition: all 0.4s ease-in-out 0.4s;
}
    .view-eighth:hover .mask { 
	opacity: 1; 
	top: 0px; 
	transition-delay: 0s; 
    animation: bounceY 0.9s linear;
}																						
.view-eighth:hover h2 { 
    transform: translateY(0px);
	transition-delay: 0.4s;
}
.view-eighth:hover p { 
	transform: translateY(0px);
	transition-delay: 0.2s;
}

    .view-eighth:hover .mask h2 { 
   transform: translateY(-135px);
	transition-delay: 0.4s;
}
     .view-eighth:hover .book_mask h2 { 
   opacity: 0; 
         transition: all;
         transition-delay: 0.1s;
}
    @keyframes bounceY {
    0% { transform: translateY(-205px);}
    40% { transform: translateY(-100px);}
    65% { transform: translateY(-52px);}
    82% { transform: translateY(-25px);}
    92% { transform: translateY(-12px);}
    55%, 75%, 87%, 97%, 100% { transform: translateY(0px);}
}
.nav-btn a {
  width: 60px;
  height: 60px;

}
    #gnavi {
    padding-right: 0px;
    left: 90%;
    }
    .vendorinforow {
    margin-bottom: 55px;
}
    @media (min-width: 767px) and (max-width: 768px){
.container {
    width: 721px;
} 
       
    }
     @media (min-width: 650px) and (max-width: 700px){

        .view{
            height: 296px!important;
        }
    }
</style>
<div class="col-lg-12  vendor-search-bar">
	<form class="search-box" role="search" method="post" action="/vendorListing">				
	     <div class="input-group add-on" style=" width: 76%;">
			<input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term">
				<div class="input-group-btn">
					<button class="btn btn-default custom-theme-border zero-radius custom-zindex" type="submit" style="border: 1px solid;height: 39px;"><i class="glyphicon glyphicon-search"></i></button>
				</div>
		</div>						
	</form>
</div>
<?php
global $post;
$args = array( 'posts_per_page' => 4, 'offset'=> 0, 'category' => '' );
$the_query = new WP_Query( $args );?>

<div class="container vendorinforow">
     <div class="row"> 
        <div class="column">
            <?php
            if ( $the_query->have_posts() ) {
                while ( $the_query->have_posts() ) {
                $the_query->the_post();
                    ?>
                <a href="<?php echo the_permalink();?>">
                    <div class="view view-eighth">
                    <img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID), 'thumbnail' );?>" style="width:100%" >

                        <div class="book_mask">
                            <h2><span><?php echo the_title();?></span><span>-<?php echo get_the_author();?></span></h2>
                        </div>
                        <div class="mask">
                            <h2><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span> -Kritika Kapoor</span></h2>
                        </div>

                    </div>
                </a>
                    <?php
                }
            wp_reset_postdata();
            } else {
            }
            ?>

        </div>
      </div>
</div>





<?php
global $post;
$args = array( 'posts_per_page' => 4, 'offset'=> 0, 'category' => '' );
$the_query = new WP_Query( $args );
if ( $the_query->have_posts() ) {
    while ( $the_query->have_posts() ) {
        $the_query->the_post();

//        ?><!--<a style="color: #000;" href="--><?php //echo the_permalink();?><!--">--><?php //echo get_the_title();?><!--</a><br>--><?php
    }

    /* Restore original Post Data */
    wp_reset_postdata();
} else {
}
?>
<?php get_footer();
