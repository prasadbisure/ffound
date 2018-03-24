<body>
<!----------------------- Products Images  ------------------> 

<div class="container vendor-listing-main <?php echo (empty($vendorList)) ? 'last-middle-p' : '';?>">
    <?php
        // var_dump($vendorList); die;
        if(!empty($designerList))
        {   $SrNo=1;
            $j = 0;

            foreach($designerList as $userId => $designer){ ?>
                
                <div class="row row-margin-zero middlerow2-db">
                    <div class="col-md-4 col-padding-zero" >
                        <div class="col-md-1 col-md-offset-1">
                            <p class="col-p"><?php echo $SrNo; ?></p>
                        </div>
                        <div class="col-md-3 col-padding-zero designername" style="margin-top:4px;">
                            <?php if($designer['logo'] !== '') { ?> 
                                <img src="<?php echo $designer['logo']; ?>" width=290 height=90>
                            <?php }else if($designer['brandName'] !== ''){ ?>
                            <span class="username">
                                <?php echo $designer['brandName'] ?>
                            </span>
                            <?php }else{ ?>
                            <span class="username">
                                <?php echo $designer['name'] ?>
                            </span>
                            <?php } ?>
                        </div>
                    </div>
                    <?php 

                    for($i= 0;$i<= 2;$i++){?>
                        <div class="col-md-2 col-padding-zero">
                            <div class="thumbnail">
                                <img src="<?php echo ($designer[$i]->images != '') ? $designer[$i]->images :  'http://via.placeholder.com/220x180' ;?>" alt="product" class="userimage-size" style=" height: 150px; ">
                            </div>
                        </div>
                    
                    <?php } 

                    
                    ?>
                    <div class="col-md-2 col-padding-zero col-border" style="margin-top:4px;">
                        <form method="post" action="<?php echo base_url(); ?>vendorInfo">
                            <input type="hidden" name="vendorId" value=<?php echo $userId ?> >
                            <button type="submit" class="viewmore-btn" >+<?php echo $designer['total_products']?></button>
                        </form>
                    </div>                  
                </div>
        <?php  $i = $i+3; $SrNo++;}
        } else
        {
        echo "<h1>NO RESULT FOUND !!!!!</h1>";
        }  ?>
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