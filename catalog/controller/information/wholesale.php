<?php
class ControllerInformationWholesale extends Controller {
    public function index() {
        $this->load->language('information/information');

        $this->load->model('catalog/wholesale');

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

        $information_info = $this->model_catalog_wholesale->getInformation(1);

        if ($information_info) {


            $data['breadcrumbs'][] = array(
                'text' => 'Wholesale',
                'href' => $this->url->link('information/wholesale', 'id=' .  $information_id)
            );

            $data['heading_title'] = 'Wholesale';

            $data['button_continue'] = $this->language->get('button_continue');


            $this->load->model('tool/image');
            $data['description'] = html_entity_decode($information_info['block_first'], ENT_QUOTES, 'UTF-8');
            $data['title'] = $information_info['title'];
            $data['orders'] = $information_info['orders'];
            $data['image'] = $this->model_tool_image->resize($information_info['block_too'],635,376);
            $data['ems'] = $this->config->get('config_email');
            $data['telephone'] = $this->config->get('config_telephone');

            $data['continue'] = $this->url->link('common/home');

            $data['column_left'] = $this->load->controller('common/column_left');
            $data['column_right'] = $this->load->controller('common/column_right');
            $data['content_top'] = $this->load->controller('common/content_top');
            $data['content_bottom'] = $this->load->controller('common/content_bottom');
            $data['footer'] = $this->load->controller('common/footer');
            $data['header'] = $this->load->controller('common/header');

            $this->response->setOutput($this->load->view('information/wholesale', $data));
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

    public function mass(){
        $json = array();
        $this->session->data['success'] = true;

        $email = $this->config->get('config_email');
        $user_email = $this->request->post['user_email'];
        $user_name = $this->request->post['name'];
        $user_question = $this->request->post['telephone'];
        $user_msg = $this->request->post['msg'];

        if ((utf8_strlen($this->request->post['name']) < 1) || (utf8_strlen(trim($this->request->post['name'])) > 32)) {
            $json['error']['name'] = 'Your Name is required from 1 to 32 characters!';
        }
        if ((utf8_strlen($this->request->post['telephone']) < 10)) {
            $json['error']['telephone'] = 'Your Phone is a must-have box!';
        }
        if (empty($this->request->post['user_email'])) {
            $json['error']['user_email'] = "Your Email is a required field!";
        } elseif ( filter_var($this->request->post['user_email'], FILTER_VALIDATE_EMAIL) === false) {
            $json['error']['user_email'] = "Email format is wrong!";
        } else {
           // $json['error']['user_email'] = test_input($this->request->post['user_email']);
        }

        if ((utf8_strlen($this->request->post['msg']) < 10) ) {
            $json['error']['msg'] = 'Your message must be from 10 characters!';
        }


        if(!$json['error']){


            $content = '<h3>Message Wholesale page</h3>';
            $content .= '<div>Name: '.$user_name.'</div>';
            $content .= '<div>Email: '.$user_email.'</div>';
            $content .= '<div>Phone: '.$user_question.'</div>';
            $content .= '<div>Message: '.$user_msg.'</div>';

            $subject = 'A message from the user';
            $emailgo = new TEmails; // инициaлизируeм супeр клaсс oтпрaвки
            $emailgo->from_email = $user_email; // oт кoгo

            $emailgo->from_name = 'A message from the user';
            $emailgo->to_email = $email; // кoму
            $emailgo->to_name = 'Wholesale page';
            $emailgo->subject = $subject; // тeмa
            $emailgo->body = $content; // сooбщeниe
            // сooбщeниe
            $emailgo->send();
        }




        $this->response->addHeader('Content-Type: application/json');
        $this->response->setOutput(json_encode($json));
    }
}

class TEmails {
    public $from_email;
    public $from_name;
    public $to_email;
    public $to_name;
    public $subject;
    public $data_charset='UTF-8';
    public $send_charset='windows-1251';
    public $body='';
    public $type='text/html';



    function send(){
        $dc=$this->data_charset;
        $sc=$this->send_charset;
        $enc_to=$this->mime_header_encode($this->to_name,$dc,$sc).' <'.$this->to_email.'>';
        $enc_subject=$this->mime_header_encode($this->subject,$dc,$sc);
        $enc_from=$this->mime_header_encode($this->from_name,$dc,$sc).' <'.$this->from_email.'>';
        $enc_body=$dc==$sc?$this->body:iconv($dc,$sc.'//IGNORE',$this->body);
        $headers='';
        $headers.="Mime-Version: 1.0\r\n";
        $headers.="Content-type: ".$this->type."; charset=".$sc."\r\n";
        $headers.="From: ".$enc_from."\r\n";
        return mail($enc_to,$enc_subject,$enc_body,$headers);
    }
    public   function mime_header_encode($str, $data_charset, $send_charset) { // функция прeoбрaзoвaния зaгoлoвкoв в вeрную кoдирoвку
        if($data_charset != $send_charset)
            $str=iconv($data_charset,$send_charset.'//IGNORE',$str);
        return ('=?'.$send_charset.'?B?'.base64_encode($str).'?=');
    }


}