<?php
class ModelCatalogCatprod extends Model {
    public function getcat_prod($cat_prod_id) {
        if($cat_prod_id == 0){
            $query = $this->db->query("SELECT DISTINCT * FROM " . DB_PREFIX . "cat_prod c LEFT JOIN " . DB_PREFIX . "cat_prod_description cd ON (c.cat_prod_id = cd.cat_prod_id) LEFT JOIN " . DB_PREFIX . "cat_prod_to_store c2s ON (c.cat_prod_id = c2s.cat_prod_id) WHERE  cd.language_id = '" . (int)$this->config->get('config_language_id') . "' AND c2s.store_id = '" . (int)$this->config->get('config_store_id') . "' AND c.status = '1'");

        }else{
            $query = $this->db->query("SELECT DISTINCT * FROM " . DB_PREFIX . "cat_prod c LEFT JOIN " . DB_PREFIX . "cat_prod_description cd ON (c.cat_prod_id = cd.cat_prod_id) LEFT JOIN " . DB_PREFIX . "cat_prod_to_store c2s ON (c.cat_prod_id = c2s.cat_prod_id) WHERE c.cat_prod_id = '" . (int)$cat_prod_id . "' AND cd.language_id = '" . (int)$this->config->get('config_language_id') . "' AND c2s.store_id = '" . (int)$this->config->get('config_store_id') . "' AND c.status = '1'");

        }

        return $query->row;
    }

    public function getCategories($parent_id = 0) {
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "cat_prod c LEFT JOIN " . DB_PREFIX . "cat_prod_description cd ON (c.cat_prod_id = cd.cat_prod_id) LEFT JOIN " . DB_PREFIX . "cat_prod_to_store c2s ON (c.cat_prod_id = c2s.cat_prod_id) WHERE c.parent_id = '" . (int)$parent_id . "' AND cd.language_id = '" . (int)$this->config->get('config_language_id') . "' AND c2s.store_id = '" . (int)$this->config->get('config_store_id') . "'  AND c.status = '1' ORDER BY c.sort_order, LCASE(cd.name)");

