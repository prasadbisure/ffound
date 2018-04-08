<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

class User_model extends CI_Model
{
    /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function userListingCount($searchText = '', $type = 'all')
    {
        $this->db->select('BaseTbl.userId, BaseTbl.email, BaseTbl.name, BaseTbl.mobile, Role.role, Subscription.name as sname, Subscription.productLimit');
        $this->db->from('tbl_users as BaseTbl');
        $this->db->join('tbl_roles as Role', 'Role.roleId = BaseTbl.roleId','left');
        $this->db->join('tbl_subscriptions as Subscription', 'Subscription.id = BaseTbl.subscription_type','left');
        if(!empty($searchText)) {
            $likeCriteria = "(BaseTbl.email  LIKE '%".$searchText."%'
                            OR  BaseTbl.name  LIKE '%".$searchText."%'
                            OR  BaseTbl.mobile  LIKE '%".$searchText."%')";
            $this->db->where($likeCriteria);
        }
        $this->db->where('BaseTbl.isDeleted', 0);

        if($type == "all"){
            $this->db->where('BaseTbl.roleId !=', 1);
        }

        if($type == "designer"){
            $this->db->where('BaseTbl.roleId =', 2);
        }

        if($type == "boutique"){
            $this->db->where('BaseTbl.roleId =', 3);
        }
        
        $query = $this->db->get();
        
