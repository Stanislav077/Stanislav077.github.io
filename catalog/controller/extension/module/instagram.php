<?php
class ControllerExtensionModuleInstagram extends Controller {

	public function index() {
		
		$this->load->language('extension/module/instagram');
		
		$file = DIR_APPLICATION . 'view/javascript/instagram/css/mycustom.css';
		$filename = 'instagram.log';

		$data['heading_title'] = $this->language->get('heading_title');
		$this->document->addStyle('catalog/view/javascript/slick/slick.css');
		$this->document->addStyle('catalog/view/javascript/slick/slick-theme.css');

		if( file_exists($file) ){
			$this->document->addStyle('catalog/view/javascript/instagram/css/mycustom.css');
		}else{			
			$this->document->addStyle('catalog/view/javascript/instagram/css/custom.css');
		}

		$this->document->addScript('catalog/view/javascript/slick/slick.min.js');

		$data['photo_sized'] =  $this->config->get('instagram_photo_size');

		$json_link="https://api.instagram.com/v1/users/self/media/recent/?";

		if ($this->request->server['HTTPS']) {
			$json_link.="access_token=".str_replace('http', 'https', $this->config->get('instagram_access_token'))."&count={$this->config->get('instagram_photo_amount')}";	
		} else {
			$json_link.="access_token=".$this->config->get('instagram_access_token')."&count={$this->config->get('instagram_photo_amount')}";		
		}
		
		$data['log'] = '';
		$data['error_warning'] = '';

		if(@file_get_contents($json_link)){
			$json = file_get_contents($json_link);
			$instagram = json_decode($json, true, 512, JSON_BIGINT_AS_STRING);
			
			foreach ($instagram['data'] as $instagram ) {
				$data['instagrams'][] = array(
					'href'  => $instagram['link'],
					'likes' => $instagram['likes']['count'],				
					'img' 	=> str_replace('http://', 'https://', $instagram['images']['standard_resolution']['url']),
					'text'	=> $instagram['caption']['text']
				);
			}			

			$data['entry_instagram'] 	= $this->config->get('instagram_module_name');

			$data['slidesToShow'] 		= $this->config->get('instagram_plugin_slide_show');		
			$data['slidesToScroll'] 	= $this->config->get('instagram_plugin_slide_scroll');
			$data['autoplay'] 			= $this->config->get('instagram_plugin_auto_play');
			$data['autoplaySpeed'] 		= $this->config->get('instagram_plugin_auto_play_speed');
			$data['dots'] 				= $this->config->get('instagram_plugin_dots');
			$data['arrows'] 			= $this->config->get('instagram_plugin_arrows');	

			$data['color'] = $this->config->get('instagram_arrow_color');
			$data['text_align'] = $this->config->get('instagram_text_align');
			$data['hover_effect'] = $this->config->get('instagram_hover_heart');			

			return $this->load->view('extension/module/instagram', $data);
		}else{
			$this->log = new log($filename);
			$this->log->write(file_get_contents($json_link));
		}
	}
}