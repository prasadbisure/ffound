<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

class Product_model extends CI_Model
{
    /**
     * This function is used to get the product listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function productListingCount($searchText = '', $userId = '')
    {
        $this->db->select('*');
        $this->db->from('tbl_products as BaseTbl');

        if(!empty($searchText)) {
            $likeCriteria = "(BaseTbl.name  LIKE '%".$searchText."%'
                            OR  BaseTbl.description  LIKE '%".$searchText."%')";
            $this->db->where($likeCriteria);
        }
        $this->db->where('BaseTbl.isDeleted', 0);
        $this->db->where('BaseTbl.userId', $userId);     
        $query = $this->db->get();
        
        return count($query->result());
    }
    
    /**
     * This function is used to get the product listing count
     * @param string $searchText : This is optional search text
     * @param number $page : This is pagination offset
     * @param number $segment : This is pagination limit
     * @return array $result : This is result
     */
    function productListing($searchText = '', $page, $segment, $userId = '')
    {        
        $this->db->select('*');
        $this->db->from('tbl_products as BaseTbl');        
        if(!empty($searchText)) {
            $likeCriteria = "(BaseTbl.name  LIKE '%".$searchText."%'
                            OR  BaseTbl.description  LIKE '%".$searchText."%'
                            OR  BaseTbl.specification  LIKE '%".$searchText."%')";
            $this->db->where($likeCriteria);
        }
        $this->db->where('BaseTbl.isDeleted', 0);
        $this->db->where('BaseTbl.userId', intval($userId));

        // $this->db->limit($page, $segment);
        $query = $this->db->get();
        
        $result = $query->result();   
        // var_dump($result);  die;     
        return $result;
    }        
    
    /**
     * This function is used to add new subscription to system
     * @return number $insert_id : This is last inserted id
     */
    function addNewsubscription($subscriptionInfo)
    {
        $this->db->trans_start();
        $this->db->insert('tbl_subscriptions', $subscriptionInfo);
        
        $insert_id = $this->db->insert_id();
        
        $this->db->trans_complete();
        
        return $insert_id;
    }
    
    /**
     * This function used to get subscription information by id
     * @param number $subscriptionId : This is subscription id
     * @return array $result : This is subscription information
     */
    function getsubscriptionInfo($subscriptionId)
    {
        $this->db->select('id, name, description, price, productLimit');
        $this->db->from('tbl_subscriptions');
        $this->db->where('isDeleted', 0);		
        $this->db->where('id', $subscriptionId);
        $query = $this->db->get();
        
        // var_dump($query); die;
        return $query->result();
    }
    
    
    /**
     * This function is used to update the subscription information
     * @param array $subscriptionInfo : This is subscriptions updated information
     * @param number $subscriptionId : This is subscription id
     */
    function editsubscription($subscriptionInfo, $subscriptionId)
    {
        $this->db->where('id', $subscriptionId);
        $this->db->update('tbl_subscriptions', $subscriptionInfo);
        
        return TRUE;
    }
    
    
    
    /**
     * This function is used to delete the subscription information
     * @param number $subscriptionId : This is subscription id
     * @return boolean $result : TRUE / FALSE
     */
    function deletesubscription($subscriptionId, $subscriptionInfo)
    {
        $this->db->where('id', $subscriptionId);
        $this->db->update('tbl_subscriptions', $subscriptionInfo);
        
        return $this->db->affected_rows();
    }

/* This is function is used to add new product */

    function addNewProduct($productInfo)
    {
        $this->db->trans_start();
        $this->db->insert('tbl_products', $productInfo);
        
        $insert_id = $this->db->insert_id();
        
        $user=$this->db->trans_complete();
        return $insert_id; 
       
    }
/* This is Update Function     */
     function updateProduct($productInfo)
    {
        // echo '<pre>';
        // var_dump($productInfo); die;
        $this->db->where('id',$productInfo['id'] );
        $this->db->update('tbl_products',$productInfo);
        
        return TRUE;
        
    }
    
    function insertDummyProducts($userId, $productLimit)
    {
        $productInfo = array('name' => 'Dummy product', 'price' => 0, 'userId' => $userId, 'createdBy' => $userId, 'createdDtm' => date('Y-m-d H:i:s'));
        for($i=1; $i <= $productLimit; $i++){        
            $this->db->trans_start();
            $this->db->insert('tbl_products', $productInfo);
           // insert_id = $this->db->insert_id();
            $this->db->trans_complete();
        }
        return TRUE;
    }

    function changeStatus($id, $status)
    {
        $updateStr = array('status' => $status);
        // var_dump($updateStr); die;
        $this->db->where('id',$id );
        $this->db->update('tbl_products',$updateStr);
        
        return $this->db->affected_rows();
        
    }
    
    function showProductDetails($id)
    {        
        $this->db->select('*');
        $this->db->from('tbl_products as BaseTbl');        
        
        // $this->db->where('BaseTbl.isDeleted', 0);
        $this->db->where('BaseTbl.id', intval($id));

        // $this->db->limit($page, $segment);
        $query = $this->db->get();
        
        $result = $query->result();   
        // var_dump($result);  die;     
        return $result[0];
    }
}

  
