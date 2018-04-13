<?php echo $header; ?>

<div class="container">
	<div class="breadcrumbs">
		<?php foreach ($breadcrumbs as $breadcrumb) { ?>
		<a href="<?php echo $breadcrumb['href']; ?>" class="breadcrumbs__item"><?php echo $breadcrumb['text']; ?></a>
		<?php } ?>
	</div>
</div>



<div class="about__content promotion__content">
	<div class="container">
		<div class="go-back"><a href="#"><img src="style/img/icon/arrow-right-nav.png" alt="">Home</a></div>

		<div class="estore__head">
			<div class="aqua__heading">Promotion</div>
		</div>
		<div class="whatwedo__cont">

			<?php if ($promotion_list) { ?>
			<?php $i=0; ?>
			<?php foreach ($promotion_list as $promotion_item) { ?>

			<?php $k = $i%2; ?>

			<?php if($k == 0 ) { ?>
			<div class="ab__flex">
				<div class="whatwedo__cont--img"><img src="<?=$promotion_item['thumb']?>" alt=""></div>
				<div class="whatwedo__cont--text">
					<div class="whatwedo__cont--text--cap">
						<?=$promotion_item['title']?>
					</div>
					<p>
						<?=$promotion_item['description']?>
					</p>
					<?php if($promotion_item['link']){ ?>
					<a class="btn-color btnfos-4" href="<?=$promotion_item['link']?>"><span>Shop now</span></a>
					<?php } ?>
				</div>

			</div>
			<?php }else{ ?>

			<div  class="ab__flex"><div class="whatwedo__cont--text whatwedo__cont--text2">
					<div class="whatwedo__cont--text--cap whatwedo__cont--text--cap2">
						<?=$promotion_item['title']?>
					</div>
					<p>
						<?=$promotion_item['description']?>
					</p>
					<?php if($promotion_item['link']){ ?>
					<a class="btn-color btnfos-4" href="<?=$promotion_item['link']?>"><span>Shop now</span></a>
					<?php } ?>
				</div>
				<div class="whatwedo__cont--img"><img src="<?=$promotion_item['thumb']?>" alt=""></div>
			</div>


			<?php } ?>
			<?php $i++; } ?>

<?php }else { ?>
			<?php echo $text_empty; ?>
			<?php } ?>

		</div>
		<?php if($promotion_list) { ?>
		<?php echo $pagination; ?>
		<?php } ?>

	</div>
</div>



<?php echo $footer; ?>