<?php if($popup_logreg_login){ ?>



<div id="popuplogin">
	<div class="head"><?php echo $popup_logreg_login_head; ?><img onclick="$('#popuplogin').popup('hide')" class="close" alt="Закрыть" src="catalog/view/theme/default/image/remove-small.png"></div>
	<div id="popuplogin_form">
	<div class="input">
	<?php if($popup_logreg_login_label){ ?><div class="label"><?php echo $popup_logreg_login_email; ?>: </div><?php } ?>
	<input type="text" name="email" class="mail_login" value="" placeholder="<?php echo $popup_logreg_login_email_placeholder; ?>" />
	</div>
	<div class="input ">
	<div class="rempas">
	<?php if($popup_logreg_login_label){ ?><div class="label"><?php echo $popup_logreg_login_password; ?>: </div><?php } ?><?php if($popup_logreg_login_forgotten_enable){ ?><a href="index.php?route=account/forgotten"><?php echo $popup_logreg_login_forgotten; ?></a><?php } ?>
	</div><input type="password" name="password" value="" placeholder="<?php echo $popup_logreg_login_password_placeholder; ?>" />
	</div>
	<div class="result"></div>
	<div style="display:none" class="but">
	<a class="btn btn-primary" id="button_login1" onclick="popup_logreg_login();"><?php echo $popup_logreg_login_button; ?></a>
	</div>
	<div>
			<input id="button_login" onclick="popup_logreg_login();" type="button" value="<?php echo $popup_logreg_login_button; ?>" class="btn-color">
		</div>
	</div>
	<?php if($popup_logreg_login_forgotten_enable || $popup_logreg_login_register_enable){ ?>
	<div class="forgotten">
	
	<?php if($popup_logreg_login_forgotten_enable && $popup_logreg_login_register_enable){ ?> <?php } ?>
	<!-- <?php if($popup_logreg_login_register_enable){ ?><a href="index.php?route=account/register"><?php echo $popup_logreg_login_register; ?></a><?php } ?> -->
	<?php if($popup_logreg_login_register_enable){ ?> <div class="remoda__bot__text"><a style="cursor:pointer" class="reg">Don't have an account? Click to sign up</a></div><?php } ?>
	</div>
	<?php } ?>
</div>


<?php } ?>



<script>
$(document).ready(function(){
	$('.reg').on('click',function(){
		$('.close').trigger('click');
	})
})

</script>

<?php if($popup_logreg_register){ ?>
<div id="popupregister">
	<div class="head"><?php echo $popup_logreg_register_head; ?><img onclick="$('#popupregister').popup('hide')" class="close" alt="Закрыть" src="catalog/view/theme/default/image/remove-small.png"></div>
	<div id="popupregister_form">
	<?php if($popup_logreg_register_firstname_show){ ?>
	<div class="input"><?php if($popup_logreg_register_label){ ?><div class="label"><?php echo $popup_logreg_register_firstname; ?>: </div><?php } ?>
	<input type="text" name="firstname" class="mail_login" value="" placeholder="<?php echo $popup_logreg_register_firstname_placeholder; ?>" />
	</div>
	<?php } ?>
	<?php if($popup_logreg_register_lastname_show){ ?>
	<div class="input"><?php if($popup_logreg_register_label){ ?><div class="label"><?php echo $popup_logreg_register_lastname; ?>: </div><?php } ?>
	<input type="text" name="lastname" class="mail_login" value="" placeholder="<?php echo $popup_logreg_register_lastname_placeholder; ?>" />
	</div>
	<?php } ?>
	<?php if($popup_logreg_register_phone_show){ ?>
	<div class="input"><?php if($popup_logreg_register_label){ ?><div class="label"><?php echo $popup_logreg_register_phone; ?>: </div><?php } ?>
	<input type="text" id="pur_phone" name="telephone" class="mail_login" value="" placeholder="<?php echo $popup_logreg_register_phone_placeholder; ?>" />
	</div>
	<?php } ?>
<div class="input"><?php if($popup_logreg_register_label){ ?>
<div class="label"><?php echo $popup_logreg_register_email; ?>: </div><?php } ?>
	<input type="text" name="email" class="mail_login" value="" placeholder="<?php echo $popup_logreg_register_email_placeholder; ?>" />
</div>
	<div class="input"><?php if($popup_logreg_register_label){ ?><div class="label"><?php echo $popup_logreg_register_password; ?>: </div><?php } ?>
	<input type="password" name="password" value="" placeholder="<?php echo $popup_logreg_register_password_placeholder; ?>" />
	</div>
	<?php if($popup_logreg_register_password_confirm_show){ ?>
	<div class="input"><?php if($popup_logreg_register_label){ ?><div class="label"><?php echo $popup_logreg_register_password_confirm; ?>: </div><?php } ?>
	<input type="password" name="password_confirm" value="" placeholder="<?php echo $popup_logreg_register_password_confirm_placeholder; ?>" />
	</div>
	<?php } ?>
	<div class="result"></div>
	<?php if($popup_logreg_register_group){ ?>
	<div style="display: <?php echo (count($customer_groups) > 1 ? 'block' : 'none'); ?>;">
	<?php foreach ($customer_groups as $customer_group) { ?>
    <?php if ($customer_group['customer_group_id'] == $customer_group_id) { ?>
    <input type="radio" name="customer_group_id" value="<?php echo $customer_group['customer_group_id']; ?>" id="customer_group_id<?php echo $customer_group['customer_group_id']; ?>" checked="checked" />
    <label for="customer_group_id<?php echo $customer_group['customer_group_id']; ?>"><?php echo $customer_group['name']; ?></label>
    <br />
    <?php } else { ?>
    <input type="radio" name="customer_group_id" value="<?php echo $customer_group['customer_group_id']; ?>" id="customer_group_id<?php echo $customer_group['customer_group_id']; ?>" />
    <label for="customer_group_id<?php echo $customer_group['customer_group_id']; ?>"><?php echo $customer_group['name']; ?></label>
    <br />
    <?php } ?>
    <?php } ?>
	</div>
	<?php } ?>
	<?php if ($popup_logreg_register_iagree) { ?>
	<div>
	<?php echo $text_agree; ?> <input type="checkbox" name="agree" value="1" />
	</div>
	<?php } ?>
	</div>
	<div style="display:none" class="but">
	<a class="btn btn-primary" id="button_register1" onclick="popup_logreg_register();"><?php echo $popup_logreg_register_button; ?></a>
	</div>
	<div>
			<input id="button_register" onclick="popup_logreg_register();" type="button" value="Login" class="btn-color">
		</div>
</div>
<?php } ?>
<script type="text/javascript"><!--
$(document).ready(function() {
	$('#popuplogin, #popupregister').popup({transition: 'all 0.3s'});
	$('#pur_phone').mask("<?php echo $popup_logreg_register_phone_mask; ?>");

<?php if (!$logged && $popup_logreg_login) { ?>
<?php if (!$popup_logreg_login_block_link) { ?>$('<?php echo $popup_logreg_login_block ?>').addClass('popuplogin');<?php } else { ?>$('<?php echo $popup_logreg_login_block; ?> a').last().addClass('popuplogin');<?php } ?>
<?php } ?>	
<?php if (!$logged && $popup_logreg_register) { ?>
<?php if (!$popup_logreg_register_block_link) { ?>$('<?php echo $popup_logreg_register_block ?>').addClass('popupregister');<?php } else { ?>$('<?php echo $popup_logreg_register_block; ?> a').first().addClass('popupregister');<?php } ?>
<?php } ?>
$('.popuplogin').bind('click', function(e) {
	e.preventDefault();
		$('#popuplogin').popup('show')
	});
	
	$('.popupregister').bind('click', function(e) {
	e.preventDefault();
		$('#popupregister').popup('show')
	});
});
//--></script>