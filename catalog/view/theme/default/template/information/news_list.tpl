<?php echo $header; ?>


<div class="container">
	<div class="breadcrumbs">
		<?php foreach ($breadcrumbs as $breadcrumb) { ?>
		<a href="<?php echo $breadcrumb['href']; ?>" class="breadcrumbs__item"><?php echo $breadcrumb['text']; ?></a>
		<?php } ?>
	</div>
</div>

<div class="estore__content">
	<div class="container">
		<div class="go-back"><a href="#"><img src="style/img/icon/arrow-right-nav.png" alt="">Номе</a></div>
		<div class="estore__head">
			<div class="aqua__heading">Blog</div>
			<div class="estore__head--text">
<?php echo (isset($description_blog) ? $description_blog : "") ?>
			</div>
		</div>
	</div>

	<div class="blog__list">
		<div class="container">
			<div class="article__list">
				<?php if ($news_list) { ?>
				<?php foreach ($news_list as $news_item) { ?>
				<div class="article__list--item">
					<?php if($news_item['thumb']) { ?>
					<div class="article__list--item--img">

						<img src="<?php echo $news_item['thumb']; ?>" alt="<?=$news_item['title']?>">
					</div>
					<?php } ?>
					<div class="article__list--item--cap">
						<a href="<?=$news_item['href']?>"><?=$news_item['title']?></a>
					</div>
					<div class="article__list--item--text">
						<?=$news_item['description']?>
						</div>
					<div class="article__list--item--link">
						<a href="<?=$news_item['href']?>" class="read-more" href="">Read more</a>
					</div>
				</div>
<?php  } ?>
				<?php  }else{ ?>
				<p><?php echo $text_empty; ?></p>

				<?php  } ?>

			</div>
			<?php echo $pagination; ?>
		</div>
	</div>

</div>



<div style="display: none" class="container">
	<ul class="breadcrumb">
		<?php foreach ($breadcrumbs as $breadcrumb) { ?>
		<li><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a></li>
		<?php } ?>
	</ul>

	<div class="row"><?php echo $column_left; ?>
		<?php if ($column_left && $column_right) { ?>
		<?php $class = 'col-sm-6'; ?>
		<?php } elseif ($column_left || $column_right) { ?>
		<?php $class = 'col-sm-9'; ?>
		<?php } else { ?>
		<?php $class = 'col-sm-12'; ?>
		<?php } ?>
		<div id="content" class="<?php echo $class; ?>"><?php echo $content_top; ?>
			<h1><?php echo $heading_title; ?></h1>
			<?php if ($news_list) { ?>
			<div class="row">
				<div class="col-md-3">
					<div class="btn-group hidden-xs">
						<button type="button" id="list-view" class="btn btn-default" data-toggle="tooltip" title="<?php echo $button_list; ?>"><i class="fa fa-th-list"></i></button>
						<button type="button" id="grid-view" class="btn btn-default" data-toggle="tooltip" title="<?php echo $button_grid; ?>"><i class="fa fa-th"></i></button>
					</div>
				</div>
				<div class="col-md-2 text-right">
					<label class="control-label" for="input-sort"><?php echo $text_sort; ?></label>
				</div>
				<div class="col-md-3 text-right">
					<select id="input-sort" class="form-control" onchange="location = this.value;">
						<?php foreach ($sorts as $sorts) { ?>
						<?php if ($sorts['value'] == $sort . '-' . $order) { ?>
						<option value="<?php echo $sorts['href']; ?>" selected="selected"><?php echo $sorts['text']; ?></option>
						<?php } else { ?>
						<option value="<?php echo $sorts['href']; ?>"><?php echo $sorts['text']; ?></option>
						<?php } ?>
						<?php } ?>
					</select>
				</div>
				<div class="col-md-2 text-right">
					<label class="control-label" for="input-limit"><?php echo $text_limit; ?></label>
				</div>
				<div class="col-md-2 text-right">
					<select id="input-limit" class="form-control" onchange="location = this.value;">
						<?php foreach ($limits as $limits) { ?>
						<?php if ($limits['value'] == $limit) { ?>
						<option value="<?php echo $limits['href']; ?>" selected="selected"><?php echo $limits['text']; ?></option>
						<?php } else { ?>
						<option value="<?php echo $limits['href']; ?>"><?php echo $limits['text']; ?></option>
						<?php } ?>
						<?php } ?>
					</select>
				</div>
			</div>
			<br />
			<div class="row">
				<?php foreach ($news_list as $news_item) { ?>
				<div class="product-layout product-list col-xs-12">
					<div class="product-thumb">
						<?php if($news_item['thumb']) { ?>
						<div class="image"><a href="<?php echo $news_item['href']; ?>"><img src="<?php echo $news_item['thumb']; ?>" alt="<?php echo $news_item['title']; ?>" title="<?php echo $news_item['title']; ?>" class="img-responsive" /></a></div>
						<?php }?>
						<div>
							<div class="caption">
								<h4><a href="<?php echo $news_item['href']; ?>"><?php echo $news_item['title']; ?></a></h4>
								<p><?php echo $news_item['description']; ?></p>
							</div>
							<div class="button-group">
								<button type="button" onclick="location.href = ('<?php echo $news_item['href']; ?>');" data-toggle="tooltip" title="<?php echo $text_more; ?>"><i class="fa fa-share"></i>&nbsp;<span class="hidden-xs hidden-sm hidden-md"><?php echo $text_more; ?></span></button>
								<button type="button" data-toggle="tooltip" title="<?php echo $news_item['posted']; ?>"><i class="fa fa-clock-o"></i></button>
								<button type="button" data-toggle="tooltip" title="<?php echo $news_item['viewed']; ?>"><i class="fa fa-eye"></i></button>
							</div>
						</div>
					</div>
				</div>
				<?php } ?>
			</div>
			<div class="row">
				<div class="col-sm-6 text-left"><?php echo $pagination; ?></div>
				<div class="col-sm-6 text-right"><?php echo $results; ?></div>
			</div>
			<?php } else { ?>
			<p><?php echo $text_empty; ?></p>
			<div class="buttons">
				<div class="pull-right"><a href="<?php echo $continue; ?>" class="btn btn-primary"><?php echo $button_continue; ?></a></div>
			</div>
			<?php } ?>
		<?php echo $content_bottom; ?></div>
	<?php echo $column_right; ?></div>
</div>

<?php echo $footer; ?>