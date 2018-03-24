<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

class Subscription_model extends CI_Model
{
    /**
     * This function is used to get the subscription listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function subscriptionListingCount($searchText = '')
    {
        $this->db->select('*');
        $this->db->from('tbl_subscriptions as BaseTbl');

        if(!empty($searchText)) {
            $likeCriteria = "(BaseTbl.name  LIKE '%".$searchText."%'
                            OR  BaseTbl.description  LIKE '%".$searchText."%')";
            $this->db->where($likeCriteria);
        }
        $this->db->where('BaseTbl.isDeleted', 0);     
        $query = $this->db->get();
        
        return count($query->result());
    }
    
    /**
     * This function is used to get the subscription listing count
     * @param string $searchText : This is optional search text
     * @param number $page : This is pagination offset
     * @param number $segment : This is pagination limit
     * @return array $result : This is result
     */
    function subscriptionListing($searchText = '', $page, $segment)
    {
        $this->db->select('BaseTbl.id, BaseTbl.name, BaseTbl.description, BaseTbl.productLimit, BaseTbl.price');
        $this->db->from('tbl_subscriptions as BaseTbl');        
        if(!empty($searchText)) {
            $likeCriteria = "(BaseTbl.name  LIKE '%".$searchText."%'
                            OR  BaseTbl.description  LIKE '%".$searchText."%')";
            $this->db->where($likeCriteria);
        }
        $this->db->where('BaseTbl.isDeleted', 0);

        $this->db->limit($page, $segment);
        $query = $this->db->get();
        
        $result = $query->result();        
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

    function subscriptionList()
    {
        $this->db->select('id, name, description, price, productLimit');
        $this->db->from('tbl_subscriptions');
        $this->db->where('isDeleted', 0);       
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
    
    
    /**
     * This function is used to get the subscription topup listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function subscriptionTopupListingCount($searchText = '')
    {
        $this->db->select('*');
        $this->db->from('tbl_subscription_topups as BaseTbl');

        if(!empty($searchText)) {
            $likeCriteria = "(BaseTbl.name  LIKE '%".$searchText."%'
                            OR  BaseTbl.description  LIKE '%".$searchText."%')";
            $this->db->where($likeCriteria);
        }
        $this->db->where('BaseTbl.isDeleted', 0);     
        $query = $this->db->get();
        
        return count($query->result());
    }
    
    /**
     * This function is used to get the subscription topup listing count
     * @param string $searchText : This is optional search text
     * @param number $page : This is pagination offset
     * @param number $segment : This is pagination limit
     * @return array $result : This is result
     */
    function subscriptionTopupListing($searchText = '', $page, $segment)
    {
        $this->db->select('BaseTbl.id, BaseTbl.name, BaseTbl.description, BaseTbl.productLimit, BaseTbl.price');
        $this->db->from('tbl_subscription_topups as BaseTbl');        
        if(!empty($searchText)) {
            $likeCriteria = "(BaseTbl.name  LIKE '%".$searchText."%'
                            OR  BaseTbl.description  LIKE '%".$searchText."%')";
            $this->db->where($likeCriteria);
        }
        $this->db->where('BaseTbl.isDeleted', 0);

        $this->db->limit($page, $segment);
        $query = $this->db->get();
        
        $result = $query->result();        
        return $result;
    }        
    
    /**
     * This function is used to add new subscription topup to system
     * @return number $insert_id : This is last inserted id
     */
    function addNewsubscriptionTopup($subscriptionInfo)
    {
        $this->db->trans_start();
        $this->db->insert('tbl_subscription_topups', $subscriptionInfo);
        
        $insert_id = $this->db->insert_id();
        
        $this->db->trans_complete();
        
        return $insert_id;
    }
    
    /**
     * This function used to get subscription topup information by id
     * @param number $subscriptionId : This is subscription id
     * @return array $result : This is subscription information
     */
    function getsubscriptionTopupInfo($subscriptionId)
    {
        $this->db->select('id, name, description, price, productLimit');
        $this->db->from('tbl_subscription_topups');
        $this->db->where('isDeleted', 0);		
        $this->db->where('id', $subscriptionId);
        $query = $this->db->get();
        
        // var_dump($query); die;
        return $query->result();
    }

    function subscriptionTopupList()
    {
        $this->db->select('id, name, description, price, productLimit');
        $this->db->from('tbl_subscription_topups');
        $this->db->where('isDeleted', 0);       
        $query = $this->db->get();
        
        // var_dump($query); die;
        return $query->result();
    }
    
    
    /**
     * This function is used to update the subscription topup information
     * @param array $subscriptionInfo : This is subscriptions updated information
     * @param number $subscriptionId : This is subscription id
     */
    function editsubscriptionTopup($subscriptionInfo, $subscriptionId)
    {
        $this->db->where('id', $subscriptionId);
        $this->db->update('tbl_subscription_topups', $subscriptionInfo);
        
        return TRUE;
    }
    
    
    
    /**
     * This function is used to delete the subscription topup information
     * @param number $subscriptionId : This is subscription id
     * @return boolean $result : TRUE / FALSE
     */
    function deletesubscriptionTopup($subscriptionId, $subscriptionInfo)
    {
        $this->db->where('id', $subscriptionId);
        $this->db->update('tbl_subscriptions', $subscriptionInfo);
        
        return $this->db->affected_rows();
    }
   
}

  