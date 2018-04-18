


<?php if ($reviewabouts) { ?>
<?php foreach ($reviewabouts as $reviewabout) { ?>

<div class="reviews__item">
  <div class="reviews__item--name">
    <div><?php echo $reviewabout['author']; ?></div>
    <span><?php echo $reviewabout['date_added']; ?></span>
  </div>
  <div class="reviews__item--text">
    <div class="rating" data-rating="<?php echo $reviewabout['rating']; ?>">
      <div class="star hf"></div>
      <div class="star"></div>
      <div class="star hf"></div>
      <div class="star"></div>
      <div class="star hf"></div>
      <div class="star"></div>
      <div class="star hf"></div>
      <div class="star"></div>
      <div class="star hf"></div>
      <div class="star"></div>
    </div>
    <div class="reviews__item--text--text">
      <?php echo $reviewabout['text']; ?>
    </div>
  </div>

</div>


<?php } ?>
<div class="text-right"><?php echo $pagination; ?></div>
<?php } else { ?>
<p><?php echo $text_no_reviewabouts; ?></p>
<?php } ?>
