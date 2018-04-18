<?php
class ModelCatalogreviewabout extends Model {
    public function addreviewabout($data) {
        $this->db->query("INSERT INTO " . DB_PREFIX . "reviewabout SET author = '" . $this->db->escape($data['author']) . "',  text = '" . $this->db->escape(strip_tags($data['text'])) . "', rating = '" . (int)$data['rating'] . "', status = '" . (int)$data['status'] . "', date_added = '" . $this->db->escape($data['date_added']) . "'");

        $reviewabout_id = $this->db->getLastId();

        $this->cache->delete('product');

        return $reviewabout_id;
    }

    public function editreviewabout($reviewabout_id, $data) {
        $this->db->query("UPDATE " . DB_PREFIX . "reviewabout SET author = '" . $this->db->escape($data['author']) . "', text = '" . $this->db->escape(strip_tags($data['text'])) . "', rating = '" . (int)$data['rating'] . "', status = '" . (int)$data['status'] . "', date_added = '" . $this->db->escape($data['date_added']) . "', date_modified = NOW() WHERE reviewabout_id = '" . (int)$reviewabout_id . "'");

        $this->cache->delete('product');
    }

    public function deletereviewabout($reviewabout_id) {
        $this->db->query("DELETE FROM " . DB_PREFIX . "reviewabout WHERE reviewabout_id = '" . (int)$reviewabout_id . "'");

        $this->cache->delete('product');
    }

    public function getreviewabout($reviewabout_id) {
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "reviewabout r WHERE r.reviewabout_id = '" . (int)$reviewabout_id . "'");

        return $query->row;
    }

    public function getreviewabouts($data = array()) {
        $sql = "SELECT r.reviewabout_id,  r.author, r.rating, r.status, r.date_added FROM " . DB_PREFIX . "reviewabout r  WHERE 1";

        if (!empty($data['filter_product'])) {
            $sql .= " AND pd.name LIKE '" . $this->db->escape($data['filter_product']) . "%'";
        }

        if (!empty($data['filter_author'])) {
            $sql .= " AND r.author LIKE '" . $this->db->escape($data['filter_author']) . "%'";
        }

        if (isset($data['filter_status']) && !is_null($data['filter_status'])) {
            $sql .= " AND r.status = '" . (int)$data['filter_status'] . "'";
        }

        if (!empty($data['filter_date_added'])) {
            $sql .= " AND DATE(r.date_added) = DATE('" . $this->db->escape($data['filter_date_added']) . "')";
        }

        $sort_data = array(
            'pd.name',
            'r.author',
            'r.rating',
            'r.status',
            'r.date_added'
        );

        if (isset($data['sort']) && in_array($data['sort'], $sort_data)) {
            $sql .= " ORDER BY " . $data['sort'];
        } else {
            $sql .= " ORDER BY r.date_added";
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

    public function getTotalreviewabouts($data = array()) {
        $sql = "SELECT COUNT(*) AS total FROM " . DB_PREFIX . "reviewabout r  WHERE 1";

        if (!empty($data['filter_product'])) {
            $sql .= " AND pd.name LIKE '" . $this->db->escape($data['filter_product']) . "%'";
        }

        if (!empty($data['filter_author'])) {
            $sql .= " AND r.author LIKE '" . $this->db->escape($data['filter_author']) . "%'";
        }

        if (isset($data['filter_status']) && !is_null($data['filter_status'])) {
            $sql .= " AND r.status = '" . (int)$data['filter_status'] . "'";
        }

        if (!empty($data['filter_date_added'])) {
            $sql .= " AND DATE(r.date_added) = DATE('" . $this->db->escape($data['filter_date_added']) . "')";
        }

        $query = $this->db->query($sql);

        return $query->row['total'];
    }

    public function getTotalreviewaboutsAwaitingApproval() {
        $query = $this->db->query("SELECT COUNT(*) AS total FROM " . DB_PREFIX . "reviewabout WHERE status = '0'");

        return $query->row['total'];
    }
}