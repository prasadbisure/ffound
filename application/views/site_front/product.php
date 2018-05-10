<script>
jQuery(function($){
	
//	$('.xzoom, .xzoom-gallery').xzoom({position: 'lens', lensShape: 'circle', sourceClass: 'xzoom-hidden'});
	$(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15});
	$('header').css('height', 'auto');
	$('.starter-template').css('display', 'none');
	$('.nav-btn a').css('margin-top', '0px');
	$('header .container').css('height', '58px');

});
</script>
<style>
    @media (min-width: 768px){
.container {
    width: 720px;
}
    }
</style>

<div class="container">
    <div class="row">
        
        <div class="col-md-6 productcol-style">
        <?php foreach($vendor as $val){  //var_dump($val); die;?>
                <div class="xzoom-container">
              <img class="xzoom" id="xzoom-default" src="<?php echo $val->images; ?>" xoriginal="<?php echo $val->images; ?>" style="max-width:450px; max-height:500px;">
              <div class="xzoom-thumbs">
                <a href="<?php echo ($val->images != '') ? $val->images : '/assets/images/default_hanger.png'; ?>"><img class="xzoom-gallery xactive" width="140" height="140" src="<?php echo ($val->images != '') ? $val->images : '/assets/images/default_hanger.png'; ?>" xpreview="<?php echo ($val->images != '') ? $val->images : '/assets/images/default_hanger.png'; ?>"></a>
                <?php if($val->images2 !== ''){ ?>
                <a href="<?php echo ($val->images2 != '') ? $val->images2 : '/assets/images/default_hanger.png'; ?>"><img class="xzoom-gallery xactive" width="140" height="140" src="<?php echo ($val->thumbnail2 != '') ? $val->thumbnail2 : '/assets/images/default_hanger.png'; ?>" xpreview="<?php echo ($val->images2 != '') ? $val->images2 : '/assets/images/default_hanger.png'; ?>" ></a>
                <?php } ?>
                <?php if($val->images3 !== ''){ ?>
                <a href="<?php echo ($val->images3 != '') ? $val->images3 : '/assets/images/default_hanger.png'; ?>"><img class="xzoom-gallery xactive" width="140" height="140" src="<?php echo ($val->thumbnail2 != '') ? $val->thumbnail3 : '/assets/images/default_hanger.png'; ?>" xpreview="<?php echo ($val->images3 != '') ? $val->images3 : '/assets/images/default_hanger.png'; ?>" ></a>
                <?php } ?>
              </div>
            </div>
           
        <?php } 
        $sizes =  explode(",", $val->size);
        ?>
            
         </div>
        <div class="col-md-6" style="padding-left:5%">
            <h2 class="middle-h2"><?php echo $val->name; ?></h2>
            <P class="middle-p">INR-<?php echo $val->price; ?></P>
            <p class="middle-psg"><?php echo $val->description; ?></p>    
            <p class="pattern-style">SIZE:
                <span class="p-style">
                    <select id="p-size" name="size">
                        <?php foreach ($sizes as $size){ ?> 
                        <option value=<?php echo $size; ?>><?php echo $size; ?></option>
                        <?php } ?>
                    </select>
                </span>
            </p>
            <p class="pattern-style">COLOR:<span class="p-style"><?php echo $val->color; ?></span></p>
            <p class="pattern-style">STYLE:<span class="p-style"><?php echo $val->style; ?></span></p>
            <p class="pattern-style">FABRIC:<span class="p-style"><?php echo $val->fabric; ?></span></p>
            <p>
                <div class="col-md-9 col-sm-6 p-action-div">
                    <button type="button" class="content-book-btn cd-signup" data-user=<?php echo $custId; ?> data-user=<?php echo $custId; ?> data-vendor=<?php echo $val->userId; ?> data-product=<?php echo $val->id; ?>><span class="fa fa-shopping-cart fa-fw"></span>BOOK NOW</button>
                    <button type="button" class="content-back-btn button-margin more" data-vendor=<?php echo $val->userId; ?>>BACK TO PROFILE</button>
                </div>
            </p>
        </div>
    </div>
                
    </div>
    <div class="row row-margin-zero product-details-margin">
            <div class="col-md-4">
                <hr class="middle-hr-style">  
            </div>
            <div class="col-md-4">
                <p class="heading-p last-middle-p">YOU MIGHT ALSO LIKE</p>
            </div>
            <div class="col-md-4">
             <hr class="middle-hr-style">  
            </div>
        </div>
        <div class="row row-margin-zero  product-details-margin">
    
            <?php foreach($related_products as $product){ ?>
            <div class="col-md-3">
                <div class="nd-wrap nd-style-1 related-img" data-vendor=<?php echo $product->userId; ?> data-product=<?php echo $product->pid; ?> >
                    <img src="<?php echo $product->images; ?>" alt="product">
                    <div class='info'>
                        <div class='datails'>
                            <p class='info-text-style'><?php echo $product->onelinertxt; ?></p>
                            <p class='price-style'>INR <?php echo $product->price; ?></p>
                        </div>
                    </div>
                </div>
            </div>
            <?php } ?>
           
        </div>
        <div class="row row-margin-zero product-details-margin">
            <div class="col-md-5">
                <hr class="middle-hr-style">  
            </div>
            <div class="col-md-2 last-middle-p">
                <p class="heading-p more" data-vendor=<?php echo $val->userId; ?>>MORE</p>
            </div>
            <div class="col-md-5">
                <hr class="middle-hr-style">  
            </div> 
        </div>

    <!-- Modal -->
    <div class="modal fade" id="productBooking" role="dialog">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Thank you</h4>
            </div>
            <div class="modal-body">
              <p>You have successfully booked the product.</p>
              <p>We have sent confirmation on your registered email.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   
