

<div class="header-main__cont--top--bas">
  <a href="#"><img src="style/img/icon/bas.png" alt=""></a>
  <span class="cyfbas"><?=$count_cart?></span>
  <div class="bas-cart">
    <div class="bas-cart__subtorial">
      Subtotal: <div><?=$sum_cart?></div>
    </div>
    <div class="bas-cart__button">
      <a href="<?=$cart?>" class="btn-color btnfos-4"><span>View cart</span></a>
      <a href="<?=$checkout?>" class="btn-color btnfos-4"><span>Checkout</span></a>
    </div>
    <div class="bas-cart__item">
<?php foreach($products as $product) { ?>
      <a href="#" class="bas-cart__item--item">
        <div class="bas-cart__item--item--img">
          <img src="<?=$product['thumb']?>" alt="">
        </div>
        <div class="bas-cart__item--item--cap">
          <div class="qtycap"><?=$product['name']?>:
            <?php foreach($product['option'] as $option) { ?>
            <?=$option['name']?> '<?=$option['value']?>';
            <?php } ?>
          </div>
          <div class="qty">qty:<span><?=$product['quantity']?></span></div>
        </div>
        <div class="bas-cart__item--item--price">
          <?=$product['price']?>
        </div>
      </a>
<?php } ?>

    </div>
    <div class="bas-cart__seeall">
      <a href="<?=$cart?>">See More</a>
    </div>
  </div>
</div>