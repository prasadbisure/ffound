<script>
    $('header').css('height', '300px');
</script>
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
        <h1 class="topdesigner">TOP 05 <?php echo (!empty($type)) ?  ($type == 'designer') ? 'DESIGNERS' : 'BOUTIQUES' : ''; ?> IN PUNE</h1>
    </div>
</div>

<!----------------------- Products Images  ------------------> 

<div class="container vendor-listing-main">
    <?php //echo $pagination; die; ?>
    <?php

        if(!empty($designerList))
        {   $SrNo= !empty($pageno) ? $pageno : 1;
            $j = 0;

            foreach($designerList as $userId => $designer){ // var_dump($designer['name']); die;  ?>
                
                <div class="row row-margin-zero middlerow2-db vendorlist-margins">
                    <div class="col-md-4 top-buffer" >
                        <div class="col-md-1 col-md-offset-1 col-sm-1">
                            <p class="col-p"><?php echo $SrNo; ?></p>
                        </div>
                        <a href="<?php echo site_url('vendorInfo')?>/<?php echo $userId ?>">
                            <input type="hidden" name="vendorId" value=<?php echo $userId ?> >
			    <?php if($designer['logo'] != '') { ?>
                            <div class="col-md-8 col-sm-2 col-padding-zero designername" style="padding-top:1px !important;">
                                    <img src="<?php echo base_url($designer['logo']); ?>" width=88 height=88 >
                            </div>
			    <?php } else {?>
			    <div class="col-md-8 col-sm-2 col-padding-zero designername" style="margin-top:0px;">
			    	<?php if($designer['brandName'] != ''){ ?>
                                <span class="username">
                                    <?php echo $designer['brandName'] ?>
                                </span>
                                <?php } else {?>
                                <span class="username">
                                    <?php echo $designer['name'] ?>
                                </span>
				<?php } ?>
			    </div>
			    <?php } ?>
                        </a>
                    </div>
                    <?php 

                    for($i= 0;$i<= 2;$i++){ //echo '<pre>'; var_dump($designer); die;?>
                        <div class="col-md-2 col-sm-2 vendorlisting-products">
                            <!--<div class="thumbnail">-->
                                <?php if ($designer[$i]->images != ''){ ?>
                                <a href="<?php  echo site_url('ProductDetails');?>/<?php echo $userId ?>/<?php echo $designer[$i]->id;?>">
                                    <img src="<?php echo base_url($designer[$i]->images); ?>" alt="product" class="userimage-size pimage" style=" height: 120px;border: 1px solid ">
                                </a>
                                <?php }else{ ?>
                                    <img src="<?php echo base_url();?>/assets/images/default_hanger.png" alt="product" class="userimage-size pimage" style=" height: 120px;border: 1px solid ">
                                <?php } ?>
                            <!--</div>-->
                        </div>
                    
                    <?php } 

                    
                    ?>
                    <div class="col-md-2 col-sm-2 col-padding-zero col-border" style="margin-top:0px;">
                        <?php if($designer['total_products'] >= 0){ ?>
				<a href="<?php echo site_url('vendorInfo')?>/<?php echo $userId ?>" class="viewmore-a"><div class="viewmore-btn">+<?php echo $designer['total_products']?></div></a>
                        <?php }else{ ?>
                            <button type="submit" class="viewmore-btn" >+<?php echo $designer['total_products']?></button>
                        <?php } ?>
                    </div>                  
                </div>
        <?php  $i = $i+3; $SrNo++;} ?>
            
            <div class="col-md-12 text-center pagination-top-margin">
                <?php echo $pagination; ?>
            </div>
        <?php } else{?>
             <div class='col-lg-12 text-center no-result-div'>
                 <span class="no-result">NO  <?php echo ($type == 'designer') ? 'DESIGNER' : 'BOUTIQUE'; ?> FOUND.</span>
             </div>
        <?php } ?>
</div>

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


<!----------------------------User Designer  view Finished-------------------->        
