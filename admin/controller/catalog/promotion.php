<?php
class ControllerCatalogPromotion extends Controller {
	private $error = array();

	public function index() {
		$this->load->language('catalog/promotion');

		$this->load->model('catalog/promotion');
		
		$this->document->setTitle($this->language->get('heading_title'));
	
		$this->load->model('setting/setting');
	
		if (($this->request->server['REQUEST_METHOD'] == 'POST') && ($this->validate())) {
			$this->model_setting_setting->editSetting(promotion, $this->request->post);

			$this->session->data['success'] = $this->language->get('text_success');

			$this->response->redirect($this->url->link('catalog/promotion', 'token=' . $this->session->data['token'], true));
	
		}
	
		$this->getList();
	}

	public function add() {
		$this->load->language('catalog/promotion');

		$this->document->setTitle($this->language->get('heading_title'));

		$this->load->model('catalog/promotion');

		if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validateForm()) {
			$this->model_catalog_promotion->addpromotion($this->request->post);

			$this->session->data['success'] = $this->language->get('text_success');

			$url = '';

			if (isset($this->request->get['sort'])) {
				$url .= '&sort=' . $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url .= '&order=' . $this->request->get['order'];
			}

			if (isset($this->request->get['page'])) {
				$url .= '&page=' . $this->request->get['page'];
			}

			$this->response->redirect($this->url->link('catalog/promotion', 'token=' . $this->session->data['token'] . $url, true));
		}

