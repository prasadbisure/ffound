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
        $designer_url  = $uf->designer_url;
	$designer_url2 = $uf->designer_url2;
	$boutique_url  = $uf->boutique_url;
	$boutique_url2 = $uf->boutique_url2;
    }
}


?>

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        <i class="fa fa-users"></i> Edit page content
        <small>Edit Page</small>
      </h1>
    </section>
    
    <section class="content">
    
        <div class="row">
            <!-- left column -->
            <div class="col-md-8">
              <!-- general form elements -->
                
                
                
                <div class="box box-primary">
                    <div class="box-header">
                        <h3 class="box-title">Content</h3>
                    </div><!-- /.box-header -->
                    <!-- form start -->
                    
                    <form role="form" action="<?php echo base_url() ?>cms/edit_page_content" method="post" id="editSubscription" role="form" enctype="multipart/form-data">
                        <div class="box-body">
                            <div class="row">
                                <div class="col-md-6">                                
                                    <div class="form-group">
                                        <label for="name">Page Name</label>
                                        <input type="text" class="form-control required" id="page_name" name="page_name" maxlength="128" value="<?php echo $name; ?>">
                                        <input type="hidden" value="<?php echo $id; ?>" name="id" id="id" />   
                                    </div>                                    
                                </div>                                
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="description">Content</label>                                        
                                        <textarea class="form-control" rows="6" cols="190" id="content" name="content" ><?php echo $content; ?></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="description">Desinger Image1</label>                                        
                                        <input type="file" name="userfile[]">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="description">Designer Image2</label>                                        
                                        <input type="file" name="userfile[]">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="description">Boutique Image1</label>                                        
                                        <input type="file" name="userfile[]">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="description">Boutique Image2</label>                                        
                                        <input type="file" name="userfile[]">
                                    </div>
                                </div>
                            </div>
			    <?php if($name == 'Home'){ ?>
			    <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="designer_url">Designer URL:</label>
                                        <input type="text" class="form-control required" id="designer_url" name="designer_url" maxlength="255" value=<?php echo $designer_url; ?>>
					<input type="text" style="margin-top:5px;" class="form-control required" id="designer_url2" name="designer_url2" maxlength="255" value=<?php echo $designer_url2; ?>>

                                    </div>
                                </div>
                            </div>
			    <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="boutique_url">Boutique URL:</label>
                                        <input type="text" class="form-control required" id="boutique_url" name="boutique_url" maxlength="255" value=<?php echo $boutique_url; ?>>
					<input type="text" style="margin-top:5px;" class="form-control required" id="boutique_url2" name="boutique_url2" maxlength="255" value=<?php echo $boutique_url2; ?>>
                                    </div>
                                </div>
                            </div>

			    <?php } ?>
                        </div><!-- /.box-body -->

                        <div class="box-footer">
                            <input type="submit" class="btn btn-primary" value="Submit" />
                            <input type="reset" class="btn btn-default" value="Reset" />
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
