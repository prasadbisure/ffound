<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';

/**
 * Class : Site (SiteController)
 * User Class to control all user related operations.
 * @author : Rohan Chaudhari
 * @version : 1.1
 */
class Site extends BaseController
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
        $this->load->model('vendor_model');
        $this->load->model('user_model');
        $this->load->model('subscription_model'); 
        $this->load->model('product_model'); 
        $this->load->model('site_model');
        // $this->load->helper('cias');
        $this->data['loggedIn'] = $this->session->userdata('isLoggedIn');
        $this->data['role'] = $this->session->userdata('role');
        $userId = $this->session->userdata('userId');
        $this->data['profileStatus'] = $this->vendor_model->getProfileStatus($userId);
        $this->load->library('form_validation');
        $this->load->helper('cookie');
    }
    
    /**
     * This function used to load the first screen of the user
     */
    public function index()
    {
        $this->data['pageTitle'] = 'FashionFound : Home';
        
        $pageInfo = $this->site_model->getPageInfo(1);
        $this->data['page_content'] = $pageInfo[0]->content;
        $this->data['designer1']    = $pageInfo[0]->designer_img1;
        $this->data['designer2']    = $pageInfo[0]->designer_img2;
        $this->data['boutique1']    = $pageInfo[0]->boutique_img1;
        $this->data['boutique2']    = $pageInfo[0]->boutique_img2;
	$this->data['designer_url1']= $pageInfo[0]->designer_url;
        $this->data['designer_url2']= $pageInfo[0]->designer_url2;
	$this->data['boutique_url1']= $pageInfo[0]->boutique_url;
	$this->data['boutique_url2']= $pageInfo[0]->boutique_url2;

//        echo"<pre>";
//        print_r(base_url());
//        exit;

        $this->loadFrontViews("site_front/landing", $this->data, NULL , NULL);
    }
    
    public function getVendorListing($type, $pageNo){
        
        // echo $pageNo;
        if(strcmp($type,"designer") !== 0 && strcmp($type,"boutique") !== 0){
            redirect('/');  
        }
        
        /*if(empty($pageNo)){
            $pageNo = 1;
        }*/
        
        $vendorListCount = $this->vendor_model->vendorListCount($type);
        
        $pageInfo = $this->site_model->getPageInfo(1);
        $this->data['designer1']    = $pageInfo[0]->designer_img1;
        $this->data['designer2']    = $pageInfo[0]->designer_img2;
        $this->data['boutique1']    = $pageInfo[0]->boutique_img1;
        $this->data['boutique2']    = $pageInfo[0]->boutique_img2;
        $this->data['designer_url1']= $pageInfo[0]->designer_url;
        $this->data['designer_url2']= $pageInfo[0]->designer_url2;
        $this->data['boutique_url1']= $pageInfo[0]->boutique_url;
        $this->data['boutique_url2']= $pageInfo[0]->boutique_url2;
        
        $this->load->library('pagination');
        
        // If use bootstrap or else remove.
        $config['full_tag_open'] = "<ul class='pagination'>";
        $config['full_tag_close'] ="</ul>";
        $config['num_tag_open'] = '<li>';
        $config['num_tag_close'] = '</li>';
        $config['cur_tag_open'] = "<li class='disabled'><li class='active'><a href='#'>";
        $config['cur_tag_close'] = "<span class='sr-only'></span></a></li>";
        $config['next_tag_open'] = "<li>";
        $config['next_tagl_close'] = "</li>";
        $config['prev_tag_open'] = "<li>";
        $config['prev_tagl_close'] = "</li>";
        $config['first_tag_open'] = "<li>";
        $config['first_tagl_close'] = "</li>";
        $config['last_tag_open'] = "<li>";
        $config['last_tagl_close'] = "</li>";
        $config['uri_segment'] = 3;
        $config['base_url'] = site_url('vendorslisting')."/$type";
        $config['total_rows'] = $vendorListCount[0]->count;;
        $config['per_page'] = 10;
        $config["num_links"] = round( $config["total_rows"] / $config["per_page"] );
        
        $this->pagination->initialize($config);
    
        $vendorList = $this->vendor_model->vendorList($type, $config['per_page'], $pageNo);
        
        $vendorArray = array();
        foreach($vendorList as $vendor){
         
            $productList = $this->vendor_model->productsByVendor($vendor->userId);
            
            $totalProducts = count($productList);
            $productArray = array();
            for($i=0; $i<=2; $i++){
                
                $productArray[] = $productList[$i];
            }
            
            $productArray['total_products'] = $totalProducts;
            $productArray['name'] = $vendor->name;
            $productArray['brandName'] = $vendor->brandName;
            $productArray['logo']      = $vendor->logo;
            $productArray['profile_pic']      = $vendor->profile_pic;
            $productArray['profile_pic_status']      = $vendor->profile_pic_status;
            $vendorArray[$vendor->userId] = $productArray;
        }
        
        
        $this->data['designerList'] = $vendorArray;
        
        
        $this->data['pageTitle'] = ($type == 'designer') ? 'DESIGNERS' : 'BOUTIQUE';
        $this->data['heading']='';
        $this->data['heading1']= ($type == 'designer') ? 'DESIGNERS' : 'BOUTIQUE';
        $this->data['heading2']='Here we are to style you up!';
        $this->data['login1']='true';
        $this->data['type'] = $type;
        $this->data['pagination'] = $this->pagination->create_links();
        if($pageNo != 1){
            $pageNo++;
        }
        $this->data['pageno'] = $pageNo;

//        echo"<pre>";
//        print_r($this->data['designerList']);
//        exit;

        $this->loadOtherviews("site_front/vendors", $this->data, NULL , NULL);
     }


    public function aboutus(){
        $this->data['pageTitle'] = 'FashionFound : About Us';
        $this->data['heading']='';
        $this->data['heading1']='ABOUT US';
        $this->data['heading2']='Choose your best deal';
        $this->data['login1']='';
        
        $pageInfo = $this->site_model->getPageInfo(2);
        $this->data['page_content'] = $pageInfo[0]->content;
        
        $this->loadOtherViews("site_front/aboutus", $this->data, NULL , NULL);
      }

    public function getDesigners($pageNo){
        $type = "designer";

        if(strcmp($type,"designer") !== 0 && strcmp($type,"boutique") !== 0){
            redirect('/');
        }

        /*if(empty($pageNo)){
            $pageNo = 1;
        }*/

        $vendorListCount = $this->vendor_model->vendorListCount($type);

        $pageInfo = $this->site_model->getPageInfo(1);
        $this->data['designer1']    = $pageInfo[0]->designer_img1;
        $this->data['designer2']    = $pageInfo[0]->designer_img2;
        $this->data['boutique1']    = $pageInfo[0]->boutique_img1;
        $this->data['boutique2']    = $pageInfo[0]->boutique_img2;
        $this->data['designer_url1']= $pageInfo[0]->designer_url;
        $this->data['designer_url2']= $pageInfo[0]->designer_url2;
        $this->data['boutique_url1']= $pageInfo[0]->boutique_url;
        $this->data['boutique_url2']= $pageInfo[0]->boutique_url2;

        $this->load->library('pagination');

        // If use bootstrap or else remove.
        $config['full_tag_open'] = "<ul class='pagination'>";
        $config['full_tag_close'] ="</ul>";
        $config['num_tag_open'] = '<li>';
        $config['num_tag_close'] = '</li>';
        $config['cur_tag_open'] = "<li class='disabled'><li class='active'><a href='#'>";
        $config['cur_tag_close'] = "<span class='sr-only'></span></a></li>";
        $config['next_tag_open'] = "<li>";
        $config['next_tagl_close'] = "</li>";
        $config['prev_tag_open'] = "<li>";
        $config['prev_tagl_close'] = "</li>";
        $config['first_tag_open'] = "<li>";
        $config['first_tagl_close'] = "</li>";
        $config['last_tag_open'] = "<li>";
        $config['last_tagl_close'] = "</li>";
        $config['uri_segment'] = 3;
        $config['base_url'] = site_url('designers');//site_url('vendorslisting')."/$type";
        $config['total_rows'] = $vendorListCount[0]->count;;
        $config['per_page'] = 5;
        $config["num_links"] = round( $config["total_rows"] / $config["per_page"] );

        $this->pagination->initialize($config);

        $vendorList = $this->vendor_model->vendorList($type, $config['per_page'], $pageNo);

        $vendorArray = array();
        foreach($vendorList as $vendor){

            $productList = $this->vendor_model->productsByVendor($vendor->userId);

            $totalProducts = count($productList);
            $productArray = array();
            for($i=0; $i<=2; $i++){

                $productArray[] = $productList[$i];
            }

            $productArray['total_products'] = $totalProducts;
            $productArray['name'] = $vendor->name;
            $productArray['brandName'] = $vendor->brandName;
            $productArray['logo']      = $vendor->logo;
            $vendorArray[$vendor->userId] = $productArray;
        }


        $this->data['designerList'] = $vendorArray;


        $this->data['pageTitle'] = ($type == 'designer') ? 'DESIGNERS' : 'BOUTIQUE';
        $this->data['heading']='';
        $this->data['heading1']= ($type == 'designer') ? 'DESIGNERS' : 'BOUTIQUE';
        $this->data['heading2']='Here we are to style you up!';
        $this->data['login1']='true';
        $this->data['type'] = $type;
        $this->data['pagination'] = $this->pagination->create_links();
        if($pageNo != 1){
            $pageNo++;
        }
        $this->data['pageno'] = $pageNo;
        $this->loadOtherviews("site_front/vendors", $this->data, NULL , NULL);


    }
      
    public function packages($isUpgrade = ''){
        
        if($isUpgrade == "upgrade"){
            
            if(!$this->data['loggedIn']){
                redirect('/login-register');
            }
            
        }
        
        $this->data['list']=$this->subscription_model->subscriptionList();
        
        $this->data['upgrade']   = $isUpgrade; 
        $this->data['pageTitle'] = 'FashionFound : Packages';
        $this->data['heading']   = '';
        $this->data['heading1']  = 'PACKAGES';
        $this->data['heading2']  = 'Choose your best deal';
        $this->data['login1']    = '';
        
        $pageInfo = $this->site_model->getPageInfo(3);
        $this->data['page_content'] = $pageInfo[0]->content;
        
        $this->loadOtherViews("site_front/packages", $this->data, NULL , NULL);
    }

     public function vendorSelect(){
        $vendorId = $this->input->post('vendorId');
         $vendor1=$this->vendor_model->vendorInfo($vendorId); 
         $this->vendorInfo( $vendor1);
     }

     public function vendorInfo($vendorIds){
        $vendorId = $this->input->post('vendorId');
	if(empty($vendorId)){
		$vendorId = $vendorIds;
	}
        $userId = $this->session->userdata('userId');
        $this->data['custId'] = (!empty($userId)) ? $userId : 0;
        $this->data['vendor']  = $this->vendor_model->vendorInfo($vendorId);
        $this->data['reviews'] = $this->vendor_model->vendorReview($vendorId);
        $this->data['val'] = $this->data['vendor'];
        $this->data['pageTitle'] = 'FashionFound : Products';
        $this->data['heading']='vendorInfo';        
        $this->data['heading1']='';
        $this->data['heading2']='We make sure to keep our store updated with the latest trends and keep our customers happy';
        $this->data['login1']='';
        $this->loadProductViews("site_front/vendorInfo", $this->data, NULL , NULL);
     }


     public function ProductDetails($vendorIds, $productIds){
        
        $referer = $this->session->userdata('referer');

        if($referer == "booking"){
            
            $vendorId  = $this->session->userdata('tempVendorId');
            $productId = $this->session->userdata('tempProductId');
            // $this->session->unset_userdata('referer');
            // echo $vendorId; die;
        }else{
            $vendorId = $this->input->post('vendorId');
            $productId = $this->input->post('productId');    
        }

	if(empty($vendorId) && empty($productId)){
	    $vendorId  = $vendorIds;
            $productId = $productIds;
	}
        
        $this->data['vendor']=$this->vendor_model->productInfo($vendorId,$productId);
        $this->data['val'] = $this->data['vendor'];
        $userId = $this->session->userdata('userId');
        $this->data['custId'] = (!empty($userId)) ? $userId : 0; 
        $this->data['related_products']=$this->vendor_model->get_random_products('designer', $vendorId, $productId);
        $this->data['pageTitle'] = 'FashionFound : Products';
        $this->data['heading']='product';
        // $this->data['heading1']='';
        // $this->data['heading2']='We make sure to keep our store updated with the latest trends and keep our customers happy';
        $this->data['start_template']= false;
        $this->data['login1']='';
        $this->loadProductViews("site_front/product", $this->data, NULL , NULL);
     }
    

