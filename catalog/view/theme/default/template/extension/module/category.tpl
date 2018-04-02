

<div class="estore__sidebar">

  <?php foreach ($categories as $category) { ?>
  <div class="estore__sidebar--cat">

    <?php if ($category['children']) { ?>
    <?php if ($category['category_id'] == $category_id) { ?>
    <div class="estore__sidebar--cat--cap active"><a class="active" href="<?=$category['href']?>"><?=$category['name']?></a></div>
    <?php } else { ?>
    <div class="estore__sidebar--cat--cap "><a class="" href="<?=$category['href']?>"><?=$category['name']?></a></div>
    <?php } ?>

    <?php } else { ?>
    <?php if ($category['category_id'] == $category_id) { ?>
    <div class="estore__sidebar--cat--cap active inactive"><a class="active" href="<?=$category['href']?>"><?=$category['name']?></a></div>
    <?php } else { ?>
    <div class="estore__sidebar--cat--cap inactive"><a class="" href="<?=$category['href']?>"><?=$category['name']?></a></div>
    <?php } ?>
    <?php } ?>
    <?php if ($category['children']) { ?>
    <?php foreach ($category['children'] as $child) { ?>
    <?php if ($child['category_id'] == $child_id) { ?>
    <div class="estore__sidebar--cat--cat active">
      <a href="<?=$child['href']?>"><?=$child['name']?></a>
    </div>
    <?php } else { ?>
    <div class="estore__sidebar--cat--cat">
      <a href="<?=$child['href']?>"><?=$child['name']?></a>
    </div>
    <?php } ?>
    <?php } ?>
    <?php } ?>

  </div>

  <?php } ?>



</div>

<div class="estore__sidebar--mob">
  <div class="estore__sidebar--cat estore__sidebar--cat--mob">
    <div class="estore__sidebar--cat--cap">Categories</div>
    <div class="estore__sidebar">
      <?php foreach ($categories as $category) { ?>
      <div class="estore__sidebar--cat">

          <?php if ($category['category_id'] == $category_id) { ?>
          <div class="estore__sidebar--cat--cap inactive active">
          <a class="active inactive" href="<?=$category['href']?>"><?=$category['name']?></a>
          </div>
          <?php } else { ?>
        <div class="estore__sidebar--cat--cap inactive">
          <a class="" href="<?=$category['href']?>"><?=$category['name']?></a>
        </div>
          <?php } ?>

        <?php if ($category['children']) { ?>

        <div class="estore__sidebar--cat--cat">
          <?php foreach ($category['children'] as $child) { ?>
          <a href="<?=$child['href']?>"><?=$child['name']?></a>
          <?php } ?>
        </div>
        <?php } ?>
      </div>


      <?php } ?>
    </div>
  </div>
</div>