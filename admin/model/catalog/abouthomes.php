<?php
class ModelCatalogAbouthomes extends Model {
    public function addabouthomes($data) {
        $this->db->query("INSERT INTO " . DB_PREFIX . "abouthomes SET sort_order = '" . (int)$data['sort_order'] . "', bottom = '" . (isset($data['bottom']) ? (int)$data['bottom'] : 0) . "', status = '" . (int)$data['status'] . "'");

        $abouthomes_id = $this->db->getLastId();

        foreach ($data['abouthomes_description'] as $language_id => $value) {
            $this->db->query("INSERT INTO " . DB_PREFIX . "abouthomes_description SET abouthomes_id = '" . (int)$abouthomes_id . "', language_id = '" . (int)$language_id . "', title = '" . $this->db->escape($value['title']) . "', description = '" . $this->db->escape($value['description']) . "', meta_title = '" . $this->db->escape($value['meta_title']) . "', meta_description = '" . $this->db->escape($value['meta_description']) . "', meta_keyword = '" . $this->db->escape($value['meta_keyword']) . "'");
        }

        if (isset($data['abouthomes_store'])) {
            foreach ($data['abouthomes_store'] as $store_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "abouthomes_to_store SET abouthomes_id = '" . (int)$abouthomes_id . "', store_id = '" . (int)$store_id . "'");
            }
        }

