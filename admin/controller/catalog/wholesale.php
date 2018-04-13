<?php
class ControllerCatalogWholesale extends Controller {
    private $error = array();

    public function index() {
        $this->load->language('catalog/information');

        $this->document->setTitle($this->language->get('heading_title'));

        $this->load->model('catalog/information');
        $this->load->model('catalog/wholesale');

        $this->getList();
    }

    public function add() {
        $this->load->language('catalog/information');

        $this->document->setTitle($this->language->get('heading_title'));

        $this->load->model('catalog/information');

        if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validateForm()) {
            $this->model_catalog_information->addInformation($this->request->post);

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

            $this->response->redirect($this->url->link('catalog/information', 'token=' . $this->session->data['token'] . $url, true));
        }

        $this->getForm();
    }

    public function edit() {
        $this->load->language('catalog/information');

        $this->document->setTitle($this->language->get('heading_title'));

        $this->load->model('catalog/information');
        $this->load->model('catalog/wholesale');

        if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validateForm()) {
            $this->model_catalog_wholesale->editInformation($this->request->get['id'], $this->request->post);

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

            $this->response->redirect($this->url->link('catalog/wholesale', 'token=' . $this->session->data['token'] . $url, true));
        }

        $this->getForm();
    }

    public function delete() {
        $this->load->language('catalog/information');

        $this->document->setTitle($this->language->get('heading_title'));

        $this->load->model('catalog/information');

        if (isset($this->request->post['selected']) && $this->validateDelete()) {
            foreach ($this->request->post['selected'] as $information_id) {
                $this->model_catalog_information->deleteInformation($information_id);
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

            $this->response->redirect($this->url->link('catalog/information', 'token=' . $this->session->data['token'] . $url, true));
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
            'text' => 'Wholesale',
            'href' => $this->url->link('catalog/wholesale', 'token=' . $this->session->data['token'] . $url, true)
        );



        $data['informations'] = array();

        $filter_data = array(
            'sort'  => $sort,
            'order' => $order,
            'start' => ($page - 1) * $this->config->get('config_limit_admin'),
            'limit' => $this->config->get('config_limit_admin')
        );

        $information_total = $this->model_catalog_information->getTotalInformations();

        //$results = $this->model_catalog_information->getInformations($filter_data);
        $results = $this->model_catalog_wholesale->getInformations($filter_data);

        foreach ($results as $result) {
            $data['informations'][] = array(
                //'information_id' => $result['information_id'],
                'title'          => $result['title'],
                'status'          => ($result['status']== 1 ? 'Enabled' : 'Disabled'),
                'sort_order'     => $result['link_yuotub'],
                'link_more'     => $result['link_more'],
                'edit'           => $this->url->link('catalog/wholesale/edit', 'token=' . $this->session->data['token'] . '&id=' . $result['id'] . $url, true)
            );
        }

        $data['heading_title'] = 'Wholesale';

        $data['text_list'] = 'Wholesale';
        $data['text_no_results'] = $this->language->get('text_no_results');
        $data['text_confirm'] = $this->language->get('text_confirm');

        $data['column_title'] = 'Wholesale title';
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

        $data['sort_title'] = $this->url->link('catalog/information', 'token=' . $this->session->data['token'] . '&sort=id.title' . $url, true);
        $data['sort_sort_order'] = $this->url->link('catalog/information', 'token=' . $this->session->data['token'] . '&sort=i.sort_order' . $url, true);

        $url = '';

        if (isset($this->request->get['sort'])) {
            $url .= '&sort=' . $this->request->get['sort'];
        }

        if (isset($this->request->get['order'])) {
            $url .= '&order=' . $this->request->get['order'];
        }


        $data['sort'] = $sort;
        $data['order'] = $order;

        $data['header'] = $this->load->controller('common/header');
        $data['column_left'] = $this->load->controller('common/column_left');
        $data['footer'] = $this->load->controller('common/footer');

        $this->response->setOutput($this->load->view('catalog/wholesale_list', $data));
    }

    protected function getForm() {
        $data['heading_title'] = $this->language->get('heading_title');
        $this->load->model('tool/image');

        $data['text_form'] = !isset($this->request->get['id']) ? $this->language->get('text_add') : $this->language->get('text_edit');
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
            'text' => 'Wholesale',
            'href' => $this->url->link('catalog/wholesale', 'token=' . $this->session->data['token'] . $url, true)
        );

        if (!isset($this->request->get['id'])) {
            $data['action'] = $this->url->link('catalog/wholesale/add', 'token=' . $this->session->data['token'] . $url, true);
        } else {
            $data['action'] = $this->url->link('catalog/wholesale/edit', 'token=' . $this->session->data['token'] . '&id=' . $this->request->get['id'] . $url, true);
        }

        $data['cancel'] = $this->url->link('catalog/wholesale', 'token=' . $this->session->data['token'] . $url, true);

        if (isset($this->request->get['id']) && ($this->request->server['REQUEST_METHOD'] != 'POST')) {
            $information_info = $this->model_catalog_wholesale->getInformation($this->request->get['id']);
        }

        $data['token'] = $this->session->data['token'];




        if (isset($this->request->post['status'])) {
            $data['status'] = $this->request->post['status'];
        } elseif (!empty($information_info)) {
            $data['status'] = $information_info['status'];
        } else {
            $data['status'] = true;
        }


        if (isset($this->request->post['title'])) {
            $data['title'] = $this->request->post['title'];
        } elseif (!empty($information_info)) {
            $data['title'] = $information_info['title'];
        } else {
            $data['title'] = true;
        }

        if (isset($this->request->post['order'])) {
            $data['order'] = $this->request->post['order'];
        } elseif (!empty($information_info)) {
            $data['order'] = $information_info['orders'];
        } else {
            $data['order'] = true;
        }


        if (isset($this->request->post['link_more'])) {
            $data['link_more'] = $this->request->post['link_more'];
        } elseif (!empty($information_info)) {
            $data['link_more'] = $information_info['link_more'];
        } else {
            $data['link_more'] = true;
        }

        if (isset($this->request->post['block_too'])) {
            $data['block_too'] = $this->request->post['block_too'];
        } elseif (!empty($information_info)) {
            $data['block_too'] = $information_info['block_too'];
        } else {
            $data['block_too'] = '';
        }
        $this->load->model('tool/image');

        if (isset($this->request->post['block_too']) && is_file(DIR_IMAGE . $this->request->post['block_too'])) {
            $data['thumb'] = $this->model_tool_image->resize($this->request->post['block_too'], 100, 100);
        } elseif (!empty($information_info) && is_file(DIR_IMAGE . $information_info['block_too'])) {
            $data['thumb'] = $this->model_tool_image->resize($information_info['block_too'], 100, 100);
        } else {
            $data['thumb'] = $this->model_tool_image->resize('no_image.png', 100, 100);
        }
        if (isset($this->request->post['link_yuotub'])) {
            $data['link_yuotub'] = $this->request->post['link_yuotub'];
        } elseif (!empty($information_info)) {
            $data['link_yuotub'] = $information_info['link_yuotub'];
        } else {
            $data['link_yuotub'] = true;
        }
        if (isset($this->request->post['block_first'])) {
            $data['block_first'] = $this->request->post['block_first'];
        } elseif (!empty($information_info)) {
            $data['block_first'] = $information_info['block_first'];
        } else {
            $data['block_first'] = true;
        }
        if (isset($this->request->post['block_too'])) {
            $data['block_too'] = $this->request->post['block_too'];
        } elseif (!empty($information_info)) {
            $data['block_too'] = $information_info['block_too'];
        } else {
            $data['block_too'] = true;
        }


        $data['header'] = $this->load->controller('common/header');
        $data['column_left'] = $this->load->controller('common/column_left');
        $data['footer'] = $this->load->controller('common/footer');

        $this->response->setOutput($this->load->view('catalog/wholesale_form', $data));
    }

    protected function validateForm() {
        if (!$this->user->hasPermission('modify', 'catalog/information')) {
            $this->error['warning'] = $this->language->get('error_permission');
        }




        if ($this->error && !isset($this->error['warning'])) {
            $this->error['warning'] = $this->language->get('error_warning');
        }

        return !$this->error;
    }

    protected function validateDelete() {
        if (!$this->user->hasPermission('modify', 'catalog/information')) {
            $this->error['warning'] = $this->language->get('error_permission');
        }

        $this->load->model('setting/store');

        foreach ($this->request->post['selected'] as $information_id) {
            if ($this->config->get('config_account_id') == $information_id) {
                $this->error['warning'] = $this->language->get('error_account');
            }

            if ($this->config->get('config_checkout_id') == $information_id) {
                $this->error['warning'] = $this->language->get('error_checkout');
            }

            if ($this->config->get('config_affiliate_id') == $information_id) {
                $this->error['warning'] = $this->language->get('error_affiliate');
            }

            if ($this->config->get('config_return_id') == $information_id) {
                $this->error['warning'] = $this->language->get('error_return');
            }

            $store_total = $this->model_setting_store->getTotalStoresByInformationId($information_id);

            if ($store_total) {
                $this->error['warning'] = sprintf($this->language->get('error_store'), $store_total);
            }
        }

        return !$this->error;
    }
}