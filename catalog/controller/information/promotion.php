<?php

class ControllerInformationPromotion extends Controller {

	public function index(){
		$this->load->language('information/promotion');

		$this->load->model('catalog/promotion');

		$this->load->model('tool/image');

		if (isset($this->request->get['sort'])) {
			$sort = $this->request->get['sort'];
		} else {
			$sort = 'n.date_added';
		}

		if (isset($this->request->get['order'])) {
			$order = $this->request->get['order'];
		} else {
			$order = 'DESC';
		}

		if (isset($this->request->get['page'])) {
			$page = $this->request->get['page'];
		} else {
			$page = 1;
		}

		if (isset($this->request->get['limit'])) {
			$limit = (int)$this->request->get['limit'];
		} else {
			$limit = 10;
		}

		$this->document->setTitle($this->language->get('heading_title'));

		$data['heading_title'] = 'Promotion';

		$data['text_empty'] = $this->language->get('text_empty');

		$data['button_continue'] = $this->language->get('button_continue');
		$data['continue'] = $this->url->link('common/home');

		$data['breadcrumbs'] = array();

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('text_home'),
			'href' => $this->url->link('common/home')
		);

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

		if (isset($this->request->get['limit'])) {
			$url .= '&limit=' . $this->request->get['limit'];
		}

		$data['breadcrumbs'][] = array(
			'text' => 'Promotion',
			'href' => $this->url->link('information/promotion', $url)
		);

		$filter_data = array(
			'sort' => $sort,
			'order' => $order,
			'start' => ($page - 1) * $limit,
			'limit' => $limit
		);

		$promotion_total = $this->model_catalog_promotion->getTotalpromotion();
		$promotion_list = $this->model_catalog_promotion->getpromotion($filter_data);

		$data['promotion_list'] = array();
		
		if ($promotion_list) {

			$this->document->setTitle($this->language->get('heading_title'));

			$data['heading_title'] = $this->language->get('heading_title');
			$data['text_empty'] = $this->language->get('text_empty');

			$data['button_grid'] = $this->language->get('button_grid');
			$data['button_list'] = $this->language->get('button_list');

            /*mmr*/
            $data['moneymaker2_catalog_default_view'] = $this->config->get('moneymaker2_catalog_layout_default');
            $data['moneymaker2_catalog_layout_switcher_hide'] = $this->config->get('moneymaker2_catalog_layout_switcher_hide');
            /*mmr*/

			$data['text_sort'] = $this->language->get('text_sort');
			$data['text_limit'] = $this->language->get('text_limit');

			$data['text_more'] = $this->language->get('text_more');

			$promotion_setting = array();

			if ($this->config->get('promotion_setting')) {
				$promotion_setting = $this->config->get('promotion_setting');
			}else{
				$promotion_setting['description_limit'] = '300';
				$promotion_setting['promotion_thumb_width'] = '220';
				$promotion_setting['promotion_thumb_height'] = '220';
			}

			foreach ($promotion_list as $result) {

				if($result['image']){
					$image = $this->model_tool_image->resize($result['image'], $promotion_setting['promotion_thumb_width'], $promotion_setting['promotion_thumb_height']);
				}else{
					$image = false;
				}

				$data['promotion_list'][] = array(
					'title' => $result['title'],
					'link' => $result['href'],

					'thumb' => $image,
					'viewed' => sprintf($this->language->get('text_viewed'), $result['viewed']),
					'description' => utf8_substr(strip_tags(html_entity_decode($result['description'], ENT_QUOTES,
						'UTF-8')), 0, $promotion_setting['description_limit']),
					'href' => $this->url->link('information/promotion/info', 'promotion_id=' . $result['promotion_id']),
					'posted' => date($this->language->get('date_format_short'), strtotime($result['date_added']))
				);
			}

		}

		$url = '';

		if (isset($this->request->get['limit'])) {
			$url .= '&limit=' . $this->request->get['limit'];
		}

		$data['sorts'] = array();

		$data['sorts'][] = array(
			'text' => $this->language->get('text_title_asc'),
			'value' => 'nd.title-ASC',
			'href' => $this->url->link('information/promotion', 'sort=nd.title&order=ASC' . $url)
		);

		$data['sorts'][] = array(
			'text' => $this->language->get('text_title_desc'),
			'value' => 'nd.title-DESC',
			'href' => $this->url->link('information/promotion', 'sort=nd.title&order=DESC' . $url)
		);

		$data['sorts'][] = array(
			'text' => $this->language->get('text_date_asc'),
			'value' => 'n.date_added-ASC',
			'href' => $this->url->link('information/promotion', 'sort=n.date_added&order=ASC' . $url)
		);

