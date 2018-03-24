<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';

/**
 * Class : Product (ProductController)
 * Product Class to control all Product related operations.
 * @author : Rohan Chaudhari
 * @version : 1.1
 */
class Product extends BaseController
{
    /**
     * This is default constructor of the class
     */
    public function __construct()
    {
        parent::__construct();
        $this->output->set_header('Last-Modified: ' . gmdate("D, d M Y H:i:s") . ' GMT');('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');
        $this->output->set_header('Pragma: no-cache');
        $this->output->set_header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
        $this->load->model('product_model');
        // $this->isLoggedIn();   
    }
    
    /**
     * This function used to load the first screen of the Product
     */
    public function index()
    {
        $this->global['pageTitle'] = 'FashionFound : Dashboard';
        
        $this->loadViews("dashboard", $this->global, NULL , NULL);
    }
    
    /**
     * This function is used to load the Subscription list
     */
    function productListing($userId = '', $page = null)
    {
        //   echo $page; die;
        if(empty($userId)){
            $userId = $this->input->get('userId');
        }
        $this->isLoggedIn();
        
        if($this->isAdmin() == TRUE){
            $this->loadThis();
        }else
        {                    
            $searchText = $this->input->post('searchText');
            $data['searchText'] = $searchText;
            
            $this->load->library('pagination');
            $config['uri_segment'] = 4;
            $this->pagination->initialize($config);
            
            $count = $this->product_model->productListingCount($searchText, $userId);

			$returns = $this->paginationCompress ( "productListing/", $count, 5 );
            
            // var_dump($returns); die;
            $data['productRecords'] = $this->product_model->productListing($searchText, $returns["page"], $returns["segment"], $userId);
            
            // var_dump($data); die;

            $this->global['pageTitle'] = 'FashionFound : Products Listing';
            
            $this->loadViews("products", $this->global, $data, NULL);
        }
    }

    /**
     * This function is used to load the add new form
     */
    function addNew()
    {
        $this->isLoggedIn();
        if($this->isAdmin() == TRUE)
        {
            $this->loadThis();
        }
        else
        {
  
            $this->load->model('subscription_model');
           // $data['roles'] = $this->subscription_model->getSubscriptionRoles();
            $data = [];
            $this->global['pageTitle'] = 'FashionFound : Add New Subscription';

            $this->loadViews("addNewSubView", $this->global, $data, NULL);
        }
    }
    
