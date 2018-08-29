<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        <i class="fa fa-users"></i> Product Management
        <!--<small>Add, Edit, Delete</small>-->
      </h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-xs-12 text-right">
                <div class="form-group">
                    <!--<a class="btn btn-primary" href="<?php echo base_url(); ?>addNewSubView"><i class="fa fa-plus"></i> Add New</a>-->
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
              <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Product List</h3>
                    <div class="box-tools">
                        <form action="<?php echo base_url() ?>subscriptionListing" method="POST" id="searchList">
                            <div class="input-group">
                              <input type="text" name="searchText" value="<?php echo $searchText; ?>" class="form-control input-sm pull-right" style="width: 150px;" placeholder="Search"/>
                              <div class="input-group-btn">
                                <button class="btn btn-sm btn-default searchList"><i class="fa fa-search"></i></button>
                              </div>
                            </div>
                        </form>
                    </div>
                </div><!-- /.box-header -->
                <div class="box-body table-responsive no-padding">
                  <table class="table table-hover">
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Description</th>
                      <th>Picture</th>
                      <th class="text-center">Actions</th>
                    </tr>
                    <?php
                    if(!empty($productRecords))
                    {
                        foreach($productRecords as $record)
                        {
                    ?>
                    <tr>
                      <td><?php echo $record->id ?></td>
                      <td><?php echo $record->name ?></td>
                      <td><?php echo $record->price ?></td>
                      <td><?php echo substr($record->description,0,50) ?></td>
                      <td><img src=<?php echo ($record->thumbnail != '') ? $record->thumbnail : '/assets/images/default_hanger.png'; ?> alt="Product Picture" width=80 height=80></td>
                      <td class="text-center">
                            <?php if(!$record->status){ ?>
                            <span class="btn btn-sm change-status" data-status=<?php echo $record->status; ?> data-id=<?php echo $record->id; ?>><img src="/assets/images/disable.png" ></span>
                            <?php }else{ ?>
                            <span class="btn btn-sm change-status" data-status=<?php echo $record->status; ?> data-id=<?php echo $record->id; ?>><img src="/assets/images/enable.png" ></span>
                            <?php } ?>
                            <a class="btn btn-sm show-product-details" href="<?php echo base_url().'showproductdetails/'.$record->id; ?>" data-id="<?php echo $record->id; ?>"><i class="fa fa-pencil"></i></a>
                      </td>
                    </tr>
                    <?php
                        }
                    }
                    ?>
                  </table>
                  
                </div><!-- /.box-body -->
                <div class="box-footer clearfix">
                    <?php echo $this->pagination->create_links(); ?>
                </div>
              </div><!-- /.box -->
            </div>
        </div>
    </section>
</div>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/common.js" charset="utf-8"></script>
<script type="text/javascript">
    jQuery(document).ready(function(){
        jQuery('ul.pagination li a').click(function (e) {
            e.preventDefault();            
            var link = jQuery(this).get(0).href;            
            var value = link.substring(link.lastIndexOf('/') + 1);
            jQuery("#searchList").attr("action", baseURL + "userListing/" + value);
            jQuery("#searchList").submit();
        });
    });
</script>