        if (isset($data['abouthomes_layout'])) {
            foreach ($data['abouthomes_layout'] as $store_id => $layout_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "abouthomes_to_layout SET abouthomes_id = '" . (int)$abouthomes_id . "', store_id = '" . (int)$store_id . "', layout_id = '" . (int)$layout_id . "'");
            }
        }

        if (isset($data['keyword'])) {
            $this->db->query("INSERT INTO " . DB_PREFIX . "url_alias SET query = 'abouthomes_id=" . (int)$abouthomes_id . "', keyword = '" . $this->db->escape($data['keyword']) . "'");
        }

        $this->cache->delete('abouthomes');

        return $abouthomes_id;
    }

    public function editabouthomes($abouthomes_id, $data) {
        $this->db->query("UPDATE " . DB_PREFIX . "abouthomes SET sort_order = '" . (int)$data['sort_order'] . "', bottom = '" . (isset($data['bottom']) ? (int)$data['bottom'] : 0) . "', status = '" . (int)$data['status'] . "' WHERE abouthomes_id = '" . (int)$abouthomes_id . "'");

        $this->db->query("DELETE FROM " . DB_PREFIX . "abouthomes_description WHERE abouthomes_id = '" . (int)$abouthomes_id . "'");

        foreach ($data['abouthomes_description'] as $language_id => $value) {
            $this->db->query("INSERT INTO " . DB_PREFIX . "abouthomes_description SET abouthomes_id = '" . (int)$abouthomes_id . "', language_id = '" . (int)$language_id . "', title = '" . $this->db->escape($value['title']) . "', description = '" . $this->db->escape($value['description']) . "', meta_title = '" . $this->db->escape($value['meta_title']) . "', meta_description = '" . $this->db->escape($value['meta_description']) . "', meta_keyword = '" . $this->db->escape($value['meta_keyword']) . "'");
        }

        $this->db->query("DELETE FROM " . DB_PREFIX . "abouthomes_to_store WHERE abouthomes_id = '" . (int)$abouthomes_id . "'");

        if (isset($data['abouthomes_store'])) {
            foreach ($data['abouthomes_store'] as $store_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "abouthomes_to_store SET abouthomes_id = '" . (int)$abouthomes_id . "', store_id = '" . (int)$store_id . "'");
            }
        }

        $this->db->query("DELETE FROM " . DB_PREFIX . "abouthomes_to_layout WHERE abouthomes_id = '" . (int)$abouthomes_id . "'");

        if (isset($data['abouthomes_layout'])) {
            foreach ($data['abouthomes_layout'] as $store_id => $layout_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "abouthomes_to_layout SET abouthomes_id = '" . (int)$abouthomes_id . "', store_id = '" . (int)$store_id . "', layout_id = '" . (int)$layout_id . "'");
            }
        }

        $this->db->query("DELETE FROM " . DB_PREFIX . "url_alias WHERE query = 'abouthomes_id=" . (int)$abouthomes_id . "'");

        if ($data['keyword']) {
            $this->db->query("INSERT INTO " . DB_PREFIX . "url_alias SET query = 'abouthomes_id=" . (int)$abouthomes_id . "', keyword = '" . $this->db->escape($data['keyword']) . "'");
        }

        $this->cache->delete('abouthomes');
    }

    public function deleteabouthomes($abouthomes_id) {
        $this->db->query("DELETE FROM " . DB_PREFIX . "abouthomes WHERE abouthomes_id = '" . (int)$abouthomes_id . "'");
        $this->db->query("DELETE FROM " . DB_PREFIX . "abouthomes_description WHERE abouthomes_id = '" . (int)$abouthomes_id . "'");
        $this->db->query("DELETE FROM " . DB_PREFIX . "abouthomes_to_store WHERE abouthomes_id = '" . (int)$abouthomes_id . "'");
        $this->db->query("DELETE FROM " . DB_PREFIX . "abouthomes_to_layout WHERE abouthomes_id = '" . (int)$abouthomes_id . "'");
        $this->db->query("DELETE FROM " . DB_PREFIX . "url_alias WHERE query = 'abouthomes_id=" . (int)$abouthomes_id . "'");

        $this->cache->delete('abouthomes');
    }

    public function getabouthomes($abouthomes_id) {
        $query = $this->db->query("SELECT DISTINCT *, (SELECT keyword FROM " . DB_PREFIX . "url_alias WHERE query = 'abouthomes_id=" . (int)$abouthomes_id . "') AS keyword FROM " . DB_PREFIX . "abouthomes WHERE abouthomes_id = '" . (int)$abouthomes_id . "'");

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

    public function getabouthomesDescriptions($abouthomes_id) {
        $abouthomes_description_data = array();

        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "abouthomes_description WHERE abouthomes_id = '" . (int)$abouthomes_id . "'");

        foreach ($query->rows as $result) {
            $abouthomes_description_data[$result['language_id']] = array(
                'title'            => $result['title'],
                'description'      => $result['description'],
                'meta_title'       => $result['meta_title'],
                'meta_description' => $result['meta_description'],
                'meta_keyword'     => $result['meta_keyword']
            );
        }

        return $abouthomes_description_data;
    }

    public function getabouthomesStores($abouthomes_id) {
        $abouthomes_store_data = array();

        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "abouthomes_to_store WHERE abouthomes_id = '" . (int)$abouthomes_id . "'");

        foreach ($query->rows as $result) {
            $abouthomes_store_data[] = $result['store_id'];
        }

        return $abouthomes_store_data;
    }

    public function getabouthomesLayouts($abouthomes_id) {
        $abouthomes_layout_data = array();

        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "abouthomes_to_layout WHERE abouthomes_id = '" . (int)$abouthomes_id . "'");

        foreach ($query->rows as $result) {
            $abouthomes_layout_data[$result['store_id']] = $result['layout_id'];
        }

        return $abouthomes_layout_data;
    }

    public function getTotalabouthomess() {
        $query = $this->db->query("SELECT COUNT(*) AS total FROM " . DB_PREFIX . "abouthomes");

        return $query->row['total'];
    }

    public function getTotalabouthomessByLayoutId($layout_id) {
        $query = $this->db->query("SELECT COUNT(*) AS total FROM " . DB_PREFIX . "abouthomes_to_layout WHERE layout_id = '" . (int)$layout_id . "'");

        return $query->row['total'];
    }
}