<?php
class ModelCatalogPromotion extends Model {

	public function addpromotion($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "promotion SET status = '" . (int)$data['status'] . "', date_added = now()");
	
		$promotion_id = $this->db->getLastId();
	
		if (isset($data['image'])) {
			$this->db->query("UPDATE " . DB_PREFIX . "promotion SET image = '" . $this->db->escape($data['image']) . "' WHERE promotion_id = '" . (int)$promotion_id . "'");
		}
	
		if (isset($data['date_added'])) {
			$this->db->query("UPDATE " . DB_PREFIX . "promotion SET date_added = '" . $this->db->escape($data['date_added']) . "' WHERE promotion_id = '" . (int)$promotion_id . "'");
		}
        if (isset($data['href'])) {
            $this->db->query("UPDATE " . DB_PREFIX . "promotion SET href = '" . $this->db->escape($data['href']) . "' WHERE promotion_id = '" . (int)$promotion_id . "'");
        }
	
		foreach ($data['promotion_description'] as $language_id => $value) {
			$this->db->query("INSERT INTO " . DB_PREFIX . "promotion_description SET promotion_id = '" . (int)$promotion_id . "', language_id = '" . (int)$language_id . "', title = '" . $this->db->escape($value['title']) . "',  description = '" . $this->db->escape($value['description']) . "', meta_title = '" . $this->db->escape($value['meta_title']) . "',  meta_h1 = '" . $this->db->escape($value['meta_h1']) . "', meta_description = '" . $this->db->escape($value['meta_description']) . "', meta_keyword = '" . $this->db->escape($value['meta_keyword']) . "'");
		}
	
		if (isset($data['promotion_store'])) {
			foreach ($data['promotion_store'] as $store_id) {
				$this->db->query("INSERT INTO " . DB_PREFIX . "promotion_to_store SET promotion_id = '" . (int)$promotion_id . "', store_id = '" . (int)$store_id . "'");
			}
		}
		
		if ($data['keyword']) {
			$this->db->query("INSERT INTO " . DB_PREFIX . "url_alias SET query = 'promotion_id=" . (int)$promotion_id . "', keyword = '" . $this->db->escape($data['keyword']) . "'");
		}
	
