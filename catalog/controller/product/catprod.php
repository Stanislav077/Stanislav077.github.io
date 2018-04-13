<?php
class ControllerProductCatprod extends Controller {
    public function index() {
        $this->load->language('product/cat_prod');

        $this->load->model('catalog/catprod');

        $this->load->model('catalog/product');

        $this->load->model('tool/image');


        if (isset($this->request->get['filter'])) {
            $filter = $this->request->get['filter'];
        } else {
            $filter = '';
        }

        if (isset($this->request->get['sort'])) {
            $sort = $this->request->get['sort'];
        } else {
            $sort = 'p.sort_order';
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

        if (isset($this->request->get['limit'])) {
            $limit = (int)$this->request->get['limit'];
        } else {
            $limit = 5;
        }

        $data['breadcrumbs'] = array();

        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_home'),
            'href' => $this->url->link('common/home')
        );

        if (isset($this->request->get['cat_prod_id'])) {
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

            $path = '';

            $parts = explode('_', (string)$this->request->get['cat_prod_id']);

            $cat_prod_id = (int)array_pop($parts);

            foreach ($parts as $path_id) {
                if (!$path) {
                    $path = (int)$path_id;
                } else {
                    $path .= '_' . (int)$path_id;
                }

                $cat_prod_info = $this->model_catalog_catprod->getcat_prod($path_id);

                if ($cat_prod_info) {
                    $data['breadcrumbs'][] = array(
                        'text' => $cat_prod_info['name'],
                        'href' => $this->url->link('product/catprod', 'cat_prod_id=' . $path . $url)
                    );
                }
            }
        } else {
            $cat_prod_id = 0;
        }

        $cat_prod_info = $this->model_catalog_catprod->getcat_prod($cat_prod_id);

        if ($cat_prod_info) {
            $this->document->setTitle($cat_prod_info['meta_title']);
            $this->document->setDescription($cat_prod_info['meta_description']);
            $this->document->setKeywords($cat_prod_info['meta_keyword']);

            $data['heading_title'] = $cat_prod_info['name'];

            $data['text_refine'] = $this->language->get('text_refine');
            $data['text_empty'] = $this->language->get('text_empty');
            $data['text_quantity'] = $this->language->get('text_quantity');
            $data['text_manufacturer'] = $this->language->get('text_manufacturer');
            $data['text_model'] = $this->language->get('text_model');
            $data['text_price'] = $this->language->get('text_price');
            $data['text_tax'] = $this->language->get('text_tax');
            $data['text_points'] = $this->language->get('text_points');
            $data['text_compare'] = sprintf($this->language->get('text_compare'), (isset($this->session->data['compare']) ? count($this->session->data['compare']) : 0));
            $data['text_sort'] = $this->language->get('text_sort');
            $data['text_limit'] = $this->language->get('text_limit');

            $data['button_cart'] = $this->language->get('button_cart');
            $data['button_wishlist'] = $this->language->get('button_wishlist');
            $data['button_compare'] = $this->language->get('button_compare');
            $data['button_continue'] = $this->language->get('button_continue');
            $data['button_list'] = $this->language->get('button_list');
            $data['button_grid'] = $this->language->get('button_grid');

            // Set the last cat_prod breadcrumb
            $data['breadcrumbs'][] = array(
                'text' => $cat_prod_info['name'],
                'href' => $this->url->link('product/catprod', 'cat_prod_id=' . $this->request->get['cat_prod_id'])
            );

            if ($cat_prod_info['image']) {
                $data['thumb'] = $this->model_tool_image->resize($cat_prod_info['image'], $this->config->get($this->config->get('config_theme') . '_image_cat_prod_width'), $this->config->get($this->config->get('config_theme') . '_image_cat_prod_height'));
            } else {
                $data['thumb'] = '';
            }

            $data['description'] = html_entity_decode($cat_prod_info['description'], ENT_QUOTES, 'UTF-8');
            $data['compare'] = $this->url->link('product/compare');

            $url = '';

            if (isset($this->request->get['filter'])) {
                $url .= '&filter=' . $this->request->get['filter'];
            }

            if (isset($this->request->get['sort'])) {
                $url .= '&sort=' . $this->request->get['sort'];
            }

            if (isset($this->request->get['order'])) {
                $url .= '&order=' . $this->request->get['order'];
            }

            if (isset($this->request->get['limit'])) {
                $url .= '&limit=' . $this->request->get['limit'];
            }

            $data['categories'] = array();

            $results = $this->model_catalog_catprod->getCategories($cat_prod_id);
            $data['id_cat'] =$this->request->get['cat_prod_id'];
            foreach ($results as $result) {
                $filter_data = array(
                    'filter_cat_prod_id'  => $result['cat_prod_id'],
                    'filter_sub_cat_prod' => true
                );

                if ($result['image_sub']) {
                    $image = $this->model_tool_image->resize($result['image_sub'], 190,190);
                } else {
                    $image = $this->model_tool_image->resize('placeholder.png', 190,190);
                }



                $data['categories'][] = array(
                    'name' => $result['name'] . ($this->config->get('config_product_count') ? ' (' . $this->model_catalog_product->getTotalProducts($filter_data) . ')' : ''),
                    'href' => $this->url->link('product/catprod', 'cat_prod_id=' . $this->request->get['cat_prod_id'] . '_' . $result['cat_prod_id'] . $url),
                    'image' => $image
                );
            }

            $data['products'] = array();

            $filter_data = array(
                'filter_cat_prod_id' => $cat_prod_id,
                'filter_filter'      => $filter,
                'sort'               => $sort,
                'order'              => $order,
                'start'              => ($page - 1) * $limit,
                'limit'              => $limit
            );

            $product_total = $this->model_catalog_catprod->getTotalCategoriesBycat_prodIdCat($filter_data);

            $results = $this->model_catalog_catprod->getprodCat($filter_data);



            foreach ($results as $result) {
//                if ($result['image']) {
//                    $image = $this->model_tool_image->resize($result['image'], $this->config->get($this->config->get('config_theme') . '_image_product_width'), $this->config->get($this->config->get('config_theme') . '_image_product_height'));
//                } else {
//                    $image = $this->model_tool_image->resize('placeholder.png', $this->config->get($this->config->get('config_theme') . '_image_product_width'), $this->config->get($this->config->get('config_theme') . '_image_product_height'));
//                }


                $data['products_id'][$result['prodcat_id']] =  $this->model_catalog_catprod->getprodCatId($result['prodcat_id']);



                  //  'href'        => $this->url->link('product/product', 'product_id=' . $result['product_id'])
                // html_entity_decode($product_info['description'], ENT_QUOTES, 'UTF-8');

            }
            $this->load->model('tool/image');

            $data['products'] =array();
            if(isset($data['products_id'])){
                foreach ($data['products_id'] as $results) {
                    $data['products'][]=array(
                        'name' => $results[0]['title'],
                        'image' => $this->model_tool_image->resize($results[0]['image'], 306, 190),
                        'description' => html_entity_decode($results[0]['description'], ENT_QUOTES, 'UTF-8')
                    );
                }
            }



            $url = '';

            if (isset($this->request->get['filter'])) {
                $url .= '&filter=' . $this->request->get['filter'];
            }

            if (isset($this->request->get['limit'])) {
                $url .= '&limit=' . $this->request->get['limit'];
            }

            $data['sorts'] = array();

            $data['sorts'][] = array(
                'text'  => $this->language->get('text_default'),
                'value' => 'p.sort_order-ASC',
                'href'  => $this->url->link('product/catprod', 'cat_prod_id=' . $this->request->get['cat_prod_id'] . '&sort=p.sort_order&order=ASC' . $url)
            );

            $data['sorts'][] = array(
                'text'  => $this->language->get('text_name_asc'),
                'value' => 'pd.name-ASC',
                'href'  => $this->url->link('product/catprod', 'cat_prod_id=' . $this->request->get['cat_prod_id'] . '&sort=pd.name&order=ASC' . $url)
            );

            $data['sorts'][] = array(
                'text'  => $this->language->get('text_name_desc'),
                'value' => 'pd.name-DESC',
                'href'  => $this->url->link('product/catprod', 'cat_prod_id=' . $this->request->get['cat_prod_id'] . '&sort=pd.name&order=DESC' . $url)
            );

            $data['sorts'][] = array(
                'text'  => $this->language->get('text_price_asc'),
                'value' => 'p.price-ASC',
                'href'  => $this->url->link('product/catprod', 'cat_prod_id=' . $this->request->get['cat_prod_id'] . '&sort=p.price&order=ASC' . $url)
            );

            $data['sorts'][] = array(
                'text'  => $this->language->get('text_price_desc'),
                'value' => 'p.price-DESC',
                'href'  => $this->url->link('product/catprod', 'cat_prod_id=' . $this->request->get['cat_prod_id'] . '&sort=p.price&order=DESC' . $url)
            );

            if ($this->config->get('config_review_status')) {
                $data['sorts'][] = array(
                    'text'  => $this->language->get('text_rating_desc'),
                    'value' => 'rating-DESC',
                    'href'  => $this->url->link('product/catprod', 'cat_prod_id=' . $this->request->get['cat_prod_id'] . '&sort=rating&order=DESC' . $url)
                );

                $data['sorts'][] = array(
                    'text'  => $this->language->get('text_rating_asc'),
                    'value' => 'rating-ASC',
                    'href'  => $this->url->link('product/catprod', 'cat_prod_id=' . $this->request->get['cat_prod_id'] . '&sort=rating&order=ASC' . $url)
                );
            }

            $data['sorts'][] = array(
                'text'  => $this->language->get('text_model_asc'),
                'value' => 'p.model-ASC',
                'href'  => $this->url->link('product/catprod', 'cat_prod_id=' . $this->request->get['cat_prod_id'] . '&sort=p.model&order=ASC' . $url)
            );

            $data['sorts'][] = array(
                'text'  => $this->language->get('text_model_desc'),
                'value' => 'p.model-DESC',
                'href'  => $this->url->link('product/catprod', 'cat_prod_id=' . $this->request->get['cat_prod_id'] . '&sort=p.model&order=DESC' . $url)
            );

            $url = '';

            if (isset($this->request->get['filter'])) {
                $url .= '&filter=' . $this->request->get['filter'];
            }

            if (isset($this->request->get['sort'])) {
                $url .= '&sort=' . $this->request->get['sort'];
            }

            if (isset($this->request->get['order'])) {
                $url .= '&order=' . $this->request->get['order'];
            }

            $data['limits'] = array();

            $limits = array_unique(array($this->config->get($this->config->get('config_theme') . '_product_limit'), 15, 30, 60));

            sort($limits);

            foreach($limits as $value) {
                $data['limits'][] = array(
                    'text'  => $value,
                    'value' => $value,
                    'href'  => $this->url->link('product/catprod', 'cat_prod_id=' . $this->request->get['cat_prod_id'] . $url . '&limit=' . $value)
                );
            }

            $url = '';

            if (isset($this->request->get['filter'])) {
                $url .= '&filter=' . $this->request->get['filter'];
            }

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
            $pagination->total = $product_total;
            $pagination->page = $page;
            $pagination->limit = $limit;
            $pagination->url = $this->url->link('product/catprod', 'cat_prod_id=' . $this->request->get['cat_prod_id'] . $url . '&page={page}');

            $data['pagination'] = $pagination->render();

            $data['results'] = sprintf($this->language->get('text_pagination'), ($product_total) ? (($page - 1) * $limit) + 1 : 0, ((($page - 1) * $limit) > ($product_total - $limit)) ? $product_total : ((($page - 1) * $limit) + $limit), $product_total, ceil($product_total / $limit));

            // http://googlewebmastercentral.blogspot.com/2011/09/pagination-with-relnext-and-relprev.html
            if ($page == 1) {
                $this->document->addLink($this->url->link('product/catprod', 'cat_prod_id=' . $cat_prod_info['cat_prod_id'], true), 'canonical');
            } elseif ($page == 2) {
                $this->document->addLink($this->url->link('product/catprod', 'cat_prod_id=' . $cat_prod_info['cat_prod_id'], true), 'prev');
            } else {
                $this->document->addLink($this->url->link('product/catprod', 'cat_prod_id=' . $cat_prod_info['cat_prod_id'] . '&page='. ($page - 1), true), 'prev');
            }

            if ($limit && ceil($product_total / $limit) > $page) {
                $this->document->addLink($this->url->link('product/catprod', 'cat_prod_id=' . $cat_prod_info['cat_prod_id'] . '&page='. ($page + 1), true), 'next');
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

            $this->response->setOutput($this->load->view('product/cat_prod', $data));
        } else {
            $url = '';

            if (isset($this->request->get['cat_prod_id'])) {
                $url .= '&path=' . $this->request->get['cat_prod_id'];
            }

            if (isset($this->request->get['filter'])) {
                $url .= '&filter=' . $this->request->get['filter'];
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
                'href' => $this->url->link('product/catprod', $url)
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
