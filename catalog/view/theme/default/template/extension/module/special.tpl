
<div class="main-sale">
  <div class="aqua__heading2">
    Sale
  </div>
  <div class="main-sale__cont">
    <div class="container">
      <div class="main-sale__slider">
<?=$i=0;?>
        <?php foreach ($products as $product) { ?>
        <div class="main-sale__slider--item-per opt_<?php echo $product['product_id']; ?>">
          <div class="main-sale__slider--item">
            <div class="sale-button">
              <a class="btn-white btnfos-4" href="<?php echo $product['href']; ?>"><span>More details</span></a>
              <a class="btn-white btnfos-4" onclick="addToCartOpt('<?php echo $product['product_id']; ?>');" ><span>Buy now</span></a>
            </div>
            <div class="sale__lable"><?=$product['proc']?>%</div>
            <div class="main-sale__slider--item--img">
              <img src="<?php echo $product['thumb']; ?>" alt="<?php echo $product['name']; ?>">
            </div>
            <div class="main-sale__slider--item--name">
              <?php echo $product['name']; ?>
            </div>
            <div class="main-sale__slider--item--val">
              <div  class="sale-main-val ">
                <?=$product['quantity']?> <span>in stock</span>
              </div>
              <div class="sale-main-val val-mob-dis .optq_<?=$product['product_id']?>">
                <div data="<?=$i?>" class="sale-main-val-but-l minus_qu"></div>

               <input class="col-quantity res-<?=$i?>" type="text" name="quantity" value="1"/>

                <div data="<?=$i?>" class="sale-main-val-but-r plus_qu"></div>
              </div>
              <div class="sale-main-val">
                <a onclick="wishlist.add('<?php echo $product['product_id']; ?>');" class="sale-main-val-heart"></a>
              </div>
            </div>
            <div class="main-sale__slider--item--price">
              <div class="main-sale--price-active">
                <?php echo $product['special']; ?>
              </div>
              <div class="main-sale--price-inactive">
                <?php echo $product['price']; ?>
              </div>
            </div>



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
                  <label class="in_lab" for="input-radio<?php echo $option_value['product_option_value_id']; ?>">  <?php echo $option_value['name']; ?></label>
                  <input id="input-radio<?php echo $option_value['product_option_value_id']; ?>" type="radio" name="option[<?php echo $option['product_option_id']; ?>]" value="<?php echo $option_value['product_option_value_id']; ?>" />
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
        </div>




        <?php $i++; } ?>




      </div>
    </div>
  </div>
</div>


<script>
    $(document).ready(function() {
        $(".plus_qu").click(function(){
            var counts = $(this).attr('data');
            $(this).prev("input").attr('value', parseInt($("input.res-"+counts).val()) + 1);
            var quantiti = $("input.res-"+counts).val();

        });

        $(".minus_qu").click(function(){

            var counts = $(this).attr('data');
            if($(this).next("input.res-"+counts).val() !=0) {
                $(this).next("input").attr('value', parseInt($("input.res-"+counts).val()) - 1);
                var quantiti = $("input.res-"+counts).val();

            }
        });
    });
</script>



<script>
    $("input[name='option[228]'],input[name='option[229]']").on('click',function () {
        $('.main-sale__slider--item--size--item,.main-sale__slider--item--size--item label').removeClass('active');
       $('input[name=\'option[228]\']:checked,input[name=\'option[229]\']:checked').parent().addClass('active');

    })


</script>


<script type="text/javascript"><!--
    function addToCartOpt(product_id){
        $.ajax({
            url: 'index.php?route=checkout/cart/add',
            type: 'post',
            data: $('.opt_'+product_id+' input[type=\'hidden\'], .opt_'+product_id+' input[name=\'quantity\'], .opt_'+product_id+' select, .opt_'+product_id+' input[type=\'checkbox\']:checked,.opt_'+product_id+' input[type=\'radio\']:checked'),
            dataType: 'json',
            success: function(json) {

            //    console.log(this);
             //   console.log(json);



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
                    $('#cart-total').html(json['total']);
                    $('html, body').animate({ scrollTop: 0 }, 'slow');
                }
            }
        });
    }

    //--></script>