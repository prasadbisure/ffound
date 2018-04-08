<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';

/**
 * Class : User (UserController)
 * User Class to control all user related operations.
 * @author : Rohan Chaudhari
 * @version : 1.1
 */
class User extends BaseController
{
    /**
     * This is default constructor of the class
     */
    public function __construct()
    {
        parent::__construct();
        $this->load->model('user_model');
        //$this->isLoggedIn();   
    }
    
    /**
     * This function used to load the first screen of the user
     */
    public function index()
    {
        $this->isLoggedIn();   
        $data['pageTitle'] = 'FashionFound : Dashboard';
        if($this->isAdmin() == TRUE)
        {
            $this->loadThis();
        }
        else
        {
            
            $this->global['dashboard_data'] = $this->user_model->getDashboardData();
        
            $this->loadViews("dashboard", $this->global, NULL , NULL);
        }
    }
    
    /**
     * This function is used to load the user list
     */
    function userListing()
    {
        $this->isLoggedIn();   
        if($this->isAdmin() == TRUE)
        {
            $this->loadThis();
        }
        else
        {
            $this->load->model('user_model');
        
            $searchText = $this->input->post('searchText');
            $data['searchText'] = $searchText;
            $userType = $this->input->get('type');
            
            $this->load->library('pagination');
            // $config['reuse_query_string'] = true;
            // $config['page_query_string'] = true;
            $config['suffix'] = "?type=$userType";
            $this->pagination->initialize($config);
            
            $count = $this->user_model->userListingCount($searchText, $userType);

			$returns = $this->paginationCompress ( "userListing/", $count, 5 );
            
            $data['userRecords'] = $this->user_model->userListing($searchText, $returns["page"], $returns["segment"], $userType);
            
            $data['type'] = $userType;
            $this->global['pageTitle'] = 'FashionFound : User Listing';
            
            $this->loadViews("users", $this->global, $data, NULL);
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
            $this->load->model('user_model');
            $data['roles'] = $this->user_model->getUserRoles();
            
            $this->global['pageTitle'] = 'FashionFound : Add New User';

            $this->loadViews("addNew", $this->global, $data, NULL);
        }
    }
    
    /**
	 * This function is used to logged out user from system
	 */
	function logout() {
	    $user_data = $this->session->all_userdata();
	    
        foreach ($user_data as $key => $value) {
            if ($key != 'session_id' && $key != 'ip_address' && $key != 'user_agent' && $key != 'last_activity') {
                $this->session->unset_userdata($key);
            }
        }
        
	    header ("Expires: ".gmdate("D, d M Y H:i:s", time())." GMT");  
        header ("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");  
        header ("Cache-Control: no-cache, must-revalidate");  
        header ("Pragma: no-cache");
        $this->session->sess_destroy();
		redirect ( 'login-register' );
	}

    /**
     * This function is used to check whether email already exist or not
     */
    function checkEmailExists()
    {
        $userId = $this->input->post("userId");
        $email = $this->input->post("email");

        if(empty($userId)){
            $result = $this->user_model->checkEmailExists($email);
        } else {
            $result = $this->user_model->checkEmailExists($email, $userId);
        }

        if(empty($result)){ echo("true"); }
        else { echo("false"); }
    }
    
