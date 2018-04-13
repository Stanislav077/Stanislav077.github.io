<?php echo $header; ?>


<div class="container">
  <div class="breadcrumbs">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <a href="<?php echo $breadcrumb['href']; ?>" class="breadcrumbs__item"><?php echo $breadcrumb['text']; ?></a>
    <?php } ?>
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
            <!--<a href="#">My Account</a>
            <a class="active" href="#">Orders</a>
            <a href="#">Wish list</a> -->

            <?php echo $column_left; ?>

          </div>
          <div class="estore__sidebar--mob">
            <div class="estore__sidebar--cat estore__sidebar--cat--mob">
              <div class="estore__sidebar--cat--cap">Orders</div>
              <div class="estore__sidebar">
               <!-- <a href="#">My Account</a>
                <a href="#">Wish list</a> -->
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
                <div class="ind-val--left"><?php echo $oldTotal; ?></div>
                <div class="ind-val--right">$<span>500</span></div>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 100%;">
          <div class="table-prof">
            <div class="table-prof__item">Date</div>
            <div class="table-prof__item">Order</div>
            <div class="table-prof__item">Status</div>
            <div class="table-prof__item">Total</div>
          </div>

          <?php if ($orders) { ?>
          <?php $i=75; ?>
          <?php foreach ($orders as $order) { ?>
          <div class="table-prof">
            <a href="<?=request_url()?>#modal<?=$i?>">
              <div class="table-prof__item"><?php echo $order['date_added']; ?></div>
              <div class="table-prof__item">#<?php echo $order['order_id']; ?></div>
              <div class="table-prof__item"><?php echo $order['status']; ?></div>
              <div class="table-prof__item"><?php echo $order['total']; ?></div>
              <div class="table-prof__item table-prof--close">
                <img src="style/img/icon/close-h.png" alt="">
              </div>
            </a>
          </div>

          <?php $i++; } ?>
          <?php } ?>


    </div>
  </div>
</div>
    <?php if ($orders) { ?>
    <?php $k=75; ?>
    <?php foreach ($orders as $order) { ?>
    <div class="remodal remodal-write" data-remodal-id="modal<?=$k?>">
      <button data-remodal-action="close" class="remodal-close"></button>
      <div class="remodal__heading">
        Order #<?php echo $order['order_id']; ?>
      </div>

      <div class="order-modal">
        <div class="order-modal--stroke">
          <div>Delivery address: <span><?php echo $order['orders_adress']; ?>,<?php echo $order['orders_city']; ?>, PA <?php echo $order['orders_pa']; ?></span></div>
          <div>Status: <span><?php echo $order['status']; ?></span></div>
        </div>
      </div>
    </div>

    <?php $k++; } ?>
    <?php }else { ?>
    <p><?php echo $text_empty; ?></p>
    <?php } ?>

    <?php
function request_url()
{
$result = ''; // Пока результат пуст
$default_port = 80; // Порт по-умолчанию

// А не в защищенном-ли мы соединении?
if (isset($_SERVER['HTTPS']) && ($_SERVER['HTTPS']=='on')) {
// В защищенном! Добавим протокол...
$result .= 'https://';
// ...и переназначим значение порта по-умолчанию
$default_port = 443;
} else {
// Обычное соединение, обычный протокол
$result .= 'http://';
}
// Имя сервера, напр. site.com или www.site.com
$result .= $_SERVER['SERVER_NAME'];

// А порт у нас по-умолчанию?
if ($_SERVER['SERVER_PORT'] != $default_port) {
// Если нет, то добавим порт в URL
$result .= ':'.$_SERVER['SERVER_PORT'];
}
// Последняя часть запроса (путь и GET-параметры).
$result .= $_SERVER['REQUEST_URI'];
// Уфф, вроде получилось!
return $result;
}
?>

</div>
</div>

    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <script>



        $( function() {
        <?php if($slide_tot > 500 ) { ?>
                var slided = 500;
          <?php  } else { ?>
                var slided = '<?=$slide_tot?>';
            <?php } ?>

            $( "#slider-range-min" ).slider({
                range: "min",
                value: slided,
                min: 1,
                max: 500,
                slide: function( event, ui ) {
                    $( "#amount" ).val( "$" + ui.value );
                }
            });
            $( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
        } );
    </script>

    <?php echo $footer; ?>
