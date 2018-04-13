<?php if($show_title) { ?>
<h3><?php echo $show_icon ? '<i class="fa fa-promotionpaper-o fa-3x"></i>&nbsp;' : ''; ?><?php echo $heading_title; ?></h3>
<?php } ?>
<div class="row">
	<?php foreach ($promotion as $promotion_item) { ?>
	<div class="product-layout col-lg-4 col-md-4 col-sm-6 col-xs-12">
		<div class="product-thumb transition">
			<?php if($promotion_item['thumb']) { ?>
			<div class="image"><a href="<?php echo $promotion_item['href']; ?>"><img src="<?php echo $promotion_item['thumb']; ?>" alt="<?php echo $promotion_item['title']; ?>" title="<?php echo $promotion_item['title']; ?>" class="img-responsive" /></a></div>
			<?php } ?>
			<div class="caption">
				<h4><a href="<?php echo $promotion_item['href']; ?>"><?php echo $promotion_item['title']; ?></a></h4>
				<p><?php echo $promotion_item['description']; ?></p>
			</div>
			<div class="button-group">
				<button onclick="location.href = ('<?php echo $promotion_item['href']; ?>');" data-toggle="tooltip" title="<?php echo $text_more; ?>"><i class="fa fa-share"></i> <span class="hidden-xs hidden-sm hidden-md"><?php echo $text_more; ?></span></button>
				<button type="button" data-toggle="tooltip" title="<?php echo $promotion_item['posted']; ?>"><i class="fa fa-clock-o"></i></button>
				<button type="button" data-toggle="tooltip" title="<?php echo $promotion_item['viewed']; ?>"><i class="fa fa-eye"></i></button>
			</div>
		</div>
	</div>
	<?php } ?>
</div>