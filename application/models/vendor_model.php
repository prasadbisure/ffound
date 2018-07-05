<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

class vendor_model extends CI_Model
{
    function __construct(){
        parent::__construct();
    }

/* Funtion for login of vendors */
    function getVendorInfo($userId){
        $this->db->select('BaseTbl.userId, BaseTbl.name, BaseTbl.mobile, BaseTbl.email, BaseTbl.address, BaseTbl.gender, BaseTbl.brandName, BaseTbl.logo, BaseTbl.bio, BaseTbl.specialization, Role.role, Subscription.name as sname, Subscription.productLimit,Products.images, Products.thumbnail, Products.id as productId, Products.price, Products.onelinertxt, Products.name as product_name, Products.description as product_description, Products.size as product_size,Products.color as product_color,Products.fabric as product_fabric, Products.style as product_style');
        $this->db->from('tbl_users as BaseTbl');
        $this->db->join('tbl_roles as Role', 'Role.roleId = BaseTbl.roleId','left');
        $this->db->join('tbl_products as Products', 'Products.userId = BaseTbl.userId','left');    
        $this->db->join('tbl_subscriptions as Subscription', 'Subscription.id = BaseTbl.subscription_type','left');  
        $this->db->where('BaseTbl.isDeleted', 0);
        $this->db->where('BaseTbl.userId', $userId);
        
        $query = $this->db->get();
        $ret=$query->result();
        return $ret;
        
    }
    
    function vendorListCount($type){
        if($type == 'designer')
            $roleId = 2;
            
        if($type == 'boutique')
            $roleId = 3;    
        
        $this->db->select('count(*) as count');
        
        $this->db->from('tbl_users as BaseTbl');
        $this->db->where('BaseTbl.isDeleted', 0);
        $this->db->where('BaseTbl.status', 1);

        $this->db->where('BaseTbl.roleId', $roleId); 

        $query = $this->db->get();
        return $query->result();
    }

    /* Funtion to display list of available designers */
    function vendorList($type, $page, $segment){
        
        if($type == 'designer')
            $roleId = 2;
            
        if($type == 'boutique')
            $roleId = 3;    
        
        $this->db->select('BaseTbl.userId, BaseTbl.name, BaseTbl.roleId, BaseTbl.brandName, BaseTbl.logo, BaseTbl.bio, BaseTbl.specialization, BaseTbl.profile_pic, BaseTbl.profile_pic_status');
        $this->db->from('tbl_users as BaseTbl');
        
        $this->db->where('BaseTbl.isDeleted', 0);
        $this->db->where('BaseTbl.status', 1);
      // var_dump($roleId); die;
        $this->db->where('BaseTbl.roleId', $roleId); 
        $this->db->limit($page, $segment);
        $query = $this->db->get();
        return $query->result();
    }
    
    function productsByVendor($vendorId){
        
        $this->db->select('*');
        $this->db->from('tbl_products as p');
        $this->db->where('p.isDeleted', 0);
        $this->db->where('p.status', 0);
        $this->db->where('p.userId', $vendorId);
        
      // echo $vendorId; die;
        $query = $this->db->get();
        return $query->result();
    }

    
    /*Function to get information about selected vendor */
    function vendorInfo($vendorId){
        $this->db->select('BaseTbl.userId, BaseTbl.email, BaseTbl.name, Products.name as product_name , BaseTbl.mobile, BaseTbl.brandName, BaseTbl.logo, BaseTbl.bio, BaseTbl.specialization, Role.role, Subscription.name as sname, Subscription.productLimit, Products.onelinertxt, Products.price,Products.images, Products.id, Products.status as pstatus');
        $this->db->from('tbl_users as BaseTbl');
        $this->db->join('tbl_roles as Role', 'Role.roleId = BaseTbl.roleId','left');
        $this->db->join('tbl_products as Products', 'Products.userId = BaseTbl.userId','left');    
        $this->db->join('tbl_subscriptions as Subscription', 'Subscription.id = BaseTbl.subscription_type','left');  
        $this->db->where('BaseTbl.isDeleted', 0);
        $this->db->where('BaseTbl.status', 1);
        $this->db->where('Products.isDeleted', 0);
//        $this->db->where('Products.status', );
        $this->db->where('BaseTbl.userId',$vendorId);

        $query = $this->db->get();
        return $query->result();
    }

