<?php echo $header; ?>
<div class="container">
  <ul class="breadcrumb">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <li><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a></li>
    <?php } ?>
  </ul>
  <div class="row"><?php echo $column_left; ?>
    <?php if ($column_left && $column_right) { ?>
    <?php $class = 'col-sm-6'; ?>
    <?php } elseif ($column_left || $column_right) { ?>
    <?php $class = 'col-sm-9'; ?>
    <?php } else { ?>
    <?php $class = 'col-sm-12'; ?>
    <?php } ?>
    <div id="content" class="<?php echo $class; ?>"><?php echo $content_top; ?>
      <h1><?php echo $heading_title; ?></h1>
      <label class="control-label" for="input-search"><?php echo $entry_search; ?></label>
      <div class="row">
        <div class="col-sm-4">
          <input type="text" name="search" value="<?php echo $search; ?>" placeholder="<?php echo $text_keyword; ?>" id="input-search" class="form-control" />
        </div>
        <div class="col-sm-3">
          <select name="category_id" class="form-control">
            <option value="0"><?php echo $text_category; ?></option>
            <?php foreach ($categories as $category_1) { ?>
            <?php if ($category_1['category_id'] == $category_id) { ?>
            <option value="<?php echo $category_1['category_id']; ?>" selected="selected"><?php echo $category_1['name']; ?></option>
            <?php } else { ?>
            <option value="<?php echo $category_1['category_id']; ?>"><?php echo $category_1['name']; ?></option>
            <?php } ?>
            <?php foreach ($category_1['children'] as $category_2) { ?>
            <?php if ($category_2['category_id'] == $category_id) { ?>
            <option value="<?php echo $category_2['category_id']; ?>" selected="selected">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $category_2['name']; ?></option>
            <?php } else { ?>
            <option value="<?php echo $category_2['category_id']; ?>">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $category_2['name']; ?></option>
            <?php } ?>
            <?php foreach ($category_2['children'] as $category_3) { ?>
            <?php if ($category_3['category_id'] == $category_id) { ?>
            <option value="<?php echo $category_3['category_id']; ?>" selected="selected">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $category_3['name']; ?></option>
            <?php } else { ?>
            <option value="<?php echo $category_3['category_id']; ?>">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $category_3['name']; ?></option>
            <?php } ?>
            <?php } ?>
            <?php } ?>
            <?php } ?>
          </select>
        </div>
        <div class="col-sm-3">
          <label class="checkbox-inline">
            <?php if ($sub_category) { ?>
            <input type="checkbox" name="sub_category" value="1" checked="checked" />
            <?php } else { ?>
            <input type="checkbox" name="sub_category" value="1" />
            <?php } ?>
            <?php echo $text_sub_category; ?></label>
        </div>
      </div>
      <p>
        <label class="checkbox-inline">
          <?php if ($description) { ?>
          <input type="checkbox" name="description" value="1" id="description" checked="checked" />
          <?php } else { ?>
          <input type="checkbox" name="description" value="1" id="description" />
          <?php } ?>
          <?php echo $entry_description; ?></label>
      </p>
      <input type="button" value="<?php echo $button_search; ?>" id="button-search" class="btn btn-primary" />
      <h2><?php echo $text_search; ?></h2>
      <?php if ($products) { ?>
      <div class="row">
        <div class="col-md-2 col-sm-6 hidden-xs">
          <div class="btn-group btn-group-sm">
            <button type="button" id="list-view" class="btn btn-default" data-toggle="tooltip" title="<?php echo $button_list; ?>"><i class="fa fa-th-list"></i></button>
            <button type="button" id="grid-view" class="btn btn-default" data-toggle="tooltip" title="<?php echo $button_grid; ?>"><i class="fa fa-th"></i></button>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="form-group">
            <a href="<?php echo $compare; ?>" id="compare-total" class="btn btn-link"><?php echo $text_compare; ?></a>
          </div>
        </div>
        <div class="col-md-4 col-xs-6">
          <div class="form-group input-group input-group-sm">
            <label class="input-group-addon" for="input-sort"><?php echo $text_sort; ?></label>
            <select id="input-sort" class="form-control" onchange="location = this.value;">
              <?php foreach ($sorts as $sorts) { ?>
              <?php if ($sorts['value'] == $sort . '-' . $order) { ?>
              <option value="<?php echo $sorts['href']; ?>" selected="selected"><?php echo $sorts['text']; ?></option>
              <?php } else { ?>
              <option value="<?php echo $sorts['href']; ?>"><?php echo $sorts['text']; ?></option>
              <?php } ?>
              <?php } ?>
            </select>
          </div>
        </div>
        <div class="col-md-3 col-xs-6">
          <div class="form-group input-group input-group-sm">
            <label class="input-group-addon" for="input-limit"><?php echo $text_limit; ?></label>
            <select id="input-limit" class="form-control" onchange="location = this.value;">
              <?php foreach ($limits as $limits) { ?>
              <?php if ($limits['value'] == $limit) { ?>
              <option value="<?php echo $limits['href']; ?>" selected="selected"><?php echo $limits['text']; ?></option>
              <?php } else { ?>
              <option value="<?php echo $limits['href']; ?>"><?php echo $limits['text']; ?></option>
              <?php } ?>
              <?php } ?>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <?php foreach ($products as $product) {/* << Product Option Image PRO module */ $poip_product_images_shown = false; /* variable to check and not show poip_img twice for the same product */ /* >> Product Option Image PRO module */  ?>
        <div class="product-layout product-list col-xs-12">
          <div class="product-thumb">
            <div class="image"><a href="<?php echo $product['href']; ?>"><img src="<?php echo $product['thumb']; ?>" <?php // Product Option Image PRO module << ?><?php if (!isset($current_class)) $current_class = time(); ?> data-poip_id="image_<?php echo "".$current_class."_".$product['product_id']; ?>" <?php   //  >> Product Option Image PRO module  ?>  alt="<?php echo $product['name']; ?>" title="<?php echo $product['name']; ?>" class="img-responsive" /></a></div>

      
      <?php // Product Option Image PRO module << ?>
			
      <?php  if ( !empty($poip_installed) && !empty($poip_theme_name)  && isset($product['option_images']) && $product['option_images'] && $poip_theme_name != "mattimeo"
        && $poip_theme_name != "bt_comohos" && $poip_theme_name != 'stowear' && $poip_theme_name != 'themegloballite' && $poip_theme_name != 'logancee' ) {
				
				if (!isset($poip_product_images_shown) ) $poip_product_images_shown = false;
				
				if (!$poip_product_images_shown) {
				
					if ( $poip_theme_name !== 'marketshop') {
						$poip_product_images_shown = true;
					}
				
					foreach ($product['option_images'] as $product_option_id => $option_images) {
						
						if ($poip_theme_name == "sellegance" || $poip_theme_name == "theme422"
							|| $poip_theme_name == "polianna" || $poip_theme_name == "moneymaker"
							 ) {
							
							echo "<div data-poip_id=\"poip_img\" style=\"  text-align: center; \">";
							$image_counter = 0;
							foreach ($option_images as $product_option_value_id => $option_image) {
								$image_counter++;
								echo "
												<a ". ($poip_theme_name!="mattimeo" ? "onmouseover=\"poip_show_thumb(this);\"" : "") ."
													style=\"display:inline;\" href=\"".$product['href'].(strpos($product['href'],'?')===false?'?':'&amp;')."poip_ov=".(int)$product_option_value_id."\"
													".( (isset($option_image['title']) && $option_image['title']) ? " title=\"".$option_image['title']."\" " : "" )."
													data-thumb=\"".$option_image['thumb']."\"
													data-image_id=\"".$current_class."_".$product['product_id']."\">
												<img src=\"".$option_image['icon']."\" alt=\"".( (isset($option_image['title']) && $option_image['title']) ? $option_image['title'] : "" )."\"></a>
											";
							}
							echo "</div>";
	
						} elseif ($poip_theme_name == "pav_styleshop" ) { // for product_module.tpl
							// just skip
							
						} elseif ($poip_theme_name == "bt_comohos" ) {
						
						} elseif ($poip_theme_name == "welldone" ) { 
							
            } elseif ($poip_theme_name == 'fastor') { 
						
							echo "<div data-poip_id=\"poip_img\" style=\"   \">";
							$image_counter = 0;
							foreach ($option_images as $product_option_value_id => $option_image) {
								$image_counter++;
								echo "
												<a onmouseover=\"poip_show_thumb(this);\" 
													style=\"display:inline;float:left;\" href=\"".$product['href'].(strpos($product['href'],'?')===false?'?':'&amp;')."poip_ov=".(int)$product_option_value_id."\"
													".( (isset($option_image['title']) && $option_image['title']) ? " title=\"".$option_image['title']."\" " : "" )."
													data-thumb=\"".$option_image['thumb']."\"
													data-image_id=\"".$current_class."_".$product['product_id']."\">
												<img src=\"".$option_image['icon']."\" class=\"img-thumbnail\" alt=\"".( (isset($option_image['title']) && $option_image['title']) ? $option_image['title'] : "" )."\"></a>
											";
							}
							echo "</div>";  
							
						} elseif ($poip_theme_name == "mariposa-purple") {
					
							echo "<div data-poip_id=\"poip_img\" style=\"  text-align: center; margin-top: 3px; \">";
							$image_counter = 0;
							foreach ($option_images as $product_option_value_id => $option_image) {
								$image_counter++;
								echo "
												<a onmouseover=\"poip_show_thumb(this);\" 
													style=\"display:inline;\" href=\"".$product['href'].(strpos($product['href'],'?')===false?'?':'&amp;')."poip_ov=".(int)$product_option_value_id."\"
													".( (isset($option_image['title']) && $option_image['title']) ? " title=\"".$option_image['title']."\" " : "" )."
													data-thumb=\"".$option_image['thumb']."\"
													data-image_id=\"".$current_class."_".$product['product_id']."\">
												<img style=\"width:auto;height:auto;\" src=\"".$option_image['icon']."\" class=\"img-thumbnail\"></a>
											";
							}
							echo "</div>";	
						
						} else { // OC 2.0 new style default
						
							echo "<div data-poip_id=\"poip_img\" style=\"  text-align: center; margin-top: 3px; \">";
							$image_counter = 0;
							foreach ($option_images as $product_option_value_id => $option_image) {
								$image_counter++;
								echo "
												<a onmouseover=\"poip_show_thumb(this);\" 
													style=\"display:inline;\" href=\"".$product['href'].(strpos($product['href'],'?')===false?'?':'&amp;')."poip_ov=".(int)$product_option_value_id."\"
													".( (isset($option_image['title']) && $option_image['title']) ? " title=\"".$option_image['title']."\" " : "" )."
													data-thumb=\"".$option_image['thumb']."\"
													data-image_id=\"".$current_class."_".$product['product_id']."\">
												<img src=\"".$option_image['icon']."\" class=\"img-thumbnail\" alt=\"".( (isset($option_image['title']) && $option_image['title']) ? $option_image['title'] : "" )."\"></a>
											";
											
								
											
							}
							echo "</div>";
						
						}
						
						/* OC 1.X old-style default
						} else {
						
							echo "<table data-poip_id=\"poip_img\" style=\"width: auto; padding:0px; border-collapse:collapse; border-spacing:0px; border:0px;\"><tr><td style='padding:0px;'>";
							$image_counter = 0;
							foreach ($option_images as $product_option_value_id => $option_image) {
								$image_counter++;
								if ($image_counter % 5 == 0) echo "<br>";
								echo "<div class=\"image\" style=\"float:left; margin-left:0px; margin-right:0px; \">
												<a onmouseover=\"poip_show_thumb(this);\" href=\"".$product['href'].(strpos($product['href'],'?')===false?'?':'&amp;')."poip_ov=".(int)$product_option_value_id."\"
													".( (isset($option_image['title']) && $option_image['title']) ? " title=\"".$option_image['title']."\" " : "" )."
													data-thumb=\"".$option_image['thumb']."\"
													data-image_id=\"".$current_class."_".$product['product_id']."\">
												<img src=\"".$option_image['icon']."\" alt=\"".( (isset($option_image['title']) && $option_image['title']) ? $option_image['title'] : "" )."\"></a>
											</div>";
											
								if ($image_counter % 4 == 0) echo "<br>";
							}
							echo "</td></tr></table>";
						}
						*/
					}
				}
      } ?>
      <?php //  >> Product Option Image PRO module ?>
      
            <div>

      <?php // Product Option Image PRO module << ?>
      <?php  if ( !empty($poip_installed) && !empty($poip_theme_name)  && isset($product['option_images']) && $product['option_images']
							&& ($poip_theme_name == "bt_comohos" || $poip_theme_name == "theme573" || $poip_theme_name == "theme628" || $poip_theme_name == 'theme630' || $poip_theme_name == "theme640") ) {
			
				if (!isset($poip_product_images_shown)) $poip_product_images_shown = false;
				
				if (!$poip_product_images_shown) {
				
					$poip_product_images_shown = true;
				
					foreach ($product['option_images'] as $product_option_id => $option_images) {
						
						echo "<div data-poip_id=\"poip_img\" style=\"  text-align: left; margin-top: 3px; width:100%; \">";
						$image_counter = 0;
						foreach ($option_images as $product_option_value_id => $option_image) {
							$image_counter++;
							echo "
											<a onmouseover=\"poip_show_thumb(this);return false;\"
												style=\"display:inline;\" href=\"".$product['href'].(strpos($product['href'],'?')===false?'?':'&amp;')."poip_ov=".(int)$product_option_value_id."\"
												".( (isset($option_image['title']) && $option_image['title']) ? " title=\"".$option_image['title']."\" " : "" )."
												data-thumb=\"".$option_image['thumb']."\"
												data-image_id=\"".$current_class."_".$product['product_id']."\">
											<img src=\"".$option_image['icon']."\" class=\"img-thumbnail\" width=\"23\" height=\"23\" alt=\"".( (isset($option_image['title']) && $option_image['title']) ? $option_image['title'] : "" )."\"></a>
										";
						}
						echo "</div>";
					}
				}
      } ?>
      <?php //  >> Product Option Image PRO module ?>
      

      <?php // Product Option Image PRO module << ?>
      <?php  if ( !empty($poip_installed) && !empty($poip_theme_name)  && isset($product['option_images']) && $product['option_images'] && $poip_theme_name == 'opc1000') {
      
        foreach ($product['option_images'] as $product_option_id => $option_images) {
          
					echo "<div data-poip_id=\"poip_img\" style=\"  text-align: center; margin-top: 3px; \">";
          $image_counter = 0;
          foreach ($option_images as $product_option_value_id => $option_image) {
            $image_counter++;
            echo "
                    <a onmouseover=\"poip_show_thumb(this);\" 
                      style=\"display:inline;\" href=\"".$product['href'].(strpos($product['href'],'?')===false?'?':'&amp;')."poip_ov=".(int)$product_option_value_id."\"
                      ".( (isset($option_image['title']) && $option_image['title']) ? " title=\"".$option_image['title']."\" " : "" )."
                      data-thumb=\"".$option_image['thumb']."\"
                      data-image_id=\"".$current_class."_".$product['product_id']."\">
                    <img src=\"".$option_image['icon']."\" class=\"img-thumbnail\" alt=\"".( (isset($option_image['title']) && $option_image['title']) ? $option_image['title'] : "" )."\"></a>
                  ";
          }
          echo "</div>";
					
        }
      
      } ?>
      <?php //  >> Product Option Image PRO module ?>
      
              <div class="caption">
                <h4><a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a></h4>
                <p><?php echo $product['description']; ?></p>
                <?php if ($product['price']) { ?>
                <p class="price">
                  <?php if (!$product['special']) { ?>
                  <?php echo $product['price']; ?>
                  <?php } else { ?>
                  <span class="price-new"><?php echo $product['special']; ?></span> <span class="price-old"><?php echo $product['price']; ?></span>
                  <?php } ?>
                  <?php if ($product['tax']) { ?>
                  <span class="price-tax"><?php echo $text_tax; ?> <?php echo $product['tax']; ?></span>
                  <?php } ?>
                </p>
                <?php } ?>
                <?php if ($product['rating']) { ?>
                <div class="rating">
                  <?php for ($i = 1; $i <= 5; $i++) { ?>
                  <?php if ($product['rating'] < $i) { ?>
                  <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                  <?php } else { ?>
                  <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i><i class="fa fa-star-o fa-stack-2x"></i></span>
                  <?php } ?>
                  <?php } ?>
                </div>
                <?php } ?>
              </div>
              <div class="button-group">
                <button type="button" onclick="cart.add('<?php echo $product['product_id']; ?>', '<?php echo $product['minimum']; ?>');"><i class="fa fa-shopping-cart"></i> <span class="hidden-xs hidden-sm hidden-md"><?php echo $button_cart; ?></span></button>
                <button type="button" data-toggle="tooltip" title="<?php echo $button_wishlist; ?>" onclick="wishlist.add('<?php echo $product['product_id']; ?>');"><i class="fa fa-heart"></i></button>
                <button type="button" data-toggle="tooltip" title="<?php echo $button_compare; ?>" onclick="compare.add('<?php echo $product['product_id']; ?>');"><i class="fa fa-exchange"></i></button>
              </div>
            </div>
          </div>
        </div>
        <?php } ?>
      </div>
      <div class="row">
        <div class="col-sm-6 text-left"><?php echo $pagination; ?></div>
        <div class="col-sm-6 text-right"><?php echo $results; ?></div>
      </div>
      <?php } else { ?>
      <p><?php echo $text_empty; ?></p>
      <?php } ?>
      <?php echo $content_bottom; ?></div>
    <?php echo $column_right; ?></div>
</div>
<script type="text/javascript"><!--
$('#button-search').bind('click', function() {
	url = 'index.php?route=product/search';

	var search = $('#content input[name=\'search\']').prop('value');

	if (search) {
		url += '&search=' + encodeURIComponent(search);
	}

	var category_id = $('#content select[name=\'category_id\']').prop('value');

	if (category_id > 0) {
		url += '&category_id=' + encodeURIComponent(category_id);
	}

	var sub_category = $('#content input[name=\'sub_category\']:checked').prop('value');

	if (sub_category) {
		url += '&sub_category=true';
	}

	var filter_description = $('#content input[name=\'description\']:checked').prop('value');

	if (filter_description) {
		url += '&description=true';
	}

	location = url;
});

$('#content input[name=\'search\']').bind('keydown', function(e) {
	if (e.keyCode == 13) {
		$('#button-search').trigger('click');
	}
});

$('select[name=\'category_id\']').on('change', function() {
	if (this.value == '0') {
		$('input[name=\'sub_category\']').prop('disabled', true);
	} else {
		$('input[name=\'sub_category\']').prop('disabled', false);
	}
});

$('select[name=\'category_id\']').trigger('change');
--></script>
<?php echo $footer; ?>