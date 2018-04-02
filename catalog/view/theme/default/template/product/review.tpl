<?php if ($reviews) { ?>
<?php foreach ($reviews as $review) { ?>
<div class="reviews__item">
  <div class="reviews__item--name">
    <div><?php echo $review['author']; ?></div>
    <span><?php echo $review['date_added']; ?></span>
  </div>
  <div class="reviews__item--text">

    <div class="rating" data-rating="<?php echo $review['rating']; ?>">
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
      <?php echo $review['text']; ?>
    </div>
  </div>
</div>
<?php } ?>
<div class="text-right"><?php echo $pagination; ?></div>
<?php } else { ?>
<p><?php echo $text_no_reviews; ?></p>
<?php } ?>
