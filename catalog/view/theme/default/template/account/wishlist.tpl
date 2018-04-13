<?php echo $header; ?>


<div class="container">
  <div class="breadcrumbs">
    <a href="" class="breadcrumbs__item">Номе</a>
    <a href="" class="breadcrumbs__item">Profile</a>
  </div>
</div>

<div class="estore__content profile-content">
  <div class="container">
    <div class="go-back"><a href="#"><img src="style/img/icon/arrow-right-nav.png" alt="">Home</a></div>
    <div class="estore__head">
      <div class="aqua__heading">Profile</div>
    </div>
  </div>


  <div class="product__content">
    <div class="container">
      <div class="cont__product profile--product">
        <div class="cont__product--sidebar">
          <div class="estore__sidebar--cat--cat">
            <?php echo $column_left; ?>
          </div>
          <div class="estore__sidebar--mob">
            <div class="estore__sidebar--cat estore__sidebar--cat--mob">
              <div class="estore__sidebar--cat--cap">Wish list</div>
              <div class="estore__sidebar">
                <?php echo $column_left; ?>
              </div>
            </div>
          </div>

          <div class="prosile__sale">
            <div class="prosile__sale--cap">Sale</div>
            <div class="prosile__sale--text">
              When you spend 500 dollars in our store you will get 10% off your next purchase.
            </div>
            <div class="prosile__sale--ind">
              <div id="slider-range-min"></div>
              <div class="ind-val">
                <div class="ind-val--left">$</div>
                <div class="ind-val--right">$<span>500</span></div>
              </div>
            </div>
          </div>
        </div>

        <div class="cont__product--content prof__item">
          <?php if ($products) { ?>
          <?php $i=0;?>
          <?php foreach ($products as $product) { ?>

          <div class="active_special prof__item--item opt_<?php echo $product['product_id']; ?>">
            <div class="prof__item--item--img">
              <img src="<?php echo $product['thumb']; ?>" alt="">
            </div>
            <div class="prof__item--item--text">
              <div class="prof__item--item--text--cap">
                <?php echo $product['name']; ?>
              </div>
              <div class="prof__item--item--text--price">

                <div class="main-sale__slider--item--price">
                  <?php if($product['special']) { ?>
                  <div class="main-sale--price-active">
                    <?=$product['special']?>
                  </div>
                  <div class="main-sale--price-inactive">
                    <?=$product['price']?>
                  </div>
                  <?php } ?>
                </div>

                <div class="main-sale__slider--item--val">
                  <div class="sale-main-val">
                    <?php echo $product['quantity']; ?> <span>in stock</span>
                  </div>
                  <div class="sale-main-val val-mob-dis">

                    <div class="sale-main-val val-mob-dis .optq_<?=$product['product_id']?>">
                      <div onclick="minus_qu_s('<?=$i?>')" data="<?=$i?>" class="sale-main-val-but-l "></div>

                      <input style="background: #f8f9fb;" class="col-quantity res-<?=$i?> block_special-<?=$i?>" type="text" name="quantity" value="1"/>

                      <div onclick="plus_qu_s('<?=$i?>')" data="<?=$i?>" class="sale-main-val-but-r "></div>
                    </div>

                  </div>
                </div>

              </div>




              <div class="prof__item--item--text--size">

                <?php if ($product['options']) { ?>
                <div class="options ">
                  <input type="hidden" name="product_id" value="<?php echo $product['product_id']; ?>" />

                  <?php foreach ($product['options'] as $option) { ?>

                  <?php if ($option['type'] == 'checkbox' && $option['val']==$product['product_id']) { ?>

                  <div class="main-sale__slider--item--size main-sale__slider--item--size-color">
                    <div class="card-item__colors">

                      <div class="card-item__colors--text"> <?php echo $option['name']; ?></div>
                      <div class="card-item__colors--input">
                        <?php foreach ($option['product_option_value'] as $option_value) { ?>

                        <label for="chek-<?=$option_value['name']?>" class="chek-<?=$option_value['name']?>">

                          <?php if ($option_value['image']) { ?>
                          <img src="<?php echo $option_value['image']; ?>" alt="<?php echo $option_value['name'] . ($option_value['price'] ? ' ' . $option_value['price_prefix'] . $option_value['price'] : ''); ?>" class="" />
                          <?php } ?>

                          <input id="chek-<?=$option_value['name']?>" type="checkbox" name="option[<?php echo $option['product_option_id']; ?>][]" value="<?php echo $option_value['product_option_value_id']; ?>" />
                          <!--  <?php if ($option_value['price']) { ?>
                            (<?php echo $option_value['price_prefix']; ?><?php echo $option_value['price']; ?>)
                            <?php } ?> -->

                        </label>
                        <?php } ?>
                      </div>
                    </div>
                  </div>
                  <?php } ?>

                  <?php if ($option['type'] == 'radio'&& $option['val']==$product['product_id']) { ?>

                  <div id="option-<?php echo $option['product_option_id']; ?>" class="main-sale__slider--item--size">
                    <div class="main-sale__slider--item--size--cap">
                      <?php echo $option['name']; ?>
                    </div>

                    <?php foreach ($option['product_option_value'] as $option_value) { ?>

                    <?php if (!$option_value['image']) { ?>
                    <div class=" main-sale__slider--item--size--item">
                      <label class="in_lab" for="special-input-radio<?php echo $option_value['product_option_value_id']; ?>">  <?php echo $option_value['name']; ?></label>
                      <input id="special-input-radio<?php echo $option_value['product_option_value_id']; ?>" type="radio" name="option[<?php echo $option['product_option_id']; ?>]" value="<?php echo $option_value['product_option_value_id']; ?>" />
                      <!--    <?php if ($option_value['price']) { ?>
                         (<?php echo $option_value['price_prefix']; ?><?php echo $option_value['price']; ?>)
                         <?php } ?> -->

                    </div>

                    <?php }else {  ?>
                    <div class="main-sale__slider--item--size--item colors">
                      <label for="input-radio<?php echo $option_value['product_option_value_id']; ?>" class="chek-<?=$option_value['name']?>">
                        <input id="input-radio<?php echo $option_value['product_option_value_id']; ?>" type="radio" name="option[<?php echo $option['product_option_id']; ?>]" value="<?php echo $option_value['product_option_value_id']; ?>" />
                        <?php if ($option_value['image']) { ?>
                        <img src="<?php echo $option_value['image']; ?>" alt="<?php echo $option_value['name'] . ($option_value['price'] ? ' ' . $option_value['price_prefix'] . $option_value['price'] : ''); ?>" class="" />
                        <?php } ?>

                        <!--    <?php if ($option_value['price']) { ?>
                            (<?php echo $option_value['price_prefix']; ?><?php echo $option_value['price']; ?>)
                            <?php } ?> -->

                      </label>
                    </div>



                    <?php } } ?>


                  </div>

                  <?php } ?>





                  <?php } ?>

                </div>
                <?php } ?>




              </div>
              <div class="prof__item--item--text--btn">
                <a class="btn-color btnfos-4" onclick="addToCartOpt_s('<?php echo $product['product_id']; ?>'); return false;" href="#"><span>Add to cart</span></a>

                <a class="btn-border btnfos-4" href="#"><span>Buy now</span></a>
              </div>
            </div>
          </div>
<?php $i++; } ?>
          <?php } else { ?>
          <p><?php echo $text_empty; ?></p>
          <?php } ?>
        </div>

      </div>
    </div>
  </div>
