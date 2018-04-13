<?php echo $header; ?>


<div class="container">
  <div class="breadcrumbs">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <a href="<?=$breadcrumb['href']?>" class="breadcrumbs__item"><?=$breadcrumb['text']?></a>
<?php } ?>
  </div>
</div>


<div class="estore__content profile-content">
  <div class="container">
    <div class="go-back"><a href="#"><img src="img/icon/arrow-right-nav.png" alt="">Home</a></div>
    <div class="estore__head">
      <div class="aqua__heading">Profile</div>
    </div>
  </div>

  <div class="product__content">
    <div class="container">
      <div class="cont__product profile--product">
        <div class="cont__product--sidebar">
          <div class="estore__sidebar--cat--cat">
            <?=$column_left?>
          </div>
          <div class="estore__sidebar--mob">
            <div class="estore__sidebar--cat estore__sidebar--cat--mob">
              <div class="estore__sidebar--cat--cap">Wish list</div>
              <div class="estore__sidebar">
                <?=$column_left?>
              </div>
            </div>
          </div>

          <div class="wholesale__content--write--block--info">
            <span>The minimum order amount for a wholesale buyer is $ 300</span>
          </div>
        </div>
        <div class="cont__product--content prof__item profile--item">

          <div class="profile--item--form">
            <div class="profile--item--form--maincap">
              <div>Your detalis</div>
              <div><a href="#">Not Danny? Logout</a></div>
            </div>
          </div>
          <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data" >
          <div class="prof-form-block">
            <div class="prof-form-block--left">
              <div class="prof-form-block--form--cap">
                Personal Information
              </div>

                <div>
                  <label for="input-firstname">First name*</label>

                  <input type="text" name="firstname" value="<?php echo $firstname; ?>"  id="input-firstname" />
                  <?php if ($error_firstname) { ?>
                  <div class="text-danger"><?php echo $error_firstname; ?></div>
                  <?php } ?>

                </div>

                <div>
                  <label for="ln22">Last name</label>
                  <input name="lastname" value="<?php echo $lastname; ?>"  type="text" id="ln22">

                </div>

                <div>
                  <label for="Com22">Company</label>
                  <input name="company" value="<?php echo $company; ?>" type="text" id="Com22">
                </div>

                <div>
                  <label for="mai22">E-mail address*</label>

                  <input type="email" name="email" value="<?php echo $email; ?>"  id="mai22" class="form-control" />
                  <?php if ($error_email) { ?>
                  <div class="text-danger"><?php echo $error_email; ?></div>
                  <?php } ?>
                </div>

                <div>
                  <label for="Phone222">Phone*</label>

                  <input type="tel" name="telephone" value="<?php echo $telephone; ?>"  id="Phone222" class="tel" />
                  <?php if ($error_telephone) { ?>
                  <div class="text-danger"><?php echo $error_telephone; ?></div>
                  <?php } ?>
                </div>

                <div class="prof-form-block--form--cap">
                  Delivery address
                </div>

                <div>
                  <label for="Street222">Street Address*</label>
                  <input type="text" id="Street222">
                </div>

                <div>
                  <label for="City222">City*</label>
                  <input type="text" id="City222">
                </div>

                <div>
                  <label for="State222">State*</label>
                  <input type="text" id="State222">
                </div>

                <div>
                  <label for="ZIP222">ZIP*</label>
                  <input type="text" id="ZIP222">
                </div>
                <input type="button" value="save" class="btn-color btnfos-4">


            </div>
            <div class="prof-form-block--right">
              <div class="prof-form-block--left">
                <div class="prof-form-block--form--cap">
                  Personal Information
                </div>


                  <div>
                    <label for="Oldpassword222">Old password</label>
                    <input type="password" id="Oldpassword222">
                  </div>

                  <div>
                    <label for="New22password">New password</label>
                    <input type="password" id="New22password">
                  </div>

                  <div>
                    <label for="ConfirmPassword222">Confirm Password</label>
                    <input type="password" id="ConfirmPassword222">
                  </div>
                  <input type="submit" value="save" class="btn-color btnfos-4">


              </div>



            </div>


          </div>




        </div>
      </div>
    </div>
  </div>
</div>



<script type="text/javascript"><!--
// Sort the custom fields
$('.form-group[data-sort]').detach().each(function() {
	if ($(this).attr('data-sort') >= 0 && $(this).attr('data-sort') <= $('.form-group').length) {
		$('.form-group').eq($(this).attr('data-sort')).before(this);
	}

	if ($(this).attr('data-sort') > $('.form-group').length) {
		$('.form-group:last').after(this);
	}

	if ($(this).attr('data-sort') == $('.form-group').length) {
		$('.form-group:last').after(this);
	}

	if ($(this).attr('data-sort') < -$('.form-group').length) {
		$('.form-group:first').before(this);
	}
});
//--></script>
<script type="text/javascript"><!--
$('button[id^=\'button-custom-field\']').on('click', function() {
	var node = this;

	$('#form-upload').remove();

	$('body').prepend('<form enctype="multipart/form-data" id="form-upload" style="display: none;"><input type="file" name="file" /></form>');

	$('#form-upload input[name=\'file\']').trigger('click');

	if (typeof timer != 'undefined') {
    	clearInterval(timer);
	}

	timer = setInterval(function() {
		if ($('#form-upload input[name=\'file\']').val() != '') {
			clearInterval(timer);

			$.ajax({
				url: 'index.php?route=tool/upload',
				type: 'post',
				dataType: 'json',
				data: new FormData($('#form-upload')[0]),
				cache: false,
				contentType: false,
				processData: false,
				beforeSend: function() {
					$(node).button('loading');
				},
				complete: function() {
					$(node).button('reset');
				},
				success: function(json) {
					$(node).parent().find('.text-danger').remove();

					if (json['error']) {
						$(node).parent().find('input').after('<div class="text-danger">' + json['error'] + '</div>');
					}

					if (json['success']) {
						alert(json['success']);

						$(node).parent().find('input').val(json['code']);
					}
				},
				error: function(xhr, ajaxOptions, thrownError) {
					alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
				}
			});
		}
	}, 500);
});
//--></script>
<script type="text/javascript"><!--
$('.date').datetimepicker({
	pickTime: false
});

$('.datetime').datetimepicker({
	pickDate: true,
	pickTime: true
});

$('.time').datetimepicker({
	pickDate: false
});
//--></script>
<?php echo $footer; ?>
