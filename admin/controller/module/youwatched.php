<?php
class ControllerModuleYouwatched extends Controller {
    private $you_error = array();
    private function getLinks() {

        $data = array();

        if (VERSION >= '2.3.0.0') {
            $routeHomePage 				= 'common/dashboard';
            $routeExtensions			= 'extension/extension';
            $routeExtensionsType 	= '&type=module';
            $routeModule 					= 'extension/module/youwatched';
        } else { // OLDER OC
            $routeHomePage 				= 'common/home';
            $routeExtensions			= 'extension/module';
            $routeExtensionsType 	= '';
            $routeModule 					= 'module/youwatched';
        }

        $data['breadcrumbs'] = array();
        $data['breadcrumbs'][] = array(
            'text'      => $this->language->get('text_home'),
            'href'      => $this->url->link($routeHomePage, 'token=' . $this->session->data['token'], 'SSL'),
            'separator' => false
        );
        $data['breadcrumbs'][] = array(
            'text'      => $this->language->get('text_module'),
            'href'      => $this->url->link($routeExtensions, 'token=' . $this->session->data['token'].$routeExtensionsType, 'SSL'),
            'separator' => ' :: '
        );
        $data['breadcrumbs'][] = array(
            'text'      => $this->language->get('module_name'),
            'href'      => $this->url->link($routeModule, 'token=' . $this->session->data['token'], 'SSL'),
            'separator' => ' :: '
        );

        $data['action'] = $this->url->link($routeModule, 'token=' . $this->session->data['token'], 'SSL');
        $data['action_export'] = $this->url->link($routeModule.'/export', '&token=' . $this->session->data['token'], 'SSL');

        $data['cancel'] = $this->url->link($routeExtensions, 'token=' . $this->session->data['token'].$routeExtensionsType, 'SSL');

        $data['redirect'] = $this->url->link($routeModule, 'token=' . $this->session->data['token'], 'SSL');

        return $data;
    }

    public function index() {
        $this->load->language('module/youwatched');
        $this->load->model('design/layout');
        $this->load->model('localisation/language');
        $this->load->model('setting/setting');
        $data['layouts'] = $this->model_design_layout->getLayouts();

        $this->document->setTitle($this->language->get('heading_title'));

    /*    if (($this->request->server['REQUEST_METHOD'] == 'POST') && ($this->validate())) {
            $this->model_setting_setting->editSetting('youwatched', $this->request->post);

            $this->session->data['success'] = $this->language->get('text_success');

            $this->redirect($this->url->link('extension/module', 'token=' . $this->session->data['token'], 'SSL'));
        } */


        $poip_lang = $this->load->language('module/youwatched');

        $links = $this->getLinks();

        $this->document->setTitle($this->language->get('module_name'));


        if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validate()) {

            $this->model_setting_setting->editSetting('poip_module', $this->request->post);

            $this->session->data['success'] = $this->language->get('text_success');

            $this->response->redirect($links['redirect']);
        }

        $data['heading_title'] = $this->language->get('heading_title');
        $data['button_save'] = $this->language->get('button_save');
        $data['button_cancel'] = $this->language->get('button_cancel');
        $data['button_add_module'] = $this->language->get('button_add_module');
        $data['button_remove'] = $this->language->get('button_remove');

        $data['entry_limit'] = $this->language->get('entry_limit');
        $data['entry_header'] = $this->language->get('entry_header');
        $data['entry_image'] = $this->language->get('entry_image');
        $data['entry_title'] = $this->language->get('entry_title');
        $data['entry_icon'] = $this->language->get('entry_icon');
        $data['entry_box'] = $this->language->get('entry_box');
        $data['entry_yes'] = $this->language->get('entry_yes');
        $data['entry_no']	= $this->language->get('entry_no');
        $data['entry_template'] = $this->language->get('entry_template');
        $data['entry_layout'] = $this->language->get('entry_layout');
        $data['entry_position'] = $this->language->get('entry_position');
        $data['entry_status'] = $this->language->get('entry_status');
        $data['entry_sort_order'] = $this->language->get('entry_sort_order');
        $data['entry_entry_counter'] = $this->language->get('entry_entry_counter');
        $data['entry_template'] = $this->language->get('entry_template');
        $data['entry_action'] = $this->language->get('entry_action');
        $data['entry_level'] = $this->language->get('entry_level');

