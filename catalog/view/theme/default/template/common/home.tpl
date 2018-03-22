<?php echo $header; ?>
<div class="container">
  <div class="row"><?php echo $column_left; ?>
    <?php if ($column_left && $column_right) { ?>
    <?php $class = 'col-sm-6'; ?>
    <?php } elseif ($column_left || $column_right) { ?>
    <?php $class = 'col-sm-9'; ?>
    <?php } else { ?>
    <?php $class = 'col-sm-12'; ?>
    <?php } ?>
    <div id="content" class="<?php echo $class; ?>">
      <?php echo $content_top; ?>

      <div class="top-category">
        <div class="aqua__heading2">
          Top category
        </div>



        <?php foreach (array_chunk($categories, ceil(count($categories) / 2)) as $categories) { ?>
        <div class="top-category__cont row">

            <?php foreach ($categories as $category) { ?>
<?php if($category['key']==0 || $category['key'] ==5) { ?>
          <div class="col-md-6 col-sm-12">
            <div style="background: url('<?=$category['image']?>') 100% 100% no-repeat; background-size: cover;" class="top-category__cont--item top-category__cont--item">
              <div class="top-category__cont--item--cap">
                <?=$category['name']?>
              </div>
              <div class="top-category__cont--item--button">
                <a class="btn-white btnfos-4" href="<?=$category['href']?>"><span>Shop now</span></a>
              </div>
            </div>
          </div>
<?php } else { ?>
          <div class="col-md-3 col-sm-12">
            <div style="background: url('<?=$category['image']?>') 100% 100% no-repeat; background-size: cover;" class="top-category__cont--item top-category__cont--item">
              <div class="top-category__cont--item--cap">
                <?=$category['name']?>
              </div>
              <div class="top-category__cont--item--button">
                <a class="btn-white btnfos-4" href="<?=$category['href']?>"><span>Shop now</span></a>
              </div>
            </div>
          </div>
            <?php } } ?>

        </div>
        <?php } ?>



      </div>

      <?php echo $content_bottom; ?>
    </div>
    <?php echo $column_right; ?></div>
</div>
<?php echo $footer; ?>