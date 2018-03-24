<?php

$id = '';
$name = '';
$content = '';


if(!empty($pageInfo))
{
    foreach ($pageInfo as $uf)
    {
        $id = $uf->id;
        $name = $uf->page_name;
        $content = $uf->content;
    }
}


?>

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        <i class="fa fa-users"></i> Product Details
        <!--<small>Edit Page</small>-->
      </h1>
    </section>
    
    <section class="content">
    
        <div class="row">
            <!-- left column -->
            <div class="col-md-12">
              <!-- general form elements -->
                
                
                
                <div class="box box-primary">
                    <!--<div class="box-header">-->
                    <!--    <h3 class="box-title">Product Details</h3>-->
                    <!--</div><!-- /.box-header -->
                    <!-- form start -->
                    <?php //echo '<pre>'; var_dump($productInfo); die; ?>
                    <form role="form" action="<?php echo base_url() ?>cms/edit_page_content" method="post" id="editSubscription" role="form" enctype="multipart/form-data">
                        <div class="box-body">
                            <div class="row">
                                <div class="col-md-6">                                
                                    <div class="form-group">
                                        <label for="name">Product Name : </label>
                                        <?php echo $productInfo->name; ?>
                                    </div>                                    
                                </div>                                
                            </div>
                            <div class="row">
                                <div class="col-md-6">                                
                                    <div class="form-group">
                                        <label for="name">Description : </label>
                                        <?php echo $productInfo->description; ?>
                                    </div>                                    
                                </div>                                
                            </div>
                            <div class="row">
                                <div class="col-md-6">                                
                                    <div class="form-group">
                                        <label for="name">Size : </label>
                                        <?php echo $productInfo->size; ?>
                                    </div>                                    
                                </div>                                
                            </div>
                            <div class="row">
                                <div class="col-md-6">                                
                                    <div class="form-group">
                                        <label for="name">Color : </label>
                                        <?php echo $productInfo->color; ?>
                                    </div>                                    
                                </div>                                
                            </div>
                            <div class="row">
                                <div class="col-md-6">                                
                                    <div class="form-group">
                                        <label for="name">Fabric : </label>
                                        <?php echo $productInfo->fabric; ?>
                                    </div>                                    
                                </div>                                
                            </div>
                            <div class="row">
                                <div class="col-md-6">                                
                                    <div class="form-group">
                                        <label for="name">Style : </label>
                                        <?php echo $productInfo->style; ?>
                                    </div>                                    
                                </div>                                
                            </div>
                            <div class="row">
                                <div class="col-md-6">                                
                                    <div class="form-group">
                                        <label for="name">Price : </label>
                                        <?php echo $productInfo->price; ?>
                                    </div>                                    
                                </div>                                
                            </div>
                            <div class="row">
                                <div class="col-md-3">                                
                                        <img src="<?php echo $productInfo->thumbnail; ?>" >
                                </div>
                                <div  class="col-md-3">
                                        <img src="<?php echo $productInfo->thumbnail2; ?>"  >
                                        </div>
                                <div  class="col-md-3">
                                        <img src="<?php echo $productInfo->thumbnail3; ?>" >
                                </div>
                                                                     
                                </div>                                
                            </div>
                        </div><!-- /.box-body -->
    
                        <div class="box-footer">
                            <?php if($productInfo->status == 1){ ?>
                            <button class="btn btn-primary btn-success change-status" data-status=<?php echo $productInfo->status; ?> data-id=<?php echo $productInfo->id; ?> value="Enable">Enable</button>
                            <?php } else{ ?>
                            <button class="btn btn-default btn-danger change-status" data-status=<?php echo $productInfo->status; ?> data-id=<?php echo $productInfo->id; ?> value="Disable">Disable</button>
                            <?php } ?>
                        </div>
                        
                    </form>
                </div>
            </div>
            <div class="col-md-4">
                <?php
                    $this->load->helper('form');
                    $error = $this->session->flashdata('error');
                    if($error)
                    {
                ?>
                <div class="alert alert-danger alert-dismissable">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <?php echo $this->session->flashdata('error'); ?>                    
                </div>
                <?php } ?>
                <?php  
                    $success = $this->session->flashdata('success');
                    if($success)
                    {
                ?>
                <div class="alert alert-success alert-dismissable">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <?php echo $this->session->flashdata('success'); ?>
                </div>
                <?php } ?>
                
                <div class="row">
                    <div class="col-md-12">
                        <?php echo validation_errors('<div class="alert alert-danger alert-dismissable">', ' <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button></div>'); ?>
                    </div>
                </div>
            </div>
        </div>    
    </section>
</div>

<script src="<?php echo base_url(); ?>assets/js/addSubscription.js" type="text/javascript"></script>