    /*Function to get information about selected vendor */
    function productInfo($vendorId,$productId){
        $this->db->select('BaseTbl.userId, BaseTbl.email, BaseTbl.name, BaseTbl.mobile, BaseTbl.brandName, BaseTbl.logo, BaseTbl.bio, BaseTbl.specialization, Role.role, Subscription.name as sname, Subscription.productLimit, Products.onelinertxt, Products.price,Products.images, Products.thumbnail, ,Products.images2, Products.thumbnail2, Products.images3, Products.thumbnail3, Products.id, Products.description,Products.size, Products.name, Products.color, Products.fabric, Products.style');
        $this->db->from('tbl_users as BaseTbl');
        $this->db->join('tbl_roles as Role', 'Role.roleId = BaseTbl.roleId','left');
        $this->db->join('tbl_products as Products', 'Products.userId = BaseTbl.userId','left');    
        $this->db->join('tbl_subscriptions as Subscription', 'Subscription.id = BaseTbl.subscription_type','left');  
        $this->db->where('BaseTbl.isDeleted', 0);
        $this->db->where('BaseTbl.userId',$vendorId);
        $this->db->where('Products.id',$productId); 

        $query = $this->db->get();
        return $query->result();
    }


    /* List of searched vendors */
    function vendorListing($searchText = '', $type = 'all')
    {
       // var_dump($type); die;
        $this->db->select('BaseTbl.userId, BaseTbl.email, BaseTbl.name, BaseTbl.brandName, BaseTbl.logo, BaseTbl.specialization, BaseTbl.bio, BaseTbl.mobile, Role.role, Subscription.name as sname, Subscription.productLimit');
        $this->db->from('tbl_users as BaseTbl');
        $this->db->join('tbl_roles as Role', 'Role.roleId = BaseTbl.roleId','left');
        $this->db->join('tbl_products as Products', 'Products.userId = BaseTbl.userId','left');
        $this->db->join('tbl_subscriptions as Subscription', 'Subscription.id = BaseTbl.subscription_type','left');
        if(!empty($searchText)) {
            $likeCriteria = "(BaseTbl.email  LIKE '%".$searchText."%'
                            OR  BaseTbl.name  LIKE '%".$searchText."%'
                            OR  BaseTbl.brandName  LIKE '%".$searchText."%'
                            OR  BaseTbl.mobile  LIKE '%".$searchText."%'
                            OR  Products.color  LIKE '%".$searchText."%'
                            OR  Products.name  LIKE '%".$searchText."%'
                            OR  Products.fabric  LIKE '%".$searchText."%'
                            OR  Products.style  LIKE '%".$searchText."%'
                            OR  Products.description  LIKE '%".$searchText."%')";
                    
            $this->db->where($likeCriteria);
        }
        $this->db->where('BaseTbl.isDeleted', 0);
        $this->db->where('BaseTbl.status', 1);

        if($type == "all"){
            $this->db->where('BaseTbl.roleId !=', 1);
            $this->db->where('BaseTbl.roleId !=', 4);
        }

        if($type == "designer"){
            $this->db->where('BaseTbl.roleId =', 2);
        }

        if($type == "boutique"){
            $this->db->where('BaseTbl.roleId =', 3);
        }
        
        
        $query = $this->db->get();
        