</div>

<script>
    $('.active_special .in_lab').on('click',function () {
        $('.main-sale__slider--item--size--item').removeClass('active');
        $(this).parent().addClass('active');
    })
</script>


<script type="text/javascript"><!--
    function addToCartOpt_s(product_id){

        $.ajax({
            url: 'index.php?route=checkout/cart/add',
            type: 'post',
            data: $('.opt_'+product_id+' input[type=\'hidden\'], .opt_'+product_id+' input[name=\'quantity\'], .opt_'+product_id+' select, .opt_'+product_id+' input[type=\'checkbox\']:checked,.opt_'+product_id+' input[type=\'radio\']:checked'),
            dataType: 'json',
            success: function(json) {

                $('.success, .warning, .attention, information, .error').remove();
                if (json['error']) {
                    if (json['error']['option']) {
                        for (i in json['error']['option']) {
                            $('#option-' + i).after('<span class="error">' + json['error']['option'][i] + '</span>');
                        }
                    }
                }
                if (json['success']) {
                    $('#notification').html('<div class="success" style="display: none;">' + json['success'] + '<img src="catalog/view/theme/default/image/close.png" alt="" class="close" /></div>');
                    $('.success').fadeIn('slow');
                    $('.cyfbas').html(json['total2']);
                    $('.bas-cart__item').load('index.php?route=common/cart/info .bas-cart__item a');
                    $('.bas-cart__subtorial > div').html(json['total3']);
                    $('html, body').animate({ scrollTop: 0 }, 'slow');
                }
            }
        });
    }

    //--></script>



