<?php
class ModelCatalogProdcat extends Model {
    public function addprodcat($data) {
        $this->db->query("INSERT INTO " . DB_PREFIX . "prodcat SET sort_order = '" . (int)$data['sort_order'] . "', bottom = '" . (isset($data['bottom']) ? (int)$data['bottom'] : 0) . "', status = '" . (int)$data['status'] . "'");

        $prodcat_id = $this->db->getLastId();

        foreach ($data['prodcat_description'] as $language_id => $value) {
            $this->db->query("INSERT INTO " . DB_PREFIX . "prodcat_description SET prodcat_id = '" . (int)$prodcat_id . "', language_id = '" . (int)$language_id . "', title = '" . $this->db->escape($value['title']) . "', description = '" . $this->db->escape($value['description']) . "', meta_title = '" . $this->db->escape($value['meta_title']) . "', meta_description = '" . $this->db->escape($value['meta_description']) . "', meta_keyword = '" . $this->db->escape($value['meta_keyword']) . "'");
        }

        if (isset($data['prodcat_store'])) {
            foreach ($data['prodcat_store'] as $store_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "prodcat_to_store SET prodcat_id = '" . (int)$prodcat_id . "', store_id = '" . (int)$store_id . "'");
            }
        }

        if (isset($data['prodcat_layout'])) {
            foreach ($data['prodcat_layout'] as $store_id => $layout_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "prodcat_to_layout SET prodcat_id = '" . (int)$prodcat_id . "', store_id = '" . (int)$store_id . "', layout_id = '" . (int)$layout_id . "'");
            }
        }

        if (isset($data['keyword'])) {
            $this->db->query("INSERT INTO " . DB_PREFIX . "url_alias SET query = 'prodcat_id=" . (int)$prodcat_id . "', keyword = '" . $this->db->escape($data['keyword']) . "'");
        }

        if (isset($data['product_category'])) {
            foreach ($data['product_category'] as $category_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "prodcat_to_category SET prodcat_id = '" . (int)$prodcat_id . "', category_id = '" . (int)$category_id . "'");
            }
        }
        if (isset($data['image'])) {
            $this->db->query("UPDATE " . DB_PREFIX . "prodcat SET image = '" . $this->db->escape($data['image']) . "' WHERE prodcat_id = '" . (int)$prodcat_id . "'");
        }

        $this->cache->delete('prodcat');

        return $prodcat_id;
    }

    public function editprodcat($prodcat_id, $data) {
        $this->db->query("UPDATE " . DB_PREFIX . "prodcat SET sort_order = '" . (int)$data['sort_order'] . "', bottom = '" . (isset($data['bottom']) ? (int)$data['bottom'] : 0) . "', status = '" . (int)$data['status'] . "' WHERE prodcat_id = '" . (int)$prodcat_id . "'");

        $this->db->query("DELETE FROM " . DB_PREFIX . "prodcat_description WHERE prodcat_id = '" . (int)$prodcat_id . "'");

        foreach ($data['prodcat_description'] as $language_id => $value) {
            $this->db->query("INSERT INTO " . DB_PREFIX . "prodcat_description SET prodcat_id = '" . (int)$prodcat_id . "', language_id = '" . (int)$language_id . "', title = '" . $this->db->escape($value['title']) . "', description = '" . $this->db->escape($value['description']) . "', meta_title = '" . $this->db->escape($value['meta_title']) . "', meta_description = '" . $this->db->escape($value['meta_description']) . "', meta_keyword = '" . $this->db->escape($value['meta_keyword']) . "'");
        }

        $this->db->query("DELETE FROM " . DB_PREFIX . "prodcat_to_store WHERE prodcat_id = '" . (int)$prodcat_id . "'");

        if (isset($data['prodcat_store'])) {
            foreach ($data['prodcat_store'] as $store_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "prodcat_to_store SET prodcat_id = '" . (int)$prodcat_id . "', store_id = '" . (int)$store_id . "'");
            }
        }

        $this->db->query("DELETE FROM " . DB_PREFIX . "prodcat_to_layout WHERE prodcat_id = '" . (int)$prodcat_id . "'");

        if (isset($data['prodcat_layout'])) {
            foreach ($data['prodcat_layout'] as $store_id => $layout_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "prodcat_to_layout SET prodcat_id = '" . (int)$prodcat_id . "', store_id = '" . (int)$store_id . "', layout_id = '" . (int)$layout_id . "'");
            }
        }

        $this->db->query("DELETE FROM " . DB_PREFIX . "url_alias WHERE query = 'prodcat_id=" . (int)$prodcat_id . "'");

        if ($data['keyword']) {
            $this->db->query("INSERT INTO " . DB_PREFIX . "url_alias SET query = 'prodcat_id=" . (int)$prodcat_id . "', keyword = '" . $this->db->escape($data['keyword']) . "'");
        }

        if (isset($data['image'])) {
            $this->db->query("UPDATE " . DB_PREFIX . "prodcat SET image = '" . $this->db->escape($data['image']) . "' WHERE prodcat_id = '" . (int)$prodcat_id . "'");
        }
        $this->db->query("DELETE FROM " . DB_PREFIX . "prodcat_to_category WHERE prodcat_id = '" . (int)$prodcat_id . "'");

        if (isset($data['product_category'])) {
            foreach ($data['product_category'] as $category_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "prodcat_to_category SET prodcat_id = '" . (int)$prodcat_id . "', category_id = '" . (int)$category_id . "'");
            }
        }

        $this->cache->delete('prodcat');
    }

    public function deleteprodcat($prodcat_id) {
        $this->db->query("DELETE FROM " . DB_PREFIX . "prodcat WHERE prodcat_id = '" . (int)$prodcat_id . "'");
        $this->db->query("DELETE FROM " . DB_PREFIX . "prodcat_description WHERE prodcat_id = '" . (int)$prodcat_id . "'");
        $this->db->query("DELETE FROM " . DB_PREFIX . "prodcat_to_store WHERE prodcat_id = '" . (int)$prodcat_id . "'");
        $this->db->query("DELETE FROM " . DB_PREFIX . "prodcat_to_layout WHERE prodcat_id = '" . (int)$prodcat_id . "'");
        $this->db->query("DELETE FROM " . DB_PREFIX . "url_alias WHERE query = 'prodcat_id=" . (int)$prodcat_id . "'");
        $this->db->query("DELETE FROM " . DB_PREFIX . "prodcat_to_category WHERE prodcat_id = '" . (int)$prodcat_id . "'");

        $this->cache->delete('prodcat');
    }

    public function getprodcat($prodcat_id) {
        $query = $this->db->query("SELECT DISTINCT *, (SELECT keyword FROM " . DB_PREFIX . "url_alias WHERE query = 'prodcat_id=" . (int)$prodcat_id . "') AS keyword FROM " . DB_PREFIX . "prodcat WHERE prodcat_id = '" . (int)$prodcat_id . "'");

        return $query->row;
    }

    public function getprodcats($data = array()) {
        if ($data) {
            $sql = "SELECT * FROM " . DB_PREFIX . "prodcat i LEFT JOIN " . DB_PREFIX . "prodcat_description id ON (i.prodcat_id = id.prodcat_id) WHERE id.language_id = '" . (int)$this->config->get('config_language_id') . "'";

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
            $prodcat_data = $this->cache->get('prodcat.' . (int)$this->config->get('config_language_id'));

            if (!$prodcat_data) {
                $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "prodcat i LEFT JOIN " . DB_PREFIX . "prodcat_description id ON (i.prodcat_id = id.prodcat_id) WHERE id.language_id = '" . (int)$this->config->get('config_language_id') . "' ORDER BY id.title");

                $prodcat_data = $query->rows;

                $this->cache->set('prodcat.' . (int)$this->config->get('config_language_id'), $prodcat_data);
            }

            return $prodcat_data;
        }
    }

    public function getprodcatDescriptions($prodcat_id) {
        $prodcat_description_data = array();

        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "prodcat_description WHERE prodcat_id = '" . (int)$prodcat_id . "'");

        foreach ($query->rows as $result) {
            $prodcat_description_data[$result['language_id']] = array(
                'title'            => $result['title'],
                'description'      => $result['description'],
                'meta_title'       => $result['meta_title'],
                'meta_description' => $result['meta_description'],
                'meta_keyword'     => $result['meta_keyword']
            );
        }

        return $prodcat_description_data;
    }

    public function getprodcatStores($prodcat_id) {
        $prodcat_store_data = array();

        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "prodcat_to_store WHERE prodcat_id = '" . (int)$prodcat_id . "'");

        foreach ($query->rows as $result) {
            $prodcat_store_data[] = $result['store_id'];
        }

        return $prodcat_store_data;
    }
    public function getProductCategories($product_id) {
        $product_category_data = array();

        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "prodcat_to_category WHERE prodcat_id = '" . (int)$product_id . "'");

        foreach ($query->rows as $result) {
            $product_category_data[] = $result['category_id'];
        }

        return $product_category_data;
    }
    public function getCategories($data = array()) {
        $sql = "SELECT cp.cat_prod_id AS cat_prod_id, GROUP_CONCAT(cd1.name ORDER BY cp.level SEPARATOR '&nbsp;&nbsp;&gt;&nbsp;&nbsp;')";
        $sql .= "AS name, c1.parent_id, c1.sort_order FROM " . DB_PREFIX . "cat_prod_path cp ";
        $sql .= "LEFT JOIN " . DB_PREFIX . "cat_prod c1 ON (cp.cat_prod_id = c1.cat_prod_id)";
        $sql .= "LEFT JOIN " . DB_PREFIX . "cat_prod c2 ON (cp.path_id = c2.cat_prod_id) ";
        $sql .= "LEFT JOIN " . DB_PREFIX . "cat_prod_description cd1 ON (cp.path_id = cd1.cat_prod_id) ";
        $sql .= "LEFT JOIN " . DB_PREFIX . "cat_prod_description cd2 ON (cp.cat_prod_id = cd2.cat_prod_id) ";
        $sql .= " WHERE cd1.language_id = '" . (int)$this->config->get('config_language_id') . "' AND cd2.language_id = '" . (int)$this->config->get('config_language_id') . "'";

        if (!empty($data['filter_name'])) {
            $sql .= " AND cd2.name LIKE '%" . $this->db->escape($data['filter_name']) . "%'";
        }

        $sql .= " GROUP BY cp.cat_prod_id";

        $sort_data = array(
            'name',
            'sort_order'
        );

        if (isset($data['sort']) && in_array($data['sort'], $sort_data)) {
            $sql .= " ORDER BY " . $data['sort'];
        } else {
            $sql .= " ORDER BY sort_order";
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
    }

    public function getprodcatLayouts($prodcat_id) {
        $prodcat_layout_data = array();

        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "prodcat_to_layout WHERE prodcat_id = '" . (int)$prodcat_id . "'");

        foreach ($query->rows as $result) {
            $prodcat_layout_data[$result['store_id']] = $result['layout_id'];
        }

        return $prodcat_layout_data;
    }

    public function getTotalprodcats() {
        $query = $this->db->query("SELECT COUNT(*) AS total FROM " . DB_PREFIX . "prodcat");

        return $query->row['total'];
    }

    public function getTotalprodcatsByLayoutId($layout_id) {
        $query = $this->db->query("SELECT COUNT(*) AS total FROM " . DB_PREFIX . "prodcat_to_layout WHERE layout_id = '" . (int)$layout_id . "'");

        return $query->row['total'];
    }
}