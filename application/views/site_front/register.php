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
      
      <ul class="tab-group">
        <li class="tab active"><a href="#login">Log In</a></li>
        <li class="tab"><a href="#signup">Sign Up</a></li>
      </ul>
      
      <div class="tab-content">
        
        
        <div id="login">   
          <h1>Welcome Back!</h1>
          
          <form action="<?php echo base_url() ?>loginMe" method="post">
          
            <input type="hidden" name="tempvendor" value=<?php echo $vendorId; ?>>
            <input type="hidden" name="tempproduct" value=<?php echo $productId; ?>>
            <input type="hidden" name="referer" value=<?php echo $referer; ?>>
            
            <div class="field-wrap">
            <label>
              Email Address<span class="req">*</span>
            </label>
            <input type="email" name="email" required autocomplete="off"/>
          </div>
          
          <div class="field-wrap">
            <label>
              Password<span class="req">*</span>
            </label>
            <input type="password" name="password" required autocomplete="off"/>
          </div>
          
          <p class="forgot"><a href="/forgotPassword">Forgot Password?</a></p>
          
          <button class="button button-block"/>Log In</button>
          
          </form>

        </div>
        
        <div id="signup">   
          <h1>Sign Up for Free</h1>
          <?php echo validation_errors(); ?>
          <form  method="post" id="sign-up">
                <input type="hidden" name="temp-vendor" value=<?php echo $vendorId; ?>>
                <input type="hidden" name="temp-product" value=<?php echo $productId; ?>>
                <input type="hidden" name="s-referer" value=<?php echo $referer; ?>>
              <input type="hidden" id="roleid" name="role" value='4'>
              <div class="top-row">
                <div class="field-wrap">
                  <label>
                    Full Name<span class="req">*</span>
                  </label>
                  <input type="text" name="name" pattern="[A-Za-z\s]+" value="<?php echo set_value('name'); ?>" maxlength=25 required autocomplete="off" />
                </div>
            
                <div class="field-wrap">
                  <label>
                    Mobile<span class="req">*</span>
                  </label>
                  <input type="text" name="mobile" onkeypress='return event.charCode >= 48 && event.charCode <= 57'  minlength=9 maxlength="10" value="<?php echo set_value('mobile'); ?>" required autocomplete="off"/>
                </div>
              </div>
    
              <div class="field-wrap">
                <label>
                  Email Address<span class="req">*</span>
                </label>
                <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" value="<?php echo set_value('email'); ?>" required autocomplete="off"/>
                <span class="email-error error"></span>
              </div> 
              
              <div class="field-wrap">
                <label>
                  Password<span class="req">*</span>
                </label>
                <input type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required autocomplete="off"/>
              </div>
              
              
              <button type="submit" class="button button-block"/>Get Started</button>
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
                    <h3 class="modal-title" id="lineModalLabel"><?php echo ($success == 1) ? "Congratulation" : "Fashion Found"; ?></h3>
                </div>
                <div class="modal-body" style="height : auto;">
                    <?php if($success == 1){ ?>
                    <p class="ff-txt1">We have sent you verification link on your registered email address. </p>
                    <?php } else if($success == 4) { ?>
                        <p class="ff-txt1">Invalid username or password. </p>
                    <?php } else if($success == 5) { ?>
                        <p class="ff-txt1">You have successfully registered. </p>
                    <?php } else { ?>
                    <p class="ff-txt1">Something went wrong, Please try again. </p>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>