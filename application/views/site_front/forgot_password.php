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
<div class="login-register-bk">
<div class="form">
      <div class="tab-content">
        
        
        <div id="login">   
          <h1>Reset Password</h1>
          
          <form action="<?php echo base_url() ?>loginMe" method="post">
            <div class="field-wrap">
            <label>
              Email Address<span class="req">*</span>
            </label>
            <input type="email" name="email" required autocomplete="off"/>
          </div>

          <button class="button button-block"/>Log In</button>
          
          </form>

        </div>
      </div><!-- tab-content -->
      <div class="back-to-site text-center">
            <a href="/">Back To Site</a>
      </div>
</div> <!-- /form -->

</div>
<div class="modal fade" id="info-dialog" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog" style="margin-top: 12%;">
            <div class="loader">
                <div class="one"></div>
                <div class="two"></div>
                <div class="three"></div>
            </div>
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" style="font-size: 36px;">×</span><span class="sr-only">Close</span></button>
                    <h3 class="modal-title" id="lineModalLabel"><?php echo ($success == 1) ? "Reset password" : "Fashion Found"; ?></h3>
                </div>
                <div class="modal-body" style="height : auto;">
                    <?php if($success == 1){ ?>
                    <p class="ff-txt1">We have sent you system generated password. </p>
                    <p class="ff-txt1">To ensure your account security login into your account and update new password</p>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>