		$this->getForm();
	}

	public function edit() {
		$this->load->language('catalog/promotion');

		$this->document->setTitle($this->language->get('heading_title'));

		$this->load->model('catalog/promotion');

		if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validateForm()) {
			$this->model_catalog_promotion->editpromotion($this->request->get['promotion_id'], $this->request->post);

			$this->session->data['success'] = $this->language->get('text_success');

			$url = '';

			if (isset($this->request->get['sort'])) {
				$url .= '&sort=' . $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url .= '&order=' . $this->request->get['order'];
			}

			if (isset($this->request->get['page'])) {
				$url .= '&page=' . $this->request->get['page'];
			}

			$this->response->redirect($this->url->link('catalog/promotion', 'token=' . $this->session->data['token'] . $url, true));
		}

		$this->getForm();
	}
	
	public function delete() {
		$this->load->language('catalog/promotion');

		$this->document->setTitle($this->language->get('heading_title'));

		$this->load->model('catalog/promotion');

		if (isset($this->request->post['selected']) && $this->validateDelete()) {
			foreach ($this->request->post['selected'] as $promotion_id) {
				$this->model_catalog_promotion->deletepromotion($promotion_id);
			}

			$this->session->data['success'] = $this->language->get('text_success');

			$url = '';

			if (isset($this->request->get['sort'])) {
				$url .= '&sort=' . $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url .= '&order=' . $this->request->get['order'];
			}

			if (isset($this->request->get['page'])) {
				$url .= '&page=' . $this->request->get['page'];
			}

			$this->response->redirect($this->url->link('catalog/promotion', 'token=' . $this->session->data['token'] . $url, true));
		}

		$this->getList();
	}

	private function getList() {

		if (isset($this->request->get['sort'])) {
			$sort = $this->request->get['sort'];
		} else {
			$sort = 'nd.title';
		}

		if (isset($this->request->get['order'])) {
			$order = $this->request->get['order'];
		} else {
			$order = 'ASC';
		}

		if (isset($this->request->get['page'])) {
			$page = $this->request->get['page'];
		} else {
			$page = 1;
		}

		$url = '';

		$this->load->language('catalog/promotion');

		$this->load->model('catalog/promotion');

		$data['heading_title'] = $this->language->get('heading_title');
	
		$data['text_list'] = $this->language->get('text_list');
		$data['text_confirm'] = $this->language->get('text_confirm');
		$data['text_no_results'] = $this->language->get('text_no_results');
	
		$data['column_image'] = $this->language->get('column_image');		
		$data['column_title'] = $this->language->get('column_title');
		$data['column_date_added'] = $this->language->get('column_date_added');
		$data['column_viewed'] = $this->language->get('column_viewed');
		$data['column_status'] = $this->language->get('column_status');
		$data['column_action'] = $this->language->get('column_action');		
	
		$data['button_add'] = $this->language->get('button_add');
		$data['button_edit'] = $this->language->get('button_edit');
		$data['button_delete'] = $this->language->get('button_delete');
		$data['button_setting'] = $this->language->get('button_setting');
	
		if (isset($this->error['warning'])) {
			$data['error_warning'] = $this->error['warning'];
		} else {
			$data['error_warning'] = '';
		}
	
		if (isset($this->session->data['success'])) {
			$data['success'] = $this->session->data['success'];
		
			unset($this->session->data['success']);
		} else {
			$data['success'] = '';
		}
	
		$data['breadcrumbs'] = array();
	
		$data['breadcrumbs'][] = array(
			'href'      => $this->url->link('common/dashboard', 'token=' . $this->session->data['token'], true),
			'text'      => $this->language->get('text_home'),
			'separator' => false
		);
	
		$data['breadcrumbs'][] = array(
			'href'      => $this->url->link('catalog/promotion', 'token=' . $this->session->data['token'], true),
			'text'      => $this->language->get('heading_title'),
			'separator' => ' :: '
		);
	
		$data['add'] = $this->url->link('catalog/promotion/add', 'token=' . $this->session->data['token'], true);
		$data['delete'] = $this->url->link('catalog/promotion/delete', 'token=' . $this->session->data['token'], true);
		$data['setting'] = $this->url->link('catalog/promotion/setting', 'token=' . $this->session->data['token'], true);
	
		$promotion_total = $this->model_catalog_promotion->getTotalpromotion();
	
		$this->load->model('tool/image');
	
		$data['promotion'] = array();
	
			$filter_data = array(
			'sort'  => $sort,
			'order' => $order,
			'start' => ($page - 1) * $this->config->get('config_limit_admin'),
			'limit' => $this->config->get('config_limit_admin')
		);

		$results = $this->model_catalog_promotion->getpromotionList($filter_data);
	
    	foreach ($results as $result) {
		
			if ($result['image'] && file_exists(DIR_IMAGE . $result['image'])) {
				$image = $this->model_tool_image->resize($result['image'], 40, 40);
			} else {
				$image = $this->model_tool_image->resize('placeholder.png', 40, 40);
			}
		
			$data['promotion'][] = array(
				'promotion_id'     	=> $result['promotion_id'],
				'title'       	=> $result['title'],
				'image'      	=> $image,
				'date_added'  	=> date($this->language->get('date_format_short'), strtotime($result['date_added'])),
				'viewed'		=> $result['viewed'],
				'status'     	=> ($result['status'] ? $this->language->get('text_enabled') : $this->language->get('text_disabled')),
				'selected'    	=> isset($this->request->post['selected']) && in_array($result['promotion_id'], $this->request->post['selected']),
				'edit'      	=> $this->url->link('catalog/promotion/edit', 'token=' . $this->session->data['token'] . '&promotion_id=' . $result['promotion_id'], true)
			);
		}

		if (isset($this->request->post['selected'])) {
			$data['selected'] = (array)$this->request->post['selected'];
		} else {
			$data['selected'] = array();
		}

		$url = '';

		if ($order == 'ASC') {
			$url .= '&order=DESC';
		} else {
			$url .= '&order=ASC';
		}

		if (isset($this->request->get['page'])) {
			$url .= '&page=' . $this->request->get['page'];
		}

		$data['sort_title'] = $this->url->link('catalog/promotion', 'token=' . $this->session->data['token'] . '&sort=nd.title' . $url, true);
		$data['sort_date_added'] = $this->url->link('catalog/promotion', 'token=' . $this->session->data['token'] . '&sort=n.date_added' . $url, true);

		$url = '';

		if (isset($this->request->get['sort'])) {
			$url .= '&sort=' . $this->request->get['sort'];
		}

		if (isset($this->request->get['order'])) {
			$url .= '&order=' . $this->request->get['order'];
		}

		$pagination = new Pagination();
		$pagination->total = $promotion_total;
		$pagination->page = $page;
		$pagination->limit = $this->config->get('config_limit_admin');
		$pagination->url = $this->url->link('catalog/promotion', 'token=' . $this->session->data['token'] . $url . '&page={page}', true);

		$data['pagination'] = $pagination->render();

		$data['results'] = sprintf($this->language->get('text_pagination'), ($promotion_total) ? (($page - 1) * $this->config->get('config_limit_admin')) + 1 : 0, ((($page - 1) * $this->config->get('config_limit_admin')) > ($promotion_total - $this->config->get('config_limit_admin'))) ? $promotion_total : ((($page - 1) * $this->config->get('config_limit_admin')) + $this->config->get('config_limit_admin')), $promotion_total, ceil($promotion_total / $this->config->get('config_limit_admin')));

		$data['sort'] = $sort;
		$data['order'] = $order;
	
		$data['header'] = $this->load->controller('common/header');
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['footer'] = $this->load->controller('common/footer');
		
		$this->response->setOutput($this->load->view('catalog/promotion_list', $data));

	}

	private function getForm() { 

		$this->load->language('catalog/promotion');
	
		$this->load->model('catalog/promotion');

		$this->document->setTitle($this->language->get('heading_title'));
		
		$data['heading_title'] = $this->language->get('heading_title');
	
		$data['text_form'] = !isset($this->request->get['promotion_id']) ? $this->language->get('text_add') : $this->language->get('text_edit');
		$data['text_default'] = $this->language->get('text_default');
		$data['text_enabled'] = $this->language->get('text_enabled');
		$data['text_disabled'] = $this->language->get('text_disabled');
    	$data['text_image_manager'] = $this->language->get('text_image_manager');
		$data['text_browse'] = $this->language->get('text_browse');
		$data['text_clear'] = $this->language->get('text_clear');
	
		$data['text_select_all'] = $this->language->get('text_select_all');
		$data['text_unselect_all'] = $this->language->get('text_unselect_all');
		$data['column_date_added'] = $this->language->get('column_date_added');
	
		$data['entry_title'] = $this->language->get('entry_title');
		$data['entry_meta_title'] = $this->language->get('entry_meta_title');
		$data['entry_meta_h1'] = $this->language->get('entry_meta_h1');
		$data['entry_meta_description'] = $this->language->get('entry_meta_description');
		$data['entry_meta_keyword'] = $this->language->get('entry_meta_keyword');
		$data['entry_description'] = $this->language->get('entry_description');
		$data['entry_date_added'] = $this->language->get('entry_date_added');
		$data['entry_store'] = $this->language->get('entry_store');
		$data['entry_keyword'] = $this->language->get('entry_keyword');
		$data['entry_image'] = $this->language->get('entry_image');
		$data['entry_status'] = $this->language->get('entry_status');
	
		$data['button_save'] = $this->language->get('button_save');
		$data['button_cancel'] = $this->language->get('button_cancel');
	
		$data['tab_general'] = $this->language->get('tab_general');
		$data['tab_data'] = $this->language->get('tab_data');

		$data['help_keyword'] = $this->language->get('help_keyword');		
	
		$data['token'] = $this->session->data['token'];
	
		if (isset($this->error['warning'])) {
			$data['error_warning'] = $this->error['warning'];
		} else {
			$data['error_warning'] = '';
		}

		if (isset($this->error['title'])) {
			$data['error_title'] = $this->error['title'];
		} else {
			$data['error_title'] = array();
		}

		if (isset($this->error['description'])) {
			$data['error_description'] = $this->error['description'];
		} else {
			$data['error_description'] = array();
		}

		if (isset($this->error['meta_title'])) {
			$data['error_meta_title'] = $this->error['meta_title'];
		} else {
			$data['error_meta_title'] = array();
		}

		if (isset($this->error['keyword'])) {
			$data['error_keyword'] = $this->error['keyword'];
		} else {
			$data['error_keyword'] = '';
		}
	
		$data['breadcrumbs'] = array();
	
		$data['breadcrumbs'][] = array(
			'href'      => $this->url->link('common/dashboard', 'token=' . $this->session->data['token'], true),
			'text'      => $this->language->get('text_home'),
			'separator' => false
		);
	
		$data['breadcrumbs'][] = array(
			'href'      => $this->url->link('catalog/promotion', 'token=' . $this->session->data['token'], true),
			'text'      => $this->language->get('heading_title'),
			'separator' => ' :: '
		);
	
		if (!isset($this->request->get['promotion_id'])) {
			$data['action'] = $this->url->link('catalog/promotion/add', 'token=' . $this->session->data['token'], true);
		} else {
			$data['action'] = $this->url->link('catalog/promotion/edit', 'token=' . $this->session->data['token'] . '&promotion_id=' . $this->request->get['promotion_id'], true);
		}
	
		$data['cancel'] = $this->url->link('catalog/promotion', 'token=' . $this->session->data['token'], true);
	
		if ((isset($this->request->get['promotion_id'])) && ($this->request->server['REQUEST_METHOD'] != 'POST')) {
			$promotion_info = $this->model_catalog_promotion->getpromotionStory($this->request->get['promotion_id']);
		}

		$this->load->model('localisation/language');

		$data['languages'] = $this->model_localisation_language->getLanguages();
	
		if (isset($this->request->post['promotion_description'])) {
			$data['promotion_description'] = $this->request->post['promotion_description'];
		} elseif (isset($this->request->get['promotion_id'])) {
			$data['promotion_description'] = $this->model_catalog_promotion->getpromotionDescriptions($this->request->get['promotion_id']);
		} else {
			$data['promotion_description'] = array();
		}
		
		if (isset($this->request->post['meta_keyword'])) {
			$data['meta_keyword'] = $this->request->post['meta_keyword'];
		} elseif (isset($this->request->get['promotion_id'])) {
			$data['meta_keyword'] = $this->model_catalog_promotion->getpromotionDescriptions($this->request->get['promotion_id']);
		} else {
			$data['meta_keyword'] = array();
		}

		if (isset($this->request->post['date_added'])) {
       		$data['date_added'] = $this->request->post['date_added'];
		} elseif (isset($promotion_info['date_added'])) {
			$data['date_added'] = $promotion_info['date_added'];
		} else {
			$data['date_added'] = date('Y-m-d');
		}

        if (isset($this->request->post['href'])) {
            $data['href'] = $this->request->post['href'];
        } elseif (isset($promotion_info['href'])) {
            $data['href'] = $promotion_info['href'];
        } else {
            $data['href'] = '';
        }
	
		$this->load->model('setting/store');
	
		$data['stores'] = $this->model_setting_store->getStores();
	
		if (isset($this->request->post['promotion_store'])) {
			$data['promotion_store'] = $this->request->post['promotion_store'];
		} elseif (isset($promotion_info)) {
			$data['promotion_store'] = $this->model_catalog_promotion->getpromotionStores($this->request->get['promotion_id']);
		} else {
			$data['promotion_store'] = array(0);
		}
	
		if (isset($this->request->post['keyword'])) {
			$data['keyword'] = $this->request->post['keyword'];
		} elseif (isset($promotion_info)) {
			$data['keyword'] = $promotion_info['keyword'];
		} else {
			$data['keyword'] = '';
		}
	
		if (isset($this->request->post['status'])) {
			$data['status'] = $this->request->post['status'];
		} elseif (isset($promotion_info)) {
			$data['status'] = $promotion_info['status'];
		} else {
			$data['status'] = '';
		}
	
		if (isset($this->request->post['image'])) {
			$data['image'] = $this->request->post['image'];
		} elseif (!empty($promotion_info)) {
			$data['image'] = $promotion_info['image'];
		} else {
			$data['image'] = '';
		}

		$this->load->model('tool/image');

		if (isset($this->request->post['image']) && is_file(DIR_IMAGE . $this->request->post['image'])) {
			$data['thumb'] = $this->model_tool_image->resize($this->request->post['image'], 100, 100);
		} elseif (!empty($promotion_info) && is_file(DIR_IMAGE . $promotion_info['image'])) {
			$data['thumb'] = $this->model_tool_image->resize($promotion_info['image'], 100, 100);
		} else {
			$data['thumb'] = $this->model_tool_image->resize('no_image.png', 100, 100);
		}

		$data['placeholder'] = $this->model_tool_image->resize('no_image.png', 100, 100);

	
		$data['header'] = $this->load->controller('common/header');
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['footer'] = $this->load->controller('common/footer');
		
		$this->response->setOutput($this->load->view('catalog/promotion_form', $data));

	}
	public function setting() {
		$this->load->language('catalog/promotion');

		$this->document->setTitle($this->language->get('heading_title'));

		$this->load->model('setting/setting');
		$this->load->model('catalog/promotion');

		if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validateSetting()) {
			$this->model_setting_setting->editSetting('promotion_setting', $this->request->post);
				if (isset($this->request->post['promotion_url'])) {
					$this->model_catalog_promotion->setpromotionListUrl($this->request->post['promotion_url']);
				}	
			$this->session->data['success'] = $this->language->get('text_success');

			$this->cache->delete('promotion_setting');

			$this->response->redirect($this->url->link('catalog/promotion', 'token=' . $this->session->data['token'], true));
		}

		if (isset($this->error['warning'])) {
			$data['error_warning'] = $this->error['warning'];
		} else {
			$data['error_warning'] = '';
		}

		if (isset($this->error['thumb'])) {
			$data['error_thumb'] = $this->error['thumb'];
		} else {
			$data['error_thumb'] = '';
		}

		if (isset($this->error['popup'])) {
			$data['error_popup'] = $this->error['popup'];
		} else {
			$data['error_popup'] = '';
		}

		if (isset($this->error['description_limit'])) {
			$data['error_limit'] = $this->error['description_limit'];
		} else {
			$data['error_limit'] = '';
		}		

		$data['heading_title'] = $this->language->get('heading_title');

		$data['text_yes'] = $this->language->get('text_yes');
		$data['text_no'] = $this->language->get('text_no');
		$data['button_save'] = $this->language->get('button_save');
		$data['button_cancel'] = $this->language->get('button_cancel');

		$data['entry_thumb'] = $this->language->get('entry_thumb');
		$data['entry_popup'] = $this->language->get('entry_popup');
		$data['entry_share'] = $this->language->get('entry_share');
		$data['entry_limit'] = $this->language->get('entry_limit');
		$data['entry_promotion_url'] = $this->language->get('entry_promotion_url');

		$data['entry_width'] = $this->language->get('entry_width');
		$data['entry_height'] = $this->language->get('entry_height');

		$data['action'] = $this->url->link('catalog/promotion/setting', 'token=' . $this->session->data['token'], true);
		$data['cancel'] = $this->url->link('catalog/promotion', 'token=' . $this->session->data['token'], true);
	
		$data['breadcrumbs'] = array();
	
		$data['breadcrumbs'][] = array(
			'href'      => $this->url->link('common/dashboard', 'token=' . $this->session->data['token'], true),
			'text'      => $this->language->get('text_home'),
			'separator' => false
		);
	
		$data['breadcrumbs'][] = array(
			'href'      => $this->url->link('catalog/promotion', 'token=' . $this->session->data['token'], true),
			'text'      => $this->language->get('heading_title'),
			'separator' => ' :: '
		);

		$data['breadcrumbs'][] = array(
			'href'      => $this->url->link('catalog/promotion/setting', 'token=' . $this->session->data['token'], true),
			'text'      => $this->language->get('text_promotion_setting'),
			'separator' => ' :: '
		);	

		if (isset($this->request->post['promotion_setting'])) {
			$promotion_setting = $this->request->post['promotion_setting'];
		} elseif ($this->config->get('promotion_setting')) {
			$promotion_setting = $this->config->get('promotion_setting');
		} else {
			$promotion_setting = array();
		}

		if (isset($promotion_setting['promotion_thumb_width'])) {
			$data['promotion_thumb_width'] = $promotion_setting['promotion_thumb_width'];
		} else {
			$data['promotion_thumb_width'] = '';
		}	

		if (isset($promotion_setting['promotion_thumb_height'])) {
			$data['promotion_thumb_height'] = $promotion_setting['promotion_thumb_height'];
		} else {
			$data['promotion_thumb_height'] = '';
		}	

		if (isset($promotion_setting['promotion_popup_width'])) {
			$data['promotion_popup_width'] = $promotion_setting['promotion_popup_width'];
		} else {
			$data['promotion_popup_width'] = '';
		}	

		if (isset($promotion_setting['promotion_popup_height'])) {
			$data['promotion_popup_height'] = $promotion_setting['promotion_popup_height'];
		} else {
			$data['promotion_popup_height'] = '';
		}	

		if (isset($promotion_setting['description_limit'])) {
			$data['description_limit'] = $promotion_setting['description_limit'];
		} else {
			$data['description_limit'] = '';
		}

		if (isset($promotion_setting['promotion_share'])) {
			$data['promotion_share'] = $promotion_setting['promotion_share'];
		} else {
			$data['promotion_share'] = '';
		}								

		$promotion_url = $this->model_catalog_promotion->getpromotionListUrl('information/promotion');

		if($promotion_url){
			$data['promotion_url'] = $promotion_url;
		}else{
			$data['promotion_url'] = '';
		}

		$data['header'] = $this->load->controller('common/header');
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['footer'] = $this->load->controller('common/footer');
		
		$this->response->setOutput($this->load->view('catalog/promotion_setting', $data));
	}

	protected function validateForm() {
		if (!$this->user->hasPermission('modify', 'catalog/promotion')) {
			$this->error['warning'] = $this->language->get('error_permission');
		}
	
		foreach ($this->request->post['promotion_description'] as $language_id => $value) {
			if ((strlen($value['title']) < 3) || (strlen($value['title']) > 255)) {
				$this->error['title'][$language_id] = $this->language->get('error_title');
			}
		
			if (strlen($value['description']) < 3) {
				$this->error['description'][$language_id] = $this->language->get('error_description');
			}
		}
	
		return !$this->error;
	}

	protected function validateDelete() {
		if (!$this->user->hasPermission('modify', 'catalog/promotion')) {
			$this->error['warning'] = $this->language->get('error_permission');
		}
	
		return !$this->error;
	}

	protected function validateSetting() {
		if (!$this->user->hasPermission('modify', 'catalog/promotion')) {
			$this->error['warning'] = $this->language->get('error_permission');
		}
		
		$promotion_setting = $this->request->post['promotion_setting'];

		if (!$promotion_setting['promotion_thumb_width'] || !$promotion_setting['promotion_thumb_height']) {
			$this->error['thumb'] = $this->language->get('error_thumb');
		}
	
		if (!$promotion_setting['promotion_popup_width'] || !$promotion_setting['promotion_popup_height']) {
			$this->error['popup'] = $this->language->get('error_popup');
		}

		if (!$promotion_setting['description_limit']) {
			$this->error['description_limit'] = $this->language->get('error_description_limit');
		}		
	
		return !$this->error;
	}
}
?>