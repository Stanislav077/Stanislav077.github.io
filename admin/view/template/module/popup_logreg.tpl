<?php echo $header; ?><?php echo $column_left; ?>
<div id="content">

  <div class="page-header">
    <div class="container-fluid">
      <div class="pull-right">
		<a onclick="$('#form input[name=apply]').val(1); $('#form').submit();" data-toggle="tooltip" class="btn btn-primary"><?php echo $button_apply; ?></a>
        <button type="submit" form="form" data-toggle="tooltip" title="<?php echo $button_save; ?>" class="btn btn-primary"><i class="fa fa-save"></i></button>
        <a href="<?php echo $cancel; ?>" data-toggle="tooltip" title="<?php echo $button_cancel; ?>" class="btn btn-default"><i class="fa fa-reply"></i></a></div>
      <h1><?php echo $heading_title; ?></h1>
      <ul class="breadcrumb">
        <?php foreach ($breadcrumbs as $breadcrumb) { ?>
        <li><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a></li>
        <?php } ?>
      </ul>
    </div>
  </div>
<div class="container-fluid">
<?php if ($success) { ?><div class="alert alert-success"><i class="fa fa-check-circle"></i> <?php echo $success; ?></div><?php } ?>
<div class="panel panel-default"> 
<div class="panel-heading"><h3 class="panel-title"><i class="fa fa-pencil"></i> Настройки модуля</h3></div>
  <div class="tab-pane">
  <ul class="nav nav-tabs" id="log-reg-tab">
  <li><a href="#tab-login" data-toggle="tab">Окно авторизации</a></li>
  <li><a href="#tab-register" data-toggle="tab">Окно регистрации</a></li>
  </ul>
    <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data" id="form" class="form-horizontal">
	<div class="tab-content">
	<div id="tab-login" class="tab-pane">
    <table class="modules">
	<tr><td><?php echo $text_enable_login; ?></td>
	<td><input type="checkbox" name="popup_logreg_login" value="1" <?php if ($popup_logreg_login) { echo 'checked="checked"'; } ?> /></td>
	</tr>
	 <tr><td><?php echo $text_block; ?></td><td><input style="width:160px;" type="text" name="popup_logreg_login_block" value="<?php if (!$popup_logreg_login_block) { echo '.dropdown-menu-right'; } else { echo $popup_logreg_login_block; } ?>" />&nbsp;&nbsp;&nbsp; - <span style="color:#888;">Указывайте id или class блока, при клике по которому открывать окно модуля.</span></td></tr>
	<tr>
		<td><?php echo $text_block_link; ?></td>
		<td><input type="checkbox" name="popup_logreg_login_block_link" value="1" <?php if ($popup_logreg_login_block_link) { echo 'checked="checked"'; } ?> />
		&nbsp;&nbsp;&nbsp; - <span style="color:#888;">Полезно, когда в блоке несколько ссылок, как, например, в стандартном шаблоне.</span>
		</td>
	</tr>
	<tr><td><?php echo $text_head; ?></td><td><input style="width:160px;" type="text" name="popup_logreg_login_head" value="<?php if (!$popup_logreg_login_head) { echo 'Вход на сайт'; } else { echo $popup_logreg_login_head; } ?>" /></td></tr>
	<tr><td><?php echo $text_input_name; ?></td>
	<td><input type="checkbox" name="popup_logreg_login_label" value="1" <?php if ($popup_logreg_login_label) { echo 'checked="checked"'; } ?> /></td>
	</tr>
	<tr><td><?php echo $text_input_name_email; ?></td><td><input style="width:160px;" type="text" name="popup_logreg_login_email" value="<?php if (!$popup_logreg_login_email) { echo 'Ваш e-mail'; } else { echo $popup_logreg_login_email; } ?>" />
	&nbsp;&nbsp;&nbsp;<?php echo $text_input_email_placeholder; ?>&nbsp;&nbsp;<input style="width:160px;" type="text" name="popup_logreg_login_email_placeholder" value="<?php if (!$popup_logreg_login_email_placeholder) { echo 'Введите ваш e-mail'; } else { echo $popup_logreg_login_email_placeholder; } ?>" /></td>
	</tr>
	<tr>
	<td><?php echo $text_input_name_password; ?></td><td><input style="width:160px;" type="text" name="popup_logreg_login_password" value="<?php if (!$popup_logreg_login_password) { echo 'Ваш пароль'; } else { echo $popup_logreg_login_password; } ?>" />
	&nbsp;&nbsp;&nbsp;<?php echo $text_input_password_placeholder; ?>&nbsp;&nbsp;<input style="width:160px;" type="text" name="popup_logreg_login_password_placeholder" value="<?php if (!$popup_logreg_login_password_placeholder) { echo 'Введите ваш пароль'; } else { echo $popup_logreg_login_password_placeholder; } ?>" /></td>
	</tr>
	<tr><td><?php echo $text_login_button; ?></td><td><input style="width:160px;" type="text" name="popup_logreg_login_button" value="<?php if (!$popup_logreg_login_button) { echo 'Войти на сайт'; } else { echo $popup_logreg_login_button; } ?>" /></td></tr>
	<tr><td><?php echo $text_login_error; ?></td><td><textarea style="width:160px;" type="text" name="popup_logreg_login_result"><?php if (!$popup_logreg_login_result) { echo 'Вы ввели неверный логин или пароль!'; } else { echo $popup_logreg_login_result; } ?></textarea></td></tr>
	<tr>
		<td><?php echo $text_forgotten; ?></td>
		<td><input type="checkbox" name="popup_logreg_login_forgotten_enable" value="1" <?php if ($popup_logreg_login_forgotten_enable) { echo 'checked="checked"'; } ?> />
		&nbsp;&nbsp;&nbsp;<?php echo $text_link_text; ?>&nbsp;&nbsp;<input style="width:160px;" type="text" name="popup_logreg_login_forgotten" value="<?php if (!$popup_logreg_login_forgotten) { echo 'Я забыл пароль'; } else { echo $popup_logreg_login_forgotten; } ?>" />
		</td>
	</tr>
	<tr>
		<td><?php echo $text_register; ?></td>
		<td><input type="checkbox" name="popup_logreg_login_register_enable" value="1" <?php if ($popup_logreg_login_register_enable) { echo 'checked="checked"'; } ?> />
		&nbsp;&nbsp;&nbsp;<?php echo $text_link_text; ?>&nbsp;&nbsp;<input style="width:160px;" type="text" name="popup_logreg_login_register" value="<?php if (!$popup_logreg_login_register) { echo 'Регистрация'; } else { echo $popup_logreg_login_register; } ?>" />
		</td>
	</tr>
	<tr><td><?php echo $text_input_login_success; ?></td>
	<td><input type="checkbox" name="popup_logreg_login_success" value="1" <?php if ($popup_logreg_login_success) { echo 'checked="checked"'; } ?> />
	&nbsp;&nbsp;&nbsp; - <span style="color:#888;">если не отмечено - просто перезагружаем страницу</span></td>
	</tr>
    </table>
	</div>
	
	
	<div id="tab-register" class="tab-pane">
	<table class="modules">
	<tr><td><?php echo $text_enable_register; ?></td>
	<td><input type="checkbox" name="popup_logreg_register" value="1" <?php if ($popup_logreg_register) { echo 'checked="checked"'; } ?> /></td>
	</tr>
	 <tr><td><?php echo $text_block; ?></td><td><input style="width:160px;" type="text" name="popup_logreg_register_block" value="<?php if (!$popup_logreg_register_block) { echo '.dropdown-menu-right'; } else { echo $popup_logreg_register_block; } ?>" />&nbsp;&nbsp;&nbsp; - <span style="color:#888;">Указывайте id или class блока, при клике по которому открывать окно модуля.</span></td></tr>
	<tr>
		<td><?php echo $text_block_link_last; ?></td>
		<td>
		<input type="checkbox" name="popup_logreg_register_block_link" value="1" <?php if ($popup_logreg_register_block_link) { echo 'checked="checked"'; } ?> />
		&nbsp;&nbsp;&nbsp; - <span style="color:#888;">Полезно, когда в блоке несколько ссылок, как, например, в стандартном шаблоне.</span>
		</td>
	</tr>
	<tr><td><?php echo $text_head; ?></td><td><input style="width:160px;" type="text" name="popup_logreg_register_head" value="<?php if (!$popup_logreg_register_head) { echo 'Регистрация'; } else { echo $popup_logreg_register_head; } ?>" /></td></tr>
	<tr><td><?php echo $text_input_name; ?></td>
	<td><input type="checkbox" name="popup_logreg_register_label" value="1" <?php if ($popup_logreg_register_label) { echo 'checked="checked"'; } ?> /></td>
	</tr>
	<tr>
	<td><?php echo $text_input_name_firstname_show; ?></td>
	<td><input type="checkbox" name="popup_logreg_register_firstname_show" value="1" <?php if ($popup_logreg_register_firstname_show) { echo 'checked="checked"'; } ?> /></td>
	</tr>
	<tr><td><?php echo $text_input_name_firstname; ?></td><td><input style="width:160px;" type="text" name="popup_logreg_register_firstname" value="<?php if (!$popup_logreg_register_firstname) { echo 'Ваше имя'; } else { echo $popup_logreg_register_firstname; } ?>" />
	&nbsp;&nbsp;&nbsp;<?php echo $text_input_firstname_placeholder; ?>&nbsp;&nbsp;<input style="width:160px;" type="text" name="popup_logreg_register_firstname_placeholder" value="<?php if (!$popup_logreg_register_firstname_placeholder) { echo 'Введите ваше имя'; } else { echo $popup_logreg_register_firstname_placeholder; } ?>" /></td>
	</tr>
	<tr>
	<td><?php echo $text_input_name_lastname_show; ?></td>
	<td><input type="checkbox" name="popup_logreg_register_lastname_show" value="1" <?php if ($popup_logreg_register_lastname_show) { echo 'checked="checked"'; } ?> /></td>
	</tr>
	<tr><td><?php echo $text_input_name_lastname; ?></td><td><input style="width:160px;" type="text" name="popup_logreg_register_lastname" value="<?php if (!$popup_logreg_register_lastname) { echo 'Ваша фамилия'; } else { echo $popup_logreg_register_lastname; } ?>" />
	&nbsp;&nbsp;&nbsp;<?php echo $text_input_lastname_placeholder; ?>&nbsp;&nbsp;<input style="width:160px;" type="text" name="popup_logreg_register_lastname_placeholder" value="<?php if (!$popup_logreg_register_lastname_placeholder) { echo 'Введите вашу фамилию'; } else { echo $popup_logreg_register_lastname_placeholder; } ?>" /></td>
	</tr>
	<tr>
	<td><?php echo $text_input_name_phone_show; ?></td>
	<td><input type="checkbox" name="popup_logreg_register_phone_show" value="1" <?php if ($popup_logreg_register_phone_show) { echo 'checked="checked"'; } ?> /></td>
	</tr>
	<tr><td><?php echo $text_input_name_phone; ?></td><td><input style="width:160px;" type="text" name="popup_logreg_register_phone" value="<?php if (!$popup_logreg_register_phone) { echo 'Контактный телефон'; } else { echo $popup_logreg_register_phone; } ?>" />
	&nbsp;&nbsp;&nbsp;<?php echo $text_input_phone_placeholder; ?>&nbsp;&nbsp;<input style="width:160px;" type="text" name="popup_logreg_register_phone_placeholder" value="<?php if (!$popup_logreg_register_phone_placeholder) { echo 'Ваш номер телефона'; } else { echo $popup_logreg_register_phone_placeholder; } ?>" />
	&nbsp;&nbsp;&nbsp;<?php echo $text_input_phone_mask; ?>&nbsp;&nbsp;<input style="width:160px;" type="text" name="popup_logreg_register_phone_mask" value="<?php if (!$popup_logreg_register_phone_mask) { echo '+7-(999)-999-99-99'; } else { echo $popup_logreg_register_phone_mask; } ?>" />
	</td>
	</tr>
	<tr><td><?php echo $text_input_name_email; ?></td><td><input style="width:160px;" type="text" name="popup_logreg_register_email" value="<?php if (!$popup_logreg_register_email) { echo 'Ваш e-mail'; } else { echo $popup_logreg_register_email; } ?>" />
	&nbsp;&nbsp;&nbsp;<?php echo $text_input_email_placeholder; ?>&nbsp;&nbsp;<input style="width:160px;" type="text" name="popup_logreg_register_email_placeholder" value="<?php if (!$popup_logreg_register_email_placeholder) { echo 'Введите ваш e-mail'; } else { echo $popup_logreg_register_email_placeholder; } ?>" /></td>
	</tr>
	<tr>
	<td><?php echo $text_input_name_password; ?></td><td><input style="width:160px;" type="text" name="popup_logreg_register_password" value="<?php if (!$popup_logreg_register_password) { echo 'Ваш пароль'; } else { echo $popup_logreg_register_password; } ?>" />
	&nbsp;&nbsp;&nbsp;<?php echo $text_input_password_placeholder; ?>&nbsp;&nbsp;<input style="width:160px;" type="text" name="popup_logreg_register_password_placeholder" value="<?php if (!$popup_logreg_register_password_placeholder) { echo 'Введите ваш пароль'; } else { echo $popup_logreg_register_password_placeholder; } ?>" /></td>
	</tr>
	<tr>
	<td><?php echo $text_input_name_password_confirm_show; ?></td>
	<td><input type="checkbox" name="popup_logreg_register_password_confirm_show" value="1" <?php if ($popup_logreg_register_password_confirm_show) { echo 'checked="checked"'; } ?> /></td>
	</tr>
	<tr>
	<td><?php echo $text_input_name_password_confirm; ?></td><td><input style="width:160px;" type="text" name="popup_logreg_register_password_confirm" value="<?php if (!$popup_logreg_register_password_confirm) { echo 'Пароль еще раз'; } else { echo $popup_logreg_register_password_confirm; } ?>" />
	&nbsp;&nbsp;&nbsp;<?php echo $text_input_password_confirm_placeholder; ?>&nbsp;&nbsp;<input style="width:160px;" type="text" name="popup_logreg_register_password_confirm_placeholder" value="<?php if (!$popup_logreg_register_password_confirm_placeholder) { echo 'Подтвердите ваш пароль'; } else { echo $popup_logreg_register_password_confirm_placeholder; } ?>" /></td>
	</tr>
	<tr><td><?php echo $text_input_register_group; ?></td>
	<td><input type="checkbox" name="popup_logreg_register_group" value="1" <?php if ($popup_logreg_register_group) { echo 'checked="checked"'; } ?> /></td>
	</tr>
	<tr><td><?php echo $text_input_iagree; ?></td>
	<td><input type="checkbox" name="popup_logreg_register_iagree" value="1" <?php if ($popup_logreg_register_iagree) { echo 'checked="checked"'; } ?> /></td>
	</tr>
	<tr><td><?php echo $text_register_button; ?></td><td><input style="width:160px;" type="text" name="popup_logreg_register_button" value="<?php if (!$popup_logreg_register_button) { echo 'Зарегистрироваться'; } else { echo $popup_logreg_register_button; } ?>" /></td></tr>
	<tr><td><?php echo $text_input_register_success; ?></td>
	<td><input type="checkbox" name="popup_logreg_register_success" value="1" <?php if ($popup_logreg_register_success) { echo 'checked="checked"'; } ?> />
	&nbsp;&nbsp;&nbsp; - <span style="color:#888;">если не отмечено - просто перезагружаем страницу</span></td>
	</tr>
    </table>	
	</div>
	<input type="hidden" name="apply" value="0" />
	</div>
	</form>
	  <div id="copyright"><?php echo $text_copyright; ?></div>
    </div>
  </div>
</div>
<style>
	.modules {width:100%;}
	.modules tr:nth-child(2n){background:#f4f4f4;}
	.modules tr td {vertical-align:middle; border-bottom:solid 1px #e3e3e3;}
	.modules tr td:first-child{width:200px; padding:13px 15px 13px;}
	#copyright {padding:10px 15px 10px;}
</style>
<script type="text/javascript"><!--
$('#log-reg-tab a:first').tab('show');
//--></script> 
<?php echo $footer; ?>