    /**
     * This function is used to add new user to the system
     */
    function addNewUser()
    {
        $this->isLoggedIn();   
        if($this->isAdmin() == TRUE)
        {
            $this->loadThis();
        }
        else
        {
            $this->load->library('form_validation');
            
            $this->form_validation->set_rules('fname','Full Name','trim|required|max_length[128]|xss_clean');
            $this->form_validation->set_rules('email','Email','trim|required|valid_email|xss_clean|max_length[128]');
            $this->form_validation->set_rules('password','Password','required|max_length[20]');
            $this->form_validation->set_rules('cpassword','Confirm Password','trim|required|matches[password]|max_length[20]');
            $this->form_validation->set_rules('role','Role','trim|required|numeric');
            $this->form_validation->set_rules('mobile','Mobile Number','required|min_length[10]|xss_clean');
            
            if($this->form_validation->run() == FALSE)
            {
                $this->addNew();
            }
            else
            {
                $name = ucwords(strtolower($this->input->post('fname')));
                $email = $this->input->post('email');
                $password = $this->input->post('password');
                $roleId = $this->input->post('role');
                $mobile = $this->input->post('mobile');
                
                $userInfo = array('email'=>$email, 'password'=>getHashedPassword($password), 'roleId'=>$roleId, 'name'=> $name,
                                    'mobile'=>$mobile, 'createdBy'=>$this->vendorId, 'createdDtm'=>date('Y-m-d H:i:s'));
                
                $this->load->model('user_model');
                $result = $this->user_model->addNewUser($userInfo);
                
                if($result > 0)
                {
                    $this->session->set_flashdata('success', 'New User created successfully');
                }
                else
                {
                    $this->session->set_flashdata('error', 'User creation failed');
                }
                
                redirect('addNew');
            }
        }
    }

    
    /**
     * This function is used load user edit information
     * @param number $userId : Optional : This is user id
     */
    function editOld($userId = NULL)
    {
        $this->isLoggedIn();   
        if($this->isAdmin() == TRUE || $userId == 1)
        {
            $this->loadThis();
        }
        else
        {
            
            //$userId =  $this->uri->segment(3);
            //$roleType =  $this->uri->segment(4);

            if($userId == null)
            {
                redirect('userListing');
            }
            
            
            $data['roles'] = $this->user_model->getUserRoles();
            $data['userInfo'] = $this->user_model->getUserInfo($userId);
//            echo "<pre>";
//            print_r($data['userInfo']);
//            exit;
            $this->global['pageTitle'] = 'FashionFound : Edit User';
            
            $this->loadViews("editOld", $this->global, $data, NULL);



        }
    }
    
    
    /**
     * This function is used to edit the user information
     */
    function editUser()
    {
        $this->isLoggedIn();
        if($this->isAdmin() == TRUE)
        {
            $this->loadThis();
        }
        else
        {
            $this->load->library('form_validation');
            
            $userId = $this->input->post('userId');
            
            $this->form_validation->set_rules('fname','Full Name','trim|required|max_length[128]|xss_clean');
            $this->form_validation->set_rules('email','Email','trim|required|valid_email|xss_clean|max_length[128]');
            $this->form_validation->set_rules('password','Password','matches[cpassword]|max_length[20]');
            $this->form_validation->set_rules('cpassword','Confirm Password','matches[password]|max_length[20]');
            $this->form_validation->set_rules('role','Role','trim|required|numeric');
            $this->form_validation->set_rules('mobile','Mobile Number','required|min_length[10]|xss_clean');
            
            if($this->form_validation->run() == FALSE)
            {
                $this->editOld($userId);
            }
            else
            {
                $name = ucwords(strtolower($this->input->post('fname')));
                $email = $this->input->post('email');
                $password = $this->input->post('password');
                $roleId = $this->input->post('role');
                $mobile = $this->input->post('mobile');
                $profile_pic_status = $this->input->post('profile_pic_status');

                
                $userInfo = array();
                
                if(empty($password))
                {
                    $userInfo = array('email'=>$email, 'roleId'=>$roleId, 'name'=>$name,
                                    'mobile'=>$mobile, 'profile_pic_status'=>$profile_pic_status, 'updatedBy'=>$this->vendorId, 'updatedDtm'=>date('Y-m-d H:i:s'));
                }
                else
                {
                    $userInfo = array('email'=>$email, 'password'=>getHashedPassword($password), 'roleId'=>$roleId,
                        'name'=>ucwords($name), 'mobile'=>$mobile, 'profile_pic_status'=>$profile_pic_status, 'updatedBy'=>$this->vendorId,
                        'updatedDtm'=>date('Y-m-d H:i:s'));
                }
                
                $result = $this->user_model->editUser($userInfo, $userId);
                
                if($result == true)
                {
                    $this->session->set_flashdata('success', 'User updated successfully');
                }
                else
                {
                    $this->session->set_flashdata('error', 'User updation failed');
                }
                
                redirect('userListing');
            }
        }
    }

    function uploadUserProfilepic(){
//        echo "<pre>";
//        print_r($_FILES);
//       exit;

        $config['upload_path']          = './upload/profile_pics';
        $config['allowed_types']        = 'gif|jpg|png|jpeg';
        $this->load->library('upload', $config);

        if (!is_dir('./upload/profile_pics')) {
            mkdir('./upload/profile_pics', 0777, TRUE);

        }

        if ($this->upload->do_upload('profile_pic')){
            $data = array('upload_data' => $this->upload->data());
            $path = 'upload/profile_pics/'.$data['upload_data']['file_name'];
            $userInfo = array('profile_pic'=>$path);

            $result = $this->user_model->editprofilepic($userInfo, $_POST['profile_userId']);

            if($result==true){
                echo base_url().$path;  
            }

            //echo "<pre>";
            //print_r($data);

        }else{
            $error = array('error' => $this->upload->display_errors());
            echo "<pre>";
            print_r($error);

        }



    }


