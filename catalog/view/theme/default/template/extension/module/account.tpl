<div style="display: none" class="list-group">
  <?php if (!$logged) { ?>
  <a href="<?php echo $login; ?>" class="list-group-item"><?php echo $text_login; ?></a>
  <a href="<?php echo $register; ?>" class="list-group-item"><?php echo $text_register; ?></a>
  <a href="<?php echo $forgotten; ?>" class="list-group-item"><?php echo $text_forgotten; ?></a>
  <?php } ?>
  <a href="<?php echo $account; ?>" class="list-group-item"><?php echo $text_account; ?></a>
  <?php if ($logged) { ?>
  <a href="<?php echo $edit; ?>" class="list-group-item"><?php echo $text_edit; ?></a> <a href="<?php echo $password; ?>" class="list-group-item"><?php echo $text_password; ?></a>
  <?php } ?>
  <a href="<?php echo $address; ?>" class="list-group-item"><?php echo $text_address; ?></a>
  <a href="<?php echo $wishlist; ?>" class="list-group-item"><?php echo $text_wishlist; ?></a>
  <a href="<?php echo $order; ?>" class="list-group-item"><?php echo $text_order; ?></a>
  <a href="<?php echo $download; ?>" class="list-group-item"><?php echo $text_download; ?></a>
  <a href="<?php echo $recurring; ?>" class="list-group-item"><?php echo $text_recurring; ?></a>
  <a href="<?php echo $reward; ?>" class="list-group-item"><?php echo $text_reward; ?></a>
  <a href="<?php echo $return; ?>" class="list-group-item"><?php echo $text_return; ?></a>
  <a href="<?php echo $transaction; ?>" class="list-group-item"><?php echo $text_transaction; ?></a>
  <a href="<?php echo $newsletter; ?>" class="list-group-item"><?php echo $text_newsletter; ?></a>
  <?php if ($logged) { ?>
  <a href="<?php echo $logout; ?>" class="list-group-item"><?php echo $text_logout; ?></a>
  <?php } ?>
</div>

  <a class="<?php echo ($url_active[1]=='edit' ? active : ''); ?>" href="<?php echo $edit; ?>"><?php echo $text_account; ?></a>
<a class="<?php echo ($url_active[1]=='order' ? active : ''); ?>" href="<?php echo $order; ?>" >Orders</a>
<a class="<?php echo ($url_active[1]=='wishlist' ? active : ''); ?>" href="<?php echo $wishlist; ?>" ><?php echo $text_wishlist; ?></a>


