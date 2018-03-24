<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        <i class="fa fa-users"></i> Review & Rating Management
        
      </h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-xs-12 text-right">
                <div class="form-group">
                    <a class="btn btn-primary" href="<?php echo base_url(); ?>addNewSubView"><i class="fa fa-plus"></i> Add New</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
              <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Review & Rating List</h3>
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
                      <th>Vendor name</th>
                      <th>Brand name</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th class="text-center">Actions</th>
                    </tr>
                    <?php
                    if(!empty($reviewRecords))
                    {
                        foreach($reviewRecords as $record)
                        {
                    ?>
                    <tr>
                      <td><?php echo $record->id; ?></td>
                      <td><?php echo $record->vendorname; ?></td>
                      <td><?php echo $record->brandName; ?></td>
                      <td><?php echo $record->review; ?></td>
                      <td><?php echo $record->createdDtm; ?></td>
                      <td class="text-center">
                          <?php if($record->status){ ?>
                            <span class="btn btn-sm change-review-status" data-status=<?php echo $record->status; ?> data-id=<?php echo $record->id; ?>><img src="/assets/images/enable.png" ></span>
                            <?php }else{ ?>
                            <span class="btn btn-sm change-review-status" data-status=<?php echo $record->status; ?> data-id=<?php echo $record->id; ?>><img src="/assets/images/disable.png" ></span>
                            <?php } ?>
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
