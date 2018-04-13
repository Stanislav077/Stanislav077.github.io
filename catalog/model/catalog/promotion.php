<?php

class ModelCatalogPromotion extends Model { 

	public function updateViewed($promotion_id) {
		$this->db->query("UPDATE " . DB_PREFIX . "promotion SET viewed = (viewed + 1) WHERE promotion_id = '" . (int)$promotion_id . "'");
	}

	public function getpromotionStory($promotion_id) {
		$query = $this->db->query("SELECT DISTINCT * FROM " . DB_PREFIX . "promotion n LEFT JOIN " . DB_PREFIX . "promotion_description nd ON (n.promotion_id = nd.promotion_id) LEFT JOIN " . DB_PREFIX . "promotion_to_store n2s ON (n.promotion_id = n2s.promotion_id) WHERE n.promotion_id = '" . (int)$promotion_id . "' AND nd.language_id = '" . (int)$this->config->get('config_language_id') . "' AND n2s.store_id = '" . (int)$this->config->get('config_store_id') . "' AND n.status = '1'");
	
		return $query->row;
	}

	public function getpromotion($data) {
				$sql = "SELECT * FROM " . DB_PREFIX . "promotion n LEFT JOIN " . DB_PREFIX . "promotion_description nd ON (n.promotion_id = nd.promotion_id) LEFT JOIN " . DB_PREFIX . "promotion_to_store n2s ON (n.promotion_id = n2s.promotion_id) WHERE nd.language_id = '" . (int)$this->config->get('config_language_id') . "' AND n2s.store_id = '" . (int)$this->config->get('config_store_id') . "' AND n.status = '1'";

				$sort_data = array(
					'nd.title',
					'n.date_added'
				);

				if (isset($data['sort']) && in_array($data['sort'], $sort_data)) {
					$sql .= " ORDER BY " . $data['sort'];
				} else {
					$sql .= " ORDER BY nd.title";
				}

				if (isset($data['order']) && ($data['order'] == 'DESC')) {
					$sql .= " DESC";
				} else {
					$sql .= " ASC";
				}
	
				if (isset($data['start']) || isset($data['limit'])) {
				if ($data['start'] < 0) {
				$data['start'] = 0;
				}		
				if ($data['limit'] < 1) {
				$data['limit'] = 10;
				}	
		
				$sql .= " LIMIT " . (int)$data['start'] . "," . (int)$data['limit'];
				}	
		
				$query = $this->db->query($sql);
	
				return $query->rows;
				}

	public function getpromotionShorts($limit) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "promotion n LEFT JOIN " . DB_PREFIX . "promotion_description nd ON (n.promotion_id = nd.promotion_id) LEFT JOIN " . DB_PREFIX . "promotion_to_store n2s ON (n.promotion_id = n2s.promotion_id) WHERE nd.language_id = '" . (int)$this->config->get('config_language_id') . "' AND n2s.store_id = '" . (int)$this->config->get('config_store_id') . "' AND n.status = '1' ORDER BY n.date_added DESC LIMIT " . (int)$limit); 
	
		return $query->rows;
	}

	public function getTotalpromotion() {
     	$query = $this->db->query("SELECT COUNT(*) AS total FROM " . DB_PREFIX . "promotion n LEFT JOIN " . DB_PREFIX . "promotion_to_store n2s ON (n.promotion_id = n2s.promotion_id) WHERE n2s.store_id = '" . (int)$this->config->get('config_store_id') . "' AND n.status = '1'");
	
		if ($query->row) {
			return $query->row['total'];
		} else {
			return FALSE;
		}
	}	
}
?>
