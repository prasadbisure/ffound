<?php defined ( 'BASEPATH' ) or exit ( 'No direct script access allowed' ); 

/**
 * Class : BaseController
 * Base Class to control over all the classes
 * @author : Rohan Chaudhari
 * @version : 1.1
 */
class BaseController extends CI_Controller {
	protected $role = '';
	protected $vendorId = '';
	protected $name = '';
	protected $roleText = '';
	protected $global = array ();
	
	/**
	 * Takes mixed data and optionally a status code, then creates the response
	 *
	 * @access public
	 * @param array|NULL $data
	 *        	Data to output to the user
	 *        	running the script; otherwise, exit
	 */
	 function __construct(){
        parent::__construct();
        
        $this->load->library('image_lib');
    }
	public function response($data = NULL) {
		$this->output->set_status_header ( 200 )->set_content_type ( 'application/json', 'utf-8' )->set_output ( json_encode ( $data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES ) )->_display ();
		exit ();
	}
	
	public function do_resize($filename)
    {
        $source_path = $_SERVER['DOCUMENT_ROOT'] . '/upload/' . $filename;
        $target_path = $_SERVER['DOCUMENT_ROOT'] . '/upload/thumbnails/';
        $config_manip = array(
            'image_library' => 'gd2',
            'source_image' => $source_path,
            'new_image' => $target_path,
            //'maintain_ratio' => TRUE,
            'create_thumb' => TRUE,
            'thumb_marker' => '_thumb',
            'width' => 200,
            'height' => 200
        );
        
        $this->image_lib->initialize($config_manip);
        if (!$this->image_lib->resize()) {
            echo $this->image_lib->display_errors();
        }
        
        //If you just need name of the thumbnail.
        $source_image_name = $this->image_lib->source_image;
        $extension = strrchr($source_image_name , '.');
        $name = substr($source_image_name , 0, -strlen($extension));
        $result = $name.$config_manip['thumb_marker'].$extension;
        
        // clear //
        $this->image_lib->clear();
        $this->image_lib->clear();
        return $result;
    }
    
    public function compress_image($filename)
    {
        $source_path = $_SERVER['DOCUMENT_ROOT'] . '/upload/' . $filename;
        $target_path = $_SERVER['DOCUMENT_ROOT'] . '/upload/'.$filename;
        $config_manip = array(
            'image_library' => 'gd2',
            'source_image' => $source_path,
            'new_image' => $target_path,
            'maintain_ratio' => false,
            'create_thumb' => false,
            'quality' => '100%',
            'width' => 1000,
            'height' => 1400
        );
        
        $this->image_lib->initialize($config_manip);
        if (!$this->image_lib->resize()) {
            echo $this->image_lib->display_errors();
        }
        
        // //If you just need name of the thumbnail.
        // $source_image_name = $this->image_lib->source_image;
        // $extension = strrchr($source_image_name , '.');
        // $name = substr($source_image_name , 0, -strlen($extension));
        // $result = $name.$config_manip['thumb_marker'].$extension;
        
        // clear //
        $this->image_lib->clear();
        $this->image_lib->clear();
        return $result;
    }
	
	/**
	 * This function used to check the user is logged in or not
	 */
	function isLoggedIn() {
		$isLoggedIn = $this->session->userdata ( 'isLoggedIn' );
		
		if (! isset ( $isLoggedIn ) || $isLoggedIn != TRUE) {
			redirect ( '/login-register' );
		} else {
			$this->role = $this->session->userdata ( 'role' );
			$this->vendorId = $this->session->userdata ( 'userId' );
			$this->name = $this->session->userdata ( 'name' );
			$this->roleText = $this->session->userdata ( 'roleText' );
			
			$this->global ['name'] = $this->name;
			$this->global ['role'] = $this->role;
			$this->global ['role_text'] = $this->roleText;
		}
	}
	
