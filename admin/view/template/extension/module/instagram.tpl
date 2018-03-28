<?php echo $header; ?><?php echo $column_left; ?>
<div id="content">
	<div class="page-header">
		<div class="container-fluid">
			<div class="pull-right">
				<button type="submit" form="form-instagram" data-toggle="tooltip" title="<?php echo $button_save; ?>" class="btn btn-primary"><i class="fa fa-save"></i></button>
				<a href="<?php echo $cancel; ?>" data-toggle="tooltip" title="<?php echo $button_cancel; ?>" class="btn btn-default"><i class="fa fa-reply"></i></a>
			</div>
			<h1><?php echo $heading_title; ?></h1>
			<ul class="breadcrumb">
				<?php foreach ($breadcrumbs as $breadcrumb) { ?>
				<li><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a></li>
				<?php } ?>
			</ul>			
		</div>
	</div>
	<div class="container-fluid">
		<?php if ($error_warning) { ?>
		<div class="alert alert-danger"><i class="fa fa-exclamation-circle"></i> <?php echo $error_warning; ?>
			<button type="button" class="close" data-dismiss="alert">&times;</button>
		</div>
		<?php } ?>

		<?php if ($text_success_clear) { ?>
		<div class="alert alert-success"><i class="fa fa-check-circle"></i> <?php echo $text_success_clear; ?>   
			<button type="button" class="close" data-dismiss="alert">×</button>
		</div>
		<?php } ?>
		<div class="panel panel-default">

			<div class="panel-body">
				<form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data" id="form-instagram" class="form-horizontal">
					<ul class="nav nav-tabs">
						<li class="active"><a href="#tab-instagram" data-toggle="tab" aria-expanded="true">Instagram</a></li>
						<li class=""><a href="#tab-css" data-toggle="tab" aria-expanded="false">Customize CSS</a></li>						
						<li class=""><a href="#tab-log" data-toggle="tab" aria-expanded="false">Log</a></li>
						<li class="support-me"><a href="#tab-support" data-toggle="tab" aria-expanded="false">Support Me</a></li>
					</ul>
					<div class="tab-content">
						<div id="tab-instagram" class="tab-pane active">
							<div class="panel-heading">
								<h3 class="panel-title"><i class="fa fa-pencil"></i> <?php echo $text_edit; ?></h3>
							</div>
							<div class="form-group required">
								<label class="col-sm-2 control-label" for="input-access_token"><span data-toggle="tooltip" title="<?php echo htmlspecialchars($help_access_token); ?>"><?php echo $entry_access_token; ?></span></label>
								<div class="col-sm-10">
									<input type="text" name="instagram_access_token" value="<?php echo $instagram_access_token; ?>" placeholder="<?php echo $entry_access_token; ?>" id="input-access_token" class="form-control" />              
									<?php if ($error_access_token) { ?>
									<div class="text-danger"><?php echo $error_access_token; ?></div>
									<?php } ?>
									<div><a href="http://instagram.pixelunion.net/" target="_blank">Generate your Token</a></div>
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-2 control-label" for="input-photo-amount"><?php echo $entry_module_name; ?></label>
								<div class="col-sm-10">
									<input type="text" name="instagram_module_name" value="<?php echo $instagram_module_name; ?>" placeholder="<?php echo $entry_module_name; ?>" id="input-module_name" class="form-control" />
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-2 control-label" for="input-plugin-text-align"><?php echo $entry_text_align; ?></label>
								<div class="col-sm-10">
									<select name="instagram_text_align" id="input-plugin-text-align" class="form-control">										
										<option value="left" <?php echo ($instagram_text_align == 'left') ? 'selected' : '';?> >Left</option>
										<option value="center" <?php echo ($instagram_text_align == 'center') ? 'selected' : '';?> >Center</option>
										<option value="right" <?php echo ($instagram_text_align == 'right') ? 'selected' : '';?> >Right</option>									
									</select>
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-2 control-label" for="input-plugin-hover-effect"><?php echo $entry_text_hover_heart; ?></label>
								<div class="col-sm-10">
									<select name="instagram_hover_heart" id="input-plugin-hover-effect" class="form-control">
										<?php if ($instagram_hover_heart) { ?>
										<option value="hover-on" selected="selected"><?php echo $text_enabled; ?></option>
										<option value="0"><?php echo $text_disabled; ?></option>
										<?php } else { ?>
										<option value="hover-on"><?php echo $text_enabled; ?></option>
										<option value="0" selected="selected"><?php echo $text_disabled; ?></option>                  
										<?php } ?>
									</select>
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-2 control-label" for="input-photo-amount"><?php echo $entry_photo_amount; ?></label>
								<div class="col-sm-10">
									<input type="text" name="instagram_photo_amount" value="<?php echo $instagram_photo_amount; ?>" placeholder="<?php echo $entry_photo_amount; ?>" id="input-photo_amount" class="form-control" />
									<?php if ($error_photo_amount) { ?>
									<div class="text-danger"><?php echo $error_photo_amount; ?></div>
									<?php } ?>
								</div>
							</div>

							<div class="form-group">
								<div class="panel-heading">
									<h3 class="panel-title"><i class="fa fa-pencil"></i> <?php echo $text_plugin_edit; ?></h3>
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-2 control-label" for="input-photo-show"><?php echo $entry_photo_show; ?></label>
								<div class="col-sm-10">
									<input type="text" name="instagram_plugin_slide_show" value="<?php echo $instagram_plugin_slide_show; ?>" placeholder="<?php echo $entry_photo_show; ?>" id="input-photo-show" class="form-control" />
									<?php if ($error_slide_show) { ?>
									<div class="text-danger"><?php echo $error_slide_show; ?></div>
									<?php } ?>
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-2 control-label" for="input-plugin-slide-show"><?php echo $entry_slide_scroll; ?></label>
								<div class="col-sm-10">
									<input type="text" name="instagram_plugin_slide_scroll" value="<?php echo $instagram_plugin_slide_scroll; ?>" placeholder="<?php echo $entry_slide_scroll; ?>" id="input-plugin-slide-scroll" class="form-control" />
									<?php if ($error_slide_scroll) { ?>
									<div class="text-danger"><?php echo $error_slide_scroll; ?></div>
									<?php } ?>
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-2 control-label" for="input-plugin-auto-play"><?php echo $entry_auto_play; ?></label>
								<div class="col-sm-10">
									<select name="instagram_plugin_auto_play" id="input-plugin-dots" class="form-control">
										<?php if ($instagram_plugin_auto_play) { ?>
										<option value="true" selected="selected"><?php echo $text_enabled; ?></option>
										<option value="0"><?php echo $text_disabled; ?></option>
										<?php } else { ?>
										<option value="true"><?php echo $text_enabled; ?></option>
										<option value="0" selected="selected"><?php echo $text_disabled; ?></option>                  
										<?php } ?>
									</select>
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-2 control-label" for="input-plugin-dots"><?php echo $entry_slide_dots; ?></label>
								<div class="col-sm-10">
									<select name="instagram_plugin_dots" id="input-plugin-dots" class="form-control">
										<?php if ($instagram_plugin_dots) { ?>
										<option value="true" selected="selected"><?php echo $text_enabled; ?></option>
										<option value="0"><?php echo $text_disabled; ?></option>
										<?php } else { ?>
										<option value="true"><?php echo $text_enabled; ?></option>
										<option value="0" selected="selected"><?php echo $text_disabled; ?></option>                  
										<?php } ?>
									</select>
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-2 control-label" for="input-plugin-arrows"><?php echo $entry_slide_arrows; ?></label>
								<div class="col-sm-10">
									<select name="instagram_plugin_arrows" id="input-plugin-arrows" class="form-control">
										<?php if ($instagram_plugin_arrows) { ?>
										<option value="true" selected="selected"><?php echo $text_enabled; ?></option>
										<option value="0"><?php echo $text_disabled; ?></option>
										<?php } else { ?>
										<option value="true"><?php echo $text_enabled; ?></option>
										<option value="0" selected="selected"><?php echo $text_disabled; ?></option>
										<?php } ?>
									</select>
								</div>
							</div>

							<div class="form-group color-input <?php echo ($instagram_plugin_arrows) ? '' : 'hidden';?>">
								<label class="col-sm-2 control-label" for="arrow_color"><?php echo $entry_arrow_color; ?></label>
								<div class="col-sm-10">
									<div class="input-group">
										<input type="text" value="<?php echo $instagram_arrow_color; ?>" placeholder="<?php echo $instagram_arrow_color; ?>"  class="form-control color" disabled />
										<input type="hidden" name="instagram_arrow_color" value="<?php echo $instagram_arrow_color; ?>" class="color">
										<?php if ($error_color) { ?>
										<div class="text-danger"><?php echo $error_color; ?></div>
										<?php } ?>
										<span class="input-group-addon"><span data-toggle="tooltip" title="<?php echo $help_instagram_arrow_color; ?>"><input type='text' id="instagram_color" /> </span></span>
									</div>
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-2 control-label" for="input-plugin-auto-play-speed"><?php echo $entry_auto_play_speed; ?><span data-toggle="tooltip" title="<?php echo htmlspecialchars($help_auto_play_speed); ?>"></span></label>
								<div class="col-sm-10">
									<input type="text" name="instagram_plugin_auto_play_speed" value="<?php echo $instagram_plugin_auto_play_speed; ?>" placeholder="<?php echo $entry_auto_play_speed; ?>" id="input-plugin-auto-play-speed" class="form-control" />
									<?php if ($error_auto_play_speed) { ?>
									<div class="text-danger"><?php echo $error_auto_play_speed; ?></div>
									<?php } ?>
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-2 control-label" for="input-status"><?php echo $entry_status; ?></label>
								<div class="col-sm-10">
									<select name="instagram_status" id="input-status" class="form-control">
										<?php if ($instagram_status) { ?>
										<option value="1" selected="selected"><?php echo $text_enabled; ?></option>
										<option value="0"><?php echo $text_disabled; ?></option>
										<?php } else { ?>
										<option value="1"><?php echo $text_enabled; ?></option>
										<option value="0" selected="selected"><?php echo $text_disabled; ?></option>
										<?php } ?>
									</select>
								</div>
							</div>
						</div>

						<div id="tab-log" class="tab-pane">
							<div class="container-fluid">
								<div class="pull-right">
									<a href="<?php echo $download; ?>" data-toggle="tooltip" title="<?php echo $button_download; ?>" class="btn btn-primary"><i class="fa fa-download"></i></a>
									<a onclick="confirm('<?php echo $text_confirm; ?>') ? location.href='<?php echo $clear; ?>' : false;" data-toggle="tooltip" title="<?php echo $button_clear; ?>" class="btn btn-danger"><i class="fa fa-eraser"></i></a>
								</div>								
							</div>
							<div class="panel-body">
								<textarea wrap="off" rows="15" style="max-width: 997px;" readonly class="form-control"><?php echo $log_instagram; ?></textarea>
							</div>
						</div>

						<div id="tab-css" class="tab-pane">							
							<div class="panel-heading">
								<h3 class="panel-title"><i class="fa fa-pencil"></i> Customize Instagram Layout:</h3>
							</div>
							<div class="pull-right" style="padding: 15px; ">
								<a href="<?php echo $reset; ?>" data-toggle="tooltip" title="<?php echo $help_instagram_reset?>" class="btn btn-warning"><i class="fa fa-refresh" aria-hidden="true"></i></a>
							</div>

							<div class="panel-body">
								<textarea id="css_editor" spellcheck="false" class="css_editor" name="instagram_style" cols="30" rows="10" style="min-width: 1027px; min-height: 400px;"><?php echo $instagram_style; ?></textarea>								
							</div>
						</div>

						<div id="tab-support" class="tab-pane">
							<div class="card text-center">
								<div class="card-header">
									<h4>That's For <strong>You</strong>!</h4>
								</div>
								<div class="card-body">
									<h4 class="card-title">First... Thank You!</h4>
									<p class="card-text">I hope that it is useful to engage your store and that makes you increase your daily views, I'm working too hard to improve and do something better! I think it's the decent thing to do. So I would be very happy if you consider making a donation of any value, I would be very grateful!</p>
									<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=9CKVACZ7M99L6&lc=BR&item_name=Hebert%20Lima&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted" target="_blank" class="btn btn-success"><i class="fa fa-paypal"></i> Make a Donation with PayPal</a>
									<p></p>
									<p>if you need support, I will be happy to help you!</p>
									<a href="https://www.opencart.com/index.php?route=support/seller&member_token=cp9X1KwDoP1yfJ49mYyO2o4RbsTcYB0B&extension_id=31035" target="_blank" class="btn btn-info"><i class="fa fa-envelope"></i> Get Support</a>

								</div>
								<div class="card-footer text-muted">
									New great Updates Coming Soon!
								</div>
							</div>

						</div>					
					</div>
					<style>
						.CodeMirror{
							height: 360px;
							border-radius: 2px;							
						}
						.CodeMirror:before{
							content: 'Click to edit!';
							position: absolute;
							top: 0;
							right: 0;
							margin: 15px 30px;
							left: auto;
						}
						.cm-s-ambiance .cm-qualifier { color: #32EA41; }
						.cm-s-ambiance .cm-property, .cm-s-ambiance .cm-meta {color: #00e4ff;}
						.cm-s-ambiance .cm-tag {color: #ff0d6b;}
						.cm-s-ambiance .cm-atom, .cm-s-ambiance .cm-number { color: #BA69DE; }	
						.card {
							position: relative;
							display: -ms-flexbox;
							display: flex;
							-ms-flex-direction: column;
							flex-direction: column;
							min-width: 0;
							word-wrap: break-word;
							background-color: #fff;
							background-clip: border-box;
							border: 1px solid rgba(0,0,0,.125);
							border-radius: .25rem;
						}
						.card-header:first-child {
							border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
						}
						.card-header h4{
							margin: 0;
						}
						.card-header {
							padding: 1.2rem 1.25rem;
							margin-bottom: 0;
							background-color: rgba(0,0,0,.03);
							border-bottom: 1px solid rgba(0,0,0,.125);
						}
						.card-body {
							-ms-flex: 1 1 auto;
							flex: 1 1 auto;
							padding: 1.25rem;
						}          
						.card-footer {
							padding: .75rem 1.25rem;
							background-color: rgba(0,0,0,.03);
							border-top: 1px solid rgba(0,0,0,.125);
						}
						.text-muted {
							color: #868e96 !important;
						}
						.card-footer:last-child {
							border-radius: 0 0 calc(.25rem - 1px) calc(.25rem - 1px);
						}
						.card-title {
							margin-bottom: .75rem;
						}
						.card-body .card-title h4 {
							font-size: 1.5rem;
						}
						.card-body p {
							margin-top: 0;
							margin-bottom: 1rem;
						}
						.nav-tabs > li.active.support-me > a, 
						.nav-tabs > li.active.support-me > a:hover,
						.nav-tabs > li.support-me > a{
							background: #f63445;
							color: #fff;
							font-weight: bold;
							border-top-right-radius: 10px;
							border-right: 0;
							border-top: 0;
						}
					</style>

				</form>
			</div>
		</div>
	</div>
	<script type="text/javascript">
		<!--
		$('#input-plugin-arrows').change(function(event) {
			var option = $('#input-plugin-arrows').val();

			if(option == '0'){
				$('.color-input').addClass('hidden');
			}else{
				$('.color-input').removeClass('hidden');
			}
		});

		$("#instagram_color").spectrum({
			color: '<?php echo $instagram_arrow_color;?>',
			preferredFormat: "rgb",
			showInput: true,
			change: function(color) {					
				$('.color').val(color.toHexString());
			}
		});

		var editor = CodeMirror.fromTextArea(document.getElementById("css_editor"), {
			extraKeys: {"Ctrl-Space": "autocomplete"},
			theme: "ambiance"
		});

		$('.CodeMirror').trigger('click');
		//--></script>
	</div>
	<?php echo $footer; ?>