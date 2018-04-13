<?php echo $header; ?>

<div class="container">
  <div class="breadcrumbs">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <a href="<?php echo $breadcrumb['href']; ?>" class="breadcrumbs__item"><?php echo $breadcrumb['text']; ?></a>
   <?php } ?>
  </div>
</div>

<div class="about__content promotion__content wholesale__content">
  <div class="container">
    <div class="go-back"><a href="#"><img src="style/img/icon/arrow-right-nav.png" alt="">Home</a></div>

    <div class="estore__head">
      <div class="aqua__heading">Wholesale</div>
    </div>
    <div class="whatwedo__cont">
      <div class="ab__flex">
        <div class="whatwedo__cont--img"><img src="<?=$image?>" alt=""></div>
        <div class="whatwedo__cont--text">
          <div class="whatwedo__cont--text--cap">
            <?=$title?>
          </div>
          <p>
           <?=$description?>
          </p>
        </div>

      </div>

    </div>

    <div class="wholesale__content--write">
      <div class="wholesale__content--write--info">
        <div class="wholesale__content--write--info--cap">
          Have Questions? We can help. Here's how you can reach us:
        </div>
        <div class="footer-center-cont__item foot-cont-1">
          <ul>
            <li><a class="tel-foot" href="tel:<?=$telephone?>"><?=$telephone?></a></li>
            <li><a class="mail-foot" href="mailto:<?=$ems?>"><?=$ems?></a></li>
          </ul>
        </div>
        <div class="wholesale__content--write--info--link">
          <a class="btn-color btnfos-4 "  href="<?php echo request_url(); ?>#modal5"><span>write us</span></a>
        </div>
      </div>
      <div class="wholesale__content--write--block">
        <div class="wholesale__content--write--block--info">
          <span>The minimum order amount for a wholesale buyer is $ <?=$orders?></span>
        </div>
      </div>
    </div>

  </div>

  <div class="wholesale__form">
    <div class="container">
      <div class="wholesale__form--cont">
        <div class="wholesale__form--cont--cap">
          Sign Up as a Wholesaler
        </div>
        <form id="popupregister_form_page" action="" method="post">
          <div class="wdff">
            <div>
              <label for="">Name</label>
              <input name="firstname" type="text">
              <label for="">E-mail address</label>
              <input name="email" type="text">
            </div>
            <div>
              <label for="">Password</label>
              <input name="password" type="password">
              <label for="">Confirm password</label>
              <input name="password_confirm" type="password">
            </div>
          </div>
          <div class="results"></div>
          <input onclick="popup_logreg_register_page();" type="button" value="Login" class="btn-color btnfos-4">
        </form>

        <a class="header-main__cont--top--profile" href="#" >Already have an account? Click to sign in</a>
      </div>
    </div>
  </div>

</div>


<!--========================================== ИНФО ЕСЛИ в ЛК -->
<!-- <div class="wholesale__form">
    <div class="container">
        <div class="wholesale__form--cont">
            <div class="wholesale__form--cont--cap">
                You are signed in
            </div>

        </div>
    </div>
</div> -->
<!--========================================== ИНФО ЕСЛИ НЕ ОПТОВИК -->
<!-- 		<div class="wholesale__form">
    <div class="container">
        <div class="wholesale__form--cont">
            <div class="wholesale__form--cont--cap">
                In the near future the manager will contact you to clarify the details.
            </div>

        </div>
    </div>
</div> -->


<div class="remodal remodal-write " data-remodal-id="modal5">
  <button data-remodal-action="close" class="remodal-close"></button>
  <div class="remodal__heading succ">
    Write Us
  </div>
  <div class="contact__wrap--form">
    <form id="form_modal5" class="" action="" method="post">
      <div class="cont__form">
        <div class="cont__form--left">
          <label for="namec">Name</label>
          <input name="name" id="namec" type="text">
          <label  for="phonec">Phone</label>
          <input name="telephone" class="tel" id="phonec" type="text">
          <label for="mailc">E-mail address</label>
          <input name="user_email" id="mailc" type="email">
        </div>
        <div class="cont__form--right">
          <label for="textc">Message</label>
          <textarea name="msg" id="textc"></textarea>
        </div>
      </div>
      <input  type="button" class="btn-color question-form" value="Send">
    </form>
  </div>
</div>

<script>
    $(document).ready(function () {
        $('.question-form').on('click',function () {

            var data = $('#form_modal5').serialize();
$('.error').remove();
            $('.succ').show();
            $('.contact__wrap--form').show();
            $('.suc_mas').remove();

            $.ajax({
                url: 'index.php?route=information/wholesale/mass',
                type: 'post',
                data: data,
                dataType: 'json',

                success: function(json) {
                    //$(".remodal-close").trigger( "click" );


                    if(json['error'])
                    {

                        if(json['error']['name']){
                            $('input[name=\'name\']').after('<span class="error">'+json['error']['name']+'</span>');
                        }
                        if(json['error']['msg']){
                            $('textarea[name=\'msg\']').after('<span class="error">'+json['error']['msg']+'</span>');
                        }
                        if(json['error']['user_email']){
                            $('input[name=\'user_email\']').after('<span class="error">'+json['error']['user_email']+'</span>');
                        }
                        if(json['error']['telephone']){
                            $('input[name=\'telephone\']').after('<span class="error">'+json['error']['telephone']+'</span>');
                        }

                    }else{

                        $('.succ').hide('slow');
                        $('.contact__wrap--form').hide('slow');
                        $('.succ').after('<h3 class="suc_mas">Your message has been sent</h3>');

                        setTimeout(function() {

                            $(".remodal-close").trigger( "click" );
                        }, 3000);

}


                }
            });

            return false;
        })


    });



</script>


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

<?php echo $footer; ?>

