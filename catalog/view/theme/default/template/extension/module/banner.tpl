



<?php if($news_baner !=0) { ?>

<div style="width: 340px" id="banner<?php echo $module; ?>" class="blog-cont__item blog-cont__item2">

  <?php foreach ($banners as $banner) { ?>

  <div class="item">

    <div class="blog-cont__item--rec">
      <img src="<?php echo $banner['image']; ?>" alt="">
    </div>
    <div class="blog-cont__item--cap">
      <?php echo $banner['title']; ?>
    </div>
    <?php if ($banner['link']) { ?>
    <div class="blog-cont__item--link">
      <a class="btn-color btnfos-4" href="<?php echo $banner['link']; ?>"><span>Shop Now</span></a>
    </div>



    <?php } ?>
  </div>

  <?php  } ?>

</div>



<script type="text/javascript"><!--
    $('#banner<?php echo $module; ?>').owlCarousel({
        items: 6,
        autoPlay: 3000,
        singleItem: true,
        navigation: false,
        pagination: false,
        transitionStyle: 'fade'
    });
    --></script>
<style>

  .owl-wrapper-outer
  {
    border:none;
    box-shadow:none;
    border-radius:0px;
  }

  </style>

<?php }else{ ?>

<div id="banner<?php echo $module; ?>" class="owl-carousel">
  <?php foreach ($banners as $banner) { ?>
  <div class="item">
    <?php if ($banner['link']) { ?>
    <a href="<?php echo $banner['link']; ?>"><img src="<?php echo $banner['image']; ?>" alt="<?php echo $banner['title']; ?>" class="img-responsive" /></a>
    <?php } else { ?>
    <img src="<?php echo $banner['image']; ?>" alt="<?php echo $banner['title']; ?>" class="img-responsive" />
    <?php } ?>
  </div>
  <?php } ?>
</div>

<script type="text/javascript"><!--
$('#banner<?php echo $module; ?>').owlCarousel({
	items: 6,
	autoPlay: 3000,
	singleItem: true,
	navigation: false,
	pagination: false,
	transitionStyle: 'fade'
});
--></script>
<?php } ?>