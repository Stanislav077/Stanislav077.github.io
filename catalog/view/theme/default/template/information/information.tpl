<?php echo $header; ?>
<?php if($information_ids == 4) { ?>
<div  class="container">
  <div class="breadcrumbs">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <a class="breadcrumbs__item" href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
    <?php } ?>
  </div>
  </div>
<div class="about__content">
  <div class="container">
    <div class="go-back"><a href="#"><img src="style/img/icon/arrow-right-nav.png" alt="">Home</a></div>
    <div class="about__top">
      <div class="about__top--item">
        <div class="aqua__heading">About us</div>
        <div class="about__top--item--text">
          <p> <?=$block_first?></p>
          <p> <?=$block_too?></p>
        </div>
      </div>
      <div class="about__top--item">
        <div class="reviews">
          <div class="reviews__heading">
            <div class="reviews__heading--item">
              <div class="aqua__heading">Reviews</div>
            </div>
            <div class="reviews__heading--item reviews__heading--item2">
              <a class="btn-color btnfos-4" data-remodal-target="modal1" ><span>write review</span></a>
            </div>
          </div>

          <div id="reviewabout"></div>

          <div style="display: none" class="morereviews">
            <a href="#">More reviews <img src="style/img/icon/arrow-right.png" alt=""></a>
          </div>
        </div>
      </div>
    </div>
    <div class="whatwedo">
      <div class="aqua__heading2">What we do</div>
    </div>
    <div class="whatwedo__cont">
<?php $i=0; ?>
<?php foreach($whots as $whot) { ?>


      <?php if($i%2==0) { ?>
      <div class="ab__flex">
        <div class="whatwedo__cont--img"><img src="style/img/ab1.png" alt=""></div>
        <div class="whatwedo__cont--text">
          <div class="whatwedo__cont--text--cap">
            <?=$whot['title']?>
          </div>
          <p>
            <?=$whot['description']?>
            </p>
        </div>
      </div>
<?php }else { ?>

      <div class="ab__flex">
        <div class="whatwedo__cont--text whatwedo__cont--text2">
          <div class="whatwedo__cont--text--cap whatwedo__cont--text--cap2">
            <?=$whot['title']?>
          </div>
          <p>
            <?=$whot['description']?>
          </p>
        </div>
        <div class="whatwedo__cont--img"><img src="style/img/ab2.png" alt=""></div></div>
      <?php } ?>
      <?php $i++; } ?>

    </div>




  </div>
</div>




<?php echo $content_bottom; ?>
<div class="remodal" data-remodal-id="modal1">
  <button data-remodal-action="close" class="remodal-close"></button>
  <div class="remodal__heading">
    Write a review
  </div>
  <form action="" id="form-reviewabout">
    <div class="remodal__rate">
      <div class="remodal__rate--item">Overall Rating*</div>
      <div class="remodal__rate--item">


        <div class="rating-wrap">
          <div class="rating">
            <input type="radio" class="radio-stars" id="star5" name="rating" value="5" style="">
            <label class="full" for="star5" title="Оценка"></label>
            <input type="radio" class="radio-stars" id="star4" name="rating" value="4" style="">
            <label class="full" for="star4" title="4"></label>
            <input type="radio" class="radio-stars" id="star3" name="rating" value="3" style="">
            <label class="full" for="star3" title="3"></label>
            <input type="radio" class="radio-stars" id="star2" name="rating" value="2" style="">
            <label class="full" for="star2" title="2"></label>
            <input type="radio" class="radio-stars" id="star1" name="rating" value="1" style="">
            <label class="full" for="star1" title="1"></label>

          </div>
        </div>



      </div>
    </div>
    <div>
      <label for="nam">Name*</label>
      <input name="name"  id="nam" type="text">
    </div>
    <div>
      <label for="mes">Message*</label>
      <textarea name="text" id="mes"></textarea>
    </div>
    <div>
      <input id="button-reviewabout" type="button" value="Send" class="btn-color">
    </div>
  </form>
</div>

<script>


    $('#reviewabout').delegate('.pagination a', 'click', function(e) {
        e.preventDefault();

        $('#reviewabout').fadeOut('slow');

        $('#reviewabout').load(this.href);

        $('#reviewabout').fadeIn('slow');
    });


    $('#reviewabout').load('index.php?route=information/information/reviewabout&information_id=4');

    $('#button-reviewabout').on('click', function() {

        $.ajax({
            url: 'index.php?route=information/information/write',
            type: 'post',
            dataType: 'json',
            data: $("#form-reviewabout").serialize(),
            beforeSend: function() {
                //$('#button-reviewabout').button('loading');
            },
            complete: function() {
                //$('#button-reviewabout').button('reset');
            },
            success: function(json) {



                $('.alert-success, .alert-danger').remove();

                if (json['error']) {
                    $('#button-reviewabout').after('<div class="alert alert-danger"><i class="fa fa-exclamation-circle"></i> ' + json['error'] + '</div>');
                }else{

                }

                if (json['success']) {

                    console.log(json);
                    $('#button-reviewabout').after('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + '</div>');

                    $('input[name=\'name\']').val('');
                    $('textarea[name=\'text\']').val('');
                    $('input[name=\'rating\']:checked').prop('checked', false);
                    setTimeout(function () {
                        $('.remodal-close').trigger('click');
                    },3000)
                }
            }
        });
    });
  </script>

<?php }else { ?>

<div  class="container">
  <div class="breadcrumbs">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <a class="breadcrumbs__item" href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
    <?php } ?>
  </div>




  <div class="row"><?php echo $column_left; ?>
    <?php if ($column_left && $column_right) { ?>
    <?php $class = 'col-sm-6'; ?>
    <?php } elseif ($column_left || $column_right) { ?>
    <?php $class = 'col-sm-9'; ?>
    <?php } else { ?>
    <?php $class = 'col-sm-12'; ?>
    <?php } ?>
    <div id="content" class="<?php echo $class; ?>"><?php echo $content_top; ?>
      <h1><?php echo $heading_title; ?></h1>
      <?php echo $description; ?>
      <?php //echo $content_bottom; ?>
    </div>
    <?php echo $column_right; ?></div>
</div>
<?php } ?>
<?php echo $footer; ?>