        return count($query->result());
    }
    
    /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @param number $page : This is pagination offset
     * @param number $segment : This is pagination limit
     * @return array $result : This is result
     */
    function userListing($searchText = '', $page, $segment, $type='all')
    {
        $this->db->select('BaseTbl.userId, BaseTbl.email, BaseTbl.name, BaseTbl.mobile, BaseTbl.status, Role.role, BaseTbl.roleId, Subscription.name as sname, Subscription.productLimit');
        $this->db->from('tbl_users as BaseTbl');
        $this->db->join('tbl_roles as Role', 'Role.roleId = BaseTbl.roleId','left');
        $this->db->join('tbl_subscriptions as Subscription', 'Subscription.id = BaseTbl.subscription_type','left');
        if(!empty($searchText)) {
            $likeCriteria = "(BaseTbl.email  LIKE '%".$searchText."%'
                            OR  BaseTbl.name  LIKE '%".$searchText."%'
                            OR  BaseTbl.mobile  LIKE '%".$searchText."%')";
            $this->db->where($likeCriteria);
        }
        $this->db->where('BaseTbl.isDeleted', 0);

        if($type == "all" || $type == ''){
            $this->db->where('BaseTbl.roleId !=', 1);
        }

        if($type == "designer"){
            $this->db->where('BaseTbl.roleId =', 2);
        }

        if($type == "boutique"){
            $this->db->where('BaseTbl.roleId =', 3);
        }
        $this->db->limit($page, $segment);
        $query = $this->db->get();
        
        $result = $query->result();        
        return $result;
    }
    
    /**
     * This function is used to get the user roles information
     * @return array $result : This is result of the query
     */
    function getUserRoles()
    {
        $this->db->select('roleId, role');
        $this->db->from('tbl_roles');
        $this->db->where('roleId !=', 1);
        $query = $this->db->get();
        
        return $query->result();
    }

    /**
     * This function is used to check whether email id is already exist or not
     * @param {string} $email : This is email id
     * @param {number} $userId : This is user id
     * @return {mixed} $result : This is searched result
     */
    function checkEmailExists($email, $userId = 0)
    {
        $this->db->select("email");
        $this->db->from("tbl_users");
        $this->db->where("email", $email);   
        $this->db->where("isDeleted", 0);
        if($userId != 0){
            $this->db->where("userId !=", $userId);
        }
        $query = $this->db->get();

        return $query->result();
    }
    
    
    /**
     * This function is used to add new user to system
     * @return number $insert_id : This is last inserted id
     */
    function addNewUser($userInfo)
    {
        $this->db->trans_start();
        $this->db->insert('tbl_users', $userInfo);
        
        $insert_id = $this->db->insert_id();
        
        $this->db->trans_complete();
        
        return $insert_id;
    }
    
    /**
     * This function used to get user information by id
     * @param number $userId : This is user id
     * @return array $result : This is user information
     */
    function getUserInfo($userId)
    {
        $this->db->select('userId, name, email, mobile, roleId, profile_pic, profile_pic_status');
        $this->db->from('tbl_users');
        $this->db->where('isDeleted', 0);
		$this->db->where('roleId !=', 1);
        $this->db->where('userId', $userId);
        $query = $this->db->get();
        
        // var_dump($query); die;
        return $query->result();
    }
    
    
    /**
     * This function is used to update the user information
     * @param array $userInfo : This is users updated information
     * @param number $userId : This is user id
     */
    function editUser($userInfo, $userId)
    {
        $this->db->where('userId', $userId);
        $this->db->update('tbl_users', $userInfo);
        
        return TRUE;
    }

    function editprofilepic($userInfo, $userId)
    {
        $this->db->where('userId', $userId);
        $this->db->update('tbl_users', $userInfo);

        return TRUE;
    }
    
    
    
    /**
     * This function is used to delete the user information
     * @param number $userId : This is user id
     * @return boolean $result : TRUE / FALSE
     */
    function deleteUser($userId, $userInfo)
    {
        $this->db->where('userId', $userId);
        $this->db->update('tbl_users', $userInfo);
        
        return $this->db->affected_rows();
    }


    /**
     * This function is used to match users password for change password
     * @param number $userId : This is user id
     */
    function matchOldPassword($userId, $oldPassword)
    {
        $this->db->select('userId, password');
        $this->db->where('userId', $userId);        
        $this->db->where('isDeleted', 0);
        $query = $this->db->get('tbl_users');
        
        $user = $query->result();

        if(!empty($user)){
            if(verifyHashedPassword($oldPassword, $user[0]->password)){
                return $user;
            } else {
                return array();
            }
        } else {
            return array();
        }
    }
    
    /**
     * This function is used to change users password
     * @param number $userId : This is user id
     * @param array $userInfo : This is user updation info
     */
    function changePassword($userId, $userInfo)
    {
        $this->db->where('userId', $userId);
        $this->db->where('isDeleted', 0);
        $this->db->update('tbl_users', $userInfo);
        
        return $this->db->affected_rows();
    }
    /*
      * This Function is used to add new info of designer and boutique 
    */

    function updateInfo($userId, $newInfo)
    {
        $this->db->where('userId', $userId);
        $this->db->where('isDeleted', 0);
        $status = $this->db->update('tbl_users', $newInfo); 
        return $status;
    }
    
    //Update profile status
    function updateProfileStatus($id){
        $data = array('profileStatus' => 1);
        $this->db->where('userId', $id);
        return $this->db->update('tbl_users', $data);
    }
    
    function changeStatus($id, $status)
    {
        $updateStr = array('status' => $status);
        
        $this->db->where('userId', intval($id) );
        $this->db->update('tbl_users',$updateStr);
        
        return $this->db->affected_rows();
        
    }
    
    function changeReviewStatus($id, $status)
    {
        $updateStr = array('status' => $status);
        
        $this->db->where('id', intval($id) );
        $this->db->update('tbl_reviews_rating',$updateStr);
        
        return $this->db->affected_rows();
        
    }
    
    function getDashboardData(){
        
        $this->db->select('*');
        // $this->db->where('orderStatus', 'New');
        $this->db->where('isDeleted', 0);
        $query = $this->db->get('tbl_orders');
        
        $data['total_order_cnt'] = $query->num_rows();
        
        $this->db->select('*');
        $this->db->where('roleId', 2);
        $this->db->where('isDeleted', 0);
        $query = $this->db->get('tbl_users');
        
        $data['total_designer_cnt'] = $query->num_rows();

        $this->db->select('*');
        $this->db->where('roleId', 3);
        $this->db->where('isDeleted', 0);
        $query = $this->db->get('tbl_users');
        
        $data['total_boutique_cnt'] = $query->num_rows();
        
        return $data;
        
    }
    
    function reviewAndRatingListingCount(){
        
        $this->db->select('*');
        $this->db->where('isDeleted', 0);
        $query = $this->db->get('tbl_reviews_rating');
        
        return $query->num_rows();;
        
    }
    
    function reviewAndRatingListing($searchText = '', $page, $segment, $type='all')
    {
        $this->db->select('Review.id, BaseTbl.name as vendorname, Review.review, BaseTbl.brandName, Review.createdDtm, Review.status');
        $this->db->from('tbl_reviews_rating as Review');
        $this->db->join('tbl_users as BaseTbl', 'Review.vendorId = BaseTbl.userId','left');
       
        if(!empty($searchText)) {
            $likeCriteria = "(BaseTbl.email  LIKE '%".$searchText."%'
                            OR  BaseTbl.name  LIKE '%".$searchText."%'
                            OR  BaseTbl.mobile  LIKE '%".$searchText."%')";
            $this->db->where($likeCriteria);
        }
        $this->db->where('Review.isDeleted', 0);

        $this->db->limit($page, $segment);
        $query = $this->db->get();
        
        $result = $query->result();        
        return $result;
    }
    
    function insertTransactionData($transactionData)
    {
        $this->db->trans_start();
        $this->db->insert('tbl_transactions', $transactionData);
        
        $insert_id = $this->db->insert_id();
        
        $this->db->trans_complete();
        
        return $insert_id;
    }
}

  