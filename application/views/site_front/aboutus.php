<script>
    $('header').css('height', '350px')
</script>
<?php //echo $page_content; ?>

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
    -ms-flex: 50%; 
    flex: 50%;
    max-width: 50%;
    padding: 0 20px;
}

.column img {
    margin-top: 0px;
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
    

        
    .view {
    overflow: hidden;
    position: relative;
    text-align: center;
    height: 350px;
    margin-top: 40px;
   /*box-shadow: 1px 1px 2px #e6e6e6;*/
    cursor: default;
    /*background: #fff url(../images/bgimg.jpg) no-repeat center center*/
}
.view .mask, .view .content, .view .book_mask {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0
}
.view img {
    display: block;
    position: relative
}
.view h2 {
        color: #000;
    text-align: left;
    font-weight: 500;
    width: 100%;
    position: absolute;
    bottom: 0;
    font-size: 16px;
    line-height: 1.3em;
    padding: 16px 20px;
    background: #d4b000;
    margin: 20px 0 0 0;
    
}
    h2 span:nth-child(2) {
        font-weight: bolder;
    display: block;
        font-size: 18px;
        
    }
    .view .mask h2{
        background: none;
    color: #000000;
    font-size: 17px;
    line-height: 1.5em;
            font-weight: 500;
    text-shadow: 1px 1px 1px #fff;
        
    }
   
.view p {
   /* font-family: Georgia, serif;*/
    font-weight: 600;
    font-size: 18px;
    position: relative;
    color: #fff;
    padding: 10px 20px 20px;
    text-align: center
}
.view a.info {
    display: inline-block;
    text-decoration: none;
    padding: 7px 14px;
    background: #d4b00b;
    color: #000;
        font-weight: 700;
    text-transform: uppercase;
    box-shadow: 0 0 1px #000;
        font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
}
    
.view a.info:hover {
    box-shadow: 0 0 5px #000
}


       .view-eighth .mask { 
	background-color: rgba(212, 176, 0, 0.7);
	top: -200px;
	opacity: 0;
	transition: all 0.3s ease-out 0.5s;
}
.view-eighth h2{
    transform: translateY(0px);
	transition: all 0.2s ease-in-out 0.1s;
    
}
    .view-eighth .mask h2{
    transform: translateY(-135px);
	transition: all 0.2s ease-in-out 0.1s;
    
}
.view-eighth p { 
    color: #fff;
    transform: translateY(-200px);
	transition: all 0.2s ease-in-out 0.2s;
}
     .view-eighth .book_mask h2 { 
   transition: all 0.4s ease-in-out 0.4s;
}
    .view-eighth:hover .mask { 
	opacity: 1; 
	top: 0px; 
	transition-delay: 0s; 
    animation: bounceY 0.9s linear;
}																						
.view-eighth:hover h2 { 
    transform: translateY(0px);
	transition-delay: 0.4s;
}
.view-eighth:hover p { 
	transform: translateY(0px);
	transition-delay: 0.2s;
}

    .view-eighth:hover .mask h2 { 
   transform: translateY(-135px);
	transition-delay: 0.4s;
}
     .view-eighth:hover .book_mask h2 { 
   opacity: 0; 
         transition: all;
         transition-delay: 0.1s;
}
    @keyframes bounceY {
    0% { transform: translateY(-205px);}
    40% { transform: translateY(-100px);}
    65% { transform: translateY(-52px);}
    82% { transform: translateY(-25px);}
    92% { transform: translateY(-12px);}
    55%, 75%, 87%, 97%, 100% { transform: translateY(0px);}
}
.nav-btn a {
  width: 60px;
  height: 60px;

}
    #gnavi {
    padding-right: 0px;
    left: 90%;
    }
    @media (min-width: 767px) and (max-width: 768px){
.container {
    width: 721px;
} 
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
  <div class="column">
      <div class="view view-eighth"> 
     <img src="../assets/images/dress/d1.jpg" style="width:100%" >
          <div class="book_mask">  
              <h2><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span> -Kritika Kapoor</span></h2> 
             </div> 
       <div class="mask">  
            <h2><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span> -Kritika Kapoor</span></h2>
             </div> 
          
             </div> 
         <div class="view view-eighth">   
    <img src="../assets/images/dress/d2.jpg" style="width:100%">
             <div class="book_mask">  
            <h2><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span>Kritika Kapoor</span></h2>
             </div> 
            <div class="mask">  
           <h2><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span> -Kritika Kapoor</span></h2> 
             </div> 
             </div> 
</div>
  <div class="column ">
      <div class="view view-eighth"> 
    <img src="../assets/images/dress/d3.jpg" style="width:100%">
          <div class="book_mask">  
            <h2><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span>Kritika Kapoor</span></h2>
             </div> 
          <div class="mask">  
           <h2><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span> -Kritika Kapoor</span></h2>  
             </div> 
             </div> 
      <div class="view view-eighth"> 
    <img src="../assets/images/dress/d4.jpg" style="width:100%">
          <div class="book_mask">  
            <h2><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span>Kritika Kapoor</span></h2>
             </div> 
           <div class="mask">  
           <h2><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span> -Kritika Kapoor</span></h2> 
             </div> 
             </div> 
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