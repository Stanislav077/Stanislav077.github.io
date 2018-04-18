<?php
class ControllerCatalogAbouthomes extends Controller {
    private $error = array();

    public function index() {
        $this->load->language('catalog/information');

        $this->document->setTitle($this->language->get('heading_title'));

        $this->load->model('catalog/abouthomes');

        $this->getList();
    }

    public function add() {
        $this->load->language('catalog/information');

        $this->document->setTitle($this->language->get('heading_title'));

        $this->load->model('catalog/abouthomes');

        if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validateForm()) {
            $this->model_catalog_abouthomes->addabouthomes($this->request->post);

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

            $this->response->redirect($this->url->link('catalog/abouthomes', 'token=' . $this->session->data['token'] . $url, true));
        }

        $this->getForm();
    }

    public function edit() {
        $this->load->language('catalog/information');

        $this->document->setTitle($this->language->get('heading_title'));

        $this->load->model('catalog/abouthomes');

        if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validateForm()) {
            $this->model_catalog_abouthomes->editabouthomes($this->request->get['abouthomes_id'], $this->request->post);

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

            $this->response->redirect($this->url->link('catalog/abouthomes', 'token=' . $this->session->data['token'] . $url, true));
        }

        $this->getForm();
    }

    public function delete() {
        $this->load->language('catalog/information');

        $this->document->setTitle($this->language->get('heading_title'));

        $this->load->model('catalog/abouthomes');

        if (isset($this->request->post['selected']) && $this->validateDelete()) {
            foreach ($this->request->post['selected'] as $abouthomes_id) {
                $this->model_catalog_abouthomes->deleteabouthomes($abouthomes_id);
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

            $this->response->redirect($this->url->link('catalog/abouthomes', 'token=' . $this->session->data['token'] . $url, true));
        }

        $this->getList();
    }

    protected function getList() {
        if (isset($this->request->get['sort'])) {
            $sort = $this->request->get['sort'];
        } else {
            $sort = 'id.title';
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

        if (isset($this->request->get['sort'])) {
            $url .= '&sort=' . $this->request->get['sort'];
        }

        if (isset($this->request->get['order'])) {
            $url .= '&order=' . $this->request->get['order'];
        }

        if (isset($this->request->get['page'])) {
            $url .= '&page=' . $this->request->get['page'];
        }

        $data['breadcrumbs'] = array();

        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_home'),
            'href' => $this->url->link('common/dashboard', 'token=' . $this->session->data['token'], true)
        );

        $data['breadcrumbs'][] = array(
            'text' => 'What we do',
            'href' => $this->url->link('catalog/abouthomes', 'token=' . $this->session->data['token'] . $url, true)
        );

        $data['add'] = $this->url->link('catalog/abouthomes/add', 'token=' . $this->session->data['token'] . $url, true);
        $data['delete'] = $this->url->link('catalog/abouthomes/delete', 'token=' . $this->session->data['token'] . $url, true);

        $data['abouthomess'] = array();

        $filter_data = array(
            'sort'  => $sort,
            'order' => $order,
            'start' => ($page - 1) * $this->config->get('config_limit_admin'),
            'limit' => $this->config->get('config_limit_admin')
        );

        $abouthomes_total = $this->model_catalog_abouthomes->getTotalabouthomess();

        $results = $this->model_catalog_abouthomes->getabouthomess($filter_data);

        foreach ($results as $result) {
            $data['abouthomess'][] = array(
                'abouthomes_id' => $result['abouthomes_id'],
                'title'          => $result['title'],
                'sort_order'     => $result['sort_order'],
                'edit'           => $this->url->link('catalog/abouthomes/edit', 'token=' . $this->session->data['token'] . '&abouthomes_id=' . $result['abouthomes_id'] . $url, true)
            );
        }

        $data['heading_title'] = 'What we do';

        $data['text_list'] = 'What we do list';
        $data['text_no_results'] = $this->language->get('text_no_results');
        $data['text_confirm'] = $this->language->get('text_confirm');

        $data['column_title'] = $this->language->get('column_title');
        $data['column_sort_order'] = $this->language->get('column_sort_order');
        $data['column_action'] = $this->language->get('column_action');

        $data['button_add'] = $this->language->get('button_add');
        $data['button_edit'] = $this->language->get('button_edit');
        $data['button_delete'] = $this->language->get('button_delete');

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

        $data['sort_title'] = $this->url->link('catalog/abouthomes', 'token=' . $this->session->data['token'] . '&sort=id.title' . $url, true);
        $data['sort_sort_order'] = $this->url->link('catalog/abouthomes', 'token=' . $this->session->data['token'] . '&sort=i.sort_order' . $url, true);

        $url = '';

        if (isset($this->request->get['sort'])) {
            $url .= '&sort=' . $this->request->get['sort'];
        }

        if (isset($this->request->get['order'])) {
            $url .= '&order=' . $this->request->get['order'];
        }

        $pagination = new Pagination();
        $pagination->total = $abouthomes_total;
        $pagination->page = $page;
        $pagination->limit = $this->config->get('config_limit_admin');
        $pagination->url = $this->url->link('catalog/abouthomes', 'token=' . $this->session->data['token'] . $url . '&page={page}', true);

        $data['pagination'] = $pagination->render();

        $data['results'] = sprintf($this->language->get('text_pagination'), ($abouthomes_total) ? (($page - 1) * $this->config->get('config_limit_admin')) + 1 : 0, ((($page - 1) * $this->config->get('config_limit_admin')) > ($abouthomes_total - $this->config->get('config_limit_admin'))) ? $abouthomes_total : ((($page - 1) * $this->config->get('config_limit_admin')) + $this->config->get('config_limit_admin')), $abouthomes_total, ceil($abouthomes_total / $this->config->get('config_limit_admin')));

        $data['sort'] = $sort;
        $data['order'] = $order;

        $data['header'] = $this->load->controller('common/header');
        $data['column_left'] = $this->load->controller('common/column_left');
        $data['footer'] = $this->load->controller('common/footer');

        $this->response->setOutput($this->load->view('catalog/abouthomes_list', $data));
    }

    protected function getForm() {
        $data['heading_title'] = 'What we do';

        $data['text_form'] = !isset($this->request->get['abouthomes_id']) ? $this->language->get('text_add') : $this->language->get('text_edit');
        $data['text_default'] = $this->language->get('text_default');
        $data['text_enabled'] = $this->language->get('text_enabled');
        $data['text_disabled'] = $this->language->get('text_disabled');

        $data['entry_title'] = $this->language->get('entry_title');
        $data['entry_description'] = $this->language->get('entry_description');
        $data['entry_meta_title'] = $this->language->get('entry_meta_title');
        $data['entry_meta_description'] = $this->language->get('entry_meta_description');
        $data['entry_meta_keyword'] = $this->language->get('entry_meta_keyword');
        $data['entry_keyword'] = $this->language->get('entry_keyword');
        $data['entry_store'] = $this->language->get('entry_store');
        $data['entry_bottom'] = $this->language->get('entry_bottom');
        $data['entry_sort_order'] = $this->language->get('entry_sort_order');
        $data['entry_status'] = $this->language->get('entry_status');
        $data['entry_layout'] = $this->language->get('entry_layout');

        $data['help_keyword'] = $this->language->get('help_keyword');
        $data['help_bottom'] = $this->language->get('help_bottom');

        $data['button_save'] = $this->language->get('button_save');
        $data['button_cancel'] = $this->language->get('button_cancel');

        $data['tab_general'] = $this->language->get('tab_general');
        $data['tab_data'] = $this->language->get('tab_data');
        $data['tab_design'] = $this->language->get('tab_design');

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

        $data['breadcrumbs'] = array();

        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_home'),
            'href' => $this->url->link('common/dashboard', 'token=' . $this->session->data['token'], true)
        );

        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('heading_title'),
            'href' => $this->url->link('catalog/abouthomes', 'token=' . $this->session->data['token'] . $url, true)
        );

        if (!isset($this->request->get['abouthomes_id'])) {
            $data['action'] = $this->url->link('catalog/abouthomes/add', 'token=' . $this->session->data['token'] . $url, true);
        } else {
            $data['action'] = $this->url->link('catalog/abouthomes/edit', 'token=' . $this->session->data['token'] . '&abouthomes_id=' . $this->request->get['abouthomes_id'] . $url, true);
        }

        $data['cancel'] = $this->url->link('catalog/abouthomes', 'token=' . $this->session->data['token'] . $url, true);

        if (isset($this->request->get['abouthomes_id']) && ($this->request->server['REQUEST_METHOD'] != 'POST')) {
            $abouthomes_info = $this->model_catalog_abouthomes->getabouthomes($this->request->get['abouthomes_id']);
        }

        $data['token'] = $this->session->data['token'];

        $this->load->model('localisation/language');

        $data['languages'] = $this->model_localisation_language->getLanguages();

        if (isset($this->request->post['abouthomes_description'])) {
            $data['abouthomes_description'] = $this->request->post['abouthomes_description'];
        } elseif (isset($this->request->get['abouthomes_id'])) {
            $data['abouthomes_description'] = $this->model_catalog_abouthomes->getabouthomesDescriptions($this->request->get['abouthomes_id']);
        } else {
            $data['abouthomes_description'] = array();
        }

        $this->load->model('setting/store');

        $data['stores'] = $this->model_setting_store->getStores();

        if (isset($this->request->post['abouthomes_store'])) {
            $data['abouthomes_store'] = $this->request->post['abouthomes_store'];
        } elseif (isset($this->request->get['abouthomes_id'])) {
            $data['abouthomes_store'] = $this->model_catalog_abouthomes->getabouthomesStores($this->request->get['abouthomes_id']);
        } else {
            $data['abouthomes_store'] = array(0);
        }

        if (isset($this->request->post['keyword'])) {
            $data['keyword'] = $this->request->post['keyword'];
        } elseif (!empty($abouthomes_info)) {
            $data['keyword'] = $abouthomes_info['keyword'];
        } else {
            $data['keyword'] = '';
        }

        if (isset($this->request->post['bottom'])) {
            $data['bottom'] = $this->request->post['bottom'];
        } elseif (!empty($abouthomes_info)) {
            $data['bottom'] = $abouthomes_info['bottom'];
        } else {
            $data['bottom'] = 0;
        }

        if (isset($this->request->post['status'])) {
            $data['status'] = $this->request->post['status'];
        } elseif (!empty($abouthomes_info)) {
            $data['status'] = $abouthomes_info['status'];
        } else {
            $data['status'] = true;
        }

        if (isset($this->request->post['sort_order'])) {
            $data['sort_order'] = $this->request->post['sort_order'];
        } elseif (!empty($abouthomes_info)) {
            $data['sort_order'] = $abouthomes_info['sort_order'];
        } else {
            $data['sort_order'] = '';
        }

        if (isset($this->request->post['abouthomes_layout'])) {
            $data['abouthomes_layout'] = $this->request->post['abouthomes_layout'];
        } elseif (isset($this->request->get['abouthomes_id'])) {
            $data['abouthomes_layout'] = $this->model_catalog_abouthomes->getabouthomesLayouts($this->request->get['abouthomes_id']);
        } else {
            $data['abouthomes_layout'] = array();
        }

        $this->load->model('design/layout');

        $data['layouts'] = $this->model_design_layout->getLayouts();

        $data['header'] = $this->load->controller('common/header');
        $data['column_left'] = $this->load->controller('common/column_left');
        $data['footer'] = $this->load->controller('common/footer');

        $this->response->setOutput($this->load->view('catalog/abouthomes_form', $data));
    }

    protected function validateForm() {
        if (!$this->user->hasPermission('modify', 'catalog/abouthomes')) {
            $this->error['warning'] = $this->language->get('error_permission');
        }

        foreach ($this->request->post['abouthomes_description'] as $language_id => $value) {
            if ((utf8_strlen($value['title']) < 3) || (utf8_strlen($value['title']) > 64)) {
                $this->error['title'][$language_id] = $this->language->get('error_title');
            }

            if (utf8_strlen($value['description']) < 3) {
                $this->error['description'][$language_id] = $this->language->get('error_description');
            }

            if ((utf8_strlen($value['meta_title']) < 3) || (utf8_strlen($value['meta_title']) > 255)) {
                $this->error['meta_title'][$language_id] = $this->language->get('error_meta_title');
            }
        }

        if (utf8_strlen($this->request->post['keyword']) > 0) {
            $this->load->model('catalog/url_alias');

            $url_alias_info = $this->model_catalog_url_alias->getUrlAlias($this->request->post['keyword']);

            if ($url_alias_info && isset($this->request->get['abouthomes_id']) && $url_alias_info['query'] != 'abouthomes_id=' . $this->request->get['abouthomes_id']) {
                $this->error['keyword'] = sprintf($this->language->get('error_keyword'));
            }

            if ($url_alias_info && !isset($this->request->get['abouthomes_id'])) {
                $this->error['keyword'] = sprintf($this->language->get('error_keyword'));
            }
        }

        if ($this->error && !isset($this->error['warning'])) {
            $this->error['warning'] = $this->language->get('error_warning');
        }

        return !$this->error;
    }

    protected function validateDelete() {
        if (!$this->user->hasPermission('modify', 'catalog/abouthomes')) {
            $this->error['warning'] = $this->language->get('error_permission');
        }

        $this->load->model('setting/store');

        foreach ($this->request->post['selected'] as $abouthomes_id) {
            if ($this->config->get('config_account_id') == $abouthomes_id) {
                $this->error['warning'] = $this->language->get('error_account');
            }

            if ($this->config->get('config_checkout_id') == $abouthomes_id) {
                $this->error['warning'] = $this->language->get('error_checkout');
            }

            if ($this->config->get('config_affiliate_id') == $abouthomes_id) {
                $this->error['warning'] = $this->language->get('error_affiliate');
            }

            if ($this->config->get('config_return_id') == $abouthomes_id) {
                $this->error['warning'] = $this->language->get('error_return');
            }

            $store_total = $this->model_setting_store->getTotalStoresByabouthomesId($abouthomes_id);

            if ($store_total) {
                $this->error['warning'] = sprintf($this->language->get('error_store'), $store_total);
            }
        }

        return !$this->error;
    }
}