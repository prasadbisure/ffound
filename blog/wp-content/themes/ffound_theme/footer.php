<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.2
 */
?>
	<footer>
		<section id="contact" class="content-section text-center">
			<div class="contact-section">
				<div class="container" id="content">
					<p class="fancy"><span>If you have any questions</p>
					<h2>CONTACT US</h2>
					<h3>WE WILL BE HAPPY TO ANSWER YOU</h3>
					<div class="rowrow-margin-zero">
						<div class="col-md-4"></div>
						<div class="col-md-4 col-sm-6 col-sm-offset-3 col-md-offset-0 col-xs-6 col-xs-offset-3 custom-mobile">
							<form class="form-style" action="<?php //base_url(); ?> feedback" method="POST" id="contact-us">
								<div class="form-group">
									<input type="text" class="form-control colorof" placeholder="Name" name="name" maxlength=25 pattern="[A-Za-z\s]+" required>
								</div>
								<div class="form-group">
									<input type="email" class="form-control colorof" placeholder="Email-Id" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required>
								</div>
								<div class="form-group ">
									<label for="exampleInputText" class="label-style">Enter Your text here</label>
									<textarea  class="form-control colorof" name="msg" maxlength=150 required></textarea>
								</div>
								<button type="submit" class="btn btn-default submit-btn-style">Submit</button>
							</form>
						</div>
						<div class="col-md-4"></div>
					</div>
				</div>
				<div class="row row-margin-zero">
					<div class="col-md-12 col-xs-12">
						<div class="icons-info text-right social-buttons">
							<a href="https://www.facebook.com/fashionfound" class="icons-style f-icon"></a>
							<a href="https://plus.google.com/u/0/117807729864330672592" class="icons-style g-icon"></a>
							<a href="https://www.instagram.com/fashion_found/" class="icons-style i-icon"></a>
							<a href="https://www.twitter.com/fashionfound27" class="icons-style t-icon"></a>
							<a href="https://www.pinterest.com/fashion_found" class="icons-style p-icon"></a>
						</div>
					</div>
				</div>
			</div>

			<div class="modal fade" id="conact-us-modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
				<div class="modal-dialog" style="margin-top: 12%;">
					<div class="loader">
						<div class="one"></div>
						<div class="two"></div>
						<div class="three"></div>
					</div>
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" style="font-size: 36px;">×</span><span class="sr-only">Close</span></button>
							<h3 class="modal-title" id="lineModalLabel">Fashion Found</h3>
						</div>
						<div class="modal-body" style="height : auto;">
							<p class="ff-txt1">Thank you for contacting us, Soon you will hear from us. </p>
						</div>
					</div>
				</div>
			</div>

		</section>
	</footer>

<!--Bootstrap CDN JS-->
<!--<script src="<?php //echo base_url(); ?>assets/js/libs.js"></script>-->
<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.24.0/jquery.min.js"></script> -->
<!--<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>-->
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
<script src="../assets/js/modernizr.js"></script>
<script src="../assets/js/main.js"></script>

<script src="../assets/js/common.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.16/datatables.min.js"></script>
<script src="../assets/js/xzoom.min.js"></script>
<script src="../assets/js/masonary.pkgd.min.js"></script>
<script src="../assets/js/imagesloaded.js"></script>
<script src="../assets/js/classie.js"></script>
<script src="../assets/js/AnimOnScroll.js"></script>
<script>
	if($('#grid').length > 0){
		new AnimOnScroll( document.getElementById( 'grid' ), {
			minDuration : 0.4,
			maxDuration : 0.9,
			viewportFactor : 0.2
		});
	}
</script>
<script>
	$('header').css('height', '350px')
</script>
</body>
</html>
