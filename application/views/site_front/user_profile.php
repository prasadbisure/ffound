<script>
    $('header').css('height', '225px');
</script>

<div class="container user-profile-margin">
    <?php echo isset($topup_modal) ? $topup_modal : ''; ?>
    <div class="row col-md-offset-2">
        <form class="form-horizontal" action="/site/profileupdate" method="POST" enctype="multipart/form-data">
        <div class="col-md-10 ">
                    <!-- Text input-->

                    <div class="form-group">
                        <label class="col-md-4 control-label" for="Name (Full name)">Name (Full name)<span class="mandatory-field">*</span></label>
                        <div class="col-md-6">
                            <div class="input-group">
                                <div class="input-group-addon profile-form">
                                    <i class="fa fa-user"></i>
                                </div>
                                <input id="Name (Full name)" name="name" type="text" pattern="[A-Za-z\s]+" maxlength=25 placeholder="Name (Full name)" class="form-control profile-form input-md" value="<?php echo $val[0]->name;?>" required>
                            </div>

                        </div>

                    </div>
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="Mobile">Mobile<span class="mandatory-field">*</span></label>
                        <div class="col-md-6">
                            <div class="input-group">
                                <div class="input-group-addon profile-form">
                                    <i class="fa fa-mobile"></i>
                                </div>
                                <input id="Mobile1" name="mobile" type="text" placeholder="Mobile" onkeypress='return event.charCode >= 48 && event.charCode <= 57'  autocomplete="off" minlength=9 maxlength="10" class="form-control profile-form input-md" value="<?php echo $val[0]->mobile;?>" required>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="email">Email<span class="mandatory-field">*</span></label>
                        <div class="col-md-6">
                            <div class="input-group">
                                <div class="input-group-addon profile-form">
                                    <i class="fa fa-user"></i>
                                </div>
                                <input id="email" name="email" type="text" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" class="form-control profile-form input-md" value="<?php echo $val[0]->email;?>" disabled required>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="password">Change Password</label>
                        <div class="col-md-6">
                            <div class="input-group">
                                <div class="input-group-addon profile-form">
                                    <i class="fa fa-key"></i>
                                </div>
                                <input id="password" name="password" type="password" placeholder="Change Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" class="form-control profile-form input-md" autocomplete="off">
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="cpassword">Confirm Password</label>
                        <div class="col-md-6">
                            <div class="input-group">
                                <div class="input-group-addon profile-form">
                                    <i class="fa fa-key"></i>
                                </div>
                                <input id="cpassword" name="cpassword" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Confirm Password" class="form-control profile-form input-md" autocomplete="off">
                            </div>
                        </div>
                    </div>
                    <?php if($role != 4){ ?>                    
                     <div class="form-group">
                        <label class="col-md-4 control-label" for="Name (Full name)">Brand Name (Firm name)<span class="mandatory-field">*</span></label>
                        <div class="col-md-6">
                            <div class="input-group">
                                <div class="input-group-addon profile-form">
                                    <i class="fa fa-tags"></i>
                                </div>
                                <input id="Brand Name (Firm name)" name="brandName" type="text" placeholder="Brand Name (Firm name)" maxlength=15 class="form-control profile-form input-md" value="<?php echo $val[0]->brandName;?>" required>
                            </div>

                        </div>

                    </div>
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="Permanent Address">Address</label>
                        <div class="col-md-6">
                            <textarea id="Permanent Address" name="address" placeholder="Address" class="form-control profile-form input-md "  rows="3" cols="30" maxlength=150><?php echo $val[0]->address;?></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="Name (Full name)">Specialization<span class="mandatory-field">*</span></label>
                        <div class="col-md-6">
                            <div class="input-group">
                                <div class="input-group-addon profile-form">
                                    <i class="fa fa-tags"></i>
                                </div>
                                <input id="Specialization" name="specialization" type="text" placeholder="Specialization" maxlength=25 class="form-control profile-form input-md" value="<?php echo $val[0]->specialization;?>" required>
                            </div>

                        </div>

                    </div>

                    <!-- File Button -->
                    <!--<div class="form-group">-->
                    <!--    <label class="col-md-4 control-label" for="Upload photo">Upload Logo</label>-->
                    <!--    <div class="col-md-6">-->
                    <!--        <div class="input-group">-->
                    <!--            <div class="input-group-addon profile-form">-->
                    <!--                <i class="fa fa-upload"></i>-->
                    <!--            </div>-->
                    <!--        <label for="file-upload" class="custom-file-upload">-->
                    <!--            Select Logo Image-->
                    <!--        </label>-->
                    <!--        <input id="file-upload" style = "display:none;" name="logo" class="input-file profile-form" type="file">-->
                    <!--        </div>-->
                    <!--    </div>-->
                    <!--</div>-->
                    
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="Permanent Address">Business Description</label>
                        <div class="col-md-6">
                            <textarea id="Business Description" name="bio" placeholder="Business Description" class="form-control profile-form input-md "  rows="3" cols="30" maxlength=150><?php echo $val[0]->bio;?></textarea>
                        </div>
                    </div>
                    <?php } ?>
                    
            </div>
            <?php if($role != 4){ ?>
            <div class="col-md-2 text-center user-profile-margin">
                <p style="font-family: Raleway-semiBold;text-decoration: underline;text-align: center;">Your Logo</p>
                <img src=<?php echo (!empty($val[0]->logo)) ? $val[0]->logo : "http://websamplenow.com/30/userprofile/images/avatar.jpg"; ?> class="img-responsive img-thumbnail ">
                <label for="file-upload" class="custom-file-upload">
                                    Select Logo
                </label>
                <input id="file-upload" style = "display:none;" name="logo" class="input-file profile-form" type="file">
                </div>
            </div>
            <?php } ?>
	    <div class="col-md-12">
                 <div class="form-group">
                     <div class="text-center">
                         <button type="submit" class="btn submit-btn-style validate" value="submit">Save</button>
                     </div>
                 </div>
	    </div>
        </form>
    </div>
</div>
