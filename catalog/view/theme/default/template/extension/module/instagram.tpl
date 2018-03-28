<div class="row">	
	<div class="container-fluid module-instagram">
		<?php if(!empty($instagrams)) {?>
		<h4><?php echo $entry_instagram; ?></h4>
		<div class="instagram">
			<?php foreach ($instagrams as $instagram){ ?>
			<div class="item <?php echo $hover_effect;?>">
				<a href="<?php echo $instagram['href'];?>" target="_blank" data-like="<?php echo $instagram['likes'];?>" title="<?php echo $instagram['text'];?>">
					<i class="fa fa-heart" aria-hidden="true"></i>
					<img src="<?php echo $instagram['img'];?>" alt="<?php echo $instagram['text'];?>"> 
				</a> 
			</div>
			<?php } ?>
		</div>		
		<?php } ?>	
	</div>
</div>
<style>
	 .module-instagram .slick-prev:before, 
	 .module-instagram .slick-next:before{
		color: <?php echo $color;?>;
	}
	.module-instagram h4{
		text-align: <?php echo $text_align;?>
	}
</style>
<?php if($entry_instagram) {?>
<script>
	$('.instagram').slick({
		slidesToShow: <?php echo $slidesToShow;?>,
		slidesToScroll: <?php echo $slidesToScroll ?>,
		autoplay: <?php echo $autoplay; ?>,
		autoplaySpeed: <?php echo $autoplaySpeed; ?>,
		dots : <?php echo $dots; ?>,
		arrows : <?php echo $arrows; ?>,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				arrows: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: true
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true
			}
		}		
		]
	});
</script>
<?php } ?>
