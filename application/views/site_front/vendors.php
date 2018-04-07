<script>
    $('header').css('height', '300px');
</script>
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
    -ms-flex: 25%; 
    flex: 25%;
    max-width: 25%;
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
        <h1 class="topdesigner">TOP 05 <?php echo (!empty($type)) ?  ($type == 'designer') ? 'DESIGNERS' : 'BOUTIQUES' : ''; ?> IN PUNE</h1>
    </div>
</div>

<!----------------------- Products Images  ------------------> 

<div class="container vendor-listing-main ">
    <div class="row"> 
  <div class="column">
    <img src="../../../assets/images/dress/wedding.jpg" style="width:100%">
    <img src="../../../assets/images/dress/rocks.jpg" style="width:100%">
    <img src="../../../assets/images/dress/falls2.jpg" style="width:100%">
    <img src="../../../assets/images/dress/paris.jpg" style="width:100%">
    <img src="../../../assets/images/dress/nature.jpg" style="width:100%">
    <img src="../../../assets/images/dress/mist.jpg" style="width:100%">
    <img src="../../../assets/images/dress/paris.jpg" style="width:100%">
  </div>
  <div class="column">
    <img src="../../../assets/images/dress/underwater.jpg" style="width:100%">
    <img src="../../../assets/images/dress/ocean.jpg" style="width:100%">
    <img src="../../../assets/images/dress/wedding.jpg" style="width:100%">
    <img src="../../../assets/images/dress/mountainskies.jpg" style="width:100%">
    <img src="../../../assets/images/dress/rocks.jpg" style="width:100%">
    <img src="../../../assets/images/dress/underwater.jpg" style="width:100%">
  </div>  
  <div class="column">
    <img src="../../../assets/images/dress/wedding.jpg" style="width:100%">
    <img src="../../../assets/images/dress/rocks.jpg" style="width:100%">
    <img src="../../../assets/images/dress/falls2.jpg" style="width:100%">
    <img src="../../../assets/images/dress/paris.jpg" style="width:100%">
    <img src="../../../assets/images/dress/nature.jpg" style="width:100%">
    <img src="../../../assets/images/dress/mist.jpg" style="width:100%">
    <img src="../../../assets/images/dress/paris.jpg" style="width:100%">
  </div>
  <div class="column">
    <img src="../../../assets/images/dress/underwater.jpg" style="width:100%">
    <img src="../../../assets/images/dress/ocean.jpg" style="width:100%">
    <img src="../../../assets/images/dress/wedding.jpg" style="width:100%">
    <img src="../../../assets/images/dress/mountainskies.jpg" style="width:100%">
    <img src="../../../assets/images/dress/rocks.jpg" style="width:100%">
    <img src="../../../assets/images/dress/underwater.jpg" style="width:100%">
  </div>
</div>

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
