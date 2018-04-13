<?php
class ControllerInformationPackwrite extends Controller {
	public function index() {
		
		
		
		$this->load->model('catalog/packwrite');
		
		$data['test'] = $this->model_catalog_packwrite->get();
	
			$data['column_left'] = $this->load->controller('common/column_left');
			$data['column_right'] = $this->load->controller('common/column_right');
			$data['content_top'] = $this->load->controller('common/content_top');
			$data['content_bottom'] = $this->load->controller('common/content_bottom');
			$data['footer'] = $this->load->controller('common/footer');
			$data['header'] = $this->load->controller('common/header');
		
			$this->response->setOutput($this->load->view('information/packwrite', $data));
	}
		public function mods() {
			  $json = array();
        $this->session->data['success'] = true;
		$json['test'] = $this->request->post['name'];
			$this->load->model('catalog/packwrite');
		
		$this->model_catalog_packwrite->mods($_POST['email']);
		
		
		    $this->response->addHeader('Content-Type: application/json');
        $this->response->setOutput(json_encode($json));
			
		}
}

?>