	/**
	 * This function is used to check the access
	 */
	function isAdmin() {
		if ($this->role != ROLE_ADMIN) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * This function is used to check the access
	 */
	function isTicketter() {
		if ($this->role != ROLE_ADMIN || $this->role != ROLE_MANAGER) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * This function is used to load the set of views
	 */
	function loadThis() {
		$this->global ['pageTitle'] = 'FashionFound : Access Denied';
		
		$this->load->view ( 'includes/header', $this->global );
		$this->load->view ( 'access' );
		$this->load->view ( 'includes/footer' );
	}
	
	
	/**
	 * This function is used to logged out user from system
	 */
// 	function logout() {
// 	    die;
// 	    $user_data = $this->session->all_userdata();
//         foreach ($user_data as $key => $value) {
//             if ($key != 'session_id' && $key != 'ip_address' && $key != 'user_agent' && $key != 'last_activity') {
//                 $this->session->unset_userdata($key);
//             }
//         }
//         $this->session->sess_destroy();
// 		redirect ( '/login-register' );
// 	}

	/**
     * This function used to load views
     * @param {string} $viewName : This is view name
     * @param {mixed} $headerInfo : This is array of header information
     * @param {mixed} $pageInfo : This is array of page information
     * @param {mixed} $footerInfo : This is array of footer information
     * @return {null} $result : null
     */
    function loadViews($viewName = "", $headerInfo = NULL, $pageInfo = NULL, $footerInfo = NULL){

        $this->load->view('includes/header', $headerInfo);
        $this->load->view($viewName, $pageInfo);
        $this->load->view('includes/footer', $footerInfo);
    }

	/**
     * This function used to load views
     * @param {string} $viewName : This is view name
     * @param {mixed} $headerInfo : This is array of header information
     * @param {mixed} $pageInfo : This is array of page information
     * @param {mixed} $footerInfo : This is array of footer information
     * @return {null} $result : null
     */
    function loadFrontViews($viewName = "", $headerInfo = "", $pageInfo = NULL, $footerInfo = NULL){

        $this->load->view('includes/front_header', $headerInfo);
        $this->load->view($viewName, $pageInfo);
        $this->load->view('includes/front_footer', $footerInfo);
    }

    function loadOtherViews($viewName = "", $headerInfo = "", $pageInfo = NULL, $footerInfo = NULL){

        $this->load->view('includes/front_header2', $headerInfo);
        $this->load->view($viewName, $pageInfo);
         $this->load->view('includes/front_footer', $footerInfo);
	}
	function loadProductViews($viewName = "", $headerInfo = "", $pageInfo = NULL, $footerInfo = NULL){
		
				$this->load->view('includes/front_header2', $headerInfo);
				$this->load->view($viewName, $pageInfo);
				 $this->load->view('includes/front_footer2', $footerInfo);
			}
		
	/*function loadDesignerViews($viewName = "", $headerInfo = "", $pageInfo = NULL, $footerInfo = NULL)
	{
				$this->load->view('includes/designer_header', $headerInfo);
				$this->load->view($viewName, $pageInfo);
				 $this->load->view('includes/front_footer', $footerInfo);
	}

	function loadPackagesViews($viewName = "", $headerInfo = "", $pageInfo = NULL, $footerInfo = NULL)
	{
				$this->load->view('includes/packages_header', $headerInfo);
				$this->load->view($viewName, $pageInfo);
				 $this->load->view('includes/front_footer', $footerInfo);
	}
	function loadAboutUsViews($viewName = "", $headerInfo = "", $pageInfo = NULL, $footerInfo = NULL)
	{
				$this->load->view('includes/aboutus_header', $headerInfo);
				$this->load->view($viewName, $pageInfo);
				 $this->load->view('includes/front_footer', $footerInfo);
	}
	
	function loadProductViews($viewName = "", $headerInfo = "", $pageInfo = NULL, $footerInfo = NULL)
	{
				$this->load->view('includes/product_header', $headerInfo);
				$this->load->view($viewName, $pageInfo);
				 $this->load->view('includes/product_footer', $footerInfo);
	}

	function loadItemsViews($viewName = "", $headerInfo = "", $pageInfo = NULL, $footerInfo = NULL)
	{
				$this->load->view('includes/item_header', $headerInfo);
				$this->load->view($viewName, $pageInfo);
				 $this->load->view('includes/product_footer', $footerInfo);
	}*/
	
	/**
	 * This function used provide the pagination resources
	 * @param {string} $link : This is page link
	 * @param {number} $count : This is page count
	 * @param {number} $perPage : This is records per page limit
	 * @return {mixed} $result : This is array of records and pagination data
	 */
	function paginationCompress($link, $count, $perPage = 10) {
		$this->load->library ( 'pagination' );
	
		$config ['base_url'] = base_url () . $link;
		$config ['total_rows'] = $count;
		$config ['uri_segment'] = SEGMENT;
		$config ['per_page'] = $perPage;
		$config ['num_links'] = 5;
		$config ['full_tag_open'] = '<nav><ul class="pagination">';
		$config ['full_tag_close'] = '</ul></nav>';
		$config ['first_tag_open'] = '<li class="arrow">';
		$config ['first_link'] = 'First';
		$config ['first_tag_close'] = '</li>';
		$config ['prev_link'] = 'Previous';
		$config ['prev_tag_open'] = '<li class="arrow">';
		$config ['prev_tag_close'] = '</li>';
		$config ['next_link'] = 'Next';
		$config ['next_tag_open'] = '<li class="arrow">';
		$config ['next_tag_close'] = '</li>';
		$config ['cur_tag_open'] = '<li class="active"><a href="#">';
		$config ['cur_tag_close'] = '</a></li>';
		$config ['num_tag_open'] = '<li>';
		$config ['num_tag_close'] = '</li>';
		$config ['last_tag_open'] = '<li class="arrow">';
		$config ['last_link'] = 'Last';
		$config ['last_tag_close'] = '</li>';
	
		$this->pagination->initialize ( $config );
		$page = $config ['per_page'];
		$segment = $this->uri->segment ( SEGMENT );
	
		return array (
				"page" => $page,
				"segment" => $segment
		);
	}
}