        return $query->result();
    }
    
    function get_random_products($type, $excludeId, $productId)
    {
       
        if($type == 'designer')
            $roleId = 2;
            
        if($type == 'boutique')
            $roleId = 3;    
        
        $this->db->select('BaseTbl.userId, Products.onelinertxt, Products.price,Products.images, Products.id as pid, Products.name');
        $this->db->from('tbl_products as Products');
        
        $this->db->join('tbl_users as BaseTbl', 'Products.userId = BaseTbl.userId','left');
        
        
        $this->db->join('tbl_roles as Roles', 'Roles.roleId = BaseTbl.roleId','left');
        
        
        $this->db->order_by('Products.id', 'RANDOM');
        $this->db->where_not_in('Products.id', $productId);
        $this->db->where('BaseTbl.userId', $excludeId);
        $this->db->where('BaseTbl.roleId', $roleId);
        $this->db->where('Products.status', 0);
        $this->db->limit(8);
        
        $query = $this->db->get();
        return $query->result();
    
    }
    
    //activate account
    function verifyEmail($key){
        $data = array('status' => 1);
        $this->db->where('md5(email)',$key);
        return $this->db->update('tbl_users', $data);    //update status as 1 to make active user
    }
    
    
    function productBooking($productId, $userId, $size){
        
        $productInfo = $this->getProductById1($productId);
        
        
        $orderInsert =array('productId' => $productId ,'size'=>$size,'userId'=>$userId, 'pname' => $productInfo[0]->name,'vendorId'=>$productInfo[0]->userId, 'price'=>$productInfo[0]->price, 'image'=>$productInfo[0]->images, 'createdBy'=>$userId, 'createdDtm'=>date('Y-m-d H:i:s'), 'updatedBy'=>$userId, 'updatedDtm'=>date('Y-m-d H:i:s'));
     
        $this->db->trans_start();
        $this->db->insert('tbl_orders', $orderInsert);
        
        $insert_id = $this->db->insert_id();
        
        $this->db->trans_complete();
        
        return $insert_id;
    }
    
    public function getProductById($productId){
        
       // echo $productId; die;
        $this->db->select('*');
        $this->db->from('tbl_products as Products');
        $this->db->where_not_in('Products.id', $productId);
        
        $query = $this->db->get();
        return $query->result();
    }
    
    public function getProductById1($productId){
        
       // echo $productId; die;
        $this->db->select('*');
        $this->db->from('tbl_products as Products');
        $this->db->where('Products.id', $productId);
        
        $query = $this->db->get();
        return $query->result();
    }
    
    
    public function getEmailNameById($id){
        
        $this->db->select('email, name, mobile, brandName, address');
        $this->db->from('tbl_users');
        $this->db->where('userId', $id);
        
        $query  = $this->db->get();
        $result =  $query->result();
        return $result[0];
    }
    
    function getOrderHistoryById($id, $role){ 
        
        if($role == 4){
            $this->db->select('tbl_orders.*,tbl_users.brandName');
            $this->db->from('tbl_orders');
            $this->db->join('tbl_users','tbl_users.userId = tbl_orders.vendorId','left');
            $this->db->where('tbl_orders.userId', $id);
        }
            
        if($role == 2 || $role == 3){
            $this->db->select('BaseTbl.name as customer_name, BaseTbl.mobile as customer_mobile, BaseTbl.email as customer_email, BaseTbl.address as customer_address, Orders.id, Orders.pname, Orders.image, Orders.createdDtm, Orders.price, Orders.size');
            $this->db->from('tbl_users as BaseTbl');
            $this->db->join('tbl_orders as Orders', 'Orders.userId = BaseTbl.userId','left');
            
            $this->db->where('Orders.vendorId', $id);
            $where = "Orders.createdDtm < DATE_SUB(NOW(), INTERVAL 72 HOUR)";
            $this->db->where($where, NULL, FALSE);
        }

        $query  = $this->db->get();
        $result =  $query->result();
        
        return $result;
    }
    
    function getOrdersById($id, $role){ 
        
        if($role == 4){
            $this->db->select('*');
            $this->db->from('tbl_orders');
            $this->db->where('userId', $id);
        }
            
        if($role == 2 || $role == 3){
            $this->db->select('BaseTbl.name as customer_name, BaseTbl.mobile as customer_mobile, BaseTbl.email as customer_email, BaseTbl.address as customer_address, Orders.id, Orders.pname, Orders.image, Orders.createdDtm, Orders.price, Orders.size');
            $this->db->from('tbl_users as BaseTbl');
            $this->db->join('tbl_orders as Orders', 'Orders.userId = BaseTbl.userId','left');
            
            $this->db->where('Orders.vendorId', $id);
            $where = "Orders.createdDtm > DATE_SUB(NOW(), INTERVAL 72 HOUR)";
            $this->db->where($where, NULL, FALSE);
        }

        $query  = $this->db->get();
        $result =  $query->result();
        
        return $result;
    }
    
    function insertReviewRating($info)
    {
        $this->db->trans_start();
        $this->db->insert('tbl_reviews_rating', $info);
        
        $insert_id = $this->db->insert_id();
        
        $this->db->trans_complete();
        
        return $insert_id;
    }
    
    function changeStatus($id, $status)
    {
        $updateStr = array('status' => $status);
        // var_dump($updateStr); die;
        $this->db->where('id',$id );
        $this->db->update('tbl_users',$updateStr);
        
        return $this->db->affected_rows();
        
    }
    
    public function getProfileStatus($id){
        
        $this->db->select('profileStatus');
        $this->db->from('tbl_users');
        $this->db->where('userId', $id);
        
        $query  = $this->db->get();
        $result =  $query->result();
        
        return $result[0]->profileStatus;
    }
    
    public function vendorReview($vendorId){
        
        $this->db->select('Review.review, Review.rating, BaseTbl.name');
        $this->db->from('tbl_reviews_rating as Review');
        $this->db->join('tbl_users as BaseTbl', 'BaseTbl.userId = Review.createdBy','left');
        $this->db->where('Review.vendorId', $vendorId);
        $this->db->where('Review.status', 1);
        
        $query  = $this->db->get();
        $result =  $query->result();
        
        return $result;
    }
    
    public function getSubscriptionReminder($id){
        $this->db->select('createdDtm');
        $this->db->from('tbl_transactions');
        $this->db->where('userId', $id);
        
        $query  = $this->db->get();
        $result =  $query->result();
        
        
        return $result[0]->createdDtm;
    }
}

?>
