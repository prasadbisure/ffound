<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

class Site_model extends CI_Model
{
    /**
     * This function is used to get front page content
     */
    function fronPageCMS($searchText = '')
    {
        $this->db->select("BaseTbl.id, BaseTbl.page_name, BaseTbl.content, BaseTbl.updatedDtm");
        $this->db->from("tbl_pages as BaseTbl");
        
        if(!empty($searchText)) {
            $this->db->where("BaseTbl.page_name  LIKE '%".$searchText."%'");
        }

        $query = $this->db->get();

        return $query->result();
    }

    public function getPageInfo($id){
        
        $this->db->select("BaseTbl.id, BaseTbl.page_name, BaseTbl.content, BaseTbl.designer_img1, BaseTbl.designer_img2 , BaseTbl.boutique_img1 , BaseTbl.boutique_img2,  BaseTbl.updatedDtm, BaseTbl.designer_url, BaseTbl.designer_url2, BaseTbl.boutique_url, BaseTbl.boutique_url2");
        $this->db->from("tbl_pages as BaseTbl");
        $this->db->where("BaseTbl.id", $id);

        $query = $this->db->get();

        return $query->result();
    }

    public function editPage($pageInfo, $id)
    {
        // var_dump($pageInfo); die;
        $this->db->where('id', $id);
        $this->db->update('tbl_pages', $pageInfo);
        
        return TRUE;
    }
}
