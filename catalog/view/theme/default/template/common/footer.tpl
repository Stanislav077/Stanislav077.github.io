

<footer>
  <div class="container">
    <div class="footer-top-line">
      <div class="footer-top-line__item1">
        Subscribe to newsletter
      </div>
      <div class="footer-top-line__item2">
        <form method="post" id="form_email" action="">
          <input class="input_email" name="emails" type="text" placeholder="Enter your e-mail address">
          <input type="button" class="btn-color btnfos-4 form_email_subscribe" value="Subscribe">
        </form>
      </div>
      <div class="footer-top-line__item3">
        *New articles on the benefits and ways
        of using our products every two weeks!
      </div>
    </div>
  </div>
  <div class="footer-center-line">
    <div class="container">
      <div class="footer-center-cont">
        <div class="footer-center-cont__item foot-cont-1">
          <div class="foot-cont-1__cap">
            <a href="#"><img src="style/img/logo.png" alt=""></a>
          </div>
          <ul>
            <li><a class="tel-foot" href="tel:+12677272782"><?=$telephone?></a></li>
            <li><a class="mail-foot" href="mailto:<?=$email?>"><?=$email?></a></li>
            <li><span class="adress-foot"><?=$address?></span></li>
          </ul>
        </div>

        <div class="footer-center-cont__item foot-cont-2">
          <div class="foot-cont-1__cap">
            E-store
          </div>
          <ul>
            <?php foreach($categories as $category) { ?>
            <li><a href="<?=$category['href']?>"><?=$category['name']?></a></li>
     <?php } ?>
          </ul>
        </div>

        <div class="footer-center-cont__item foot-cont-2">
          <div class="foot-cont-1__cap">
            Products
          </div>
          <ul>
            <li><a href="#">Artificial Reefs</a></li>
            <li><a href="#">Aquariums</a></li>
            <li><a href="#">Bubble wall</a></li>
          </ul>
        </div>

        <div class="footer-center-cont__item foot-cont-2">
          <div class="foot-cont-1__cap">
            About us
          </div>
          <ul>
            <li><a href="#">Promotions</a></li>
            <li><a href="#">Our policy</a></li>
            <li><a href="#">Wholesale</a></li>
          </ul>
          <div class="foot-cont-1__cap foot-cont-2__cap">
            Subscribe to us
          </div>
          <div class="foot-cont-2__cap-img">
            <a class="inst" href="<?=$instagram?>"></a>
            <a class="f" href="<?=$facebook?>"></a>
            <a class="you" href="<?=$yutube?>"></a>
            <a class="p" href="<?=$pinterest?>"></a>
          </div>
        </div>


        <div class="footer-center-cont__item foot-cont-2">
          <div class="foot-cont-1__cap">
            <a href="<?=$contact?>">Contacts</a>
          </div>
          <div class="foot-cont-1__cap foot-cont-3__cap">
            <a href="#">Blog</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="footer-bottom-line">
      <div class="footer-bottom-line__item">AquadesignPRO 2018 (c.) All Rights Reserved
        <!-- <a class="our" href="#">Our policy</a> --></div>
      <div class="footer-bottom-line__item">
        <a href="http://masgroup.com.ua" target="_blank"><img src="img/maslogo.png" alt="">
          Website development and promotion</a>
      </div>
    </div>
  </div>
</footer>


<footer style="display: none">
  <div class="container">
    <div class="row">
      <?php if ($informations) { ?>
      <div class="col-sm-3">
        <h5><?php echo $text_information; ?></h5>
        <ul class="list-unstyled">
          <?php foreach ($informations as $information) { ?>
          <li><a href="<?php echo $information['href']; ?>"><?php echo $information['title']; ?></a></li>
          <?php } ?>
        </ul>
      </div>
      <?php } ?>
      <div class="col-sm-3">
        <h5><?php echo $text_service; ?></h5>
        <ul class="list-unstyled">
          <li><a href="<?php echo $contact; ?>"><?php echo $text_contact; ?></a></li>
          <li><a href="<?php echo $return; ?>"><?php echo $text_return; ?></a></li>
          <li><a href="<?php echo $sitemap; ?>"><?php echo $text_sitemap; ?></a></li>
        </ul>
      </div>
      <div class="col-sm-3">
        <h5><?php echo $text_extra; ?></h5>
        <ul class="list-unstyled">
          <li><a href="<?php echo $manufacturer; ?>"><?php echo $text_manufacturer; ?></a></li>
          <li><a href="<?php echo $voucher; ?>"><?php echo $text_voucher; ?></a></li>
          <li><a href="<?php echo $affiliate; ?>"><?php echo $text_affiliate; ?></a></li>
          <li><a href="<?php echo $special; ?>"><?php echo $text_special; ?></a></li>
        </ul>
      </div>
      <div class="col-sm-3">
        <h5><?php echo $text_account; ?></h5>
        <ul class="list-unstyled">
          <li><a href="<?php echo $account; ?>"><?php echo $text_account; ?></a></li>
          <li><a href="<?php echo $order; ?>"><?php echo $text_order; ?></a></li>
          <li><a href="<?php echo $wishlist; ?>"><?php echo $text_wishlist; ?></a></li>
          <li><a href="<?php echo $newsletter; ?>"><?php echo $text_newsletter; ?></a></li>
        </ul>
      </div>
    </div>
    <hr>
    <p><?php echo $powered; ?></p>
  </div>
</footer>
<?php $email_customer = (isset($email_customer) ? $email_customer : "0") ?>
<script>



    var ems = '<?=$email_customer?>';


    if(ems != 0) {

        $('.input_email').val(ems);
        $('.input_email').attr('disabled','disabled');
        $('.input_email').attr('style','background: white; cursor: no-drop;');
    }


    $('.form_email_subscribe').on('click',function () {
        var data = $('.input_email').val();
        $('.error').remove();
        if (data == '') {
            $('.input_email').after('<p class="error">Fill in the E-mail field</p>');
            setTimeout(function () {
                $('.error').remove();
            },2000)
        } else{
            $.ajax({
                url: 'index.php?route=common/footer/subsckribe_user',
                type: 'post',
                data: 'email=' + data,
                dataType: 'json',

                success: function (json) {

                    //   console.log(json)
                    if(json['error']){


                        $('.input_email').after('<p class="error">E-mail: '+ json['error']+' already exist</p>');


                    }else{
                        $('.input_email').after('<p class="sucsses">You have subscribed to the newsletter!</p>');
                    }
                    $('.form_email_subscribe .error').show('slow');
                    setTimeout(function () {

                        $('.error').hide(2000, function () {
                            $('.error').remove();
                        });
                        $('.sucsses').hide(2000, function () {
                            $('.sucsses').remove();
                            if(ems == 0) {
                                $('.input_email').val('');
                            }
                        });



                    },2000)



                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                }
            });
        }
        return false;
    })

</script>
</body>
<link href="style/css/main.css" rel="stylesheet">
<script async  src="style/js/main.js" type="text/javascript"></script>
</html>