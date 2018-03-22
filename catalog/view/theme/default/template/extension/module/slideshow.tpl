


<div class="index__slider">
  <div class="index__slider__main">

    <?php foreach ($banners as $banner) { ?>
    <div class="index__slider--item">

      <div class="slider--item">
        <div class="aqua__heading"><?php echo $banner['title']; ?></div>
        <div class="slider--item__text">

          <?php echo $banner['description']; ?>
          </div>
        <div class="slider--item__button">
          <?php if ($banner['link']) { ?>
          <a class="btn-color btnfos-4" href="<?php echo $banner['link']; ?>"><span>Store</span></a>
          <?php } ?>
        </div>
      </div>
      <div class="slider--item--img">
        <img src="<?php echo $banner['image']; ?>" alt="<?php echo $banner['title']; ?>">
      </div>
    </div>
    <?php } ?>

  </div>
</div>



