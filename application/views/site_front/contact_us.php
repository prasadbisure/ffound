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
        <p class="fancy"><span>If you have any questions</p>
        <h2>CONTACT US</h2>      
        <h3>WE WILL BE HAPPY TO ANSWER YOU</h3>        
        <div class="rowrow-margin-zero">
          <div class="col-md-offset-4 col-md-4">
            <form class="form-horizontal form-style" id="contact-us" method="POST">
              <div class="form-group">
                    <input type="text" class="form-control colorof" placeholder="Name" name="name" maxlength=25 pattern="[A-Za-z\s]+" required>
              </div>
              <div class="form-group">
                    <input type="email" class="form-control colorof" placeholder="Email-Id" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required>
              </div>
              <div class="form-group ">
                <label for="exampleInputText" class="label-style">Enter Your text here</label>
                <textarea  class="form-control colorof" placeholder="Description" name="msg" maxlength=150></textarea> 
              </div>
              <button type="submit" class="btn btn-default submit-btn-style">Submit</button>
               <div class="back-to-site text-center">
                    <a href="/">Back To Site</a>
                </div>
            </form>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
      
      <div class="row row-margin-zero">
        <div class="col-md-12">
          <div class="col-md-4 col-md-offset-8">
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