<div style="display: none" class="container">
  <ul class="breadcrumb">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <li><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a></li>
    <?php } ?>
  </ul>
  <?php if ($success) { ?>
  <div class="alert alert-success"><i class="fa fa-check-circle"></i> <?php echo $success; ?>
    <button type="button" class="close" data-dismiss="alert">&times;</button>
  </div>
  <?php } ?>
  <div class="row"><?php echo $column_left; ?>
    <?php if ($column_left && $column_right) { ?>
    <?php $class = 'col-sm-6'; ?>
    <?php } elseif ($column_left || $column_right) { ?>
    <?php $class = 'col-sm-9'; ?>
    <?php } else { ?>
    <?php $class = 'col-sm-12'; ?>
    <?php } ?>
    <div id="content" class="<?php echo $class; ?>"><?php echo $content_top; ?>
      <h2><?php echo $heading_title; ?></h2>
      <?php if ($products) { ?>
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <td class="text-center"><?php echo $column_image; ?></td>
              <td class="text-left"><?php echo $column_name; ?></td>
              <td class="text-left"><?php echo $column_model; ?></td>
              <td class="text-right"><?php echo $column_stock; ?></td>
              <td class="text-right"><?php echo $column_price; ?></td>
              <td class="text-right"><?php echo $column_action; ?></td>
            </tr>
          </thead>
          <tbody>
            <?php foreach ($products as $product) { ?>
            <tr>
              <td class="text-center"><?php if ($product['thumb']) { ?>
                <a href="<?php echo $product['href']; ?>"><img src="<?php echo $product['thumb']; ?>" alt="<?php echo $product['name']; ?>" title="<?php echo $product['name']; ?>" /></a>
                <?php } ?></td>
              <td class="text-left"><a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a></td>
              <td class="text-left"><?php echo $product['model']; ?></td>
              <td class="text-right"><?php echo $product['stock']; ?></td>
              <td class="text-right"><?php if ($product['price']) { ?>
                <div class="price">
                  <?php if (!$product['special']) { ?>
                  <?php echo $product['price']; ?>
                  <?php } else { ?>
                  <b><?php echo $product['special']; ?></b> <s><?php echo $product['price']; ?></s>
                  <?php } ?>
                </div>
                <?php } ?></td>
              <td class="text-right"><button type="button" onclick="cart.add('<?php echo $product['product_id']; ?>');" data-toggle="tooltip" title="<?php echo $button_cart; ?>" class="btn btn-primary"><i class="fa fa-shopping-cart"></i></button>
                <a href="<?php echo $product['remove']; ?>" data-toggle="tooltip" title="<?php echo $button_remove; ?>" class="btn btn-danger"><i class="fa fa-times"></i></a></td>
            </tr>
            <?php } ?>
          </tbody>
        </table>
      </div>
      <?php } else { ?>
      <p><?php echo $text_empty; ?></p>
      <?php } ?>
      <div class="buttons clearfix">
        <div class="pull-right"><a href="<?php echo $continue; ?>" class="btn btn-primary"><?php echo $button_continue; ?></a></div>
      </div>
      <?php echo $content_bottom; ?></div>
    <?php echo $column_right; ?></div>
</div>
<?php echo $footer; ?>