		$data['sorts'][] = array(
			'text' => $this->language->get('text_date_desc'),
			'value' => 'n.date_added-DESC',
			'href' => $this->url->link('information/promotion', 'sort=n.date_added&order=DESC' . $url)
		);		

		$url = '';

		if (isset($this->request->get['sort'])) {
			$url .= '&sort=' . $this->request->get['sort'];
		}

		if (isset($this->request->get['order'])) {
			$url .= '&order=' . $this->request->get['order'];
		}
		
		$data['limits'] = array();

		$limits = array_unique(array($this->config->get($this->config->get('config_theme') . '_product_limit'), 25, 50, 75, 100));

		sort($limits);

		foreach ($limits as $value) {
			$data['limits'][] = array(
				'text' => $value,
				'value' => $value,
				'href' => $this->url->link('information/promotion', $url . '&limit=' . $value)
			);
		}

		$url = '';

		if (isset($this->request->get['sort'])) {
			$url .= '&sort=' . $this->request->get['sort'];
		}

		if (isset($this->request->get['order'])) {
			$url .= '&order=' . $this->request->get['order'];
		}

		if (isset($this->request->get['limit'])) {
			$url .= '&limit=' . $this->request->get['limit'];
		}		

		$pagination = new Pagination();
		$pagination->total = $promotion_total;
		$pagination->page = $page;
		$pagination->limit = $limit;
		$pagination->url = $this->url->link('information/promotion', $url . '&page={page}');

		$data['pagination'] = $pagination->render();
		$data['results'] = sprintf($this->language->get('text_pagination'), ($promotion_total) ? (($page - 1) * $limit) + 1 : 0, ((($page - 1) * $limit) > ($promotion_total - $limit)) ? $promotion_total : ((($page - 1) * $limit) + $limit), $promotion_total, ceil($promotion_total / $limit));

		// http://googlewebmastercentral.blogspot.com/2011/09/pagination-with-relnext-and-relprev.html
		if ($page == 1) {
			$this->document->addLink($this->url->link('information/promotion', '', true), 'canonical');
		} elseif ($page == 2) {
			$this->document->addLink($this->url->link('information/promotion', '', true), 'prev');
		} else {
			$this->document->addLink($this->url->link('information/promotion', '&page=' . ($page - 1), true), 'prev');
		}

		if ($limit && ceil($promotion_total / $limit) > $page) {
			$this->document->addLink($this->url->link('information/promotion', '&page=' . ($page + 1), true), 'next');
		}

		$data['sort'] = $sort;
		$data['order'] = $order;
		$data['limit'] = $limit;

		$data['continue'] = $this->url->link('common/home');

		$data['column_left'] = $this->load->controller('common/column_left');
		$data['column_right'] = $this->load->controller('common/column_right');
		$data['content_top'] = $this->load->controller('common/content_top');
		$data['content_bottom'] = $this->load->controller('common/content_bottom');
		$data['footer'] = $this->load->controller('common/footer');
		$data['header'] = $this->load->controller('common/header');