        return $query->rows;
    }
    public function getCategoriesAll($parent_id = 0) {
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "cat_prod c LEFT JOIN " . DB_PREFIX . "cat_prod_description cd ON (c.cat_prod_id = cd.cat_prod_id) LEFT JOIN " . DB_PREFIX . "cat_prod_to_store c2s ON (c.cat_prod_id = c2s.cat_prod_id) WHERE c.parent_id = '" . (int)$parent_id . "' AND cd.language_id = '" . (int)$this->config->get('config_language_id') . "' AND c2s.store_id = '" . (int)$this->config->get('config_store_id') . "'  AND c.status = '1' ORDER BY c.sort_order, LCASE(cd.name)");

        return $query->rows;
    }
    public function getCategoriesHome($parent_id = 0) {
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "cat_prod c LEFT JOIN " . DB_PREFIX . "cat_prod_description cd ON (c.cat_prod_id = cd.cat_prod_id) LEFT JOIN " . DB_PREFIX . "cat_prod_to_store c2s ON (c.cat_prod_id = c2s.cat_prod_id) WHERE c.parent_id = '" . (int)$parent_id . "' AND cd.language_id = '" . (int)$this->config->get('config_language_id') . "' AND c2s.store_id = '" . (int)$this->config->get('config_store_id') . "'  AND c.status = '1' ORDER BY c.sort_order, LCASE(cd.name) LIMIT 6");

        return $query->rows;
    }

    public function getcat_prodFilters($cat_prod_id) {
        $implode = array();

        $query = $this->db->query("SELECT filter_id FROM " . DB_PREFIX . "cat_prod_filter WHERE cat_prod_id = '" . (int)$cat_prod_id . "'");

        foreach ($query->rows as $result) {
            $implode[] = (int)$result['filter_id'];
        }

        $filter_group_data = array();

        if ($implode) {
            $filter_group_query = $this->db->query("SELECT DISTINCT f.filter_group_id, fgd.name, fg.sort_order FROM " . DB_PREFIX . "filter f LEFT JOIN " . DB_PREFIX . "filter_group fg ON (f.filter_group_id = fg.filter_group_id) LEFT JOIN " . DB_PREFIX . "filter_group_description fgd ON (fg.filter_group_id = fgd.filter_group_id) WHERE f.filter_id IN (" . implode(',', $implode) . ") AND fgd.language_id = '" . (int)$this->config->get('config_language_id') . "' GROUP BY f.filter_group_id ORDER BY fg.sort_order, LCASE(fgd.name)");

            foreach ($filter_group_query->rows as $filter_group) {
                $filter_data = array();

                $filter_query = $this->db->query("SELECT DISTINCT f.filter_id, fd.name FROM " . DB_PREFIX . "filter f LEFT JOIN " . DB_PREFIX . "filter_description fd ON (f.filter_id = fd.filter_id) WHERE f.filter_id IN (" . implode(',', $implode) . ") AND f.filter_group_id = '" . (int)$filter_group['filter_group_id'] . "' AND fd.language_id = '" . (int)$this->config->get('config_language_id') . "' ORDER BY f.sort_order, LCASE(fd.name)");

                foreach ($filter_query->rows as $filter) {
                    $filter_data[] = array(
                        'filter_id' => $filter['filter_id'],
                        'name'      => $filter['name']
                    );
                }

                if ($filter_data) {
                    $filter_group_data[] = array(
                        'filter_group_id' => $filter_group['filter_group_id'],
                        'name'            => $filter_group['name'],
                        'filter'          => $filter_data
                    );
                }
            }
        }

        return $filter_group_data;
    }

    public function getcat_prodLayoutId($cat_prod_id) {
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "cat_prod_to_layout WHERE cat_prod_id = '" . (int)$cat_prod_id . "' AND store_id = '" . (int)$this->config->get('config_store_id') . "'");

        if ($query->num_rows) {
            return $query->row['layout_id'];
        } else {
            return 0;
        }
    }

    public function getTotalCategoriesBycat_prodId($parent_id = 0) {
        $query = $this->db->query("SELECT COUNT(*) AS total FROM " . DB_PREFIX . "cat_prod c LEFT JOIN " . DB_PREFIX . "cat_prod_to_store c2s ON (c.cat_prod_id = c2s.cat_prod_id) WHERE c.parent_id = '" . (int)$parent_id . "' AND c2s.store_id = '" . (int)$this->config->get('config_store_id') . "' AND c.status = '1'");

        return $query->row['total'];
    }
    public function getTotalCategoriesBycat_prodIdCat($data = array()) {
        $query = $this->db->query("SELECT COUNT(*) AS total FROM " . DB_PREFIX . "prodcat c LEFT JOIN " . DB_PREFIX . "prodcat_to_store c2s ON (c.prodcat_id = c2s.prodcat_id) WHERE  c2s.store_id = '" . (int)$this->config->get('config_store_id') . "' AND c.status = '1'");

        return $query->row['total'];
    }

    public function getprodCat($data = array()) {


        $sql = "SELECT * FROM " . DB_PREFIX . "prodcat_to_category  WHERE  category_id='".$data['filter_cat_prod_id']."'";

        if (isset($data['start']) || isset($data['limit'])) {
            if ($data['start'] < 0) {
                $data['start'] = 0;
            }

            if ($data['limit'] < 1) {
                $data['limit'] = 20;
            }

            $sql .= " LIMIT " . (int)$data['start'] . "," . (int)$data['limit'];
        }
        $product_data = array();

        $query = $this->db->query($sql);

//        foreach ($query->rows as $result) {
//            $product_data[$result['prodcat_id']] = $this->getProduct($result['prodcat_id']);
//        }

        return $query->rows;
    }
    public function getprodCatId($prod_id) {
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "prodcat p LEFT JOIN " . DB_PREFIX . "prodcat_description pd ON (p.prodcat_id = pd.prodcat_id)  WHERE p.prodcat_id='".$prod_id."' ");

        return $query->rows;
    }

}