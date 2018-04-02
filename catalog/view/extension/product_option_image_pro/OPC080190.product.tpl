<script type="text/javascript"><!--
	// Shine //2016/03/18 // 2016/10/28

	var poip_product_custom = function(){
		poip_product_default.call(this);
	}
	poip_product_custom.prototype = Object.create(poip_product_default.prototype);
	poip_product_custom.prototype.constructor = poip_product_custom;
	
	poip_product_custom.prototype.custom_init = function(){
		
	}
	
	// << ITS OWN FUNCTIONS
	// >> ITS OWN FUNCTIONS
	
	// << ADDITIONAL FUNCTIONS
	// without replacing or stopping original script execution, just addition
	
	// >> ADDITIONAL FUNCTIONS 
	
	// << REPLACING FUNCTIONS
	// to be called from standard function, to work instead of standard algorithm (prefixes replace_ and if_)

	
	poip_product_custom.prototype.replace_setVisibleImages = function(images, counter) {
		var this_object = this;
		
		clearTimeout(this_object.set_visible_images_timer_id);
		if (!counter) counter = 1;
		if (counter == 100) {
			this_object.set_visible_images_timer_id = false;
			return;
		}
	
		if ( $('.image-additional').length ) {
			
			if ( !$('#poip_images').length ) {
				$('.image-additional').before('<div id="poip_images" style="display:none;"></div>');
				var added_img = [];
				$('.image-additional a').each(function(){
					//$('#poip_images').append( $(this).parent().parent().clone() );
					if ( $.inArray($(this).attr('href'), added_img) == -1 ) {
						$('#poip_images').append( $(this).clone() );
						added_img.push($(this).attr('href'));
					}
				});
			}
			
			if ( this_object.set_visible_images_first_call ) {
				if ( !$('.image-additional .slider-wrapper').length ) {
					this_object.set_visible_images_timer_id = setTimeout(function(){ this_object.replace_setVisibleImages(images, counter+1); }, 100);
					return;
				}
				this_object.set_visible_images_first_call = false;
			}
			
			var current_imgs = [];
			$('.image-additional').find('a').each( function(){
				//if ( $.inArray($(this).attr('href'), current_imgs) == -1) {
					current_imgs.push($(this).attr('href'));
				//}
			});
			
			if ( current_imgs.toString() == images.toString() ) {
				this_object.set_visible_images_timer_id = false;
				return; // nothing to change
			}
			
			var shown_imgs = [];
			
			html = '';
			$('#poip_images a').each(function(){
				if ( $.inArray($(this).attr('href'), images) != -1 && $.inArray($(this).attr('href'), shown_imgs) == -1 ) {
					
					//current_carousel.addItem('<div>'+ this_object.getElementOuterHTML($(this)) +'</div>');
					//html += ''+ this_object.getElementOuterHTML($(this).parent().parent()) +'';
					html += '<div class="slider-item"><div class="product-block">'+ this_object.getElementOuterHTML($(this)) +'</div></div>';
					
					shown_imgs.push( $(this).attr('href') );
					
				}
			});
			
			$('.image-additional').html(html);

			var myObject = 'additional';
			if(widthClassOptions[myObject])
				var myDefClass = widthClassOptions[myObject];
			else
				var myDefClass= 'grid_default_width';
			
			var slider = $("#additional-carousel");
			slider.sliderCarousel({
				defWidthClss : myDefClass,
				subElement   : '.slider-item',
				subClass     : 'product-block',
				firstClass   : 'first_item_tm',
				lastClass    : 'last_item_tm',
				slideSpeed : 200,
				paginationSpeed : 800,
				autoPlay : false,
				stopOnHover : false,
				goToFirst : true,
				goToFirstSpeed : 1000,
				goToFirstNav : true,
				pagination : true,
				paginationNumbers: false,
				responsive: true,
				responsiveRefreshRate : 200,
				baseClass : "slider-carousel",
				theme : "slider-theme",
				autoHeight : true
			});
			
			if (poip_settings['img_hover']) {
				$('.image-additional a').mouseover(function(){
					this_object.eventAdditionalImageMouseover(this);
				}); 
			}
			
		}	
		this_object.set_visible_images_timer_id = false;
	}
	
	poip_product_custom.prototype.if_updateZoomImage = function(img_click) {
		var this_object = this;
		// nothing
		return true;
	}
	
	poip_product_custom.prototype.replace_getMainImage = function() {
		return $('#cloud-zoom');
	}
	
	poip_product_custom.prototype.if_refreshPopupImagesBody = function() {
		
		if ( $('#additional-carousel a:visible').length ) {
			//$('#additional-carousel').magnificPopup({
			$('.thumbnails').magnificPopup({
				type:'image',
				delegate: '#additional-carousel a:visible',
				gallery: {
					enabled:true
				}
			});
			this_object.getMainImage().on('click', function(event) {
				this_object.eventMainAImgClick(event, this);
			});
			//this_object.getMainImage().on('click', this_object.eventMainAImgClick);
			
		} else {
			$('.thumbnails').magnificPopup({
				type:'image',
				delegate: 'a:visible',
				gallery: {
					enabled:true
				}
			});
		}
		
		return true;
	}
	
	poip_product_custom.prototype.if_eventMainAImgClick = function(event, element) {
		var this_object = this;
		
		event.preventDefault();
		
		var main_href = $(element).parent().attr('href');
		var img_cnt = 0;
		this_object.getAdditionalImagesBlock().find('a').each(function(){
			if ($(this).attr('href') == main_href) {
				$('.thumbnails').magnificPopup('open', img_cnt);
				return;
			}
			img_cnt++;
		});
	}
	
	// >> REPLACING FUNCTIONS	

	var poip_product = new poip_product_custom();

//--></script>