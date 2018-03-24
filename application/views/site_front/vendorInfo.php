
<div class="col-lg-6 col-lg-offset-3 vendor-search-bar">
	<form class="search-box" role="search" method="post" action="/vendorListing">				
	     <div class="input-group add-on" style=" width: 76%;">
			<input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term">
				<div class="input-group-btn">
					<button class="btn btn-default custom-theme-border zero-radius custom-zindex" type="submit" style="border: 1px solid;height: 39px;"><i class="glyphicon glyphicon-search"></i></button>
				</div>
		</div>						
	</form>
</div>
<div class="container vendorinforow">
    <?php 
    // var_dump($vendor); die;
        if(!empty($vendor))
        {

            foreach ($vendor as $val)
            {
                if($val->pstatus != 1){
               ?>
               
                
                <div class='col-md-3 col-sm-6 text-center webkit-center infoDetails'>
                    <!--<div class='thumbnail'>-->
                    <div class="nd-wrap nd-style-1">
                           <a href="<?php  echo base_url();?>ProductDetails/<?php echo $val->userId ?>/<?php echo $val->id;?>">
                            <img  src="<?php echo ($val->images != '') ? base_url().$val->images : '/assets/images/default_hanger.png' ?>" alt="" class="img-reponsive product-details">
                        </a>
                        <div class="nd-content">
                            <div class="nd-content_inner">
                                <div class="nd-content_inner1">
                                    <span class="nd-icon" >
                                        <button class="button prd-book-img" data-vendor="<?php echo $val->userId;?>" data-product="<?php echo $val->id;?>" data-user="<?php echo $custId;?>">Book</button>
                                    </span>
                                </div>					
                            </div>				
                        </div>
                        <!--<div class="overlay"></div>-->
                        <!--<div class="button book-btn">-->
                        <!--    <a href="#"> BUTTON </a>-->
                        <!--</div>-->
                        <div class='info'>
                            <div class='datails'>
                                <p class='info-text-style'><?php echo $val->product_name; ?></p>
                                <p class='price-style'>INR. <?php echo $val->price; ?></p>
                            </div>
                        </div>
                    </div>
                    <!--</div>-->
                </div>
                
                <?php  }}
            }
    ?>
</div>

<div class="row row-margin-zero itemrow-middle-style">
    <div class="container datails-style">
        <div class="col-md-12">
            <h4 class="item-h-style">Product specilization-</h4>
        </div>
        <div class="col-md-12">
            <h4 class="item2-h-style"><b><?php echo $vendor[0]->specialization; ;?></b></h4>
            <hr class="itemmiddle-hr">
        </div>
        <div class="col-md-12">
            <p class="item3-h-style">Detailed Bio-</p>
        </div>
        <div class="col-md-12">
            <p class="item-psg">
              <?php echo $vendor[0]->bio; ;?>
            </p>
        </div>
    </div>
</div>

<div class="container datails-style product-listing-bottom-margin">
    <div class="row row-margin-zero">
        <form action id="review-rating" method="post">
        <input type="hidden" name="vid" value=<?php echo $vendor[0]->userId; ?> >
        <div class="col-md-12">
          <h2><b>Rating &#38; Review</b></h2>
        </div>
        <div class="col-md-12">
            <?php foreach($reviews as $review) { ?>
                <div class="review-rating col-md-6 col-md-offset-3">
                    <span class="review-username">
                        <?php echo $review->name; ?> 
                        <ul class="star-review">
                            <?php for($k=1; $k <= $review->rating; $k++ ){ ?>
                                <li class="secondary-active"><label for="rating_1">&#9733;</label></li>
                            <?php } ?>
                            
                        </ul>
                    </span>
                    <p class="review-comment">
                        <?php echo $review->review; ?>
                    </p>
                </div>
            <?php } ?>
        </div>
        <div class="col-md-12">
            <ul id="star">
                <li><label for="rating_1">&#9733;</label><input type="radio" name="rating" id="rating_1" class="lable-style" value=1></li>
                <li><label for="rating_2">&#9733;</label><input type="radio" name="rating" id="rating_2" class="lable-style" value=2></li>
                <li><label for="rating_3">&#9733;</label><input type="radio" name="rating" id="rating_3" class="lable-style" value=3></li>
                <li><label for="rating_4">&#9733;</label><input type="radio" name="rating" id="rating_4" class="lable-style" value=4></li>
                <li><label for="rating_5">&#9733;</label><input type="radio" name="rating" id="rating_5" class="lable-style" value=5></li>
            </ul>
        </div>
        <div class="col-md-12">
            <textarea rows="4" cols="80" name="review" class="textarea-style"   required></textarea>
        </div>
        <div class="col-md-12">
            <button type="submit" name="SEND" class="btn btn-default submit-btn-style ">Submit</button>
        </div>
        </form>
    </div>
</div>
            