    /**
     * This function is used to add new Subscription to the system
     */
    function addNewSubscription()
    {
        $this->isLoggedIn();
        if($this->isAdmin() == TRUE)
        {
            $this->loadThis();
        }
        else
        {
            $this->load->library('form_validation');
            
            $this->form_validation->set_rules('name','Name','trim|required|max_length[12]|xss_clean');
            $this->form_validation->set_rules('description','Description','trim|xss_clean|max_length[128]');
            $this->form_validation->set_rules('productLimit','Product Limit','required|max_length[10]');           
            $this->form_validation->set_rules('price','Role','trim|required|numeric');
                        
            if($this->form_validation->run() == FALSE)
            {
                $this->addNew();
            }
            else
            {
                $name = ucwords(strtolower($this->input->post('name')));
                $description = $this->input->post('description');
                $productLimit = $this->input->post('productLimit');
                $price = $this->input->post('price');
                
                $SubscriptionInfo = array('name'=>$name, 'description'=>$description, 'productLimit'=>$productLimit, 'price'=> $price,
                                   'createdBy'=>$this->vendorId, 'createdDtm'=>date('Y-m-d H:i:s'));
                
                $this->load->model('subscription_model');
                $result = $this->subscription_model->addNewSubscription($SubscriptionInfo);
                
                if($result > 0)
                {
                    $this->session->set_flashdata('success', 'New Subscription created successfully');
                }
                else
                {
                    $this->session->set_flashdata('error', 'Subscription creation failed');
                }
                
                redirect('subscriptionListing');
            }
        }
    }

    
    /**
     * This function is used load Subscription edit information
     * @param number $SubscriptionId : Optional : This is Subscription id
     */
    function editOld($SubscriptionId = NULL)
    {
        $this->isLoggedIn();
        if($this->isAdmin() == TRUE)
        {
            $this->loadThis();
        }
        else
        {

            if($SubscriptionId == null)
            {
                redirect('SubscriptionListing');
            }
                                    
            $data['subscriptionInfo'] = $this->subscription_model->getSubscriptionInfo($SubscriptionId);
            
            $this->global['pageTitle'] = 'FashionFound : Edit Subscription';
            
            $this->loadViews("editOldSubscription", $this->global, $data, NULL);
        }
    }
    
    
    /**
     * This function is used to edit the Subscription information
     */
    function editSubscription()
    {
        $this->isLoggedIn();
        if($this->isAdmin() == TRUE)
        {
            $this->loadThis();
        }
        else
        {
            $this->load->library('form_validation');
            
            $SubscriptionId = $this->input->post('subscriptionId');
            
            $this->form_validation->set_rules('name','Name','trim|required|max_length[12]|xss_clean');
            $this->form_validation->set_rules('description','Description','trim|xss_clean|max_length[128]');
            $this->form_validation->set_rules('productLimit','Product Limit','required|max_length[10]');           
            $this->form_validation->set_rules('price','Role','trim|required|numeric');
            
            if($this->form_validation->run() == FALSE)
            {
                $this->editOld($SubscriptionId);
            }
            else
            {
                $name = ucwords(strtolower($this->input->post('name')));
                $description = $this->input->post('description');
                $productLimit = $this->input->post('productLimit');
                $price = $this->input->post('price');
                
                $SubscriptionInfo = array();
                
                $SubscriptionInfo = array('name'=>$name, 'description'=>$description, 'productLimit'=>$productLimit,
                                    'price'=>$price, 'updatedBy'=>$this->vendorId, 'updatedDtm'=>date('Y-m-d H:i:s'));
                
                $result = $this->subscription_model->editSubscription($SubscriptionInfo, $SubscriptionId);
                
                if($result == true)
                {
                    $this->session->set_flashdata('success', 'Subscription updated successfully');
                }
                else
                {
                    $this->session->set_flashdata('error', 'Subscription updation failed');
                }
                
                redirect('subscriptionListing');
            }
        }
    }


    /**
     * This function is used to delete the Subscription using SubscriptionId
     * @return boolean $result : TRUE / FALSE
     */
    function deleteSubscription()
    {
        $this->isLoggedIn();
        if($this->isAdmin() == TRUE)
        {
            echo(json_encode(array('status'=>'access')));
        }
        else
        {
            $SubscriptionId = $this->input->post('SubscriptionId');
            $SubscriptionInfo = array('isDeleted'=>1,'updatedBy'=>$this->vendorId, 'updatedDtm'=>date('Y-m-d H:i:s'));
            
            $result = $this->subscription_model->deleteSubscription($SubscriptionId, $SubscriptionInfo);
            
            if ($result > 0) { echo(json_encode(array('status'=>TRUE))); }
            else { echo(json_encode(array('status'=>FALSE))); }
        }
    }

    function pageNotFound()
    {
        $this->global['pageTitle'] = 'FashionFound : 404 - Page Not Found';
        
        $this->loadViews("404", $this->global, NULL, NULL);
    }
    
