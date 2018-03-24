<body>
<!------------------------ User Designer View -------------------->
<div class="container">
    <div class="row row-margin-zero middlerow1-db">
        <div class="col-md-4 col-md-offset-1 col-style">
            <button class="filter-btn">Filter</button>
            <select class="select-style">
                <option value="Category">Category</option>
                <option value="Designer">Designer</option>
                <option value="Boutiques">Boutique</option>
            </select>
        </div>
        <div class="col-md-6 col-padding-zero">
            <form class="search-box-style" role="search">				
                <div class="input-group add-on search-style">
                    <input class="form-control" placeholder="Search Designer,Cloth type" name="srch-term" id="srch-term" type="text">
                    <div class="input-group-btn">
                        <button class="btn btn-default custom-theme-border" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                    </div>
                </div>						
            </form>
        </div>
    </div>
</div>


<div class="row row-margin-zero">
    <div class="col-md-12 col-padding-zero">
        <h1 class="topdesigner">TOP 05 BOUTIQUES IN PUNE</h1>
    </div>
</div>

<!----------------------- Products Images  ------------------> 

<div class="container">
    <?php
   // echo '<pre>';
  //print_r($boutiqueList);exit();
        if(!empty($boutiqueList))
        {   $SrNo=1;
            $j = 0;
            foreach($boutiqueList as $boutique){  //var_dump($designer['name']); //die;  ?>
                
                <div class="row row-margin-zero middlerow2-db">
                    <div class="col-md-4 col-padding-zero">
                        <div class="col-md-1 col-md-offset-1">
                            <p class="col-p"><?php echo $SrNo; ?></p>
                        </div>
                        <div class="col-md-3 col-padding-zero designername"><span class="username"><?php echo $boutique['name'] ?></span></div>
                    </div>
                    <?php 

                    for($i= 0;$i<= 2;$i++){?>
                        <div class="col-md-2 col-padding-zero">
                            <div class="thumbnail">
                                <img src="<?php echo ($boutique[$i]->images != '') ? $boutique[$i]->images :  'http://via.placeholder.com/220x180' ;?>" alt="product" class="userimage-size">
                            </div>
                        </div>
                    
                    <?php } 

                    
                    ?>
                    <div class="col-md-2 col-padding-zero col-border">
                        <form method="post" action="<?php echo base_url(); ?>vendorInfo">
                            <input type="hidden" name="vendorId" value=<?php echo $userId ?> >
                            <button type="submit" class="viewmore-btn" >+<?php echo $boutique['total_products']?></button>
                        </form>
                    </div>                  
                </div>
        <?php  $i = $i+3; $SrNo++;}
        }   ?>
</div>

 


<div class="row row-margin-zero lableof-d">
    <h1 class="lablecontent-db">DESIGNERS</h1>
</div>
<div class="row row-margin-zero row-style row-margin-top">
    <div class="col-lg-6 col-padding-zero">
        <img src="assets/images/fashion_found_2.jpg" class="db-userimg">
    </div>
    <div class="col-lg-6 col-padding-zero">
        <img src="assets/images/fashion_found_3.jpg" class="db-userimg">
    </div>
</div>


<div class="row row-margin-zero lableof-b">
    <h1 class="lablecontent-db">BOUTIQUES</h1>
</div>
<div class="row row-margin-zero row-style row-margin-top">
    <div class="col-lg-6 col-padding-zero">
        <img src="assets/images/fashion_found_4.jpg" class="db-userimg">
    </div>
    <div class="col-lg-6 col-padding-zero">
        <img src="assets/images/fashion_found_5.jpg" class="db-userimg">
    </div>
</div>        

<!----------------------------User Designer  view Finished-------------------->        