<?php
class ControllerCommonHome extends Controller {
	public function index() {
		$this->document->setTitle($this->config->get('config_meta_title'));
		$this->document->setDescription($this->config->get('config_meta_description'));
		$this->document->setKeywords($this->config->get('config_meta_keyword'));

		if (isset($this->request->get['route'])) {
			$this->document->addLink($this->config->get('config_url'), 'canonical');
		}


        // Menu
        $this->load->model('catalog/category');

        $this->load->model('catalog/product');

        $this->load->model('tool/image');

        $data['categories'] = array();

        $categories = $this->model_catalog_category->getCategoriesHome(59);

      //  $data['categories'] = $categories;


        foreach ($categories as $key=> $category) {
            if ($category['top']) {
                // Level 2
                $children_data = array();

                $children = $this->model_catalog_category->getCategories($category['category_id']);

                foreach ($children as $child) {
                    $filter_data = array(
                        'filter_category_id'  => $child['category_id'],
                        'filter_sub_category' => true
                    );

                    $children_data[] = array(
                        'name'  => $child['name'] . ($this->config->get('config_product_count') ? ' (' . $this->model_catalog_product->getTotalProducts($filter_data) . ')' : ''),
                        'href'  => $this->url->link('product/category', 'path=' . $category['category_id'] . '_' . $child['category_id'])
                    );
                }

                // Level 1
                $data['categories'][] = array(
                    'name'     => $category['name'],
                    'key'     => $key,
                    'image'     => ($key == 0 || $key == 5 ?  $this->model_tool_image->resize($category['image'],745,352)  : $this->model_tool_image->resize($category['image'],373,352)),
                    'children' => $children_data,
                    'column'   => $category['column'] ? $category['column'] : 1,
                    'href'     => $this->url->link('product/category', 'path=' . $category['category_id'])
                );
            }
        }
        $this->load->model('catalog/abouthome');
        $information_info = $this->model_catalog_abouthome->getInformation(1);
        $data['ab'] = $information_info;
if($information_info){
    $data['info_title'] = $information_info['title'];
    $data['link_more'] = $information_info['link_more'];
    $data['link_yuotub'] = $information_info['link_yuotub'];
    $data['info_block_first'] = html_entity_decode($information_info['block_first'], ENT_QUOTES, 'UTF-8');
    $data['info_block_too'] = html_entity_decode($information_info['block_too'], ENT_QUOTES, 'UTF-8');
}




		$data['column_left'] = $this->load->controller('common/column_left');
		$data['column_right'] = $this->load->controller('common/column_right');
		$data['content_top'] = $this->load->controller('common/content_top');
		$data['content_bottom'] = $this->load->controller('common/content_bottom');
		$data['footer'] = $this->load->controller('common/footer');
		$data['header'] = $this->load->controller('common/header');

		$this->response->setOutput($this->load->view('common/home', $data));
	}
}
