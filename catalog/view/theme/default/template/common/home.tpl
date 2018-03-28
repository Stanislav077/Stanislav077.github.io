<?php echo $header; ?>
<div class="container">
  <div class=""><?php echo $column_left; ?>
    <?php if ($column_left && $column_right) { ?>
    <?php $class = 'col-sm-6'; ?>
    <?php } elseif ($column_left || $column_right) { ?>
    <?php $class = 'col-sm-9'; ?>
    <?php } else { ?>
    <?php $class = 'col-sm-12'; ?>
    <?php } ?>
    <div id="" class="">
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
<?php if(isset($ab) && !empty($ab)) { ?>
        <div class="main__aboutus">
            <div class="main__aboutus--grid row">
                <div class="col-md-6 col-sm-12">
                    <div class="main__aboutus--item aboutus--item1">
                        <div class="aqua__heading">
                            <?=$info_title?>
                        </div>
                        <div class="main-read-more">
                            <a class="read-more" href="<?=$link_more?>">Read more</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="main__aboutus--item aboutus--item3">
                        <?=$info_block_first?>
                    </div>
                </div>
            </div>
            <div class="main__aboutus--grid main__aboutus--grid2 row">
                <div class="col-md-6 col-sm-12 ab-fle2">
                    <div class="main__aboutus--item aboutus--item3">
                        <?=$info_block_too?>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 ab-fle1"><div class="main__aboutus--item aboutus--item4">

                        <iframe 	src="https://www.youtube.com/embed/<?=$link_yuotub?>" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div></div>
            </div>
        </div>
<?php } ?>

    </div>
    <?php echo $column_right; ?></div>
</div>
<?php echo $content_bottom; ?>

<?php echo $footer; ?>

<script>
    $(document).ready(function () {
        setTimeout(function(){



          //  console.log(iframeDoc);
   //    var ss = document.getElementByClass("copyright"); widgetData
            $("iframe").each(function(index, element) {
              //  console.log(element);
            //  console.log($(this).getElementByClass(".copyright").hide());
            //  console.log(element.getElementById("widgetData"));
            });

        }, 3000);
    })
</script>