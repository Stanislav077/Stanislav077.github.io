<script type="text/javascript"><!--

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
	
	//poip_product_custom.prototype.additional_makeInitActions = function() {
	//	var this_object = this;
	//	
	//}
	
	//poip_product_custom.prototype.additional_documentReady = function() {
	//	var this_object = this;
	//	
	//}
	
	//poip_product_custom.prototype.additional_afterElevateZoomClickImage = function() {
	//	var this_object = this;
	//	
	//}
	
	//poip_product_custom.prototype.additional_afterChangeVisibleImages = function() {
	//	var this_object = this;
	//	
	//}
	
	//poip_product_custom.prototype.additional_endOfEventAdditionalImageMouseover = function() {
	//	var this_object = this;
	//	
	//}
	
	//poip_product_custom.prototype.additional_addMainImageInitialHrefToArray = function(images) {
	//	return images;
	//}
	
	//poip_product_custom.prototype.additional_useAddInitialMainImageToPoipImages = function() {
	//	return false;
	//}
	
	//poip_product_custom.prototype.additional_useOldOCStyleInit = function() {
	//	return true;
	//}
	
	// >> ADDITIONAL FUNCTIONS 
	
	// << REPLACING FUNCTIONS
	// to be called from standard function, to work instead of standard algorithm (prefixes replace_ and if_)

	
	poip_product_custom.prototype.replace_setVisibleImages = function(images, counter) {
		var this_object = this;
		
		if (!counter) counter = 1;
		if (counter == 50) return;
	
		if ( $('#image-additional').length ) {
		
			// first time - copy all images to hidden element
			if ( !$('#poip_images').length ) {
			
				// count elements per item
				var images_per_item = Math.max(4, $('#image-additional').find('.item:first').find('a').length);
			
				$('#image-additional').before('<div id="poip_images" style="display:none;" data-images-per-item="'+images_per_item+'"></div>');
				$('#image-additional-carousel a').each(function(){
					$('#poip_images').append( $(this).clone() );
				});
			};
			
			var it_was_first_call = this_object.set_visible_images_first_call;
			if ( this_object.set_visible_images_first_call ) {
				this_object.set_visible_images_first_call = false;
			}
			
			var current_imgs = [];
			$('.image-additional').find('a').each( function(){
				current_imgs.push($(this).attr('data-zoom-image'));
			});
			
			if ( current_imgs.toString() == images.toString() && !it_was_first_call ) {
				this_object.set_visible_images_timer_id = false;
				return; // nothing to change
			}
			
			// add visible images to carousel
			var pg_html = "";
			var shown_imgs = [];
			var anchors_cnt = 0;
			var images_per_item = $('#poip_images').attr('data-images-per-item');
			$('#poip_images a').each(function(){
				
				if ($.inArray( $(this).attr('data-zoom-image'), images) != -1 && $.inArray($(this).attr('data-zoom-image'), shown_imgs) == -1 ) {
				
					if (anchors_cnt%images_per_item==0) {
						if (anchors_cnt>0) pg_html = pg_html + "</div>";
						pg_html = pg_html + "<div class='item'>";
					}
				
					// show
					pg_html = pg_html + this_object.getElementOuterHTML($(this));
					shown_imgs.push(this.href);
					
					anchors_cnt++;
				}
			});
			if (pg_html != "") {
				pg_html = pg_html + "</div>";
			}
			
			if (pg_html != $('#image-additional-carousel').html() || it_was_first_call) {
			
				$('#image-additional-carousel').html(pg_html);
				if ($('#image-additional-carousel').find('.item').length>1) {
					$('#image-additional').find(".carousel-control").show();
				} else {
					$('#image-additional').find(".carousel-control").hide();
				}
				
				$('#image-additional .item:first').addClass('active');

				if (poip_settings['img_hover']) {
					$('#image-additional-carousel a').click(function(event){
						event.preventDefault()
					});
					$('#image-additional-carousel a').mouseover(function(){
						this_object.eventAdditionalImageMouseover(this);
					});
				}
				
			}
		}
	}
	
	//poip_product_custom.prototype.if_updateZoomImage = function(img_click) {
	//	var this_object = this;
	//	
	//	return true;
	//}
	
	//poip_product_custom.prototype.replace_afterSetProductOptionValue = function(option_element) {
	//	var this_object = this;
	//	
	//}
	
	//poip_product_custom.prototype.if_afterSetProductOptionValue = function(option_element) {
	//	var this_object = this;
	//	
	//	return true;
	//}
	
	//poip_product_custom.prototype.replace_getAdditionalImagesBlock = function() {
	//	var this_object = this;
	//	
	//}
	
	//poip_product_custom.prototype.replace_turnOnAdditionalImagesMouseover = function(){
	//	var this_object = this;
	//	
	//}
	
	//poip_product_custom.prototype.replace_setMainImage = function(main, popup) {
	//	var this_object = this;
	//
	//}
	
	//poip_product_custom.prototype.if_setMainImage = function(main, popup) {
	//	var this_object = this;
	//
	//}
	
	//poip_product_custom.prototype.replace_useColorboxRefreshing = function() {
	//	return false;
	//}
	
	//poip_product_custom.prototype.replace_useMainImageUpdatingOnMouseover = function() {
	//	return false;
	//}
	
	//poip_product_custom.prototype.replace_getMainImage = function() {
	//	var this_object = this;
	//}
	
	//poip_product_custom.prototype.if_refreshPopupImages = function() {
	//	return false;
	//}
	
	//poip_product_custom.prototype.if_refreshPopupImagesBody = function() {
	//	return true;
	//}
	
	//poip_product_custom.prototype.replace_refreshPopupImages = function() {
	//	// nothing
	//}
	
	//poip_product_custom.prototype.if_beforeColorboxReinit = function() {
	//	// nothing
	//}
	
	//poip_product_custom.prototype.replace_getAdditionalImageMouseoverHref = function(image_a) {
	//	
	//}
	
	//poip_product_custom.prototype.replace_getRefreshColorboxImagesVisible = function(image_a) {
	//	
	//}
	
	//poip_product_custom.prototype.if_triggerAfterColorboxReinit = function() {
	//	var this_object = this;
	//}
	
	//poip_product_custom.prototype.if_refreshColorboxImages = function() {
	//	var this_object = this;
	//}
	
	//poip_product_custom.prototype.if_eventMainAImgClick = function() {
	//	var this_object = this;
	//}
	
	//poip_product_custom.prototype.replace_getDocumentReadyState = function() {
	//	var this_object = this;
	//}
	
	//poip_product_custom.prototype.if_refreshOptionImagesContainer = function() {
	//	var this_object = this;
	//}
	
	// >> REPLACING FUNCTIONS	

	var poip_product = new poip_product_custom();

//--></script>