<script>

$(window).load(function() {

// $('body').addClass('login-bg');
$('body').css('background-color', '#181818');

var val = "<?php echo $success ?>";
    
if(val){
    $('#info-dialog').modal('show');
}

});
</script>
  <section id="contact" class="content-section text-center contact-us-margin">
    <div class="contact-section">
      <div class="container" id="content">
        <h2>COMMING SOON</h2>      
        <h3>Stay tunned to Fashion Found</h3>        
        <div class="back-to-site text-center">
            <a href="/">Back To Site</a>
        </div>
      </div>
      
      <div class="row row-margin-zero">
        <div class="col-md-12">
          <div class="col-md-4" style="left :37%;">
            <div class="icons-info">
              <a href="https://www.facebook.com/fashionfound/"><img src="<?php echo base_url();?>assets/images/facebook.png" alt="icons" class="icons-style"></a>
              <a href="https://plus.google.com/u/0/117807729864330672592"><img src="<?php echo base_url();?>assets/images/google.png" alt="icons" class="icons-style"></a>
              <a href="https://www.instagram.com/fashion_found/"><img src="<?php echo base_url();?>assets/images/instagram.png" alt="icons" class="icons-style"></a>
              <a href="https://twitter.com/fashionfound27"><img src="<?php echo base_url();?>assets/images/twitter.png" alt="icons" class="icons-style"></a>
              <a href="https://www.pinterest.com/fashion_found"><img src="<?php echo base_url();?>assets/images/pinterest.png" alt="icons" class="icons-style"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
