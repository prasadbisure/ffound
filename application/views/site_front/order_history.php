<script>
    $('header').css('height', '225px');
    // $('body').css('background-color', '#d4b000');
    
    $(document).ready( function () {
        
        var role = <?php echo $role; ?>;
        
        if(role == 2 || role == 3){
            $('#order-table').DataTable({
                "order": [[ 6, "desc" ]]
            });
        }else{
            $('#order-table').DataTable({
                "order": [[ 5, "desc" ]]
            });
        }
        
        $('.dataTables_wrapper').css('overflow-x', 'auto');
    });
</script>
<?php echo isset($topup_modal) ? $topup_modal : ''; ?>
<?php if(empty($orders)){ ?>
<div class='col-md-12 text-center no-history'><span>No Order History</span></div>
<?php }else{ ?>
<table id="order-table" class="table table-bordered" cellspacing="0" width="100%">
    <thead>
        <?php if($role == 4){ ?>
        <tr>
            <th>Order Id</th>
            <th>Product</th>
            <th>Picture</th>
             <th>Size</th>
            <th>Price (Rs.)</th>
            <th>Order date</th>
        </tr>
        <?php } else { ?>
            <th>Order Id</th>
            <th>Product</th>
            <th>Picture</th>
            <th>Size</th>
            <th>Customer Details</th>
            <!--<th>Customer Address</th>-->
            <th>Price (Rs.)</th>
            <th>Order date</th>
        <?php } ?>
    </thead>
    <tbody>
        <?php if(empty($orders)){ ?>
        <tr>
            <td colspan="6" style="text-align: center;">No order history</td>
        </tr>
        <?php } else{ 
        
        if($role == 4){
            
        foreach($orders as $order) { 
        ?>
        <tr>
            <td><?php echo $order->id; ?></td>
            <td><a target="_blank" style="color: inherit; -webkit-transition: .5s ease;transition: .5s ease; font-family: Raleway-Regular;" href="<?php echo site_url("ProductDetails/$order->vendorId/$order->productId");?>"><?php echo $order->pname; ?></a>
                <br>by: <a target="_blank" style="color: inherit; -webkit-transition: .5s ease;transition: .5s ease; font-family: Raleway-Regular;" href="<?php echo site_url("vendorInfo/$order->vendorId");?>"><?php echo $order->brandName; ?></a>
            </td>
            <td><img src="<?php echo $order->image; ?>" width="100" height="100"></td>
            <td><?php echo $order->size; ?></td>
            <td><?php echo $order->price; ?></td>
            <td>
                <?php $time = strtotime($order->createdDtm); ?> 
                <span style="display:none;" ><?php echo $time; ?></span>
            <?php 
                $orderDate = date("d/m/Y", $time); 
                echo $orderDate; 
            ?>
            </td>
        </tr>
        <?php }}else{
            foreach($orders as $order) {
        ?>
        <tr>
            <td><?php echo $order->id; ?></td>
            <td><?php echo $order->pname; ?></td>
            <td><img src="<?php echo $order->image; ?>" width="100" height="100"></td>
            <td><?php echo $order->size; ?></td>
            <td>
                <p>Name :<?php echo $order->customer_name; ?></p>
                <p>Email :<?php echo $order->customer_email; ?></p>
                <p>Mobile :<?php echo $order->customer_mobile; ?></p>
            </td>
            <!--<td>-->
            <!--    <?php //echo $order->customer_address; ?></p>-->
            <!--</td>-->
            <td><?php echo $order->price; ?></td>
            <td>
                <?php $time = strtotime($order->createdDtm); ?> 
                <span style="display:none;" ><?php echo $time; ?></span>
            <?php 
                $orderDate = date("d/m/Y", $time); 
                echo $orderDate; 
            ?>
            </td>
        </tr>
        
        <?php }}} ?>
    </tbody>
</table>
<?php } ?>
