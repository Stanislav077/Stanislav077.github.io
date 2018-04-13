<?php
class ModelCatalogCatprod extends Model {
    public function addcat_prod($data) {
        $this->db->query("INSERT INTO " . DB_PREFIX . "cat_prod SET parent_id = '" . (int)$data['parent_id'] . "', `top` = '" . (isset($data['top']) ? (int)$data['top'] : 0) . "', `column` = '" . (int)$data['column'] . "', sort_order = '" . (int)$data['sort_order'] . "', status = '" . (int)$data['status'] . "', date_modified = NOW(), date_added = NOW()");

        $cat_prod_id = $this->db->getLastId();

        if (isset($data['image'])) {
            $this->db->query("UPDATE " . DB_PREFIX . "cat_prod SET image = '" . $this->db->escape($data['image']) . "' WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");
        }
        if (isset($data['image_sub'])) {
            $this->db->query("UPDATE " . DB_PREFIX . "cat_prod SET image_sub = '" . $this->db->escape($data['image_sub']) . "' WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");
        }

        foreach ($data['cat_prod_description'] as $language_id => $value) {
            $this->db->query("INSERT INTO " . DB_PREFIX . "cat_prod_description SET cat_prod_id = '" . (int)$cat_prod_id . "', language_id = '" . (int)$language_id . "', name = '" . $this->db->escape($value['name']) . "', description = '" . $this->db->escape($value['description']) . "', meta_title = '" . $this->db->escape($value['meta_title']) . "', meta_description = '" . $this->db->escape($value['meta_description']) . "', meta_keyword = '" . $this->db->escape($value['meta_keyword']) . "'");
        }

        // MySQL Hierarchical Data Closure Table Pattern
        $level = 0;

        $query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "cat_prod_path` WHERE cat_prod_id = '" . (int)$data['parent_id'] . "' ORDER BY `level` ASC");

        foreach ($query->rows as $result) {
            $this->db->query("INSERT INTO `" . DB_PREFIX . "cat_prod_path` SET `cat_prod_id` = '" . (int)$cat_prod_id . "', `path_id` = '" . (int)$result['path_id'] . "', `level` = '" . (int)$level . "'");

            $level++;
        }

        $this->db->query("INSERT INTO `" . DB_PREFIX . "cat_prod_path` SET `cat_prod_id` = '" . (int)$cat_prod_id . "', `path_id` = '" . (int)$cat_prod_id . "', `level` = '" . (int)$level . "'");

