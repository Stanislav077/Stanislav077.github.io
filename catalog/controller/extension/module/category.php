<?php
class ControllerExtensionModuleCategory extends Controller {
	public function index() {
		$this->load->language('extension/module/category');

		$data['heading_title'] = $this->language->get('heading_title');

		if (isset($this->request->get['path'])) {
			$parts = explode('_', (string)$this->request->get['path']);
		} else {
			$parts = array();
		}

		if (isset($parts[0])) {
			$data['category_id'] = $parts[0];
		} else {
			$data['category_id'] = 0;
		}



		if (isset($parts[1])) {
			$data['child_id'] = $parts[1];
		} else {
			$data['child_id'] = 0;
		}

		$this->load->model('catalog/category');
		$this->load->model('catalog/catprod');

		$this->load->model('catalog/product');

		$data['categories'] = array();

if(isset($this->request->get['cat_prod_id'])){
    $categories = $this->model_catalog_catprod->getCategories(70);

    if (isset($this->request->get['cat_prod_id'])) {
        $parts = explode('_', (string)$this->request->get['cat_prod_id']);
    } else {
        $parts = array();
    }

    if (isset($parts[0])) {
        $data['cat_prod_id'] = $parts[0];
        $data['category_id'] = $parts[0];
    } else {
        $data['cat_prod_id'] = 0;
        $data['category_id'] = 0;
    }



    if (isset($parts[1])) {
        $data['child_id'] = $parts[1];
    } else {
        $data['child_id'] = 0;
    }

    foreach ($categories as $category) {
        $children_data = array();

        if ($category['cat_prod_id'] == $data['cat_prod_id']) {
            $children = $this->model_catalog_category->getCategories($category['cat_prod_id']);

            foreach($children as $child) {
                $filter_data = array('filter_cat_prod_id' => $child['cat_prod_id'], 'filter_sub_category' => true);

                $children_data[] = array(
                    'category_id' => $child['cat_prod_id'],
                    'name' => $child['name'] . ($this->config->get('config_product_count') ? ' (' . $this->model_catalog_product->getTotalProducts($filter_data) . ')' : ''),
                    'href' => $this->url->link('product/catprod', 'cat_prod_id=' . $category['cat_prod_id'] . '_' . $child['cat_prod_id'])
                );
            }
        }

        $filter_data = array(
            'filter_category_id'  => $category['cat_prod_id'],
            'filter_sub_category' => true
        );

        $data['categories'][] = array(
            'category_id' => $category['cat_prod_id'],
            'name'        => $category['name'] . ($this->config->get('config_product_count') ? ' (' . $this->model_catalog_product->getTotalProducts($filter_data) . ')' : ''),
            'children'    => $children_data,
            'href'        => $this->url->link('product/catprod', 'cat_prod_id=' . $category['cat_prod_id'])
        );
    }




}else{
    $categories = $this->model_catalog_category->getCategories(59);

    foreach ($categories as $category) {
        $children_data = array();

        if ($category['category_id'] == $data['category_id']) {
            $children = $this->model_catalog_category->getCategories($category['category_id']);

            foreach($children as $child) {
                $filter_data = array('filter_category_id' => $child['category_id'], 'filter_sub_category' => true);

                $children_data[] = array(
                    'category_id' => $child['category_id'],
                    'name' => $child['name'] . ($this->config->get('config_product_count') ? ' (' . $this->model_catalog_product->getTotalProducts($filter_data) . ')' : ''),
                    'href' => $this->url->link('product/category', 'path=' . $category['category_id'] . '_' . $child['category_id'])
                );
            }
        }

        $filter_data = array(
            'filter_category_id'  => $category['category_id'],
            'filter_sub_category' => true
        );

        $data['categories'][] = array(
            'category_id' => $category['category_id'],
            'name'        => $category['name'] . ($this->config->get('config_product_count') ? ' (' . $this->model_catalog_product->getTotalProducts($filter_data) . ')' : ''),
            'children'    => $children_data,
            'href'        => $this->url->link('product/category', 'path=' . $category['category_id'])
        );
    }
}




		return $this->load->view('extension/module/category', $data);
	}
}