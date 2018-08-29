<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
<style>
    span.select2-selection--multiple{
        background: none !important;
        border: 1px solid #d4b000 !important;
        border-radius: 0px !important;
        color: #d4b000 !important;
        font-size: 18px !important;
        font-family: Raleway-Regular;
    }
</style>
<script>
 function checkPrice(input) {
     input.setCustomValidity('');
 }
 
</script>

<div class="container">
    
    <div class="row row-margin-zero designerpage">

        <?php echo isset($subscriptionNotification) ? $subscriptionNotification : ''; ?>
        <?php echo isset($topup_modal) ? $topup_modal : ''; ?>
        <?php
        $prod_cnt=0;
        if(!empty($val))
        {

            $count = sizeof($val);
            $blank_modals = $val[0]->productLimit - $count;
            $userId = $val[0]->userId;
            $x = 0;
            foreach ($val as $val)
            {
                $x++;

                if($val->productId!='') {
                    ?>
                    <div class='col-md-3 col-sm-6 infoDetails'>
                        <div class='nd-wrap nd-style-1'>

                            <div class='nd-content'>
                                <img id="my_image<?php echo $val->productId . $userId . $x; ?>"
                                     src="<?php echo ($val->thumbnail != '') ? $val->thumbnail : base_url() . '/assets/images/default_hanger.png'; ?>"
                                     class='margin-st'>
                                <div class='nd-content_inner '>
                                    <div class='nd-content_inner1'>
                                <span class='nd-icon'>
                                    <!--<a href='#' data-toggle='modal' data-target='#myModal<?php// echo $val->productId.$userId.$x;
                                    ?>'>-->
                                        <button class='edit-btn fa fa-pencil-square-o fa-fw buy-btn' data-toggle="modal"
                                                data-target="#productEditModal-<?php echo $val->productId; ?>"></button>
                                    <!--</a> -->
                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='info'>
                            <div class='datails'>
                                <p class='info-text-style'><?php echo $val->product_name; ?></p>
                                <p class='price-style'>INR: <?php echo $val->price; ?></p>
                            </div>
                        </div>
                        <div class="modal fade" id="productEditModal-<?php echo $val->productId; ?>" tabindex="-1"
                             role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                            <div class="modal-dialog">

                                <div class="modal-content">
                                    <div class="spinner">
                                        <span>Uploading...</span>
                                        <progress></progress>
                                    </div>

                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal"><span
                                                aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                                        <h3 class="modal-title" id="lineModalLabel">Edit Product Details</h3>
                                    </div>
                                    <form enctype="multipart/form-data" id="data<?php echo $userId . $blank_modals . $i; ?>"
                                          class="product-form" method="post">
                                        <div class="modal-body col-lg-12" style="float:left;">

                                            <?php //var_dump($val); die;
                                            ?>
                                            <!-- content goes here -->
                                            <input type="hidden" name="pid" class="pid"
                                                   value=<?php echo $val->productId; ?>>
                                            <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-12">
                                                <label for="exampleInputEmail1">Name</label>
                                                <input type="text" class="form-control" placeholder="Name" name="name"
                                                       value=<?php echo $val->product_name; ?>>
                                            </div>
                                            <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
                                                <label for="exampleInputPassword1">Style</label>
                                                <input type="text" class="form-control" placeholder="Style" name="style"
                                                       value=<?php echo $val->product_style; ?>>
                                            </div>
                                            <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
                                                <label for="exampleInputPassword1">Fabric</label>
                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                       placeholder="Fabric" name="fabric"
                                                       value=<?php echo $val->product_fabric; ?>>
                                            </div>
                                            <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
                                                <label for="exampleInputPassword1">Color</label>
                                                <input type="text" class="form-control" placeholder="Color" name="color"
                                                       value=<?php echo $val->product_color; ?>>
                                            </div>
                                            <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
                                                <label for="exampleInputPassword1">Size</label>
                                                <select class="form-control custom-select-modal" placeholder="Size"
                                                        name="size[]" multiple="multiple">
                                                    <option
                                                        value="free size" <?php echo (in_array('free size',$val->product_size)) ? "selected" : '' ?>>
                                                        Free Size
                                                    </option>
                                                    <option
                                                        value="XXL" <?php echo (in_array('XXL',explode(',',$val->product_size))) ? "selected" : ''; ?>>
                                                        XXL
                                                    </option>
                                                    <option
                                                        value="XL" <?php echo (in_array('XL',explode(',',$val->product_size))) ? "selected" : ''; ?>>
                                                        XL
                                                    </option>
                                                    <option
                                                        value="L" <?php echo (in_array('L',explode(',',$val->product_size))) ? "selected" : ''; ?>>
                                                        L
                                                    </option>
                                                    <option
                                                        value="M" <?php echo (in_array('M',explode(',',$val->product_size))) ? "selected" : ''; ?>>
                                                        M
                                                    </option>
                                                    <option
                                                        value="S" <?php echo (in_array('S',explode(',',$val->product_size))) ? "selected" : ''; ?>>
                                                        S
                                                    </option>
                                                    <option
                                                        value="XS" <?php echo (in_array('XS',explode(',',$val->product_size))) ? "selected" : ''; ?>>
                                                        XS
                                                    </option>
                                                    <option
                                                        value="XXS" <?php echo (in_array('XXS',explode(',',$val->product_size))) ? "selected" : ''; ?>>
                                                        XXS
                                                    </option>
                                                </select>
                                                <!--<input type="text" class="form-control"  placeholder="Size" name="size" value=<?php echo $val->product_size; ?>>-->
                                            </div>
                                            <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
                                                <label for="exampleInputPassword1">Price (&#8377;)</label>
                                                <input type="number" class="form-control" id="exampleInputPassword1"
                                                       placeholder="Price" name="price" oninput="checkPrice(this)"
                                                       onclick="checkPrice(this)" value=<?php echo $val->price; ?>>
                                            </div>
                                            <!--<div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-12">-->
                                            <!--  <label for="exampleInputPassword1">One liner text</label>-->
                                            <!--  <input type="text" class="form-control"  placeholder="One liner text" name="onelinertext" value=<?php echo $val->onelinertxt; ?>>-->
                                            <!--</div>-->
                                            <div class="form-group col-xs-10 col-sm-12 col-md-4 col-lg-12">
                                                <label for="exampleInputPassword1">Description</label>
                                                <textarea rows=3 class="form-control modal-textarea"
                                                          placeholder="Description"
                                                          name="description"><?php echo trim($val->product_description); ?></textarea>
                                            </div>
                                            <div class="form-group float-left">
                                                <label for="prod-imag-1" class="padding-15-left">Product Image-1</label>
                                                <input type="file" id="prod-imag-1" class="modal-file-hide padding-15-left"
                                                       name="userfile[]">
                                            </div>
                                            <div class="form-group float-left">
                                                <label for="prod-imag-2" class="padding-15-left">Product Image-2</label>
                                                <input type="file" id="prod-imag-2" class="modal-file-hide padding-15-left"
                                                       name="userfile[]">
                                            </div>
                                            <div class="form-group float-left">
                                                <label for="prod-imag-3" class="padding-15-left">Product Image-3</label>
                                                <input type="file" id="prod-imag-3" class="modal-file-hide padding-15-left"
                                                       name="userfile[]">
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <div class="btn-group btn-group-justified" role="group"
                                                 aria-label="group button">
                                                <div class="btn-group col-md-3" role="group">
                                                    <button type="button" class="btn btn-default submit-btn-style"
                                                            data-dismiss="modal" role="button">Close
                                                    </button>
                                                </div>

                                                <div class="btn-group col-md-3" role="group">
                                                    <button type="submit"
                                                            class="btn btn-default btn-hover-green submit-btn-style"
                                                            data-action="save" role="button">Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    <?php
                    $prod_cnt++;
                }
            }

        }
        if($prod_cnt==0){
            ?><h2 style="text-align: center;">No products found, please upgrade your package! </h2><?php
        }
        ?>
             
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
<script>
    $(document).ready(function () {
        $('.custom-select-modal').select2();
    });
</script>