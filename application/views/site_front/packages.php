
<script type="text/javascript">
 $(document).ready(function() {
    $('.buy-btn').on('click', function(e){
        $('#cd-signup').modal('show');
        $('#subscription_id').val($(this).val());
    });
    
 });
</script>

<?php if($upgrade != 'upgrade'){ ?>
<div class="modal fade" id="cd-signup" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog" style="margin-top: 12%;">
        <div class="loader">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
        </div>
        <div class="modal-content">
            <div class="modal-header" style="text-align: center;">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" style="font-size: 36px;">×</span><span class="sr-only">Close</span></button>
                <h3 class="modal-title" id="lineModalLabel" >Welcome To FF</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" action="" method="post" id="sign-up">
                    <input type="hidden" id="subscription_id" name="subscription_id">
                    <input type="hidden" name="vendor" value="vendor">
                  <div class="form-group">
                    <label class="control-label col-sm-3" for="name">Name:</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" name="name" id="name" placeholder="Full Name" pattern="[A-Za-z\s]+" maxlength=25 required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3" for="email">Email:</label>
                    <div class="col-sm-9"> 
                      <input type="email" class="form-control" id="email" name="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required>
                    </div>
                    <span class="error email-error"></span>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3" for="mobile">Brand Name:</label>
                    <div class="col-sm-9"> 
                      <input type="text" class="form-control" id="brandName" name="brandName" placeholder="Brand Name" pattern="[A-Za-z0-9\s]+" maxlength=25 required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3" for="mobile">Mobile:</label>
                    <div class="col-sm-9"> 
                      <input type="text" class="form-control" id="mobile" name="mobile" onkeypress='return event.charCode >= 48 && event.charCode <= 57' minlength=9 maxlength="10" placeholder="Mobile" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3" for="pwd">Password:</label>
                    <div class="col-sm-9"> 
                      <input type="password" class="form-control" id="pwd" name="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3">Signup as:</label>
                    <div class="col-sm-9" style="padding-top: 8px;"> 
                        <!--<label class="radio-inline label-sign-up">-->
                        <!--  <input type="radio" name="role" value=2 checked>Designer-->
                        <!--</label>-->
                        <!--<label class="radio-inline label-sign-up">-->
                        <!--  <input type="radio" name="role" value=3>Boutique-->
                        <!--</label>-->
                        <input type="radio" id="r-designer" name="role" class="aaa" value="2" checked>
                        <label for="r-designer">Designer</label>
                        <input type="radio" id="r-boutique" name="role" class="aaa" value="3">
                        <label for="r-boutique">Boutique</label>
                    </div>
                  </div>
                  <div class="form-group"> 
                    <div class="col-sm-offset-5 col-sm-10">
                      <input type="submit" class="btn btn-default submit-btn-style" value="Get Started">
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
</div>
<?php } ?>

<section class="content">
    <div class="container">
        <div class="table-responsive">
            <table class="packagestable-style">
                <tr><?php
                    if(!empty($list))
                    {
                        foreach ($list as $li)
                        {?>
                            <td>
                                <table>
                                    <col class="col-width">
                                <tr class='theading'><td class='rstyle'><b><?php echo $li->name; ?></b></td></tr>
                                <tr class='trow1-style'><td class="">INR</td></tr>
                                <tr class='trow2-style'><td><?php echo $li->price ?></td></tr>
                                <tr><td><hr class='tablehr-style'></td></tr>
                                <tr>
                                    <td class='trow3-style'>
                                        <b>
                                            <?php echo $li->productLimit; ?>
                                        </b>
                                    </td>
                                </tr>
                                <tr><td class='nstyle'>PRODUCTS</td></tr>
				<?php if($li->productLimit == 0){ ?>
				<tr><td class="olisting-style"><b>(Only Listing)</b></td></tr>
				<?php }else{ ?>
				<tr><td><br></td></tr>
				<?php } ?>
                                <tr><td class='rstyle'>
                                <nav class=main-nav>
                                <?php if($upgrade == 'upgrade'){ ?>
                                    <button class='cd-signup tablebuy-style upgrade-btn' value="<?php  echo $li->id; ?>">UPGRADE</button>
                                <?php }else{ ?>
                                    <button class='cd-signup tablebuy-style buy-btn' value="<?php  echo $li->id; ?>">BUY</button>
                                <?php } ?>
                                </nav>
                                </td></tr>
                                </table>
                            </td>
                    <?php }
                    }
                    ?>
                </tr>
            </table>
        </div>
    </div>   
<?php echo $page_content; ?>  



      