		$this->cache->delete('promotion');
	}

	public function editpromotion($promotion_id, $data) {
		$this->db->query("UPDATE " . DB_PREFIX . "promotion SET status = '" . (int)$data['status'] . "' WHERE promotion_id = '" . (int)$promotion_id . "'");

		if (isset($data['image'])) {
			$this->db->query("UPDATE " . DB_PREFIX . "promotion SET image = '" . $this->db->escape($data['image']) . "' WHERE promotion_id = '" . (int)$promotion_id . "'");
		}
        if (isset($data['href'])) {
            $this->db->query("UPDATE " . DB_PREFIX . "promotion SET href = '" . $this->db->escape($data['href']) . "' WHERE promotion_id = '" . (int)$promotion_id . "'");
        }
		if (isset($data['date_added'])) {
			$this->db->query("UPDATE " . DB_PREFIX . "promotion SET date_added = '" . $this->db->escape($data['date_added']) . "' WHERE promotion_id = '" . (int)$promotion_id . "'");
		}
		
		$this->db->query("DELETE FROM " . DB_PREFIX . "promotion_description WHERE promotion_id = '" . (int)$promotion_id . "'");
	
		foreach ($data['promotion_description'] as $language_id => $value) {
			$this->db->query("INSERT INTO " . DB_PREFIX . "promotion_description SET promotion_id = '" . (int)$promotion_id . "', language_id = '" . (int)$language_id . "', title = '" . $this->db->escape($value['title']) . "', description = '" . $this->db->escape($value['description']) . "', meta_title = '" . $this->db->escape($value['meta_title']) . "',  meta_h1 = '" . $this->db->escape($value['meta_h1']) . "', meta_description = '" . $this->db->escape($value['meta_description']) . "', meta_keyword = '" . $this->db->escape($value['meta_keyword']) . "'");
		}
	
		$this->db->query("DELETE FROM " . DB_PREFIX . "promotion_to_store WHERE promotion_id = '" . (int)$promotion_id . "'");
	
		if (isset($data['promotion_store'])) {		
			foreach ($data['promotion_store'] as $store_id) {
				$this->db->query("INSERT INTO " . DB_PREFIX . "promotion_to_store SET promotion_id = '" . (int)$promotion_id . "', store_id = '" . (int)$store_id . "'");
			}
		}
	
		$this->db->query("DELETE FROM " . DB_PREFIX . "url_alias WHERE query = 'promotion_id=" . (int)$promotion_id . "'");
	
		if ($data['keyword']) {
			$this->db->query("INSERT INTO " . DB_PREFIX . "url_alias SET query = 'promotion_id=" . (int)$promotion_id . "', keyword = '" . $this->db->escape($data['keyword']) . "'");
		}
	
		$this->cache->delete('promotion');
	}

	public function deletepromotion($promotion_id) { 
		$this->db->query("DELETE FROM " . DB_PREFIX . "promotion WHERE promotion_id = '" . (int)$promotion_id . "'");
		$this->db->query("DELETE FROM " . DB_PREFIX . "promotion_description WHERE promotion_id = '" . (int)$promotion_id . "'");
		$this->db->query("DELETE FROM " . DB_PREFIX . "promotion_to_store WHERE promotion_id = '" . (int)$promotion_id . "'");
		$this->db->query("DELETE FROM " . DB_PREFIX . "url_alias WHERE query = 'promotion_id=" . (int)$promotion_id . "'");
	
		$this->cache->delete('promotion');
	}

	public function getpromotionList($data = array()) {
		if ($data) {
			$sql = "SELECT * FROM " . DB_PREFIX . "promotion n LEFT JOIN " . DB_PREFIX . "promotion_description nd ON (n.promotion_id = nd.promotion_id) WHERE nd.language_id = '" . (int)$this->config->get('config_language_id') . "'";

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
					$data['limit'] = 20;
				}

				$sql .= " LIMIT " . (int)$data['start'] . "," . (int)$data['limit'];
			}

			$query = $this->db->query($sql);

			return $query->rows;
		} else {
			$promotion_data = $this->cache->get('promotion.' . (int)$this->config->get('config_language_id'));

			if (!$promotion_data) {
				$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "promotion n LEFT JOIN " . DB_PREFIX . "promotion_description nd ON (n.promotion_id = nd.promotion_id) WHERE nd.language_id = '" . (int)$this->config->get('config_language_id') . "' ORDER BY nd.title");

				$promotion_data = $query->rows;

				$this->cache->set('promotion.' . (int)$this->config->get('config_language_id'), $promotion_data);
			}

			return $promotion_data;
		}
	}

	public function getpromotionStory($promotion_id) { 
		$query = $this->db->query("SELECT DISTINCT *, (SELECT keyword FROM " . DB_PREFIX . "url_alias WHERE query = 'promotion_id=" . (int)$promotion_id . "') AS keyword FROM " . DB_PREFIX . "promotion n LEFT JOIN " . DB_PREFIX . "promotion_description nd ON (n.promotion_id = nd.promotion_id) WHERE n.promotion_id = '" . (int)$promotion_id . "' AND nd.language_id = '" . (int)$this->config->get('config_language_id') . "'");
	
		return $query->row;
	}

	public function getpromotionDescriptions($promotion_id) { 
		$promotion_description_data = array();
	
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "promotion_description WHERE promotion_id = '" . (int)$promotion_id . "'");
	
		foreach ($query->rows as $result) {
			$promotion_description_data[$result['language_id']] = array(
				'title'            	=> $result['title'],
				'description'      	=> $result['description'],
				'meta_title'        => $result['meta_title'],
				'meta_h1'           => $result['meta_h1'],
				'meta_description' 	=> $result['meta_description'],
				'meta_keyword'		=> $result['meta_keyword'],
			);
		}
	
		return $promotion_description_data;
	}

	public function getpromotionStores($promotion_id) { 
		$promotionpage_store_data = array();
	
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "promotion_to_store WHERE promotion_id = '" . (int)$promotion_id . "'");
		
		foreach ($query->rows as $result) {
			$promotionpage_store_data[] = $result['store_id'];
		}
	
		return $promotionpage_store_data;
	}

	public function getTotalpromotion() { 

     	$query = $this->db->query("SELECT COUNT(*) AS total FROM " . DB_PREFIX . "promotion");
	
		return $query->row['total'];
	}

	public function setpromotionListUrl($url) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "url_alias WHERE query = 'information/promotion'");
		if ($query) {
			$this->db->query("DELETE FROM " . DB_PREFIX . "url_alias WHERE query = 'information/promotion'");
			$this->db->query("INSERT INTO `" . DB_PREFIX . "url_alias` SET `query` = 'information/promotion', `keyword` = '" . $this->db->escape($url) . "'");
		}else{
			$this->db->query("INSERT INTO `" . DB_PREFIX . "url_alias` SET `query` = 'information/promotion', `keyword` = '" . $this->db->escape($url) . "'");
		}
	}

	public function getpromotionListUrl($query) {
			$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "url_alias WHERE query = '" . $this->db->escape($query) . "'");
			if($query->rows){
				return $query->row['keyword'];
			}else{
				return false;
			}
	}
}
?>