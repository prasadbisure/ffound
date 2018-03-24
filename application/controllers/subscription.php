<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';

/**
 * Class : Subscription (SubscriptionController)
 * Subscription Class to control all Subscription related operations.
 * @author : Rohan Chaudhari
 * @version : 1.1
 */
class Subscription extends BaseController
{
    /**
     * This is default constructor of the class
     */
    public function __construct()
    {
        parent::__construct();
        $this->load->model('subscription_model');
        $this->isLoggedIn();   
    }
    
    /**
     * This function used to load the first screen of the Subscription
     */
    public function index()
    {
        $this->global['pageTitle'] = 'FashionFound : Dashboard';
        
        $this->loadViews("dashboard", $this->global, NULL , NULL);
    }
    
    /**
     * This function is used to load the Subscription list
     */
    function subscriptionListing()
    {
        $this->isLoggedIn();
        if($this->isAdmin() == TRUE)
        {
            $this->loadThis();
        }
        else
        {
            $this->load->model('subscription_model');
        
            $searchText = $this->input->post('searchText');
            $data['searchText'] = $searchText;
            
            $this->load->library('pagination');
            
            $count = $this->subscription_model->SubscriptionListingCount($searchText);

            // echo $count; die;
			$returns = $this->paginationCompress ( "subscriptionListing/", $count, 5 );
            
            $data['subscriptionRecords'] = $this->subscription_model->SubscriptionListing($searchText, $returns["page"], $returns["segment"]);
            
            $this->global['pageTitle'] = 'FashionFound : Subscription Listing';
            
            $this->loadViews("subscriptions", $this->global, $data, NULL);
        }
    }
    
    /**
     * This function is used to load the Subscription list
     */
    function subscriptionTopupListing()
    {
        $this->isLoggedIn();
        if($this->isAdmin() == TRUE)
        {
            $this->loadThis();
        }
        else
        {
            $this->load->model('subscription_model');
        
            $searchText = $this->input->post('searchText');
            $data['searchText'] = $searchText;
            
            $this->load->library('pagination');
            
            $count = $this->subscription_model->SubscriptionTopupListingCount($searchText);

            // echo $count; die;
			$returns = $this->paginationCompress ( "subscriptionTopupListing/", $count, 5 );
            
            $data['subscriptionRecords'] = $this->subscription_model->SubscriptionTopupListing($searchText, $returns["page"], $returns["segment"]);
            
            $this->global['pageTitle'] = 'FashionFound : Subscription Topup Listing';
            
            $this->loadViews("subscriptions_topup", $this->global, $data, NULL);
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
     * This function is used to load the add new form
     */
    function addNewTopup()
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
            $this->global['pageTitle'] = 'FashionFound : Add New Subscription Topup';

            $this->loadViews("addNewSubTopupView", $this->global, $data, NULL);
        }
    }
    
    /**
     * This function is used to add new Subscription to the system
     */
    function addNewSubscription()
    {
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
     * This function is used to add new Subscription to the system
     */
    function addNewSubscriptionTopup()
    {
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
                $result = $this->subscription_model->addNewSubscriptionTopup($SubscriptionInfo);
                
                if($result > 0)
                {
                    $this->session->set_flashdata('success', 'New Subscription Topup created successfully');
                }
                else
                {
                    $this->session->set_flashdata('error', 'Subscription Topup creation failed');
                }
                
                redirect('subscriptionTopupListing');
            }
        }
    }

    
    /**
     * This function is used load Subscription edit information
     * @param number $SubscriptionId : Optional : This is Subscription id
     */
    function editOld($SubscriptionId = NULL)
    {
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
     * This function is used load Subscription edit information
     * @param number $SubscriptionId : Optional : This is Subscription id
     */
    function editOldTopup($SubscriptionId = NULL)
    {
        if($this->isAdmin() == TRUE)
        {
            $this->loadThis();
        }
        else
        {

            if($SubscriptionId == null)
            {
                redirect('SubscriptionTopupListing');
            }
                                    
            $data['subscriptionInfo'] = $this->subscription_model->getSubscriptionTopupInfo($SubscriptionId);
            
            $this->global['pageTitle'] = 'FashionFound : Edit Subscription Topup';
            
            $this->loadViews("editOldSubscriptionTopup", $this->global, $data, NULL);
        }
    }
    
    
    /**
     * This function is used to edit the Subscription information
     */
    function editSubscription()
    {
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
     * This function is used to edit the Subscription information
     */
    function editSubscriptionTopup()
    {
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
                
                $result = $this->subscription_model->editSubscriptionTopup($SubscriptionInfo, $SubscriptionId);
                
                if($result == true)
                {
                    $this->session->set_flashdata('success', 'Subscription Topup updated successfully');
                }
                else
                {
                    $this->session->set_flashdata('error', 'Subscription Topup updation failed');
                }
                
                redirect('subscriptionTopupListing');
            }
        }
    }


    /**
     * This function is used to delete the Subscription using SubscriptionId
     * @return boolean $result : TRUE / FALSE
     */
    function deleteSubscription()
    {
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
    
    /**
     * This function is used to delete the Subscription topup using SubscriptionId
     * @return boolean $result : TRUE / FALSE
     */
    function deleteTopupSubscription()
    {
        if($this->isAdmin() == TRUE)
        {
            echo(json_encode(array('status'=>'access')));
        }
        else
        {
            $SubscriptionId = $this->input->post('SubscriptionId');
            $SubscriptionInfo = array('isDeleted'=>1,'updatedBy'=>$this->vendorId, 'updatedDtm'=>date('Y-m-d H:i:s'));
            
            $result = $this->subscription_model->deleteSubscriptionTopup($SubscriptionId, $SubscriptionInfo);
            
            if ($result > 0) { echo(json_encode(array('status'=>TRUE))); }
            else { echo(json_encode(array('status'=>FALSE))); }
        }
    }

    function pageNotFound()
    {
        $this->global['pageTitle'] = 'FashionFound : 404 - Page Not Found';
        
        $this->loadViews("404", $this->global, NULL, NULL);
    }
}

?>