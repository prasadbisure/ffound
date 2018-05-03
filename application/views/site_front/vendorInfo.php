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
   /* width: 300px;
    height: 200px;
    margin: 10px;
    float: left;
    border: 10px solid #fff;*/
    overflow: hidden;
    position: relative;
    text-align: center;
        
    margin-top: 8px;
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
    text-transform: uppercase;
    color: #d4b000;
    text-align: center;
    font-weight: 600;
        width: 100%;
    position: absolute;
    bottom: 0;
    font-size: 18px;
    padding: 16px 10px;
    background: rgba(0, 0, 0, 0.9);
    margin: 20px 0 0 0;
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
	background-color: rgba(0, 0, 0, 0.7);
	top: -200px;
	opacity: 0;
	transition: all 0.3s ease-out 0.5s;
}
.view-eighth h2{
    transform: translateY(0px);
	transition: all 0.2s ease-in-out 0.1s;
    
}
.view-eighth p { 
    color: #fff;
    transform: translateY(-200px);
	transition: all 0.2s ease-in-out 0.2s;
}
.view-eighth a.info { 
    transform: translateY(-200px);
	transition:  all 0.2s ease-in-out 0.3s;
} 
    .view-eighth:hover .mask { 
	opacity: 1; 
	top: -50px; 
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
.view-eighth:hover a.info { 
     position: relative;
  top: 50%;
  transform: translateY(50%);
	transition-delay: 0s;
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
    @media (min-width: 768px){
.container {
    width: 720px;
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

         <?php
         // var_dump($vendor); die;
         if(!empty($vendor)){
         ?>
<!--            data for colunm1-->
             <?php if(!empty($col1_data)){ ?>
             <div class="column">
                <?php foreach ($col1_data as $data){ ?>
                    <div class="view view-eighth">
                        <img src="<?php echo base_url().$data->images?>" style="width:100%">
                        <div class="book_mask">
                            <h2><span>RS.<?php echo $data->price?></span></h2>
                        </div>
                        <div class="mask">
                            <a href="<?php  echo site_url('ProductDetails');?>/<?php echo $data->userId ?>/<?php echo $data->id;?>" class="info"><b>Book</b></a>
                        </div>
                    </div>
                <?php }?>
            </div>
            <?php } ?>
<!--data for column 2-->
             <?php if(!empty($col2_data)){ ?>
                 <div class="column">
                     <?php foreach ($col2_data as $data){ ?>
                         <div class="view view-eighth">
                             <img src="<?php echo base_url().$data->images?>" style="width:100%">
                             <div class="book_mask">
                                 <h2><span>RS.<?php echo $data->price?></span></h2>
                             </div>
                             <div class="mask">
                                 <a href="<?php  echo site_url('ProductDetails');?>/<?php echo $data->userId ?>/<?php echo $data->id;?>" class="info"><b>Book</b></a>
                             </div>
                         </div>
                     <?php }?>
                 </div>
             <?php } ?>
<!--data for column 3-->
             <?php if(!empty($col3_data)){ ?>
                 <div class="column">
                     <?php foreach ($col3_data as $data){ ?>
                         <div class="view view-eighth">
                             <img src="<?php echo base_url().$data->images?>" style="width:100%">
                             <div class="book_mask">
                                 <h2><span>RS.<?php echo $data->price?></span></h2>
                             </div>
                             <div class="mask">
                                 <a href="<?php  echo site_url('ProductDetails');?>/<?php echo $data->userId ?>/<?php echo $data->id;?>" class="info"><b>Book</b></a>
                             </div>
                         </div>
                     <?php }?>
                 </div>
             <?php } ?>

         <?php
         }
         ?>


<!--  <div class="column ">-->
<!--      <div class="view view-eighth"> -->
<!--    <img src="../../assets/images/dress/underwater.jpg" style="width:100%">-->
<!--          <div class="book_mask">  -->
<!--           <h2><span>RS.5000</span></h2> -->
<!--             </div> -->
<!--          <div class="mask">  -->
<!--           <a href="#" class="info">Book</a>  -->
<!--             </div> -->
<!--             </div> -->
<!--      <div class="view view-eighth"> -->
<!--    <img src="../../assets/images/dress/ocean.jpg" style="width:100%">-->
<!--          <div class="book_mask">  -->
<!--           <h2><span>RS.5000</span></h2> -->
<!--             </div> -->
<!--           <div class="mask">  -->
<!--           <a href="#" class="info">Book</a>  -->
<!--             </div> -->
<!--             </div> -->
<!--      <div class="view view-eighth"> -->
<!--    <img src="../../assets/images/dress/wedding.jpg" style="width:100%">-->
<!--          <div class="book_mask">  -->
<!--           <h2><span>RS.5000</span></h2> -->
<!--             </div> -->
<!--          <div class="mask">  -->
<!--           <a href="#" class="info">Book</a>  -->
<!--             </div> -->
<!--             </div> -->
<!--      <div class="view view-eighth"> -->
<!--    <img src="../../assets/images/dress/mountainskies.jpg" style="width:100%">-->
<!--          <div class="book_mask">  -->
<!--           <h2><span>RS.5000</span></h2> -->
<!--             </div> -->
<!--           <div class="mask">  -->
<!--           <a href="#" class="info">Book</a>  -->
<!--             </div> -->
<!--             </div> -->
<!--      <div class="view view-eighth"> -->
<!--    <img src="../../assets/images/dress/rocks.jpg" style="width:100%">-->
<!--          <div class="book_mask">  -->
<!--           <h2><span>RS.5000</span></h2> -->
<!--             </div> -->
<!--           <div class="mask">  -->
<!--           <a href="#" class="info">Book</a>  -->
<!--             </div> -->
<!--             </div>  -->
<!--      <div class="view view-eighth"> -->
<!--    <img src="../../assets/images/dress/underwater.jpg" style="width:100%">-->
<!--          <div class="book_mask">  -->
<!--           <h2><span>RS.5000</span></h2> -->
<!--             </div> -->
<!--          <div class="mask">  -->
<!--           <a href="#" class="info">Book</a>  -->
<!--             </div> -->
<!--             </div>  -->
<!--  </div>  -->
<!--  <div class="column ">-->
<!--   <div class="view view-eighth"> -->
<!--    <img src="../../assets/images/dress/wedding.jpg" style="width:100%">-->
<!--       <div class="book_mask">  -->
<!--           <h2><span>RS.5000</span></h2> -->
<!--             </div> -->
<!--        <div class="mask">  -->
<!--           <a href="#" class="info">Book</a>  -->
<!--             </div> -->
<!--             </div>-->
<!--      <div class="view view-eighth"> -->
<!--    <img src="../../assets/images/dress/rocks.jpg" style="width:100%">-->
<!--          <div class="book_mask">  -->
<!--           <h2><span>RS.5000</span></h2> -->
<!--             </div> -->
<!--           <div class="mask">  -->
<!--           <a href="#" class="info">Book</a>  -->
<!--             </div> -->
<!--             </div>-->
<!--       <div class="view view-eighth"> -->
<!--    <img src="../../assets/images/dress/falls2.jpg" style="width:100%">-->
<!--           <div class="book_mask">  -->
<!--           <h2><span>RS.5000</span></h2> -->
<!--             </div> -->
<!--            <div class="mask">  -->
<!--           <a href="#" class="info">Book</a>  -->
<!--             </div> -->
<!--             </div>-->
<!--     <div class="view view-eighth"> -->
<!--    <img src="../../assets/images/dress/paris.jpg" style="width:100%">-->
<!--         <div class="book_mask">  -->
<!--           <h2><span>RS.5000</span></h2> -->
<!--             </div> -->
<!--          <div class="mask">  -->
<!--           <a href="#" class="info">Book</a>  -->
<!--             </div> -->
<!--             </div>-->
<!--        <div class="view view-eighth">    -->
<!--    <img src="../../assets/images/dress/nature.jpg" style="width:100%">-->
<!--            <div class="book_mask">  -->
<!--           <h2><span>RS.5000</span></h2> -->
<!--             </div> -->
<!--             <div class="mask">  -->
<!--           <a href="#" class="info">Book</a>  -->
<!--             </div> -->
<!--             </div>-->
<!--  <div class="view view-eighth"> -->
<!--    <img src="../../assets/images/dress/mist.jpg" style="width:100%">-->
<!--      <div class="book_mask">  -->
<!--           <h2><span>RS.5000</span></h2> -->
<!--             </div> -->
<!--   <div class="mask">  -->
<!--           <a href="#" class="info">Book</a>  -->
<!--             </div> -->
<!--             </div>-->
<!--              -->
<!--      <div class="view view-eighth"> -->
<!--    <img src="../../assets/images/dress/paris.jpg" style="width:100%">-->
<!--          <div class="book_mask">  -->
<!--           <h2><span>RS.5000</span></h2> -->
<!--             </div> -->
<!-- <div class="mask">  -->
<!--           <a href="#" class="info">Book</a>  -->
<!--             </div> -->
<!--             </div>-->
<!--  </div>-->
 
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
            
