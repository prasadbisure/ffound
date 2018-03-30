	<script>
        $('header').css('height', window.innerHeight);
		 $(function() {
                $('.scroll-down').click (function() {
                  $('html, body').animate({scrollTop: $('#about_fashion').offset().top }, 'slow');
                  return false;
                });
              });
	</script>
   <div class="row row-margin-zero" id="about_fashion">
        <div class="col-lg-5 col-md-6 col-padding-zero middle-content">
            <img src="assets/images/fashion_found_1.jpg">
        </div>
        <div class="col-lg-7 col-md-6 col-padding-zero back-style">
            <?php echo $page_content; ?>
            <a class="button-style" href="<?php echo site_url('aboutus');?>">To Know More</a>
        </div>
    </div>
    <ul class="grid effect-6" id="grid">
        <li class="col-md-12 col-padding-zero">
            <div class="row row-margin-zero header-label-style">
                <h1 class="home-h-style">DESIGNERS</h1>
             </div>
             <div class="row row-margin-zero header-image-style">
                    <div class="col-lg-6 col-sm-12 col-padding-zero landing-img-effect">
                    	<img src="<?php echo ($designer1 != '' )? base_url($designer1) : 'assets/images/fashion_found_2.jpg'; ?>" class="landing-bottom-img">
			<p class="overlay-title">Designer</p>
			<p class=" tag-txt">About Designer</p>
                        <div class="overlay"></div>
                        <div class="button"><a href="<?php echo $designer_url1; ?>">Explore</a></div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-padding-zero landing-img-effect">
                        <img src="<?php echo ($designer2 != '' )? base_url($designer2) : 'assets/images/fashion_found_3.jpg'; ?>" class="landing-bottom-img">
			<p class="overlay-title">Designer</p>
			<p class=" tag-txt">About Designer</p>
                        <div class="overlay"></div>
                        <div class="button"><a href="<?php echo $designer_url2; ?>">Explore</a></div>
                    </div>
            </div>
        </li>
        <li class="col-md-12 col-padding-zero">
            <div class="row row-margin-zero header-label-style">
                  <h1 class="home-h-style">BOUTIQUES</h1>
            </div>
            <div class="row row-margin-zero header-image-style">
                    <div class="col-lg-6 col-sm-12 col-padding-zero landing-img-effect">
                      	<img src="<?php echo ($boutique1 != '' )? base_url().$boutique1 : 'assets/images/fashion_found_4.jpg'; ?>" class="landing-bottom-img">
		  	<p class="overlay-title">Boutique</p>
			<p class="tag-txt">About Boutique</p>
			<div class="overlay"></div>
			<div class="button"><a href="<?php echo $boutique_url1; ?>">Explore</a></div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-padding-zero landing-img-effect">
                        <img src="<?php echo ($boutique2 != '' )? base_url().$boutique2 : 'assets/images/fashion_found_5.jpg'; ?>" class="landing-bottom-img">
			<p class="overlay-title">Boutique</p>
			<p class="tag-txt">About Boutique</p>
                        <div class="overlay"></div>
                        <div class="button"><a href="<?php echo $boutique_url2; ?>">Explore</a></div>
                    </div>
            </div>
        </li>
    </ul>
    <!-- Finshed middle content-->