/**
     * This function is used to load the add new form
     */
     

     function addNewUser()
     {
         
         $this->load->library('form_validation');
        //  $this->load->library('crypto');
         
         $this->form_validation->set_rules('name','Full Name','trim|required|max_length[128]|xss_clean');
         $this->form_validation->set_rules('email','Email','trim|required|valid_email|xss_clean|max_length[128]');
         $this->form_validation->set_rules('password','Password','required|max_length[20]');
         $this->form_validation->set_rules('role','Role','trim|required|numeric');
         $this->form_validation->set_rules('mobile','Mobile Number','required|numeric|min_length[10]|xss_clean');
         
         $result = $this->user_model->checkEmailExists($email);
         //var_dump($this->input->post());
         if($this->form_validation->run() == FALSE)
         {
            redirect('/login-register?result=3');
         }
         else
         {
            $name = ucwords(strtolower($this->input->post('name')));
            $email = $this->input->post('email');
            $password = $this->input->post('password');
            $roleId = $this->input->post('role');
            $mobile = $this->input->post('mobile');
            $brandName = $this->input->post('brandName');
            //  $gender = $this->input->post('gender');
            $subscription_id = $this->input->post('subscription_id');
             
            $result = $this->user_model->checkEmailExists($email);
            
            if(!empty($result)){ 
                $flag = 5;
                echo $flag;
                return;
            }
            
            $userInfo = array('email'=>$email, 'subscription_type'=>$subscription_id, 'password'=>getHashedPassword($password), 'roleId'=>$roleId, 'name'=> $name,'mobile'=>$mobile,'brandName'=>$brandName, 'createdBy'=>123, 'createdDtm'=>date('Y-m-d H:i:s'));
            
            // $userInfo = array('email'=>$email, 'subscription_type'=>$subscription_id, 'password'=>$password, 'roleId'=>$roleId, 'name'=> $name,'mobile'=>$mobile,'brandName'=>$brandName, 'createdBy'=>123, 'createdDtm'=>date('Y-m-d H:i:s'));
             
             $result = $this->user_model->addNewUser($userInfo);
             $flag = 0;
             $availFreeSubscription = false;
             if($result > 0)
             {            
                if($roleId == 2 || $roleId == 3){
                    $subscriptionInfo = $this->subscription_model->getsubscriptionInfo($subscription_id);

                    foreach ($subscriptionInfo as $uf){
                        $subscriptionId = $uf->id;
                        $productLimit   = $uf->productLimit;
                        $price          = $uf->price; 
                    }

		    //Check for first 50 users
                    $userData = $this->user_model->getDashboardData();
                    
                    if($roleId == 2 && $userData['total_designer_cnt'] <= 50 && $productLimit == 20){
                        $availFreeSubscription = true;
                    }
                    
                    if($roleId == 3 && $userData['total_boutique_cnt'] <= 50 && $productLimit == 20){
                        $availFreeSubscription = true;
                    }

		    if($availFreeSubscription == false){
                    
                     $order_id = mt_rand(100000, 999999)+rand();
                    
                     $_POST['order_id']      = $order_id;
                     $_POST['amount']        = intval($subscriptionInfo[0]->price);
                     $_POST['currency']      = 'INR';
                     $_POST['redirect_url']  = base_url()."successfultransaction";
                     $_POST['cancel_url']    = base_url()."canceltransaction";
                     $_POST['language']      = "en";
                     $_POST['billing_name']  = $name;
                     $_POST['billing_email'] = $email;
                     $_POST['merchant_id']   = MERCHANT_ID;
                     set_cookie('subscription_id_p', $subscriptionId,'3600');
                     set_cookie('user_id_p', $result,'3600');
                     set_cookie('plimit', $productLimit, 3600);
            
                     $this->load->view('initiattransaction');
                    
                    }else{
			//Create dummy products for free subscription user.
			$this->product_model->insertDummyProducts($result, $productLimit);
		    }
                }   
                $detail["subject"] = "Email verification";
                $detail["email"]  = $email;
                
                $link = base_url().'confirmemail/'.md5($email);
                
                if($roleId == 2 || $roleId == 3){
                    if($availFreeSubscription == true){
			 $detail["message"] = $message = "Booyaa!<br>Welcome aboard.<br>Thank you for signing up on Fashion Found. Your account has been created & your account is eligible for free subscription for 1 month.<br>It will be activated within 24 hours once we review your profile, plan chosen and the payment done.<br>Visit be low link to verify your email address<br><br>
                        <a href= $link >Verify email</a><br><br>Thank You<br> Fashion Found";
		    }else{
                    	$detail["message"] = $message = "Booyaa!<br>Welcome aboard.<br>Thank you for signing up on Fashion Found. Your account has been created.<br>It will be activated within 24 hours once we review your profile, plan chosen and the payment done.<br>Visit be   low link to verify your email address<br><br>
                        <a href= $link >Verify email</a><br><br>Thank You<br> Fashion Found";
		    }
                }else{
                    $detail["message"] = $message = "Hello!<br><br>You are almost ready to start exploring the fashion world. Simply visit the below link to verify your email address.<br><br>
                    <a href= $link >Verify email</a><br><br>Thank You<br> Fashion Found";    
                }
                
                    
                sendNotificationMail($detail);
                $this->session->set_flashdata('success', 'Registeration done successfully');
                 
                $flag = 1;
                
            }
            else{
                $this->session->set_flashdata('error', 'Oops something wrong happend, Please try again!!!');
                $flag = 2;    
            }
            
            echo $flag;
         }
     }
     
    function confirmEmail($hashcode){
        if($this->vendor_model->verifyEmail($hashcode)){
            $this->session->set_flashdata('verify', '<div class="alert alert-success text-center">Email address is confirmed. Please login to the system</div>');
            redirect('/thankyou');
        }else{
            $this->session->set_flashdata('verify', '<div class="alert alert-danger text-center">Email address is not confirmed. Please try to re-register.</div>');
            redirect('/index');
        }
    }
    
    function thankYou(){
        $this->data['pageTitle'] = 'FashionFound : Thank you';
        $this->data['heading']='';
        $this->data['heading1']='Thank you';
        $this->data['heading2']='Here we are to style you up!';
        $this->load->view("site_front/thankyou");
    }
    
    function orders(){
    	$userId = $this->session->userdata('userId');
    	
    // 	if(!$this->data['loggedIn']){
    //         redirect('/login-register'); 
    //     }
    	
        $this->data['pageTitle'] = 'FashionFound : Orders';
        $this->data['heading1']='Orders';
        $this->data['login1']='false';
        $this->data['isVendorAdmin'] = true;
        $this->data['profileStatus'] = $this->vendor_model->getProfileStatus($userId);
        $this->data['active_flag'] = 'order';
        $this->data['orders'] = $this->vendor_model->getOrdersById($userId, $this->data['role']);
        $this->data['topup_modal'] = $this->load->view('includes/topup_modal', $this->data, NULL, TRUE);
        $this->loadOtherViews("site_front/orders", $this->data, NULL , NULL);
    }
    
    function orderHistory(){
    	$userId = $this->session->userdata('userId');
    	
		if(!$this->data['loggedIn']){
            redirect('/login-register');
        }
        
        $this->data['pageTitle'] = 'FashionFound : Order History';
        $this->data['heading1']='Order History';
        $this->data['login1']='false';
        $this->data['isVendorAdmin'] = true;
        $this->data['profileStatus'] = $this->vendor_model->getProfileStatus($userId);
        $this->data['active_flag'] = 'order-history';
        $this->data['orders'] = $this->vendor_model->getOrderHistoryById($userId, $this->data['role']);
        $this->data['topup_modal'] = $this->load->view('includes/topup_modal', $this->data, NULL, TRUE);
        $this->loadOtherViews("site_front/order_history", $this->data, NULL , NULL);
    }
    
    function profile(){
        
        $this->data['pageTitle'] = 'FashionFound : Profile';
        $this->data['heading1']='Profile';
        $this->data['login1']='false';
        $this->data['isVendorAdmin'] = true;
        $this->data['active_flag'] = 'profile';
        
        $isLoggedIn = $this->session->userdata('isLoggedIn');
        $userId = $this->session->userdata('userId');
        $role = $this->session->userdata('role');
        $this->data['isVendorAdmin'] = true;
        $this->data['active_flag'] = 'profile';
        $this->data['val']=$this->vendor_model->getVendorInfo($userId);
        $this->data['profileStatus'] = $this->vendor_model->getProfileStatus($userId);
        $this->data['topup_modal'] = $this->load->view('includes/topup_modal', $this->data, NULL, TRUE);
        $this->loadOtherViews("site_front/user_profile", $this->data, NULL , NULL);
    }

    function editProfile(){

        $name = $this->input->post('name');
        $password = $this->input->post('cpassword');
        $mobile = $this->input->post('mobile');
        $address = $this->input->post('address');
        $userId = $this->input->post('userId');

        $newInfo = array('password'=>getHashedPassword($password), 'name'=> $name,'mobile'=>$mobile,'address'=>$address, 'createdBy'=>123/*$this->vendorId*/, 'createdDtm'=>date('Y-m-d H:i:s'));
        $result = $this->user_model->updateInfo($userId, $newInfo);
        
        if($result > 0)
        {
            echo "<script> alert('Failed !!!!')</script>";
        }
        else
        {
            echo "<script> alert('New Information added !!!!')</script>";
        }
    }    


    public function vendorHome(){
        
        $isLoggedIn = $this->session->userdata('isLoggedIn');
        $userId = $this->session->userdata('userId');
        $role = $this->session->userdata('role');
        $this->data['isVendorAdmin'] = true;
        
        if($isLoggedIn  && ($role == 2 || $role == 3)){
            
            $this->data['val']=$this->vendor_model->getVendorInfo($userId);
            
            $subscriptionDate = $this->vendor_model->getSubscriptionReminder($userId);
            
            if($subscriptionDate){
                
                $flag = 0;
                $todayDate = date('Y-m-d H:i:s');
                
                $formatTodayDate = new DateTime($todayDate);
                
                $formatSubscriptionDate = new DateTime($subscriptionDate);
                $diff = $formatSubscriptionDate->diff($formatTodayDate)->format("%a");
                
                
                if($diff >= 25){
                    $this->data['subscriptionNotification'] = $this->load->view('includes/subscription_reminder', $this->data, NULL, TRUE);
                }
            }
            $this->data['pageTitle'] = 'FashionFound : Admin';
            $this->data['heading']='vendorInfo';
            $this->data['heading2'] = "We make sure to keep our store update with the latest trends and keep our customers happy";
            $this->data['login1']='false';
            $this->data['active_flag'] = 'home';
            $this->data['topup_modal'] = $this->load->view('includes/topup_modal', $this->data, NULL, TRUE);
            $this->loadOtherViews("site_front/designer", $this->data, NULL , NULL);
            
        } else if( $isLoggedIn  && $role == 4 ){
            $this->data['orders']=$this->vendor_model->getOrderHistoryById($userId, $role);
            $this->data['pageTitle'] = 'FashionFound : My Orders';
            $this->data['heading1']='Order History';
            $this->data['login1']='false';
            $this->data['active_flag'] = 'order-history';
            $this->loadOtherViews("site_front/order_history", $this->data, NULL , NULL);
            
        }else{
            redirect('login-register');
        }
    }

    
    public function feedback()
    {
        $email =  $this->input->post('email');
        $name  =  $this->input->post('name');
        $msg   =  $this->input->post('msg');
    
        //Email for vendor(designer/boutique)
        $detail["subject"] = "New enquiry at Fashion Found";
        $detail["email"]  = ADMIN_MAIL;
        $detail["message"] = "Dear Admin,<br><br> You got new enquiry.<br><br>
            Name    : $name <br>
            Email   : $email<br>
            Message : <br>$msg
            <br><br>Thanks<br><br>Team Fashion Found";
            
        sendNotificationMail($detail);
        
        echo true;
      
    }
    
    function ajax_upload()
    {
        if(isset($_FILES["image_file"]["name"]))
        {
            $config['upload_path'] = './upload/';
            $config['allowed_types'] = 'jpg|jpeg|png|gif';
            $this->load->library('upload', $config);
            if(!$this->upload->do_upload('image_file'))
            {
                echo $this->upload->display_errors();
            }
            else
            {
                $data = $this->upload->data();
                echo '<img src="'.base_url().'upload/'.$data["file_name"].'" width="300" height="225" class="img-thumbnail" />';
            }
        }
    }

    public function newProductInfo()
    {
        $p_name=$this->input->post('p_name');
        $desc  =$this->input->post('desc');
        $size  =$this->input->post('size');
        $color  =$this->input->post('color');
        $fabric  =$this->input->post('fabric');
        $style  =$this->input->post('style');
        $onel  =$this->input->post('onel');
        $price =$this->input->post('price');
        $userId=$this->input->post('userId');
        $productId=$this->input->post('id');
        //print_r($productId);

        $config['upload_path']          = './upload/';
        $config['allowed_types']        = 'gif|jpg|png';
        $config['max_size']             = 1000;
        /*$config['max_width']            = 1024;
        $config['max_height']           = 768;*/

        $this->load->library('upload', $config);

        if ( ! $this->upload->do_upload('userfile'))
        {
            $error = array('error' => $this->upload->display_errors());
            echo "unsuccessfully";print_r($error);
                    //$this->load->view('upload_form', $error);
        }
        else
        {
           $imageDetailArray = $this->upload->data();
           $image_name =  $imageDetailArray['file_name'];    
                
           if ($productId>0) {
               //UPDATE
                $productInfo =array('name'=>$p_name,'description'=>$desc,'size'=>$size,'color'=>$color,'fabric'=>$fabric,'style'=>$style,'onelinertxt'=>$onel,'price'=>$price,'images'=>'/upload/'.$image_name,'createdBy'=>123, 'createdDtm'=>date('Y-m-d H:i:s'),'userId'=>$userId,'id'=>$productId);
               $result= $this->product_model->updateProduct($productInfo);
           }else{
                //CREATE
                $productInfo =array('name'=>$p_name,'description'=>$desc,'size'=>$size,'color'=>$color,'fabric'=>$fabric,'style'=>$style,'onelinertxt'=>$onel,'price'=>$price,'images'=>'/upload/'.$image_name,'createdBy'=>123, 'createdDtm'=>date('Y-m-d H:i:s'),'userId'=>$userId);  
                //print_r($productId);exit();
                $result = $this->product_model->addNewProduct($productInfo);  
           }
           
           if($result > 0)
            {
                //echo "<script type= 'text/javascript'> alert('New Product Added successfully')</script>";
                echo json_encode(array('images'=>'/upload/'.$image_name,'product_id'=>$result));
            }
        else
        {
            echo "<script type= 'text/javascript'> alert('Uploading failed')</script>";
        }
    }
}

  

    public function vendorListing(){
        
        $searchText = $this->input->post('srch-term');
        $category   = $this->input->post('filter');
        $userType   = 'all';
        
        if(!empty($category) && ($category == "designer" || $category == "boutique")){
            $userType = $category;
            $this->data['filter'] = $userType;
            $this->data['type']   = $userType;
        }
        
        // var_dump($userType); die;
        $this->data['searchText'] = $searchText;
        
        
        
        $vendorList = $this->vendor_model->vendorListing($searchText, $userType);
        
        $vendorArray = array();
        foreach($vendorList as $vendor){
         
            $productList = $this->vendor_model->productsByVendor($vendor->userId);
            
            $totalProducts = count($productList);
            $productArray = array();
            for($i=0; $i<=2; $i++){
                
                $productArray[] = $productList[$i];
            }
            
            $productArray['total_products'] = $totalProducts;
            $productArray['name'] = $vendor->name;
            $productArray['brandName'] = $vendor->brandName;
            $productArray['logo']      = $vendor->logo;
            $vendorArray[$vendor->userId] = $productArray;
        }
        
        $this->data['designerList'] = $vendorArray;
        $this->data['pageTitle'] = 'FashionFound : Products';
        $this->data['heading']='Search Result';
        $this->data['heading1']='Search Result';
        $this->data['heading2']='';
        $this->data['login1']='';
        $this->loadProductViews("site_front/vendors", $this->data, NULL , NULL);
          

    }
    
    function loginRegister(){
        
        $this->data['vendorId']  = $this->input->get('vendor');
        $this->data['productId'] = $this->input->get('product');
        $this->data['referer']   = $this->input->get('referer');
        
        $this->data['success'] = $this->input->get('result');
        $this->data['signup'] = $this->input->get('signup');

        
        //echo $this->input->get('vendor'); die;
        // if($referer !== '')
        //     $this->data['referer'] = $referer;
            
        $this->data['pageTitle'] = 'FashionFound : Sing In/Sign Up';
        $this->data['heading']='login';
        $this->data['heading1']='Connect with Us';
        $this->data['heading2']='Here we are to style you up!';
        $this->data['login1']='true';
        
        $this->loadOtherviews("site_front/register", $this->data, NULL , NULL);
    }
    
    function forgotPassword(){
        $this->data['pageTitle'] = 'FashionFound : Forgot Password';
        $this->data['heading']='login';
        $this->data['heading1']='Forgot Password';
        $this->data['heading2']='Here we are to style you up!';
        $this->data['login1']='true';
        
        $this->loadOtherviews("site_front/forgot_password", $this->data, NULL , NULL);
    }
    
    function productBooking(){
        
        $productId = $this->input->post('productId');
        $vendorId  = $this->input->post('vendorId');
        $userId    = $this->input->post('userId');
        $size      = $this->input->post('size');
        
        $role = $this->session->userdata('role');
        
        if($role == 2 || $role == 3){
            echo "invalid_login";
            return;
        }
        
        $result = $this->vendor_model->productBooking($productId, $userId, $size);
        
        if($result > 0 || $result != false){
            
            // $getBookingDetails = $this->vendor_model->getProductById1($productId);
            $userInfo = $this->vendor_model->getEmailNameById($userId);
            $vendorInfo = $this->vendor_model->getEmailNameById($vendorId);
            
            //Email for end customer
            $detail["subject"] = "Order confirmation";
            $detail["email"]  = $userInfo->email;
            $detail["message"] = "Hello!<br>Thank you for booking our products.<br>Following are the details of your bookings:<br><br>Owner Name : $vendorInfo->name<br>Brand Name : $vendorInfo->brandName<br>Address : $vendorInfo->address<br>Phone Number : $vendorInfo->mobile
                <br><br>Stay tuned and get styled with us.<br>Thank You<br><br>Fashion Found.";
            sendNotificationMail($detail);
                
            //Email for vendor(designer/boutique)
            $detail["subject"] = "New Order";
            $detail["email"]  = $vendorInfo->email;
            $detail["message"] = "Hello!<br>People are loving you, here what you have got today.<br>Following are the details of your order:<br><br>Customer Name : $userInfo->name<br>Phone Number : $userInfo->mobile<br>Prodcut ID link:
                <br><br>Thank Your<br>Fashion Found.";
                
            sendNotificationMail($detail);
            
            //Email for vendor(designer/boutique)
            $detail["subject"] = "New Order for vendor $vendorInfo->name";
            $detail["email"]  = ADMIN_MAIL;
            $detail["message"] = "Dear Admin,<br><br> Vendor $vendorInfo->name have received new order on Fashion Found.<br><br>
                <br><br>Thanks<br><br>Team Fashion Found";
                
            sendNotificationMail($detail);
            
        }
        
        echo $result;
    }
    
    function profileUpdate(){
        
        $name = $this->input->post('name');
        $brandName = $this->input->post('brandName');
        //$email = $this->input->post('email');
        $gender = $this->input->post('gender');
        $password = $this->input->post('cpassword');
        $mobile = $this->input->post('mobile');
        $address = $this->input->post('address');
        $bio = $this->input->post('bio');
        $specialization = $this->input->post('specialization');
        $userId = $this->session->userdata('userId');
        $i_array = array();
        $p_array = array();
        $config['upload_path']          = './upload/';
        $config['allowed_types']        = 'gif|jpg|png';
        /*$config['max_size']             = 1000;
        $config['max_width']            = 1024;
        $config['max_height']           = 768;*/

        $this->load->library('upload', $config);
        $profileStatus= $this->vendor_model->getProfileStatus($userId);
        if ($this->upload->do_upload('logo'))
        {
            $imageDetailArray = $this->upload->data();
            $image_name =  $imageDetailArray['file_name'];
            $thubnail_name = $this->do_resize($image_name);
            $i_array = array('logo' => '/upload/'.$image_name);
        }
        
        if($password != ''){
            $p_array = array('password'=>getHashedPassword($password));
        }
        $newInfo = array('name'=> $name, 'brandName' => $brandName, 'mobile'=>$mobile,'address'=>$address, 'bio' => $bio, 'specialization' => $specialization, 'updatedBy'=>$userId, 'updatedDtm'=>date('Y-m-d H:i:s'));
        
        $tempArr = array_merge($i_array, $p_array);
        $info = array_merge($newInfo, $tempArr);
        
        $result = $this->user_model->updateInfo($userId, $info);
        
        if($result > 0)
        {
            if(!$profileStatus){
                $this->user_model->updateProfileStatus($userId);
                redirect('/site/vendoradmin');
            }else{
                redirect('/profile');
            }
        }
    }
    
    function contactUs(){
        
        $this->data['pageTitle'] = 'FashionFound : Contact Us';
        $this->data['heading']='login';
        $this->data['heading1']='Connect with Us';
        $this->data['login1']='true';
        
        $this->loadOtherviews("site_front/contact_us", $this->data, NULL , NULL);
    }
    
    function upgrade(){
        
        $subscription_id = $this->input->post('subscription_id');
        //Get subscription info on the basis of selected package. 
        $subscriptionInfo = $this->subscription_model->getsubscriptionInfo($subscription_id);

        foreach ($subscriptionInfo as $uf){
            $subscriptionId = $uf->id;
            $productLimit   = $uf->productLimit;
            $price          = $uf->price; 
        }

        //This will create dummy products for user.
        $this->product_model->insertDummyProducts($result, $productLimit);
    }
    
    function reviewRating(){
        
        $review = $this->input->post('review');
        $rating = $this->input->post('rating');
        $vendorId = $this->input->post('vid');
        $userId = $this->session->userdata('userId');
        
        if($this->data['loggedIn']){
            $insertString = array('review' => $review, 'rating' => $rating, 'vendorId' => $vendorId, 'createdBy'=>$userId, 'createdDtm'=>date('Y-m-d H:i:s'));
            $result       = $this->vendor_model->insertReviewRating($insertString);
            echo $result;
        }else{
            echo false;
        }
    }
    
    function successfulTransaction(){
  
    	$this->data['pageTitle'] = 'Thank you,transaction successful';
        $this->data['heading']='login';
        $this->data['heading1']='';
        $this->data['login1']='true';
        
        $workingKey='E1DD3BFD0EB8D57F75427421C313C0EB';		//Working Key should be provided here.
    	$encResponse=$_POST["encResp"];
    				//This is the response sent by the CCAvenue Server
    	$rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.

    	$this->data['order_status'] = "";
    	$decryptValues              = explode('&', $rcvdString);
    	$dataSize                   = sizeof($decryptValues);
    	$responseArray              = array();
    	
    	for($i = 0; $i < $dataSize; $i++) 
    	{
    		$information=explode('=',$decryptValues[$i]);
    		$responseArray[$information[0]] = $information[1];
    		
    		if($i==3)	$this->data['order_status']=$information[1];
    		
    	}
    	
	$subscription_id = get_cookie('subscription_id_p');
        $user_id         = get_cookie('user_id_p');
        $plimit          = get_cookie('plimit');

        
        $transactionData = array('userId'=> $user_id, 'subscriptionId'=> $subscription_id, 'orderId' => $responseArray['order_id'], 'trackingId' => $responseArray['tracking_id'], 'bankRefNo' => $responseArray['bank_ref_no'], 'amount' => intval($responseArray['amount']), 'orderStatus' => $responseArray['order_status'], 'paymentMode' => $responseArray['payment_mode'], 'createdBy'=>123, 'createdDtm'=>date('Y-m-d H:i:s'));
        
        //Store transaction data into DB
        $this->user_model->insertTransactionData($transactionData);
       
        if($this->data['order_status'] == "Success"){
            $this->product_model->insertDummyProducts($user_id, $plimit);
        }else{
           redirect('/canceltransaction');
	}
 
        //Remove cookie 
        delete_cookie('subscription_id_p');
        delete_cookie('user_id_p');
        delete_cookie('plimit');
 
        $this->loadOtherviews("site_front/transactionsuccess", $this->data, NULL , NULL);
    }
    
    function cancelTransaction(){
    	
    	$this->data['pageTitle'] = 'Oops, Payment cancel/failure';
        $this->data['heading']='login';
        $this->data['heading1']='Payment failure';
        $this->data['login1']='true';
        
        $this->loadOtherviews("site_front/transactioncancel", $this->data, NULL , NULL);
    }
    
    function topUpPurchase(){
        
        $price    = $this->input->post('price');
        $pslot    = $this->input->post('pslot');
        $order_id = mt_rand(100000, 999999)+rand();
        $user_id  = $this->session->userdata('userId');
        if($pslot > 50 || $price > 2500){
            redirect('site/vendoradmin');
        }

        $_POST['order_id']      = $order_id;
        $_POST['amount']        = intval($price);
        $_POST['currency']      = 'INR';
        $_POST['redirect_url']  = base_url()."successfultransaction";
        $_POST['cancel_url']    = base_url()."canceltransaction";
        $_POST['language']      = "en";
        $_POST['billing_name']  = $name;
        $_POST['billing_email'] = $email;
        $_POST['merchant_id']   = MERCHANT_ID;
        
        set_cookie('subscription_id_p', 0, 3600);
        set_cookie('user_id_p', $user_id, 3600);
        set_cookie('plimit', $pslot, 3600);
        
        $this->load->view('initiattransaction');
    }
    
    function upgradeSubscription(){
        
        $subscriptionId    = $this->input->post('subId');
        $order_id          = mt_rand(100000, 999999)+rand();
        $user_id           = $this->session->userdata('userId');
        $subscriptionInfo = $this->subscription_model->getsubscriptionInfo($subscriptionId);

        foreach ($subscriptionInfo as $uf){
            $subscriptionId = $uf->id;
            $productLimit   = $uf->productLimit;
            $price          = $uf->price; 
        }
        
        $_POST['order_id']      = $order_id;
        $_POST['amount']        = intval($price);
        $_POST['currency']      = 'INR';
        $_POST['redirect_url']  = base_url()."successfultransaction";
        $_POST['cancel_url']    = base_url()."canceltransaction";
        $_POST['language']      = "en";
        $_POST['billing_name']  = $name;
        $_POST['billing_email'] = $email;
        $_POST['merchant_id']   = MERCHANT_ID;
        
        set_cookie('subscription_id_p', $subscriptionId, 3600);
        set_cookie('user_id_p', $user_id, 3600);
        set_cookie('plimit', $productLimit, 3600);
        
        $this->load->view('initiattransaction');
    }
    
    function commingSoon(){
        $this->data['pageTitle'] = 'FashionFound : Make & Artist comming soon';
        $this->data['heading']='login';
        $this->data['heading1']='Comming soon';
        $this->data['login1']='true';

        $this->loadOtherviews("site_front/comming_soon.php", $this->data, NULL , NULL);
    } 
    public function encrypt($plainText,$key)
	{
		$secretKey = $this->hextobin(md5($key));
		
		$initVector = pack("C*", 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f);
	  	$openMode = mcrypt_module_open(MCRYPT_RIJNDAEL_128, '','cbc', '');
	  	$blockSize = mcrypt_get_block_size(MCRYPT_RIJNDAEL_128, 'cbc');
		$plainPad = pkcs5_pad($plainText, $blockSize);
	  	if (mcrypt_generic_init($openMode, $secretKey, $initVector) != -1) 
		{
		      $encryptedText = mcrypt_generic($openMode, $plainPad);
	      	      mcrypt_generic_deinit($openMode);
		      			
		}
		return bin2hex($encryptedText);
	}

	public function decrypt($encryptedText,$key)
	{
		$secretKey = $this->hextobin(md5($key));
		$initVector = pack("C*", 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f);
		$encryptedText=$this->hextobin($encryptedText);
	  	$openMode = mcrypt_module_open(MCRYPT_RIJNDAEL_128, '','cbc', '');
		mcrypt_generic_init($openMode, $secretKey, $initVector);
		$decryptedText = mdecrypt_generic($openMode, $encryptedText);
		$decryptedText = rtrim($decryptedText, "\0");
	 	mcrypt_generic_deinit($openMode);
		return $decryptedText;
		
	}
	//*********** Padding Function *********************

	 function pkcs5_pad ($plainText, $blockSize)
	{
	    $pad = $blockSize - (strlen($plainText) % $blockSize);
	    return $plainText . str_repeat(chr($pad), $pad);
	}

	//********** Hexadecimal to Binary function for php 4.0 version ********

	public function hextobin($hexString) 
    { 
    	$length = strlen($hexString); 
    	$binString="";   
    	$count=0; 
    	while($count<$length) 
    	{       
    	    $subString =substr($hexString,$count,2);           
    	    $packedString = pack("H*",$subString); 
            if ($count==0)
            {
        		$binString=$packedString;
            } 
        	    
            else 
            {
        		$binString.=$packedString;
            } 
        	    
            $count+=2; 
    	} 
        return $binString; 
    }

    public function termsAndConditions(){
        $this->data['pageTitle'] = 'FashionFound : Terms & Conditions';
        $this->data['heading']='';
        $this->data['heading1']='TERMS & CONDITIONS';
        $this->data['heading2']='';
        $this->data['login1']='';

        $pageInfo = $this->site_model->getPageInfo(2);
        $this->data['page_content'] = $pageInfo[0]->content;

        $this->loadOtherViews("site_front/aboutus", $this->data, NULL , NULL);
      }    
}