        $tpls = glob(DIR_CATALOG . 'view/theme/default/template/module/youwatched_*.tpl');

        if ($tpls) {
            foreach ($tpls as $tpl) {
                $tpl_name = str_replace("youwatched_", "", basename($tpl, '.tpl'));
                $data['template_name'][$tpl_name] = $this->language->get('template_name') . " - " . $tpl_name;
            }
        }

        $data['text_enabled'] = $this->language->get('text_enabled');
        $data['text_disabled'] = $this->language->get('text_disabled');
        $data['text_column_left'] = $this->language->get('text_column_left');
        $data['text_column_right'] = $this->language->get('text_column_right');
        $data['text_content_top'] = $this->language->get('text_content_top');
        $data['text_content_bottom'] = $this->language->get('text_content_bottom');

        $data['slider_visible']	   		= $this->language->get('slider_visible');
        $data['slider_vertical']	   		= $this->language->get('slider_vertical');
        $data['slider_horizontal']	    = $this->language->get('slider_horizontal');
        $data['slider_scroll']	   		= $this->language->get('slider_scroll');
        $data['slider_delay']	   		    = $this->language->get('slider_delay');
        $data['slider_direction']	   		= $this->language->get('slider_direction');

        $data['text_module_settings'] = $this->language->get('text_module_settings');

        if (isset($this->you_error['warning'])) {
            $data['error_warning'] = $this->you_error['warning'];
        } else {
            $data['error_warning'] = '';
        }

        if (isset($this->you_error['image'])) {
            $data['error_image'] = $this->you_error['image'];
        } else {
            $data['error_image'] = array();
        }

        $data['breadcrumbs'] = array();

        $data['breadcrumbs'][] = array(
            'text'      => $this->language->get('text_home'),
            'href'      => $this->url->link('common/home', 'token=' . $this->session->data['token'], 'SSL'),
            'separator' => false
        );

        $data['breadcrumbs'][] = array(
            'text'      => $this->language->get('text_module'),
            'href'      => $this->url->link('extension/module', 'token=' . $this->session->data['token'], 'SSL'),
            'separator' => ' :: '
        );

        $data['breadcrumbs'][] = array(
            'text'      => $this->language->get('heading_title'),
            'href'      => $this->url->link('module/youwatched', 'token=' . $this->session->data['token'], 'SSL'),
            'separator' => ' :: '
        );

        $languages = $this->model_localisation_language->getLanguages();

        foreach ($languages as $language) {
            if (isset($this->request->post['youwatched_counter' . $language['language_id']])) {
                $data['youwatched_counter' . $language['language_id']] = $this->request->post['youwatched_counter' . $language['language_id']];
            } else {
                $data['youwatched_counter' . $language['language_id']] = $this->config->get('youwatched_coutner' . $language['language_id']);
            }
        }

        $data['action'] = $this->url->link('module/youwatched', 'token=' . $this->session->data['token'], 'SSL');

        $data['cancel'] = $this->url->link('extension/module', 'token=' . $this->session->data['token'], 'SSL');

        $data['positions'] = array();

        $data['positions'][] = array(
            'position' => 'left',
            'title'    => $this->language->get('text_column_left'),
        );

        $data['positions'][] = array(
            'position' => 'right',
            'title'    => $this->language->get('text_column_right'),
        );

        $data['modules'] = array();

        if (isset($this->request->post['youwatched_module'])) {
            $data['modules'] = $this->request->post['youwatched_module'];
        } elseif ($this->config->get('youwatched_module')) {
            $data['modules'] = $this->config->get('youwatched_module');
        }

        $data['header'] = $this->load->controller('common/header');
        $data['column_left'] = $this->load->controller('common/column_left');
        $data['footer'] = $this->load->controller('common/footer');

      //  $this->response->setOutput($this->render());

        $this->response->setOutput($this->load->view('module/youwatched.tpl', $data));
    }

    private function validate() {
        if (!$this->user->hasPermission('modify', 'module/youwatched')) {
            $this->you_error['warning'] = $this->language->get('error_permission');
        }

        if (isset($this->request->post['youwatched_module'])) {
            foreach ($this->request->post['youwatched_module'] as $key => $value) {
                if (!$value['image_width'] || !$value['image_height']) {
                    $this->you_error['image'][$key] = $this->language->get('error_image');
                }
            }
        }

        if (!$this->you_error) {
            return true;
        } else {
            return false;
        }
    }
}
?>