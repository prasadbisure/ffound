<script>
    $('header').css('height', '300px');
</script>
<style>
* {
    box-sizing: border-box;
}


.row {
    /*display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap; 
    flex-wrap: wrap;*/
    padding: 0 4px;
}

.column {
    -ms-flex: 100%; 
    flex: 100%;
    max-width: 100%;
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
         width: 20%;
    height: 242px;
    float: left;
   /*box-shadow: 1px 1px 2px #e6e6e6;*/
    cursor: default;
    /*background: #fff url(../images/bgimg.jpg) no-repeat center center*/
}
.view .mask, .view .content {
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
    color: #fff;
    text-align: center;
    position: relative;
    font-size: 17px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.8);
    margin: 20px 0 0 0
}
.view p {
   /* font-family: Georgia, serif;*/
    font-weight: 600;
    font-size: 20px;
    position: relative;
    color: #fff;
    padding: 100px 20px 20px;
    text-align: center
}
.view a.info {
    display: inline-block;
    text-decoration: none;
    padding: 7px 14px;
    background: #000;
    color: #fff;
    text-transform: uppercase;
    box-shadow: 0 0 1px #000
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
    transform: translateY(-200px);
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
.view-eighth:hover a.info { 
    transform: translateY(0px);
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
    .profile-background{
        background-color: #333;
        border: 1px solid #FFFFFF;
    }
</style>
<!------------------------ User Designer View -------------------->
<div class="container">
    <div class="row row-margin-zero middlerow1-db col-lg-12">
        <form class="search-box-style" role="search" action="<?php echo site_url('vendorListing'); ?>" method="POST">
            <div class="col-lg-3 col-md-4 col-sm-5 col-md-offset-2 col-style text-center">
                <label class="filter-btn">Filter</label>
                <select class="select-style" name="filter">
                    <option value="all" <?php echo ($filter == 'all')? 'selected' : ''?>>Category</option>
                    <option value="designer" <?php echo ($filter == 'designer')? 'selected' : ''; ?>>Designer</option>
                    <option value="boutique" <?php echo ($filter == 'boutique')? 'selected' : ''; ?>>Boutique</option>
                </select>
            </div>
            <div class="col-md-5 col-sm-6 col-padding-zero">
                				
                    <div class="input-group add-on search-style">
                        <input class="form-control" placeholder="Search Designer,Cloth type" required name="srch-term" id="srch-term" type="text" value=<?php echo isset($searchText) ? $searchText: ''; ?>>
                        <div class="input-group-btn">
                            <button class="btn btn-default custom-theme-border custom-zindex custom-srch-border" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>						    
            </div>
        </form>
    </div>
</div>


<div class="row row-margin-zero">
    <div class="col-md-12 col-padding-zero">
        <h1 class="topdesigner">TOP 10 <?php echo (!empty($type)) ?  ($type == 'designer') ? 'DESIGNERS' : 'BOUTIQUES' : ''; ?> IN PUNE</h1>
    </div>
</div>

<!----------------------- Products Images  ------------------> 

<div class="container vendor-listing-main ">
    <?php
    if(!empty($designerList)) {
        $SrNo = !empty($pageno) ? $pageno : 1;
        $j = 0;
        ?>
        <div class="row">
            <div class="column">
                <?php foreach ($designerList as $key => $designer ) { ?>
                    <div class="view view-eighth <?php echo ($designer['profile_pic_status']!="Enabled")?'profile-background':'0'; ?>">
                        <?php if($designer['profile_pic_status']=="Enabled"){ ?>
                            <img src="<?php echo base_url().$designer['profile_pic']; ?>">
                        <?php } ?>
                        <a href="<?php echo site_url();?>/vendorInfo/<?php echo $key; ?>">
                            <div class="mask">
                                <p><?php echo $designer['brandName']?></p>
                            </div>
                        </a>
                    </div>
                <?php } ?>
            </div>
        </div>
        <div class="col-md-12 text-center pagination-top-margin">
            <?php echo $pagination; ?>
        </div>
    <?php } else{ ?>
        <div class='col-lg-12 text-center no-result-div'>
            <span class="no-result">NO  <?php echo ($type == 'designer') ? 'DESIGNER' : 'BOUTIQUE'; ?> FOUND.</span>
        </div>
    <?php } ?>


</div>
<?php if($this->uri->segment(2)!="designer") {?>
<!--for Designer content-->
    <div class="row row-margin-zero lableof-d">
    <h1 class="lablecontent-db">DESIGNERS</h1>
</div>
    <div class="row row-margin-zero row-style row-margin-top default-bg-color">
    <div class="col-lg-6 col-sm-6 col-padding-zero landing-img-effect">
        <img src="<?php echo ($designer1 != '' )? base_url($designer1) : base_url().'assets/images/fashion_found_2.jpg'; ?>" class="db-userimg" >
        <p class="overlay-title">Designer</p>
	<p class="tag-txt">About Designer</p>
	<div class="overlay"></div>
	<div class="button"><a href="<?php echo $designer_url1; ?>">Explore</a></div>
    </div>
    <div class="col-lg-6 col-sm-6 col-padding-zero landing-img-effect">
        <img src="<?php echo ($designer2 != '' )? base_url($designer2) : base_url().'assets/images/fashion_found_3.jpg'; ?>" class="db-userimg" >
	<p class="overlay-title">Designer</p>
	<p class="tag-txt">About Designer</p>
	<div class="overlay"></div>
	<div class="button"><a href="<?php echo $designer_url2; ?>">Explore</a></div>
    </div>
</div>
<?php } elseif($this->uri->segment(2)!="Boutique") {?>
<!--for Boutique content-->
<div class="row row-margin-zero lableof-b">
    <h1 class="lablecontent-db">BOUTIQUES</h1>
</div>
<div class="row row-margin-zero row-style row-margin-top default-bg-color">
    <div class="col-lg-6 col-sm-6 col-padding-zero landing-img-effect">
        <img src="<?php echo ($boutique1 != '' )? base_url($boutique1) : base_url().'assets/images/fashion_found_4.jpg'; ?>" class="db-userimg" >
	<p class="overlay-title">Boutique</p>
        <p class="tag-txt">About Boutique</p>
        <div class="overlay"></div>
        <div class="button"><a href="<?php echo $boutique_url1; ?>">Explore</a></div>
    </div>
    <div class="col-lg-6 col-sm-6 col-padding-zero landing-img-effect">
        <img src="<?php echo ($boutique2 != '' )? base_url($boutique2) : base_url().'assets/images/fashion_found_5.jpg'; ?>" class="db-userimg" >
        <p class="overlay-title">Boutique</p>
        <p class="tag-txt">About Boutique</p>
        <div class="overlay"></div>
        <div class="button"><a href="<?php echo $boutique_url2; ?>">Explore</a></div>
    </div>
</div>    
<?php }?>

<!----------------------------User Designer  view Finished-------------------->        
