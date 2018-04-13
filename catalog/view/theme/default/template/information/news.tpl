<?php echo $header; ?>



<div class="container">
	<div class="breadcrumbs">
		<?php foreach ($breadcrumbs as $breadcrumb) { ?>
		<a class="breadcrumbs__item" href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
		<?php } ?>
	</div>
</div>
<div class="estore__content">
	<div class="container">
		<div class="go-back"><a href="#"><img src="style/img/icon/arrow-right-nav.png" alt="">Blog</a></div>


		<div class="blog__list__content">
			<div style="background: url('<?php echo $popup_ban; ?>') no-repeat" class="blog__list__content-bg">
				<div class="blog__list__content-bg--cap">
					<?php echo $heading_title; ?>
				</div>
			</div>

			<div class="blog__list__content--cont">
				<div class="blog-cont__item">
					<?php echo $description; ?>
				</div>

					<?php echo $column_right; ?>

			</div>

		</div>

	</div>



<div class="caption__blog">
	<div class="aqua__heading2">Related articles</div>
</div>
<div class="blog__list">
	<div class="container">
		<div class="article__list">
<?php foreach($reletet_news as $reletet_new) { ?>
			<div class="article__list--item">
				<div class="article__list--item--img">
					<img src="<?=$reletet_new['image']?>" alt="">
				</div>
				<div class="article__list--item--cap">
					<a href="<?=$reletet_new['href']?>"><?=$reletet_new['title']?> </a>
				</div>
				<div class="article__list--item--text">
					<?=$reletet_new['description']?>
				</div>
				<div class="article__list--item--link">
					<a class="read-more" href="<?=$reletet_new['href']?>">Read more</a>
				</div>
			</div>
<?php } ?>



		</div>

	</div>



</div>



</div>

<?php echo $footer; ?>