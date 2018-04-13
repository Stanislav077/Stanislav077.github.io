<?php
class ModelCatalogWholesale extends Model {
    public function addInformation($data) {
        $this->db->query("INSERT INTO " . DB_PREFIX . "wholesale SET orders = '".$data['order']."', link_more = '".$data['link_more']."', block_first = '".$data['block_first']."',block_too = '".$data['block_too']."', title = '".$data['title']."', status = '" . (int)$data['status'] . "'");

        $information_id = $this->db->getLastId();

        $this->cache->delete('wholesale');

        return $information_id;
    }

    public function editInformation($information_id, $data) {
        $this->db->query("UPDATE " . DB_PREFIX . "wholesale SET orders = '".$data['order']."', link_more = '".$data['link_more']."', link_yuotub = '".$data['link_yuotub']."', block_first = '".$data['block_first']."',block_too = '".$data['block_too']."', title = '".$data['title']."', status = '" . (int)$data['status'] . "' WHERE id = '" . (int)$information_id . "'");

        $this->cache->delete('wholesale');
    }

    public function deleteInformation($information_id) {
        $this->db->query("DELETE FROM " . DB_PREFIX . "wholesale WHERE information_id = '" . (int)$information_id . "'");

        $this->cache->delete('wholesale');
    }

    public function getInformation($information_id) {
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "wholesale WHERE id = '" . (int)$information_id . "'");

        return $query->row;
    }

    public function getInformations($data = array()) {

        $sql = "SELECT * FROM " . DB_PREFIX . "wholesale  WHERE 1";

        $query = $this->db->query($sql);

        return $query->rows;

    }

    public function getTotalInformations() {
        $query = $this->db->query("SELECT COUNT(*) AS total FROM " . DB_PREFIX . "wholesale");

        return $query->row['total'];
    }


}