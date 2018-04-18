<?php
class ModelCatalogAbouthome extends Model {
	public function getInformation($information_id) {
		$query = $this->db->query("SELECT DISTINCT * FROM " . DB_PREFIX . "about_home WHERE id = '" . (int)$information_id . "'  AND status = '1'");

		return $query->row;
	}
    public function getabouthomess($data = array()) {
        if ($data) {
            $sql = "SELECT * FROM " . DB_PREFIX . "abouthomes i LEFT JOIN " . DB_PREFIX . "abouthomes_description id ON (i.abouthomes_id = id.abouthomes_id) WHERE id.language_id = '" . (int)$this->config->get('config_language_id') . "'";

            $sort_data = array(
                'id.title',
                'i.sort_order'
            );

            if (isset($data['sort']) && in_array($data['sort'], $sort_data)) {
                $sql .= " ORDER BY " . $data['sort'];
            } else {
                $sql .= " ORDER BY id.title";
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
            $abouthomes_data = $this->cache->get('abouthomes.' . (int)$this->config->get('config_language_id'));

            if (!$abouthomes_data) {
                $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "abouthomes i LEFT JOIN " . DB_PREFIX . "abouthomes_description id ON (i.abouthomes_id = id.abouthomes_id) WHERE id.language_id = '" . (int)$this->config->get('config_language_id') . "' ORDER BY id.title");

                $abouthomes_data = $query->rows;

                $this->cache->set('abouthomes.' . (int)$this->config->get('config_language_id'), $abouthomes_data);
            }

            return $abouthomes_data;
        }
    }

	public function getInformations() {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "about_home i LEFT JOIN " . DB_PREFIX . "information_description id ON (i.information_id = id.information_id) LEFT JOIN " . DB_PREFIX . "information_to_store i2s ON (i.information_id = i2s.information_id) WHERE id.language_id = '" . (int)$this->config->get('config_language_id') . "' AND i2s.store_id = '" . (int)$this->config->get('config_store_id') . "' AND i.status = '1' ORDER BY i.sort_order, LCASE(id.title) ASC");

		return $query->rows;
	}


}