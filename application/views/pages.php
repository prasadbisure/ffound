<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        <i class="fa fa-users"></i> Content Management System
        <small>cms/Edit</small>
      </h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-xs-12 text-right">
                <div class="form-group">
                    <a class="btn btn-primary" style="display:none;" href="<?php echo base_url(); ?>addNewSubView"><i class="fa fa-plus"></i> Add New</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
              <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Page List</h3>
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
                      <th>Page</th>                      
                      <th>Last updated</th>
                      <th class="text-center">Actions</th>
                    </tr>
                    <?php
                    if(!empty($page_list))
                    {
                        foreach($page_list as $page)
                        {
                    ?>
                    <tr>
                      <td><?php echo $page->id; ?></td>
                      <td><?php echo $page->page_name; ?></td>                      
                      <td><?php echo $page->updatedDtm; ?></td>
                      <td class="text-center">
                          <a class="btn btn-sm btn-info" href="<?php echo base_url().'cms/edit/'.$page->id; ?>"><i class="fa fa-pencil"></i></a>
                          <!--<a class="btn btn-sm btn-danger deleteSubscription" href="#" data-id="<?php //echo $page->id; ?>"><i class="fa fa-trash"></i></a>-->
                      </td>
                    </tr>
                    <?php
                        }
                    }
                    ?>
                  </table>
                  
                </div><!-- /.box-body -->                
              </div><!-- /.box -->
            </div>
        </div>
    </section>
</div>
