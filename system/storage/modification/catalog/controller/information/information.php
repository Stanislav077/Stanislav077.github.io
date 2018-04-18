<?php
class ControllerInformationInformation extends Controller {
	public function index() {
		$this->load->language('information/information');

		$this->load->model('catalog/information');

		$data['breadcrumbs'] = array();

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('text_home'),
			'href' => $this->url->link('common/home')
		);

		if (isset($this->request->get['information_id'])) {
			$information_id = (int)$this->request->get['information_id'];
		} else {
			$information_id = 0;
		}

		$information_info = $this->model_catalog_information->getInformation($information_id);



$data['information_ids'] =$information_id;


		if ($information_info) {
			$this->document->setTitle($information_info['meta_title']);
			$this->document->setDescription($information_info['meta_description']);
			$this->document->setKeywords($information_info['meta_keyword']);

			$data['breadcrumbs'][] = array(
				'text' => $information_info['title'],
				'href' => $this->url->link('information/information', 'information_id=' .  $information_id)
			);

			$data['heading_title'] = $information_info['title'];

			$data['button_continue'] = $this->language->get('button_continue');

			$data['description'] = html_entity_decode($information_info['description'], ENT_QUOTES, 'UTF-8');

			$data['continue'] = $this->url->link('common/home');

			$data['column_left'] = $this->load->controller('common/column_left');
			$data['column_right'] = $this->load->controller('common/column_right');
			$data['content_top'] = $this->load->controller('common/content_top');
			$data['content_bottom'] = $this->load->controller('common/content_bottom');
			$data['footer'] = $this->load->controller('common/footer');

                
                //OCEXT SEO URL GENERATOR - microdata
                $this->load->model('module/seourlgenerator');
                if(isset($data)){
                    $this->model_module_seourlgenerator->addScript($data);
                }
                //end OCEXT SEO URL GENERATOR - microdata


			$data['header'] = $this->load->controller('common/header');



            if($information_id == 4){


                $this->load->model('catalog/abouthome');

$whot = $this->model_catalog_abouthome->getabouthomess();
$data['whot'] = $whot;
$data['whots'] = array();


foreach($whot as $whots){

    $data['whots'][] = array(
        'title' =>$whots['title'],
        'description' => html_entity_decode($whots['description'], ENT_QUOTES, 'UTF-8')
    );
}

                $information_infos = $this->model_catalog_abouthome->getInformation(1);


                $data['abouts'] = $information_infos;

                $data['block_first'] = html_entity_decode($information_infos['block_first'], ENT_QUOTES, 'UTF-8');
                $data['block_too'] = html_entity_decode($information_infos['block_too'], ENT_QUOTES, 'UTF-8');





            }





			$this->response->setOutput($this->load->view('information/information', $data));
		} else {
			$data['breadcrumbs'][] = array(
				'text' => $this->language->get('text_error'),
				'href' => $this->url->link('information/information', 'information_id=' . $information_id)
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

                
                //OCEXT SEO URL GENERATOR - microdata
                $this->load->model('module/seourlgenerator');
                if(isset($data)){
                    $this->model_module_seourlgenerator->addScript($data);
                }
                //end OCEXT SEO URL GENERATOR - microdata


			$data['header'] = $this->load->controller('common/header');

			$this->response->setOutput($this->load->view('error/not_found', $data));
		}


	}

	public function agree() {
		$this->load->model('catalog/information');

		if (isset($this->request->get['information_id'])) {
			$information_id = (int)$this->request->get['information_id'];
		} else {
			$information_id = 0;
		}

		$output = '';

		$information_info = $this->model_catalog_information->getInformation($information_id);

		if ($information_info) {
			$output .= html_entity_decode($information_info['description'], ENT_QUOTES, 'UTF-8') . "\n";
		}

		$this->response->setOutput($output);
	}



    public function reviewabout() {
        $this->load->language('product/product');

        $this->load->model('catalog/reviewabout');

        $data['text_no_reviewabouts'] = $this->language->get('text_no_reviewabouts');

        if (isset($this->request->get['page'])) {
            $page = $this->request->get['page'];
        } else {
            $page = 1;
        }


$limit = 5;
        $data['ttt'] = $page;
        $data['reviewabouts'] = array();

        $reviewabout_total = $this->model_catalog_reviewabout->getTotalreviewaboutsByProductId();

        $results = $this->model_catalog_reviewabout->getreviewaboutsByProductId( ($page - 1) * $limit, $limit);

        foreach ($results as $result) {
            $data['reviewabouts'][] = array(
                'author'     => $result['author'],
                'text'       => nl2br($result['text']),
                'rating'     => (int)$result['rating'],
                'date_added' => date($this->language->get('date_format_short'), strtotime($result['date_added']))
            );
        }

        $pagination = new Pagination();
        $pagination->total = $reviewabout_total;
        $pagination->page = $page;
        $pagination->limit = $limit;
        //$pagination->url = $this->url->link('information/information/reviewabout&page={page}');
        $pagination->url = $this->url->link('information/information/reviewabout', 'information_id=' . $this->request->get['information_id'] . '&page={page}');


        $data['pagination'] = $pagination->render();

        $data['results'] = sprintf($this->language->get('text_pagination'), ($reviewabout_total) ? (($page - 1) * 5) + 1 : 0, ((($page - 1) * 5) > ($reviewabout_total - 5)) ? $reviewabout_total : ((($page - 1) * 5) + 5), $reviewabout_total, ceil($reviewabout_total / 5));

        $this->response->setOutput($this->load->view('information/reviewabout', $data));
    }

    public function write() {
        $this->load->language('product/product');

        $json = array();

        if ($this->request->server['REQUEST_METHOD'] == 'POST') {
            if ((utf8_strlen($this->request->post['name']) < 3) || (utf8_strlen($this->request->post['name']) > 25)) {
                $json['error'] = $this->language->get('error_name');
            }

            if ((utf8_strlen($this->request->post['text']) < 25) || (utf8_strlen($this->request->post['text']) > 1000)) {
                $json['error'] = $this->language->get('error_text');
            }

            if (empty($this->request->post['rating']) || $this->request->post['rating'] < 0 || $this->request->post['rating'] > 5) {
                $json['error'] = $this->language->get('error_rating');
            }

            // Captcha
            if ($this->config->get($this->config->get('config_captcha') . '_status') && in_array('reviewabout', (array)$this->config->get('config_captcha_page'))) {
                $captcha = $this->load->controller('extension/captcha/' . $this->config->get('config_captcha') . '/validate');

                if ($captcha) {
                    $json['error'] = $captcha;
                }
            }

            if (!isset($json['error'])) {
                $this->load->model('catalog/reviewabout');


                //$json['success'] = '11';

                $this->model_catalog_reviewabout->addreviewabout($this->request->post);

                $json['success'] = $this->language->get('text_success');
            }
        }

        $this->response->addHeader('Content-Type: application/json');
        $this->response->setOutput(json_encode($json));
    }




}