        if (isset($data['cat_prod_filter'])) {
            foreach ($data['cat_prod_filter'] as $filter_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "cat_prod_filter SET cat_prod_id = '" . (int)$cat_prod_id . "', filter_id = '" . (int)$filter_id . "'");
            }
        }

        if (isset($data['cat_prod_store'])) {
            foreach ($data['cat_prod_store'] as $store_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "cat_prod_to_store SET cat_prod_id = '" . (int)$cat_prod_id . "', store_id = '" . (int)$store_id . "'");
            }
        }

        // Set which layout to use with this cat_prod
        if (isset($data['cat_prod_layout'])) {
            foreach ($data['cat_prod_layout'] as $store_id => $layout_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "cat_prod_to_layout SET cat_prod_id = '" . (int)$cat_prod_id . "', store_id = '" . (int)$store_id . "', layout_id = '" . (int)$layout_id . "'");
            }
        }

        if (isset($data['keyword'])) {
            $this->db->query("INSERT INTO " . DB_PREFIX . "url_alias SET query = 'cat_prod_id=" . (int)$cat_prod_id . "', keyword = '" . $this->db->escape($data['keyword']) . "'");
        }

        $this->cache->delete('cat_prod');

        return $cat_prod_id;
    }

    public function editcat_prod($cat_prod_id, $data) {
        $this->db->query("UPDATE " . DB_PREFIX . "cat_prod SET parent_id = '" . (int)$data['parent_id'] . "', `top` = '" . (isset($data['top']) ? (int)$data['top'] : 0) . "', `column` = '" . (int)$data['column'] . "', sort_order = '" . (int)$data['sort_order'] . "', status = '" . (int)$data['status'] . "', date_modified = NOW() WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");

        if (isset($data['image'])) {
            $this->db->query("UPDATE " . DB_PREFIX . "cat_prod SET image = '" . $this->db->escape($data['image']) . "' WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");
        }
        if (isset($data['image_sub'])) {
            $this->db->query("UPDATE " . DB_PREFIX . "cat_prod SET image_sub = '" . $this->db->escape($data['image_sub']) . "' WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");
        }

        $this->db->query("DELETE FROM " . DB_PREFIX . "cat_prod_description WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");

        foreach ($data['cat_prod_description'] as $language_id => $value) {
            $this->db->query("INSERT INTO " . DB_PREFIX . "cat_prod_description SET cat_prod_id = '" . (int)$cat_prod_id . "', language_id = '" . (int)$language_id . "', name = '" . $this->db->escape($value['name']) . "', description = '" . $this->db->escape($value['description']) . "', meta_title = '" . $this->db->escape($value['meta_title']) . "', meta_description = '" . $this->db->escape($value['meta_description']) . "', meta_keyword = '" . $this->db->escape($value['meta_keyword']) . "'");
        }

        // MySQL Hierarchical Data Closure Table Pattern
        $query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "cat_prod_path` WHERE path_id = '" . (int)$cat_prod_id . "' ORDER BY level ASC");

        if ($query->rows) {
            foreach ($query->rows as $cat_prod_path) {
                // Delete the path below the current one
                $this->db->query("DELETE FROM `" . DB_PREFIX . "cat_prod_path` WHERE cat_prod_id = '" . (int)$cat_prod_path['cat_prod_id'] . "' AND level < '" . (int)$cat_prod_path['level'] . "'");

                $path = array();

                // Get the nodes new parents
                $query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "cat_prod_path` WHERE cat_prod_id = '" . (int)$data['parent_id'] . "' ORDER BY level ASC");

                foreach ($query->rows as $result) {
                    $path[] = $result['path_id'];
                }

                // Get whats left of the nodes current path
                $query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "cat_prod_path` WHERE cat_prod_id = '" . (int)$cat_prod_path['cat_prod_id'] . "' ORDER BY level ASC");

                foreach ($query->rows as $result) {
                    $path[] = $result['path_id'];
                }

                // Combine the paths with a new level
                $level = 0;

                foreach ($path as $path_id) {
                    $this->db->query("REPLACE INTO `" . DB_PREFIX . "cat_prod_path` SET cat_prod_id = '" . (int)$cat_prod_path['cat_prod_id'] . "', `path_id` = '" . (int)$path_id . "', level = '" . (int)$level . "'");

                    $level++;
                }
            }
        } else {
            // Delete the path below the current one
            $this->db->query("DELETE FROM `" . DB_PREFIX . "cat_prod_path` WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");

            // Fix for records with no paths
            $level = 0;

            $query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "cat_prod_path` WHERE cat_prod_id = '" . (int)$data['parent_id'] . "' ORDER BY level ASC");

            foreach ($query->rows as $result) {
                $this->db->query("INSERT INTO `" . DB_PREFIX . "cat_prod_path` SET cat_prod_id = '" . (int)$cat_prod_id . "', `path_id` = '" . (int)$result['path_id'] . "', level = '" . (int)$level . "'");

                $level++;
            }

            $this->db->query("REPLACE INTO `" . DB_PREFIX . "cat_prod_path` SET cat_prod_id = '" . (int)$cat_prod_id . "', `path_id` = '" . (int)$cat_prod_id . "', level = '" . (int)$level . "'");
        }

        $this->db->query("DELETE FROM " . DB_PREFIX . "cat_prod_filter WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");

        if (isset($data['cat_prod_filter'])) {
            foreach ($data['cat_prod_filter'] as $filter_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "cat_prod_filter SET cat_prod_id = '" . (int)$cat_prod_id . "', filter_id = '" . (int)$filter_id . "'");
            }
        }

        $this->db->query("DELETE FROM " . DB_PREFIX . "cat_prod_to_store WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");

        if (isset($data['cat_prod_store'])) {
            foreach ($data['cat_prod_store'] as $store_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "cat_prod_to_store SET cat_prod_id = '" . (int)$cat_prod_id . "', store_id = '" . (int)$store_id . "'");
            }
        }

        $this->db->query("DELETE FROM " . DB_PREFIX . "cat_prod_to_layout WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");

        if (isset($data['cat_prod_layout'])) {
            foreach ($data['cat_prod_layout'] as $store_id => $layout_id) {
                $this->db->query("INSERT INTO " . DB_PREFIX . "cat_prod_to_layout SET cat_prod_id = '" . (int)$cat_prod_id . "', store_id = '" . (int)$store_id . "', layout_id = '" . (int)$layout_id . "'");
            }
        }

        $this->db->query("DELETE FROM " . DB_PREFIX . "url_alias WHERE query = 'cat_prod_id=" . (int)$cat_prod_id . "'");

        if ($data['keyword']) {
            $this->db->query("INSERT INTO " . DB_PREFIX . "url_alias SET query = 'cat_prod_id=" . (int)$cat_prod_id . "', keyword = '" . $this->db->escape($data['keyword']) . "'");
        }

        $this->cache->delete('cat_prod');
    }

    public function deletecat_prod($cat_prod_id) {
        $this->db->query("DELETE FROM " . DB_PREFIX . "cat_prod_path WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");

        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "cat_prod_path WHERE path_id = '" . (int)$cat_prod_id . "'");

        foreach ($query->rows as $result) {
            $this->deletecat_prod($result['cat_prod_id']);
        }

        $this->db->query("DELETE FROM " . DB_PREFIX . "cat_prod WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");
        $this->db->query("DELETE FROM " . DB_PREFIX . "cat_prod_description WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");
        $this->db->query("DELETE FROM " . DB_PREFIX . "cat_prod_filter WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");
        $this->db->query("DELETE FROM " . DB_PREFIX . "cat_prod_to_store WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");
        $this->db->query("DELETE FROM " . DB_PREFIX . "cat_prod_to_layout WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");

        $this->db->query("DELETE FROM " . DB_PREFIX . "url_alias WHERE query = 'cat_prod_id=" . (int)$cat_prod_id . "'");


        $this->cache->delete('cat_prod');
    }

    public function repairCategories($parent_id = 0) {
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "cat_prod WHERE parent_id = '" . (int)$parent_id . "'");

        foreach ($query->rows as $cat_prod) {
            // Delete the path below the current one
            $this->db->query("DELETE FROM `" . DB_PREFIX . "cat_prod_path` WHERE cat_prod_id = '" . (int)$cat_prod['cat_prod_id'] . "'");

            // Fix for records with no paths
            $level = 0;

            $query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "cat_prod_path` WHERE cat_prod_id = '" . (int)$parent_id . "' ORDER BY level ASC");

            foreach ($query->rows as $result) {
                $this->db->query("INSERT INTO `" . DB_PREFIX . "cat_prod_path` SET cat_prod_id = '" . (int)$cat_prod['cat_prod_id'] . "', `path_id` = '" . (int)$result['path_id'] . "', level = '" . (int)$level . "'");

                $level++;
            }

            $this->db->query("REPLACE INTO `" . DB_PREFIX . "cat_prod_path` SET cat_prod_id = '" . (int)$cat_prod['cat_prod_id'] . "', `path_id` = '" . (int)$cat_prod['cat_prod_id'] . "', level = '" . (int)$level . "'");

            $this->repairCategories($cat_prod['cat_prod_id']);
        }
    }

    public function getcat_prod($cat_prod_id) {
        $query = $this->db->query("SELECT DISTINCT *, (SELECT GROUP_CONCAT(cd1.name ORDER BY level SEPARATOR '&nbsp;&nbsp;&gt;&nbsp;&nbsp;') FROM " . DB_PREFIX . "cat_prod_path cp LEFT JOIN " . DB_PREFIX . "cat_prod_description cd1 ON (cp.path_id = cd1.cat_prod_id AND cp.cat_prod_id != cp.path_id) WHERE cp.cat_prod_id = c.cat_prod_id AND cd1.language_id = '" . (int)$this->config->get('config_language_id') . "' GROUP BY cp.cat_prod_id) AS path, (SELECT DISTINCT keyword FROM " . DB_PREFIX . "url_alias WHERE query = 'cat_prod_id=" . (int)$cat_prod_id . "') AS keyword FROM " . DB_PREFIX . "cat_prod c LEFT JOIN " . DB_PREFIX . "cat_prod_description cd2 ON (c.cat_prod_id = cd2.cat_prod_id) WHERE c.cat_prod_id = '" . (int)$cat_prod_id . "' AND cd2.language_id = '" . (int)$this->config->get('config_language_id') . "'");

        return $query->row;
    }

    public function getCategories($data = array()) {
        $sql = "SELECT cp.cat_prod_id AS cat_prod_id, GROUP_CONCAT(cd1.name ORDER BY cp.level SEPARATOR '&nbsp;&nbsp;&gt;&nbsp;&nbsp;') AS name, c1.parent_id, c1.sort_order FROM " . DB_PREFIX . "cat_prod_path cp LEFT JOIN " . DB_PREFIX . "cat_prod c1 ON (cp.cat_prod_id = c1.cat_prod_id) LEFT JOIN " . DB_PREFIX . "cat_prod c2 ON (cp.path_id = c2.cat_prod_id) LEFT JOIN " . DB_PREFIX . "cat_prod_description cd1 ON (cp.path_id = cd1.cat_prod_id) LEFT JOIN " . DB_PREFIX . "cat_prod_description cd2 ON (cp.cat_prod_id = cd2.cat_prod_id) WHERE cd1.language_id = '" . (int)$this->config->get('config_language_id') . "' AND cd2.language_id = '" . (int)$this->config->get('config_language_id') . "'";

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

    public function getcat_prodDescriptions($cat_prod_id) {
        $cat_prod_description_data = array();

        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "cat_prod_description WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");

        foreach ($query->rows as $result) {
            $cat_prod_description_data[$result['language_id']] = array(
                'name'             => $result['name'],
                'meta_title'       => $result['meta_title'],
                'meta_description' => $result['meta_description'],
                'meta_keyword'     => $result['meta_keyword'],
                'description'      => $result['description']
            );
        }

        return $cat_prod_description_data;
    }

    public function getcat_prodPath($cat_prod_id) {
        $query = $this->db->query("SELECT cat_prod_id, path_id, level FROM " . DB_PREFIX . "cat_prod_path WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");

        return $query->rows;
    }

    public function getcat_prodFilters($cat_prod_id) {
        $cat_prod_filter_data = array();

        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "cat_prod_filter WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");

        foreach ($query->rows as $result) {
            $cat_prod_filter_data[] = $result['filter_id'];
        }

        return $cat_prod_filter_data;
    }

    public function getcat_prodStores($cat_prod_id) {
        $cat_prod_store_data = array();

        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "cat_prod_to_store WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");

        foreach ($query->rows as $result) {
            $cat_prod_store_data[] = $result['store_id'];
        }

        return $cat_prod_store_data;
    }

    public function getcat_prodLayouts($cat_prod_id) {
        $cat_prod_layout_data = array();

        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "cat_prod_to_layout WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");

        foreach ($query->rows as $result) {
            $cat_prod_layout_data[$result['store_id']] = $result['layout_id'];
        }

        return $cat_prod_layout_data;
    }

    public function getTotalCategories() {
        $query = $this->db->query("SELECT COUNT(*) AS total FROM " . DB_PREFIX . "cat_prod");

        return $query->row['total'];
    }

    public function getTotalCategoriesByLayoutId($layout_id) {
        $query = $this->db->query("SELECT COUNT(*) AS total FROM " . DB_PREFIX . "cat_prod_to_layout WHERE layout_id = '" . (int)$layout_id . "'");

        return $query->row['total'];
    }
}