    /*Update product info from vendor admin account */
    public function updateProductInfo()
    {
        $p_name=$this->input->post('name');
        $desc  =$this->input->post('description');
        $size  =$this->input->post('size');
        $color  =$this->input->post('color');
        $fabric  =$this->input->post('fabric');
        $style  =$this->input->post('style');
        $onel  =$this->input->post('onelinertext');
        $price =$this->input->post('price');
        $productId=$this->input->post('pid');
        
        $i_array = array();
        $userId = $this->session->userdata('userId');
        //UPDATE
        
        $config['upload_path']          = './upload/';
        $config['allowed_types']        = 'gif|jpg|png';
        /*$config['max_size']             = 1000;
        $config['max_width']            = 1024;
        $config['max_height']           = 768;*/

        $this->load->library('upload', $config);
        $imagesUploadArray = array();
        
        
        $filesCount = count($_FILES['userfile']['name']);
        $uploadPath = './upload/';
        $config['upload_path'] = $uploadPath;
        $config['allowed_types'] = 'gif|jpg|png|jpeg';
        
        $this->load->library('upload', $config);
        $this->upload->initialize($config);
       // echo $filesCount; die;
        $index = 1;
        for($i = 0; $i < $filesCount; $i++){
            $_FILES['tmpfile']['name'] = $_FILES['userfile']['name'][$i];
            $_FILES['tmpfile']['type'] = $_FILES['userfile']['type'][$i];
            $_FILES['tmpfile']['tmp_name'] = $_FILES['userfile']['tmp_name'][$i];
            $_FILES['tmpfile']['error'] = $_FILES['userfile']['error'][$i];
            $_FILES['tmpfile']['size'] = $_FILES['userfile']['size'][$i];

            if($this->upload->do_upload('tmpfile')){
                $fileData = $this->upload->data();
                $image_name = $fileData['file_name'];
                $this->compress_image($image_name);
                $thumbnail_name = $this->do_resize($image_name);
                if($i == 0){
                    $i_array = array('images' =>'/upload/'.$image_name, 'thumbnail' => '/upload/thumbnails/'.$thumbnail_name);
                    
                }else{
                    ++$index; 
                    $i_array = array('images'.$index =>'/upload/'.$image_name, 'thumbnail'.$index => '/upload/thumbnails/'.$thumbnail_name);
                }
                $imagesUploadArray = array_merge($imagesUploadArray, $i_array);
            }
        }
            
        $productInfo =array('name'=>$p_name,'description'=>$desc,'size'=>$size,'color'=>$color,'fabric'=>$fabric,'style'=>$style,'onelinertxt'=>$onel, 'price' => $price, 'updatedBy'=>$userId, 'updatedDtm'=>date('Y-m-d H:i:s'),'id'=>$productId, 'status' => 1);
        
        
        $updateInfo = array_merge($productInfo, $imagesUploadArray);
        // var_dump($updateInfo); die;

        $result= $this->product_model->updateProduct($updateInfo);
        
        if($result){
            $detail["subject"] = "Fashion Found: Product Update Notification";
            $detail["email"]  = $this->session->userdata('email');;
            
            
            $detail["message"] = "Hello!<br><br>Your product has been sent for review.<br>Wait for approval.<br><br>
                Thank You<br> Fashion Found";    

            
            sendNotificationMail($detail);
            
            $link = base_url().'showproductdetails/'.$productId;
            
            //Email for vendor(designer/boutique);
            $detail["subject"] = "Product Moderation Request";
            $detail["email"]  = ADMIN_MAIL;
            $detail["message"] = "Dear Admin,<br><br> Verify following product updates.<br><br>
                <a href=$link>$p_name</a>
                <br><br>Thanks<br><br>Team Fashion Found";
                
            sendNotificationMail($detail);
        }
    }
    
    function changeStatus(){
        
        $id = $this->input->post('id');
        $status = $this->input->post('status');
        
        if($status == 0){
            $status = 1;
        }else{
            $status = 0;
        }
        
        $status = $this->product_model->changeStatus($id, $status);
        
        echo true;
    }
    
    function showProductDetails($id){
        
        $this->isLoggedIn();
        if($this->isAdmin() == TRUE)
        {
            $this->loadThis();
        }
        else
        {
            $this->data['productInfo'] = $this->product_model->showProductDetails($id);
            
            $this->data['pageTitle'] = 'FashionFound : Product Details';
            
            $this->loadViews("showProductDetails", $this->data, $id, NULL);
        }
    }
}

?>