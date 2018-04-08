<style>
* {
    box-sizing: border-box;
}


.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap; 
    flex-wrap: wrap;
    padding: 0 4px;
}

.column {
    -ms-flex: 33.3%; 
    flex: 33.3%;
    max-width: 33.3%;
    padding: 0 4px;
}

.column img {
    margin-top: 8px;
    vertical-align: middle;
}

@media screen and (max-width: 800px) {
    .column {
        -ms-flex: 50%;
        flex: 50%;
        max-width: 50%;
    }
}

@media screen and (max-width: 600px) {
    .column {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
    }
}
    .view img:hover{
            -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
        transition: all 500ms;
    }

</style>
<div class="col-lg-12  vendor-search-bar">
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
     <div class="row"> 
  <div class="column view">
               <img src="../../assets/images/dress/paris.jpg" style="width:100%">
           
    <img src="../../assets/images/dress/wedding.jpg" style="width:100%">
            
         
    <img src="../../assets/images/dress/rocks.jpg" style="width:100%">
                
   
    <img src="../../assets/images/dress/falls2.jpg" style="width:100%">
            
    <img src="../../assets/images/dress/paris.jpg" style="width:100%">
                        
            
    <img src="../../assets/images/dress/nature.jpg" style="width:100%">
           
    <img src="../../assets/images/dress/mist.jpg" style="width:100%">
        
                             
   
  </div>
  <div class="column view"> 
    <img src="../../assets/images/dress/underwater.jpg" style="width:100%">
          
    <img src="../../assets/images/dress/ocean.jpg" style="width:100%">
           
    <img src="../../assets/images/dress/wedding.jpg" style="width:100%">
          
    <img src="../../assets/images/dress/mountainskies.jpg" style="width:100%">
           
    <img src="../../assets/images/dress/rocks.jpg" style="width:100%">
                    
    <img src="../../assets/images/dress/underwater.jpg" style="width:100%">
          
  </div>  
  <div class="column view">
   
    <img src="../../assets/images/dress/wedding.jpg" style="width:100%">
      
    <img src="../../assets/images/dress/rocks.jpg" style="width:100%">
       
    <img src="../../assets/images/dress/falls2.jpg" style="width:100%">
     
    <img src="../../assets/images/dress/paris.jpg" style="width:100%">
           
    <img src="../../assets/images/dress/nature.jpg" style="width:100%">
  
    <img src="../../assets/images/dress/mist.jpg" style="width:100%">
  
              
      
    <img src="../../assets/images/dress/paris.jpg" style="width:100%">
 
  </div>
 
</div>
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
            