    /**
     * This function is used to delete the user using userId
     * @return boolean $result : TRUE / FALSE
     */
    function deleteUser()
    {
        $this->isLoggedIn();   
        if($this->isAdmin() == TRUE)
        {
            echo(json_encode(array('status'=>'access')));
        }
        else
        {
            $userId = $this->input->post('userId');
            $userInfo = array('isDeleted'=>1,'updatedBy'=>$this->vendorId, 'updatedDtm'=>date('Y-m-d H:i:s'));
            
            $result = $this->user_model->deleteUser($userId, $userInfo);
            
            if ($result > 0) { echo(json_encode(array('status'=>TRUE))); }
            else { echo(json_encode(array('status'=>FALSE))); }
        }
    }
    
    /**
     * This function is used to load the change password screen
     */
    function loadChangePass()
    {
        $this->isLoggedIn();   
        $this->global['pageTitle'] = 'FashionFound : Change Password';
        
        $this->loadViews("changePassword", $this->global, NULL, NULL);
    }
    
    
    /**
     * This function is used to change the password of the user
     */
    function changePassword()
    {
        $this->isLoggedIn();   
        $this->load->library('form_validation');
        
        $this->form_validation->set_rules('oldPassword','Old password','required|max_length[20]');
        $this->form_validation->set_rules('newPassword','New password','required|max_length[20]');
        $this->form_validation->set_rules('cNewPassword','Confirm new password','required|matches[newPassword]|max_length[20]');
        
        if($this->form_validation->run() == FALSE)
        {
            $this->loadChangePass();
        }
        else
        {
            $oldPassword = $this->input->post('oldPassword');
            $newPassword = $this->input->post('newPassword');
            
            $resultPas = $this->user_model->matchOldPassword($this->vendorId, $oldPassword);
            
            if(empty($resultPas))
            {
                $this->session->set_flashdata('nomatch', 'Your old password not correct');
                redirect('loadChangePass');
            }
            else
            {
                $usersData = array('password'=>getHashedPassword($newPassword), 'updatedBy'=>$this->vendorId,
                                'updatedDtm'=>date('Y-m-d H:i:s'));
                
                $result = $this->user_model->changePassword($this->vendorId, $usersData);
                
                if($result > 0) { $this->session->set_flashdata('success', 'Password updation successful'); }
                else { $this->session->set_flashdata('error', 'Password updation failed'); }
                
                redirect('loadChangePass');
            }
        }
    }

    function pageNotFound()
    {
        
        $this->global['pageTitle'] = 'FashionFound : 404 - Page Not Found';
        
        $this->loadViews("404", $this->global, NULL, NULL);
    }
    
    function changeStatus(){
        
        $id = $this->input->post('id');
        $status = $this->input->post('status');
        
        if($status == 0){
            $status = 1;
        }else{
            $status = 0;
        }
        
        $status = $this->user_model->changeStatus($id, $status);
        
        echo true;
    }
    
    function changeReviewStatus(){
        
        $id = $this->input->post('id');
        $status = $this->input->post('status');
        
        if($status == 0){
            $status = 1;
        }else{
            $status = 0;
        }
        
        $status = $this->user_model->changeReviewStatus($id, $status);
        
        echo true;
    }
    
    function reviewAndRatingListing()
    {
        $this->isLoggedIn();   
        if($this->isAdmin() == TRUE)
        {
            $this->loadThis();
        }
        else
        {
            
            $searchText = $this->input->post('searchText');
            $data['searchText'] = $searchText;
            $userType = $this->input->get('type');
            
            $this->load->library('pagination');
            
            $count = $this->user_model->reviewAndRatingListingCount($searchText, $userType);

			$returns = $this->paginationCompress ( "reviewAndRatingListing/", $count, 5 );
            
            $data['reviewRecords'] = $this->user_model->reviewAndRatingListing($searchText, $returns["page"], $returns["segment"], $userType);
            
            $data['type'] = $userType;
            $this->global['pageTitle'] = 'FashionFound : Review & Rating Listing';
            
            $this->loadViews("review_rating", $this->global, $data, NULL);
        }
    }
}

?>