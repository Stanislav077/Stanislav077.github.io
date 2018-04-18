<?php // ==========================================  seo_url.php v.030717 opencart-russia.ru ===============================
class ControllerStartupSeoUrl extends Controller {

                            
                            
                            public function getCategories($product_id) {
                                    $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "product_to_category WHERE product_id = '" . (int)$product_id . "'");

                                    return $query->rows;
                            }
                            
                            public function getDataWhisPath(&$data) {
                                if(!$this->config->get('seourlgenerator_canonical_products')){
                                    return;
                                }
                                foreach ($data as $key => $value) {
                                    if (isset($data['route'])){
                                        if (($data['route'] == 'product/product' && $key == 'product_id')){
                                            $allCategories = $this->getAllCategories();
                                            $getCategories = $this->getCategories($value);
                                            $categories = array();
                                            if($getCategories){
                                                $path = '';
                                                $main_path = '';
                                                foreach ($getCategories as $category) {
                                                    
                                                    if($this->config->get('seourlgenerator_select_main_category')){
                                                        
                                                        $main_path = $this->getCategoriesMainPath($value,$allCategories);
                                                        
                                                    }
                                                    
                                                    if($main_path){
                                                        
                                                        $path = $main_path;
                                                        
                                                    }else{
                                                        
                                                        $check_path = $this->getCategoriesPath($allCategories, $category['category_id']);

                                                        if( mb_strlen($check_path)  >   mb_strlen($path) ){
                                                            $path = $check_path;
                                                        }
                                                        
                                                    }
                                                }
                                            }
                                            if(isset($path) && $path){
                                                if(isset($data['manufacturer_id'])){
                                                    unset($data['manufacturer_id']);
                                                }
                                                $data['path'] = $path;
                                            }
                                        }
                                    }
                                }
                                ksort($data);
                                
                            }
                            
                            public function getCategoriesMainPath($product_id,$categories) {
                                
                                $main_path = '';
                                
                                $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "product_to_category WHERE product_id = '" . (int)$product_id . "' AND main_category=1");
                                
                                if($query->row){
                                    
                                    $main_path = $this->getCategoriesPath($categories, $query->row['category_id']);
                                    
                                }
                                
                                return $main_path;
                                
                            }

                            public function getAllCategories() {
                                $sql = "SELECT cd.name, c.category_id, c.parent_id FROM " . DB_PREFIX . "category c LEFT JOIN " . DB_PREFIX . "category_description cd ON (c.category_id = cd.category_id) LEFT JOIN " . DB_PREFIX . "category_to_store c2s ON (c.category_id = c2s.category_id) WHERE cd.language_id = '" . (int)$this->config->get('config_language_id') . "' AND c2s.store_id = '" . (int)$this->config->get('config_store_id') . "'  AND c.status = '1' AND c.sort_order <> '-1'";
                                $query = $this->db->query($sql);
                                $categories = array();
                                if($query->rows){
                                    foreach ($query->rows as $category) {
                                        $parent_id = (int)$category['parent_id'];
                                        $category_id = (int)$category['category_id'];
                                        $name = $category['name'];
                                        if($parent_id > 0) {
                                            $categories[$category_id] = array(
                                                    'id'=>$category_id,
                                                    'parentId'=>$parent_id,
                                                    'name'=>$name
                                            );
                                        }else{
                                            $categories[$category_id] = array(
                                                'id'=>$category_id,
                                                'name'=>$name
                                            );
                                        }
                                    }
                                }
                                return $categories;
                            }

                            protected function getCategoriesPath($categories,$category_id,$old_path = '') {
                                if (isset($categories[$category_id])) {
                                    if (!$old_path) {
                                        $new_path = $categories[$category_id]['id'];
                                    } else {
                                        $new_path = $categories[$category_id]['id'].'_'.$old_path;
                                    }	
                                    if (isset($categories[$category_id]['parentId'])) {
                                        return $this->getCategoriesPath($categories,$categories[$category_id]['parentId'], $new_path);
                                    } else {
                                        return $new_path;
                                    }
                                }
                            }

                            protected function redirectOnUrlWhisPath($route) {
                            
                                if(!$this->config->get('seourlgenerator_canonical_products')){
                                    return;
                                }
                            
                                $parts = explode('/', $route);

                                foreach ($parts as $part) {
                                        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "url_alias WHERE keyword = '" . $this->db->escape($part) . "'");

                                        if ($query->num_rows) {
                                                $url = explode('=', $query->row['query']);

                                                if ($url[0] == 'product_id') {
                                                    $link = HTTP_SERVER.'index.php?route=product/product&product_id='.$url[1];
                                                    $seo_url = $this->rewrite($link);
                                                    $seo_url = $this->getSeoUrlPart($seo_url);
                                                    if($route!=$seo_url){
                                                        $this->response->redirect(HTTP_SERVER.$seo_url,301);
                                                    }
                                                }
                                        }
                                }

                            }
                            protected function getSeoUrlPart($seo_url) {
                                $seo_url = str_replace(HTTP_SERVER, '', $seo_url);
                                $parts = explode('/', $seo_url);
                                $seo_url = implode('/', $parts);
                                return $seo_url;
                            }



	public function index() {
		// Add rewrite to url class
		if ($this->config->get('config_seo_url')) {
			$this->url->addRewrite($this);
		}

		// Decode URL
		if (isset($this->request->get['_route_'])) {

                            
                        $this->redirectOnUrlWhisPath($this->request->get['_route_']);



			$parts = explode('/', $this->request->get['_route_']);

			// remove any empty arrays from trailing
			if (utf8_strlen(end($parts)) == 0) {
				array_pop($parts);
			}

			$mfilterConfig = $this->config->get( 'mega_filter_seo' );

				if( ! empty( $mfilterConfig['enabled'] ) ) {
					$this->load->model( 'module/mega_filter' );
				
					if( class_exists( 'MegaFilterCore' ) ) {
						$parts = MegaFilterCore::prepareSeoParts( $this, $parts );
					}
				}
				
				foreach ($parts as $part) {				
					if( ! empty( $mfilterConfig['enabled'] ) && class_exists( 'MegaFilterCore' ) && MegaFilterCore::prepareSeoPart( $this, $part ) ) {
						continue;
					}
				$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "url_alias WHERE keyword = '" . $this->db->escape($part) . "'");

				$mfilterConfig = $this->config->get( 'mega_filter_seo' );
				
				if( ! empty( $mfilterConfig['enabled'] ) && ! $query->num_rows ) {
					$mfilter_query = $this->db->query( "SELECT * FROM `" . DB_PREFIX . "mfilter_url_alias` WHERE `alias` = '" . $this->db->escape( $part ) . "'");
				
					if( $mfilter_query->num_rows ) {
						if( ! isset( $this->request->get['mfp'] ) ) {
							$this->request->get['mfp'] = $mfilter_query->row['mfp'];
						}
						$this->request->get['mfp_seo_alias'] = $part;
				
						continue;
					}
				}				
			

				if ($query->num_rows) {
					$url = explode('=', $query->row['query']);

					if ($url[0] == 'product_id') {
						$this->request->get['product_id'] = $url[1];
					}

					if ($url[0] == 'category_id') {
						if (!isset($this->request->get['path'])) {
							$this->request->get['path'] = $url[1];
						} else {
							$this->request->get['path'] .= '_' . $url[1];
						}
					}
                    if ($url[0] == 'cat_prod_id') {
                        if (!isset($this->request->get['cat_prod_id'])) {
                            $this->request->get['cat_prod_id'] = $url[1];
                        } else {
                            $this->request->get['cat_prod_id'] .= '_' . $url[1];
                        }
                    }

					if ($url[0] == 'manufacturer_id') {
						$this->request->get['manufacturer_id'] = $url[1];
					}

					if ($url[0] == 'information_id') {
						$this->request->get['information_id'] = $url[1];
					}

					if ($query->row['query'] && $url[0] != 'information_id' && $url[0] != 'manufacturer_id' && $url[0] != 'category_id'&& $url[0] != 'cat_prod_id' && $url[0] != 'product_id') {
						$this->request->get['route'] = $query->row['query'];
					}
				} else {
					$this->request->get['route'] = 'error/not_found';

					break;
				}
			}

			if (!isset($this->request->get['route'])) {
				if (isset($this->request->get['product_id'])) {
					$this->request->get['route'] = 'product/product';
				} elseif (isset($this->request->get['path'])) {
					$this->request->get['route'] = 'product/category';
				} elseif (isset($this->request->get['cat_prod_id'])) {
                    $this->request->get['route'] = 'product/catprod';
                }elseif (isset($this->request->get['manufacturer_id'])) {
					$this->request->get['route'] = 'product/manufacturer/info';
				} elseif (isset($this->request->get['information_id'])) {
					$this->request->get['route'] = 'information/information';
				}elseif (isset($this->request->get['news'])) {
                    $this->request->get['route'] = 'information/news';
                }
			}

			if (isset($this->request->get['route'])) {
				return new Action($this->request->get['route']);
			}

		  // Redirect 301	
		} elseif (isset($this->request->get['route']) && empty($this->request->post) && !isset($this->request->get['token']) && $this->config->get('config_seo_url')) {
			$arg = '';
			$cat_path = false;
			if ($this->request->get['route'] == 'product/product' && isset($this->request->get['product_id'])) {
				$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "url_alias WHERE `query` = 'product_id=" . (int)$this->request->get['product_id'] . "'");	
				if ($query->num_rows && $query->row['keyword'] /**/ ) {
					$this->request->get['route'] = 'product_id=' . $this->request->get['product_id'];
				}
			} elseif ($this->request->get['route'] == 'product/category' && isset($this->request->get['path'])) {
				$categorys_id = explode('_', $this->request->get['path']);
				$cat_path = '';
				foreach ($categorys_id as $category_id) {
					$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "url_alias WHERE `query` = 'category_id=" . (int)$category_id . "'");	
					if ($query->num_rows && $query->row['keyword'] /**/ ) {
						$cat_path .= '/' . $query->row['keyword'];
					} else {
						$cat_path = false;
						break;
					}
				}


				$arg = trim($cat_path, '/');
				if (isset($this->request->get['page'])) $arg = $arg . '?page=' . (int)$this->request->get['page'];
			}elseif ($this->request->get['route'] == 'product/catprod' && isset($this->request->get['cat_prod_id'])) {
                $categorys_id = explode('_', $this->request->get['cat_prod_id']);
                $cat_path = '';
                foreach ($categorys_id as $category_id) {
                    $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "url_alias WHERE `query` = 'cat_prod_id=" . (int)$category_id . "'");
                    if ($query->num_rows && $query->row['keyword'] /**/ ) {
                        $cat_path .= '/' . $query->row['keyword'];
                    } else {
                        $cat_path = false;
                        break;
                    }
                }


                $arg = trim($cat_path, '/');
                if (isset($this->request->get['page'])) $arg = $arg . '?page=' . (int)$this->request->get['page'];
            } elseif ($this->request->get['route'] == 'product/manufacturer/info' && isset($this->request->get['manufacturer_id'])) {
				$this->request->get['route'] = 'manufacturer_id=' . $this->request->get['manufacturer_id'];
				if (isset($this->request->get['page'])) $arg = $arg . '?page=' . (int)$this->request->get['page'];
			} elseif ($this->request->get['route'] == 'information/information' && isset($this->request->get['information_id'])) {
				$this->request->get['route'] = 'information_id=' . $this->request->get['information_id'];
			}
		//	elseif($this->request->get['route'] == 'product/catprod' && isset($this->request->get['cat_prod_id'])){
        //        $this->request->get['route'] = 'cat_prod_id=' . $this->request->get['cat_prod_id'];
        //    }
            elseif (sizeof($this->request->get) > 1) {
				$args = '?' . str_replace("route=" . $this->request->get['route'].'&amp;', "", $this->request->server['QUERY_STRING']);
				$arg = str_replace('&amp;', '&', $args);
			}

			$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "url_alias WHERE query = '" . $this->db->escape($this->request->get['route']) . "'");

			if ($query->num_rows && $query->row['keyword']) /**/ {
				$this->response->redirect($query->row['keyword'] . $arg, 301);
			} elseif ($cat_path) {
				$this->response->redirect($arg, 301);
			} elseif ($this->request->get['route'] == 'common/home') {
				$this->response->redirect(HTTP_SERVER . $arg, 301);
			}
		}
	}

	public function rewrite($link) {
		$url_info = parse_url(str_replace('&amp;', '&', $link));

		$url = '';

		$data = array();

		parse_str($url_info['query'], $data);

                            
                            $this->getDataWhisPath($data);




		foreach ($data as $key => $value) {
			if (isset($data['route'])) {
				if (($data['route'] == 'product/product' && $key == 'product_id')  || (($data['route'] == 'product/manufacturer/info' || $data['route'] == 'product/product') && $key == 'manufacturer_id') || ($data['route'] == 'information/information' && $key == 'information_id')) {
					$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "url_alias WHERE `query` = '" . $this->db->escape($key . '=' . (int)$value) . "'");

					if ($query->num_rows && $query->row['keyword']) {
						$url .= '/' . $query->row['keyword'];

						unset($data[$key]);
					}
				} elseif ($key == 'path') {
					$categories = explode('_', $value);

					foreach ($categories as $category) {
						$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "url_alias WHERE `query` = 'category_id=" . (int)$category . "'");

						if ($query->num_rows && $query->row['keyword']) {
							$url .= '/' . $query->row['keyword'];
						} else {
							$url = '';

							break;
						}
					}

					unset($data[$key]);
				} elseif ($key == 'cat_prod_id') {
                    $categoriesc = explode('_', $value);

                    foreach ($categoriesc as $category) {
                        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "url_alias WHERE `query` = 'cat_prod_id=" . (int)$category . "'");

                        if ($query->num_rows && $query->row['keyword']) {
                            $url .= '/' . $query->row['keyword'];
                        } else {
                            $url = '';

                            break;
                        }
                    }

                    unset($data[$key]);
                } elseif ($key == 'route') {
					$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "url_alias WHERE `query` = '" . $this->db->escape($data['route']) . "'");
					if ($query->num_rows) /**/ {
						$url .= '/' . $query->row['keyword'];
					}
				}
			}
		}

		if ($url) {

				if( ! isset( $this->model_module_mega_filter ) ) {
					$this->load->model( 'module/mega_filter' );
				}
				
				if( method_exists( $this->model_module_mega_filter, 'rewrite' ) ) {
					list( $url, $data ) = $this->model_module_mega_filter->rewrite( $url, $data );
				}
			
			unset($data['route']);

			$query = '';

			if ($data) {
				foreach ($data as $key => $value) {
					$query .= '&' . rawurlencode((string)$key) . '=' . rawurlencode((is_array($value) ? http_build_query($value) : (string)$value));
				}

				if ($query) {
					$query = '?' . str_replace('&', '&amp;', trim($query, '&'));
				}
			}

			return $url_info['scheme'] . '://' . $url_info['host'] . (isset($url_info['port']) ? ':' . $url_info['port'] : '') . str_replace('/index.php', '', $url_info['path']) . $url . $query;
		} else {
			return $link;
		}
	}
}