		$this->response->setOutput($this->load->view('information/promotion_list', $data));
	}

	public function info(){
		$this->language->load('information/promotion');

		$this->load->model('catalog/promotion');

		$data['breadcrumbs'] = array();

		$data['breadcrumbs'][] = array(
			'href' => $this->url->link('common/home'),
			'text' => $this->language->get('text_home')
		);

		$data['breadcrumbs'][] = array(
			'href' => $this->url->link('information/promotion'),
			'text' => $this->language->get('heading_title')
		);

		if (isset($this->request->get['promotion_id'])) {
			$promotion_id = $this->request->get['promotion_id'];
		} else {
			$promotion_id = 0;
		}

		$promotion_info = $this->model_catalog_promotion->getpromotionStory($this->request->get['promotion_id']);

		if ($promotion_info) {

			$this->document->addScript('catalog/view/javascript/jquery/magnific/jquery.magnific-popup.min.js');
			$this->document->addStyle('catalog/view/javascript/jquery/magnific/magnific-popup.css');

			if ($promotion_info['meta_title']) {
				$this->document->setTitle($promotion_info['meta_title']);
			} else {
				$this->document->setTitle($promotion_info['title']);
			}

			$this->document->setDescription($promotion_info['meta_description']);
			$this->document->setKeywords($promotion_info['meta_keyword']);

			if ($promotion_info['meta_h1']) {
				$data['heading_title'] = $promotion_info['meta_h1'];
			} else {
				$data['heading_title'] = $promotion_info['title'];
			}

			$data['breadcrumbs'][] = array(
				'text' => $promotion_info['title'],
				'href' => $this->url->link('information/promotion/info', 'promotion_id=' . $promotion_id)
			);

			$this->document->addLink($this->url->link('information/promotion', 'promotion_id=' . $this->request->get['promotion_id']),
				'canonical');

			$data['description'] = html_entity_decode($promotion_info['description']);

			$data['viewed'] = sprintf($this->language->get('text_viewed'), $promotion_info['viewed']);
			$data['posted'] = date($this->language->get('date_format_short'), strtotime($promotion_info['date_added']));

			if ($this->config->get('promotion_setting')) {
				$promotion_setting = $this->config->get('promotion_setting');
			}else{
				$promotion_setting['promotion_thumb_width']  = '220';
				$promotion_setting['promotion_thumb_height'] = '220';
				$promotion_setting['promotion_popup_width']  = '560';
				$promotion_setting['promotion_popup_height'] = '560';
			}

			if(isset($promotion_setting['promotion_share'])){
				$data['promotion_share'] = $promotion_setting['promotion_share'];
			}else{
				$data['promotion_share'] = false;
			}

			$this->load->model('tool/image');

			if ($promotion_info['image']) {
				$data['image'] = true;
			} else {
				$data['image'] = false;
			}
			if($promotion_info['image']){
				$data['thumb'] = $this->model_tool_image->resize($promotion_info['image'], $promotion_setting['promotion_thumb_width'],
				$promotion_setting['promotion_thumb_height']);
				$data['popup'] = $this->model_tool_image->resize($promotion_info['image'], $promotion_setting['promotion_popup_width'],
				$promotion_setting['promotion_popup_height']);
			}else{
				$data['thumb'] = false;
				$data['popup'] = false;
			}

			$data['button_promotion'] = $this->language->get('button_promotion');
			$data['button_continue'] = $this->language->get('button_continue');

			$data['promotion_list'] = $this->url->link('information/promotion');
			$data['continue'] = $this->url->link('common/home');

			if (isset($_SERVER['HTTP_REFERER'])) {
				$data['referred'] = $_SERVER['HTTP_REFERER'];
			}

			$data['refreshed'] = 'http://' . $_SERVER['HTTP_HOST'] . '' . $_SERVER['REQUEST_URI'];

			if (isset($data['referred'])) {
				$this->model_catalog_promotion->updateViewed($this->request->get['promotion_id']);
			}

			$data['description'] = html_entity_decode($promotion_info['description'], ENT_QUOTES, 'UTF-8');

			$data['column_left'] = $this->load->controller('common/column_left');
			$data['column_right'] = $this->load->controller('common/column_right');
			$data['content_top'] = $this->load->controller('common/content_top');
			$data['content_bottom'] = $this->load->controller('common/content_bottom');
			$data['footer'] = $this->load->controller('common/footer');
			$data['header'] = $this->load->controller('common/header');

			$this->response->setOutput($this->load->view('information/promotion', $data));

		} else {
			$url = '';

			if (isset($this->request->get['promotion_id'])) {
				$url .= '&promotion_id=' . $this->request->get['promotion_id'];
			}

			if (isset($this->request->get['sort'])) {
				$url .= '&sort=' . $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url .= '&order=' . $this->request->get['order'];
			}

			if (isset($this->request->get['page'])) {
				$url .= '&page=' . $this->request->get['page'];
			}

			if (isset($this->request->get['limit'])) {
				$url .= '&limit=' . $this->request->get['limit'];
			}

			$data['breadcrumbs'][] = array(
				'text' => $this->language->get('text_error'),
				'href' => $this->url->link('information/promotion/info', $url)
			);

			$this->document->setTitle($this->language->get('text_error'));

			$data['heading_title'] = $this->language->get('text_error');

			$data['text_error'] = $this->language->get('text_error');

			$data['button_continue'] = $this->language->get('button_continue');

			$data['continue'] = $this->url->link('common/home');

			$this->response->addHeader($this->request->server['SERVER_PROTOCOL'] . ' 404 Not Found');

			$data['column_left'] = $this->load->controller('common/column_left');
			$data['column_right'] = $this->load->controller('common/column_right');
			$data['content_top'] = $this->load->controller('common/content_top');
			$data['content_bottom'] = $this->load->controller('common/content_bottom');
			$data['footer'] = $this->load->controller('common/footer');
			$data['header'] = $this->load->controller('common/header');

			$this->response->setOutput($this->load->view('error/not_found', $data));
		}
	}
}