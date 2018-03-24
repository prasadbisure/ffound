<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';

/**
 * Class : CMS (CmsController)
 * CMS class to mangage content for differetn page.
 * @author : Rohan Chaudhari
 * @version : 1.1
 */
class Cms extends BaseController
{
    /**
     * This is default constructor of the class
     */
    public function __construct()
    {
        parent::__construct();
        $this->load->model('site_model');
        $this->isLoggedIn();   
    }
    
    public function index(){
        $searchText = $this->input->post('searchText');
        $data['searchText'] = $searchText;

        $data['page_list'] = $this->site_model->fronPageCMS($searchText);

        $this->global['pageTitle'] = 'FashionFound : Content Mangement';
        
        $this->loadViews("pages", $this->global, $data, NULL);

    }

    /**
     * This function is used load Subscription edit information
     * @param number $SubscriptionId : Optional : This is Subscription id
     */
    function editOld($id = NULL)
    {
        if($this->isAdmin() == TRUE)
        {
            $this->loadThis();
        }
        else
        {

            if($id == null)
            {
                redirect('cms');
            }

                                    
            $data['pageInfo'] = $this->site_model->getPageInfo($id);
            
            $this->global['pageTitle'] = 'FashionFound : Edit page content';
            
            $this->loadViews("editPageContent", $this->global, $data, NULL);
        }
    }
    
    
    /**
     * This function is used to edit the Subscription information
     */
    function editPageContent()
    {
        if($this->isAdmin() == TRUE)
        {
            $this->loadThis();
        }
        else
        {
            $this->load->library('form_validation');
            
            $id = $this->input->post('id');
            
            $this->form_validation->set_rules('page_name','Name','trim|required|max_length[12]|xss_clean');
            $this->form_validation->set_rules('content','Description','trim|xss_clean|max_length[20000]');
                        
            if($this->form_validation->run() == FALSE)
            {
                $this->editOld($id);
            }
            else
            {
                $page_name = ucwords(strtolower($this->input->post('page_name')));
                $content = $this->input->post('content');
		$designer_url = $this->input->post('designer_url') ? $this->input->post('designer_url') : '';
		$designer_url2 = $this->input->post('designer_url2') ? $this->input->post('designer_url2') : '';
       		$boutique_url = $this->input->post('boutique_url') ? $this->input->post('boutique_url') : '';                
		$boutique_url2 = $this->input->post('boutique_url2') ? $this->input->post('boutique_url2') : '';
                $pageInfo = array();
                
                $config['upload_path']          = './upload/';
                $config['allowed_types']        = 'gif|jpg|png|jpeg';
                // $config['max_size']             = 1000;
                $config['max_width']            = 1200;
                $config['max_height']           = 500;
        
                $this->load->library('upload', $config);
                $imagesUploadArray = array();
                
                
                $filesCount = count($_FILES['userfile']['name']);
                $uploadPath = './upload/';
                
                $this->load->library('upload', $config);
                $this->upload->initialize($config);
                $index = 1;
		$indexB = 3;
                $temp = array();
                for($i = 0; $i < $filesCount; $i++){
                    
                    $_FILES['tmpfile']['name'] = $_FILES['userfile']['name'][$i];
                    $_FILES['tmpfile']['type'] = $_FILES['userfile']['type'][$i];
                    $_FILES['tmpfile']['tmp_name'] = $_FILES['userfile']['tmp_name'][$i];
                    $_FILES['tmpfile']['error'] = $_FILES['userfile']['error'][$i];
                    $_FILES['tmpfile']['size'] = $_FILES['userfile']['size'][$i];
                    
                    if($this->upload->do_upload('tmpfile')){
                        $fileData = $this->upload->data();
                        $image_name = $fileData['file_name'];
			$tmpIndex   = $i + $index;
			if($i < 2){
				$temp["designer_img$tmpIndex"] ='/upload/'.$image_name;
			}else{
				
				$tmpIndex = ($i != 3) ? $indexB - $i : 2;
				$temp["boutique_img$tmpIndex"] = '/upload/'.$image_name;
			}
                    }else{
                        // $errors = $this->upload->display_errors();
                        $this->session->set_flashdata('error', 'Error occured while uploading your image');
                    }
                }
                if(!empty($temp)){
                    
                    $pageInfo = array('page_name'=>$page_name, 'content'=>$content, 'updatedBy'=>$this->vendorId, 'updatedDtm'=>date('Y-m-d H:i:s'), 'designer_url' => $designer_url, 'designer_url2' => $designer_url2, 'boutique_url' => $boutique_url, 'boutique_url2' => $boutique_url2);
                    $pageInfo = array_merge($pageInfo, $temp);
                }else{
                    $pageInfo = array('page_name'=>$page_name, 'content'=>$content, 'updatedBy'=>$this->vendorId, 'updatedDtm'=>date('Y-m-d H:i:s'), 'designer_url' => $designer_url, 'designer_url2' => $designer_url2, 'boutique_url' => $boutique_url, 'boutique_url2' => $boutique_url2);
                }
                
                // var_dump($pageInfo);
                $result = $this->site_model->editPage($pageInfo, $id);
                
                if($result == true)
                {
                    $this->session->set_flashdata('success', 'Page content updated successfully');
                }
                else
                {
                    $this->session->set_flashdata('error', 'Page content updation failed');
                }
                
                redirect('cms');
            }
        }
    }


    function pageNotFound()
    {
        $this->global['pageTitle'] = 'FashionFound : 404 - Page Not Found';
        
        $this->loadViews("404", $this->global, NULL, NULL);
    }
}

?>
