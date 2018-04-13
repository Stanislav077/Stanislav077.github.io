<?php echo $header; ?>


<div class="container">
  <div class="breadcrumbs">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <a href="<?php echo $breadcrumb['href']; ?>" class="breadcrumbs__item"><?php echo $breadcrumb['text']; ?></a>
    <?php } ?>

  </div>
</div>



<div class="estore__content">
  <div class="container">
    <div class="go-back"><a href="#"><img src="style/img/icon/arrow-right-nav.png" alt="">Saltwater Fish</a></div>
    <div class="estore__head">
      <div class="aqua__heading"><?php echo $heading_title; ?></div>

    </div>
  </div>
  <div class="cont__product">
  <div class="cont__estore prods">
    <div class="container">
      <div class="cont__estore__flex">
        <div class="cont__estore--item ">

          <?=$column_left?>

        </div>
        <?php if($id_cat == '70') { ?>
        <div class="cont__estore--item">
          <div class="estore__category">
            <?php foreach($categories as $cat_prod) { ?>
            <div class="main-sale__slider--item-per">
              <div class="main-sale__slider--item">
                <div class="sale-button">
                  <a class="btn-white btnfos-4" href="<?=$cat_prod['href']?>"><span>More</span></a>
                </div>
                <div class="main-sale__slider--item--img">
                  <img src="<?=$cat_prod['image']?>" alt="">
                </div>
                <div class="main-sale__slider--item--name">
                  <?=$cat_prod['name']?>
                </div>
              </div>
            </div>
            <?php } ?>
          </div>
        </div>
        <?php } else { ?>




        <div id="maincontent" class="onecat__list--item">
          <div style="display: none" class="sort">
            <div class="sort__item">

              <div class="how-much">
                <?php echo $results; ?>

              </div>
              <span class="sort-by--cap">Sort by:</span>
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
            <div class="sort__item">
              <div class="show">
                <span class="show__cap">Show:</span>

                <?php foreach ($limits as $limits) { ?>
                <?php if ($limits['value'] == $limit) { ?>
                <span class="show__edd active"><a href="<?php echo $limits['href']; ?>"><?php echo $limits['text']; ?></a></span>
                <?php } else { ?>
                <span class="show__edd "><a href="<?php echo $limits['href']; ?>"><?php echo $limits['text']; ?></a></span>
                <?php } } ?>
              </div>
            </div>
          </div>
          <div class="onecat__list">




            <div class="cont__product--content">
            <?php if($products) { ?>

            <?php foreach($products as $product) { ?>

              <div class="cont__product--content--flex">
                <div class="cont__product--content--flex--img">
                  <img src="<?=$product['image']?>" alt="">
                </div>
                <div class="cont__product--content--flex--text">
                  <?=$product['description']?>
                </div>
              </div>

            <?php  } ?>



            <?php }else{ ?>
            <?=$text_empty?>
            <?php } ?>



              <div class="cont__product--content--text">
                <?php echo $description; ?>
              </div>
          </div>


          </div>
          <?php if($products) { ?>
          <?php echo $pagination; ?>
          <?php } ?>

        </div>



        <?php } ?>
      </div>
    </div>
  </div>
  </div>
  <?php if($id_cat == '59') { ?>
  <?php echo $content_bottom; ?>

  <?php } else {  ?>

  <script>
      $('.active_latest .in_lab').on('click',function () {
          $('.main-sale__slider--item--size--item').removeClass('active');
          $(this).parent().addClass('active');
      })
  </script>


  <script type="text/javascript"><!--
      function addToCartOpt_n(product_id){
          $.ajax({
              url: 'index.php?route=checkout/cart/add',
              type: 'post',
              data: $('.opt_new_'+product_id+' input[type=\'hidden\'], .opt_new_'+product_id+' input[name=\'quantity\'], .opt_new_'+product_id+' select, .opt_new_'+product_id+' input[type=\'checkbox\']:checked,.opt_new_'+product_id+' input[type=\'radio\']:checked'),
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
  <?php } ?>

</div>








<?php echo $footer; ?>
