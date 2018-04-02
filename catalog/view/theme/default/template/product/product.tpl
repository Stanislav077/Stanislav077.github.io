<?php echo $header; ?>



<div class="container">
  <div class="breadcrumbs">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <a href="<?php echo $breadcrumb['href']; ?>" class="breadcrumbs__item"><?php echo $breadcrumb['text']; ?></a>
    <?php } ?>
  </div>
</div>




<div class="card-content">
  <div class="container">
    <div class="go-back"><a href="#"><img src="style/img/icon/arrow-right-nav.png" alt="">Saltwater Fish</a></div>
    <div class="row">
      <div class="col-md-5">

        <div class="card-slider">
          <div class="card-image">
            <img src="<?php echo $thumb; ?>" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" />
          </div>
          <?php if ($images) { ?>
          <?php foreach ($images as $image) { ?>
          <div class="card-image">
            <img src="<?php echo $image['popup']; ?>" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" />
          </div>
          <?php } ?>
          <?php } ?>
        </div>

        <div class="card-slider-pointer arrow-left">
          <img src="style/img/arr-left.png" alt="">
        </div>
        <div class="card-slider-pointer arrow-right"><img src="style/img/arr-right.png" alt=""></div>
        <div class="card-slider-pointer degrees"><img src="style/img/360.png" alt=""></div>
        <div class="card-slider-pointer youtube"><img src="style/img/youtube.png" alt=""></div>
      </div>
      <div class="col-md-7">
        <div class="card-item">
          <div class="card-item__heading"><?php echo $heading_title; ?></div>
          <div class="card-item__row card-item__row__line">
            <div class="card-item__model">SKU: <span><?php echo $model; ?></span></div>
            <div class="card-item__rates">

              <div class="rating" data-rating="<?=$rating?>">
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

              <div class="re23"><span><?=$reviews?></span></div>
            </div>
          </div>
          <div class="card-item__row">
            <div class="card-item__stock"><span><?=$quantity?></span> in stock</div>
            <div class="card-item__heart">
              <div class="sale-main-val">
                <a href="#" onclick="wishlist.add('<?php echo $product_id; ?>');" class="sale-main-val-heart" tabindex="0"></a>
              </div>
            </div>
          </div>







          <div id="product">

          <?php if ($options) { ?>

          <?php foreach ($options as $option) { ?>
          <?php if ($option['type'] == 'select') { ?>
          <div class="form-group<?php echo ($option['required'] ? ' required' : ''); ?>">
            <label class="control-label" for="input-option<?php echo $option['product_option_id']; ?>"><?php echo $option['name']; ?></label>
            <select name="option[<?php echo $option['product_option_id']; ?>]" id="input-option<?php echo $option['product_option_id']; ?>" class="form-control">
              <option value=""><?php echo $text_select; ?></option>
              <?php foreach ($option['product_option_value'] as $option_value) { ?>
              <option value="<?php echo $option_value['product_option_value_id']; ?>"><?php echo $option_value['name']; ?>
                <?php if ($option_value['price']) { ?>
                (<?php echo $option_value['price_prefix']; ?><?php echo $option_value['price']; ?>)
                <?php } ?>
              </option>
              <?php } ?>
            </select>
          </div>
          <?php } ?>

          <?php if ($option['type'] == 'radio') { ?>
          <div class="form-group<?php echo ($option['required'] ? ' required' : ''); ?>">
            <div class="card-item__colors--text"><?php echo $option['name']; ?>:</div>
            <div class="user_opt" id="input-option<?php echo $option['product_option_id']; ?>">
              <?php foreach ($option['product_option_value'] as $option_value) { ?>

              <?php if ($option_value['image']) { ?>
              <div class="radio card-item__colors">
                <label>
                  <input type="radio" name="option[<?php echo $option['product_option_id']; ?>]" value="<?php echo $option_value['product_option_value_id']; ?>" />

                  <img src="<?php echo $option_value['image']; ?>" alt="<?php echo $option_value['name'] . ($option_value['price'] ? ' ' . $option_value['price_prefix'] . $option_value['price'] : ''); ?>" class="img-thumbnail" />


                </label>
              </div>
              <?php } else { ?>

              <div class="radio card-item__sizes">
                <label for="opt_id<?php echo $option_value['product_option_value_id']; ?>">
                <input id="opt_id<?php echo $option_value['product_option_value_id']; ?>" class="card-item__size" type="radio" name="option[<?php echo $option['product_option_id']; ?>]" value="<?php echo $option_value['product_option_value_id']; ?>" />
                  <?=$option_value['name']?>
                </label>
              </div>

              <?php } ?>
              <?php } ?>
            </div>
          </div>
          <?php } ?>


          <?php if ($option['type'] == 'checkbox') { ?>
          <div class="form-group<?php echo ($option['required'] ? ' required' : ''); ?>">
            <label class="control-label"><?php echo $option['name']; ?></label>
            <div id="input-option<?php echo $option['product_option_id']; ?>">
              <?php foreach ($option['product_option_value'] as $option_value) { ?>
              <div class="checkbox">
                <label>
                  <input type="checkbox" name="option[<?php echo $option['product_option_id']; ?>][]" value="<?php echo $option_value['product_option_value_id']; ?>" />
                  <?php if ($option_value['image']) { ?>
                  <img src="<?php echo $option_value['image']; ?>" alt="<?php echo $option_value['name'] . ($option_value['price'] ? ' ' . $option_value['price_prefix'] . $option_value['price'] : ''); ?>" class="img-thumbnail" />
                  <?php } ?>
                  <?php echo $option_value['name']; ?>
                  <?php if ($option_value['price']) { ?>
                  (<?php echo $option_value['price_prefix']; ?><?php echo $option_value['price']; ?>)
                  <?php } ?>
                </label>
              </div>
              <?php } ?>
            </div>
          </div>
          <?php } ?>
          <?php if ($option['type'] == 'text') { ?>
          <div class="form-group<?php echo ($option['required'] ? ' required' : ''); ?>">
            <label class="control-label" for="input-option<?php echo $option['product_option_id']; ?>"><?php echo $option['name']; ?></label>
            <input type="text" name="option[<?php echo $option['product_option_id']; ?>]" value="<?php echo $option['value']; ?>" placeholder="<?php echo $option['name']; ?>" id="input-option<?php echo $option['product_option_id']; ?>" class="form-control" />
          </div>
          <?php } ?>
          <?php if ($option['type'] == 'textarea') { ?>
          <div class="form-group<?php echo ($option['required'] ? ' required' : ''); ?>">
            <label class="control-label" for="input-option<?php echo $option['product_option_id']; ?>"><?php echo $option['name']; ?></label>
            <textarea name="option[<?php echo $option['product_option_id']; ?>]" rows="5" placeholder="<?php echo $option['name']; ?>" id="input-option<?php echo $option['product_option_id']; ?>" class="form-control"><?php echo $option['value']; ?></textarea>
          </div>
          <?php } ?>
          <?php if ($option['type'] == 'file') { ?>
          <div class="form-group<?php echo ($option['required'] ? ' required' : ''); ?>">
            <label class="control-label"><?php echo $option['name']; ?></label>
            <button type="button" id="button-upload<?php echo $option['product_option_id']; ?>" data-loading-text="<?php echo $text_loading; ?>" class="btn btn-default btn-block"><i class="fa fa-upload"></i> <?php echo $button_upload; ?></button>
            <input type="hidden" name="option[<?php echo $option['product_option_id']; ?>]" value="" id="input-option<?php echo $option['product_option_id']; ?>" />
          </div>
          <?php } ?>
          <?php if ($option['type'] == 'date') { ?>
          <div class="form-group<?php echo ($option['required'] ? ' required' : ''); ?>">
            <label class="control-label" for="input-option<?php echo $option['product_option_id']; ?>"><?php echo $option['name']; ?></label>
            <div class="input-group date">
              <input type="text" name="option[<?php echo $option['product_option_id']; ?>]" value="<?php echo $option['value']; ?>" data-date-format="YYYY-MM-DD" id="input-option<?php echo $option['product_option_id']; ?>" class="form-control" />
              <span class="input-group-btn">
                <button class="btn btn-default" type="button"><i class="fa fa-calendar"></i></button>
                </span></div>
          </div>
          <?php } ?>
          <?php if ($option['type'] == 'datetime') { ?>
          <div class="form-group<?php echo ($option['required'] ? ' required' : ''); ?>">
            <label class="control-label" for="input-option<?php echo $option['product_option_id']; ?>"><?php echo $option['name']; ?></label>
            <div class="input-group datetime">
              <input type="text" name="option[<?php echo $option['product_option_id']; ?>]" value="<?php echo $option['value']; ?>" data-date-format="YYYY-MM-DD HH:mm" id="input-option<?php echo $option['product_option_id']; ?>" class="form-control" />
              <span class="input-group-btn">
                <button type="button" class="btn btn-default"><i class="fa fa-calendar"></i></button>
                </span></div>
          </div>
          <?php } ?>
          <?php if ($option['type'] == 'time') { ?>
          <div class="form-group<?php echo ($option['required'] ? ' required' : ''); ?>">
            <label class="control-label" for="input-option<?php echo $option['product_option_id']; ?>"><?php echo $option['name']; ?></label>
            <div class="input-group time">
              <input type="text" name="option[<?php echo $option['product_option_id']; ?>]" value="<?php echo $option['value']; ?>" data-date-format="HH:mm" id="input-option<?php echo $option['product_option_id']; ?>" class="form-control" />
              <span class="input-group-btn">
                <button type="button" class="btn btn-default"><i class="fa fa-calendar"></i></button>
                </span></div>
          </div>
          <?php } ?>
          <?php } ?>
          <?php } ?>


            <div class=" hide form-group card-item__row-fs">
              <div class="card-item__colors--text control-label" for="input-quantity"><?php echo "Quantity:   "; ?></div>


              <div class="sale-main-val val-mob-dis">
                <div onclick="minus_qu('1')" data="1" class="sale-main-val-but-l minus_qu"></div>

                <input style="height: 15px;" class="col-quantity res-1 block_late-1" type="text" name="quantity"  value="<?php echo $minimum; ?>">

                <div onclick="plus_qu('1')" data="1" class="sale-main-val-but-r "></div>
              </div>

              <input type="hidden" name="product_id" value="<?php echo $product_id; ?>" />
              <br />
            </div>
            <?php if ($minimum > 1) { ?>
            <div class="alert alert-info"><i class="fa fa-info-circle"></i> <?php echo $text_minimum; ?></div>
            <?php } ?>

            <div class="card-item__row-fs">
              <div class="main-sale__slider--item--price">
                <?php if($special){ ?>
                <div class="main-sale--price-active">
                  <?=$special?>
                </div>
                <div class="main-sale--price-inactive">
                  <?=$price?>
                </div>
                <?php } else { ?>
                <div class="main-sale--price-active">
                  <?=$price?>
                </div>
                <?php } ?>

              </div>
            </div>
            <div class="card-item__row-fs">

              <a onclick="return false" id="button-cart" class="btn-color btnfos-4" href="#"><span>Add to cart</span></a>
              <a class="btn-border btnfos-4" href="#"><span>Buy now</span></a>

            </div>




          </div>





          <div class="card-item__compability"><img src="style/img/two-fishes.png" alt="">Compatibility fish</div>
          <div class="card-item__block">
            <div class="card-item__subheading">QUICK STATS:</div>
            <div class="card-item__stats">
              <a href="" class="card-item__stat"><img src="style/img/stat1.png" alt=""><span>Seawater</span></a>
              <a href="" class="card-item__stat"><img src="style/img/stat2.png" alt=""><span>Predatory fish</span></a>
              <a href="" class="card-item__stat"><img src="style/img/stat3.png" alt=""><span>Care Level: Easy</span></a>
              <a href="" class="card-item__stat"><img src="style/img/stat4.png" alt=""><span>Min. 30 gallons</span></a>
            </div>
          </div>
          <div class="card-item__block">
            <div class="card-item__subheading">Description:</div>
            <div class="card-item__text">
          <?=$description?>
            </div>
          </div>
          <div class="card-item__row-fs card-item__row-fs2">
            <img src="style/img/blog.png" class="card-item__blog-image" alt="">
            <div class="card-item__subheading">Read in our blog:</div>
            <div class="card-item__blogs">
              <a href="" class="card-item__blog">Finding Dory in your Home</a>
              <a href="" class="card-item__blog">Guide to Aquatic Success</a>
              <a href="" class="card-item__blog">Five Surprising Facts About
                Your New Saltwater Fish</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php if($products) { ?>
  <div class="main-sale">
    <div class="aqua__heading2">
      Frequently bought together
    </div>
    <div class="main-sale__cont">
      <div class="container">
        <div class="main-sale__slider">
          <?php $i=0;?>
          <?php foreach ($products as $product) { ?>
          <div class="active_latest main-sale__slider--item-per opt_new_<?php echo $product['product_id']; ?>">
            <div class="main-sale__slider--item">
              <div class="sale-button">
                <a class="btn-white btnfos-4" href="<?php echo $product['href']; ?>"><span>More details</span></a>
                <a class="btn-white btnfos-4" onclick="addToCartOpt_n('<?php echo $product['product_id']; ?>');" ><span>Buy now</span></a>
              </div>
              <?php if($product['special']) { ?>
              <div class="sale__lable"><?=$product['proc']?>%</div>
              <?php } ?>
              <div class="main-sale__slider--item--img">
                <img src="<?php echo $product['thumb']; ?>" alt="<?php echo $product['name']; ?>">
              </div>
              <div class="main-sale__slider--item--name">
                <?php echo $product['name']; ?>
              </div>
              <div class="main-sale__slider--item--val">
                <div  class="sale-main-val ">
                  <?=$product['quantity']?> <span>in stock</span>
                </div>
                <div class="sale-main-val val-mob-dis .optq_<?=$product['product_id']?>">
                  <div onclick="minus_qu('<?=$i?>')" data="<?=$i?>" class="sale-main-val-but-l minus_qu"></div>

                  <input class="col-quantity res-<?=$i?> block_late-<?=$i?>" type="text" name="quantity" value="1"/>

                  <div onclick="plus_qu('<?=$i?>')" data="<?=$i?>" class="sale-main-val-but-r "></div>
                </div>
                <div class="sale-main-val">
                  <a onclick="wishlist.add('<?php echo $product['product_id']; ?>');" class="sale-main-val-heart"></a>
                </div>
              </div>
              <div class="main-sale__slider--item--price">
                <?php if($product['special']) { ?>
                <div class="main-sale--price-active">
                  <?php echo $product['special']; ?>
                </div>
                <div class="main-sale--price-inactive">
                  <?php echo $product['price']; ?>
                </div>
                <?php }else{ ?>
                <div class="main-sale--price-active">
                  <?php echo $product['price']; ?>
                </div>
                <?php } ?>
              </div>



              <?php if ($product['options']) { ?>
              <div class="options ">
                <input type="hidden" name="product_id" value="<?php echo $product['product_id']; ?>" />

                <?php foreach ($product['options'] as $option) { ?>

                <?php if ($option['type'] == 'checkbox' && $option['val']==$product['product_id']) { ?>

                <div class="main-sale__slider--item--size main-sale__slider--item--size-color">
                  <div class="card-item__colors">

                    <div class="card-item__colors--text"> <?php echo $option['name']; ?></div>
                    <div class="card-item__colors--input">
                      <?php foreach ($option['product_option_value'] as $option_value) { ?>

                      <label for="chek-<?=$option_value['name']?>" class="chek-<?=$option_value['name']?>">

                        <?php if ($option_value['image']) { ?>
                        <img src="<?php echo $option_value['image']; ?>" alt="<?php echo $option_value['name'] . ($option_value['price'] ? ' ' . $option_value['price_prefix'] . $option_value['price'] : ''); ?>" class="" />
                        <?php } ?>

                        <input id="chek-<?=$option_value['name']?>" type="checkbox" name="option[<?php echo $option['product_option_id']; ?>][]" value="<?php echo $option_value['product_option_value_id']; ?>" />
                        <!--  <?php if ($option_value['price']) { ?>
                          (<?php echo $option_value['price_prefix']; ?><?php echo $option_value['price']; ?>)
                          <?php } ?> -->

                      </label>
                      <?php } ?>
                    </div>
                  </div>
                </div>
                <?php } ?>

                <?php if ($option['type'] == 'radio'&& $option['val']==$product['product_id']) { ?>

                <div id="option-<?php echo $option['product_option_id']; ?>" class="main-sale__slider--item--size">
                  <div class="main-sale__slider--item--size--cap">
                    <?php echo $option['name']; ?>
                  </div>

                  <?php foreach ($option['product_option_value'] as $option_value) { ?>

                  <?php if (!$option_value['image']) { ?>
                  <div class=" main-sale__slider--item--size--item">
                    <label class="in_lab" for="latest-input-radio<?php echo $option_value['product_option_value_id']; ?>">  <?php echo $option_value['name']; ?></label>
                    <input id="latest-input-radio<?php echo $option_value['product_option_value_id']; ?>" type="radio" name="option[<?php echo $option['product_option_id']; ?>]" value="<?php echo $option_value['product_option_value_id']; ?>" />
                    <!--    <?php if ($option_value['price']) { ?>
                       (<?php echo $option_value['price_prefix']; ?><?php echo $option_value['price']; ?>)
                       <?php } ?> -->

                  </div>

                  <?php }else {  ?>
                  <div class="main-sale__slider--item--size--item colors">
                    <label for="input-radio<?php echo $option_value['product_option_value_id']; ?>" class="chek-<?=$option_value['name']?>">
                      <input id="input-radio<?php echo $option_value['product_option_value_id']; ?>" type="radio" name="option[<?php echo $option['product_option_id']; ?>]" value="<?php echo $option_value['product_option_value_id']; ?>" />
                      <?php if ($option_value['image']) { ?>
                      <img src="<?php echo $option_value['image']; ?>" alt="<?php echo $option_value['name'] . ($option_value['price'] ? ' ' . $option_value['price_prefix'] . $option_value['price'] : ''); ?>" class="" />
                      <?php } ?>

                      <!--    <?php if ($option_value['price']) { ?>
                          (<?php echo $option_value['price_prefix']; ?><?php echo $option_value['price']; ?>)
                          <?php } ?> -->

                    </label>
                  </div>



                  <?php } } ?>


                </div>

                <?php } ?>





                <?php } ?>

              </div>
              <?php } ?>


            </div>
          </div>




          <?php $i++; } ?>




        </div>
      </div>
    </div>
  </div>
  <?php } ?>
  <div class="container">
    <div class="reviews">
      <div class="reviews__heading">
        <div class="reviews__heading--item">
          <div class="aqua__heading">Reviews</div>
        </div>
        <div class="reviews__heading--item reviews__heading--item2">
          <a style="cursor: pointer" class="btn-color btnfos-4" data-remodal-target="modal1"><span>write review</span></a>
        </div>
      </div>

      <?php if ($review_status) { ?>
      <div class="tab-pane" id="tab-review">

          <div id="review"></div>



      </div>
      <?php } ?>





    </div>
  </div>

  <?php echo $content_bottom; ?>

  <?php if(isset($productsw)) { ?>
  <div class="main-sale">
    <div class="aqua__heading2">
      You viewed
    </div>
    <div class="main-sale__cont">
      <div class="container">
        <div class="main-sale__slider">
          <?php $i=0;?>
          <?php foreach($productsw as $product) { ?>
          <div class="active_special main-sale__slider--item-per opt_<?php echo $product['product_id']; ?>">
            <div class="main-sale__slider--item">
              <div class="sale-button">
                <a class="btn-white btnfos-4" href="<?php echo $product['href']; ?>"><span>More details</span></a>
                <a class="btn-white btnfos-4" onclick="addToCartOpt_s('<?php echo $product['product_id']; ?>');" ><span>Buy now</span></a>
              </div>
              <?php if($product['special']){ ?>
              <div class="sale__lable"><?=$product['proc']?>%</div>
              <?php } ?>
              <div class="main-sale__slider--item--img">
                <img src="<?php echo $product['thumb']; ?>" alt="<?php echo $product['name']; ?>">
              </div>
              <div class="main-sale__slider--item--name">
                <?php echo $product['name']; ?>
              </div>
              <div class="main-sale__slider--item--val">
                <div  class="sale-main-val ">
                  <?=$product['quantity']?> <span>in stock</span>
                </div>
                <div class="sale-main-val val-mob-dis .optq_<?=$product['product_id']?>">
                  <div onclick="minus_qu_s('<?=$i?>')" data="<?=$i?>" class="sale-main-val-but-l "></div>

                  <input class="col-quantity res-<?=$i?> block_special-<?=$i?>" type="text" name="quantity" value="1"/>

                  <div onclick="plus_qu_s('<?=$i?>')" data="<?=$i?>" class="sale-main-val-but-r "></div>
                </div>
                <div class="sale-main-val">
                  <a onclick="wishlist.add('<?php echo $product['product_id']; ?>');" class="sale-main-val-heart"></a>
                </div>
              </div>
              <div class="main-sale__slider--item--price">
                <?php if($product['special']) { ?>
                <div class="main-sale--price-active">
                  <?php echo $product['special']; ?>
                </div>
                <div class="main-sale--price-inactive">
                  <?php echo $product['price']; ?>
                </div>
                <?php }else{ ?>
                <div class="main-sale--price-active">
                  <?php echo $product['price']; ?>
                </div>
                <?php } ?>
              </div>



              <?php if ($product['options']) { ?>
              <div class="options ">
                <input type="hidden" name="product_id" value="<?php echo $product['product_id']; ?>" />

                <?php foreach ($product['options'] as $option) { ?>

                <?php if ($option['type'] == 'checkbox' && $option['val']==$product['product_id']) { ?>

                <div class="main-sale__slider--item--size main-sale__slider--item--size-color">
                  <div class="card-item__colors">

                    <div class="card-item__colors--text"> <?php echo $option['name']; ?></div>
                    <div class="card-item__colors--input">
                      <?php foreach ($option['product_option_value'] as $option_value) { ?>

                      <label for="chek-<?=$option_value['name']?>" class="chek-<?=$option_value['name']?>">

                        <?php if ($option_value['image']) { ?>
                        <img src="<?php echo $option_value['image']; ?>" alt="<?php echo $option_value['name'] . ($option_value['price'] ? ' ' . $option_value['price_prefix'] . $option_value['price'] : ''); ?>" class="" />
                        <?php } ?>

                        <input id="chek-<?=$option_value['name']?>" type="checkbox" name="option[<?php echo $option['product_option_id']; ?>][]" value="<?php echo $option_value['product_option_value_id']; ?>" />
                        <!--  <?php if ($option_value['price']) { ?>
                          (<?php echo $option_value['price_prefix']; ?><?php echo $option_value['price']; ?>)
                          <?php } ?> -->

                      </label>
                      <?php } ?>
                    </div>
                  </div>
                </div>
                <?php } ?>

                <?php if ($option['type'] == 'radio'&& $option['val']==$product['product_id']) { ?>

                <div id="option-<?php echo $option['product_option_id']; ?>" class="main-sale__slider--item--size">
                  <div class="main-sale__slider--item--size--cap">
                    <?php echo $option['name']; ?>
                  </div>

                  <?php foreach ($option['product_option_value'] as $option_value) { ?>

                  <?php if (!$option_value['image']) { ?>
                  <div class=" main-sale__slider--item--size--item">
                    <label class="in_lab" for="special-input-radio<?php echo $option_value['product_option_value_id']; ?>">  <?php echo $option_value['name']; ?></label>
                    <input id="special-input-radio<?php echo $option_value['product_option_value_id']; ?>" type="radio" name="option[<?php echo $option['product_option_id']; ?>]" value="<?php echo $option_value['product_option_value_id']; ?>" />
                    <!--    <?php if ($option_value['price']) { ?>
                       (<?php echo $option_value['price_prefix']; ?><?php echo $option_value['price']; ?>)
                       <?php } ?> -->

                  </div>

                  <?php }else {  ?>
                  <div class="main-sale__slider--item--size--item colors">
                    <label for="input-radio<?php echo $option_value['product_option_value_id']; ?>" class="chek-<?=$option_value['name']?>">
                      <input id="input-radio<?php echo $option_value['product_option_value_id']; ?>" type="radio" name="option[<?php echo $option['product_option_id']; ?>]" value="<?php echo $option_value['product_option_value_id']; ?>" />
                      <?php if ($option_value['image']) { ?>
                      <img src="<?php echo $option_value['image']; ?>" alt="<?php echo $option_value['name'] . ($option_value['price'] ? ' ' . $option_value['price_prefix'] . $option_value['price'] : ''); ?>" class="" />
                      <?php } ?>

                      <!--    <?php if ($option_value['price']) { ?>
                          (<?php echo $option_value['price_prefix']; ?><?php echo $option_value['price']; ?>)
                          <?php } ?> -->

                    </label>
                  </div>



                  <?php } } ?>


                </div>

                <?php } ?>





                <?php } ?>

              </div>
              <?php } ?>


            </div>
          </div>

<?php $i++;  } ?>

        </div>
      </div>
    </div>
  </div>
  <?php } ?>
</div>

<div class="remodal" data-remodal-id="modal1">
  <button data-remodal-action="close" class="remodal-close"></button>
  <div class="remodal__heading">
    Write a review
  </div>
  <form action="" id="form-review">
    <div class="remodal__rate">
      <div class="remodal__rate--item">Overall Rating*</div>
      <div class="remodal__rate--item">


        <div class="rating-wrap">
          <div class="rating">
            <input type="radio" class="radio-stars" id="star5" name="rating" value="5" style="">
            <label class="full" for="star5" title="Оценка"></label>
            <input type="radio" class="radio-stars" id="star4" name="rating" value="4" style="">
            <label class="full" for="star4" title="4"></label>
            <input type="radio" class="radio-stars" id="star3" name="rating" value="3" style="">
            <label class="full" for="star3" title="3"></label>
            <input type="radio" class="radio-stars" id="star2" name="rating" value="2" style="">
            <label class="full" for="star2" title="2"></label>
            <input type="radio" class="radio-stars" id="star1" name="rating" value="1" style="">
            <label class="full" for="star1" title="1"></label>

          </div>
        </div>



      </div>
    </div>
    <div>
      <label for="nam">Name*</label>
      <input name="name"  id="nam" type="text">
    </div>
    <div>
      <label for="mes">Message*</label>
      <textarea name="text" id="mes"></textarea>
    </div>
    <div>
      <input id="button-review" type="button" value="Send" class="btn-color">
    </div>
  </form>
</div>

<script>
    $('.active_special .in_lab').on('click',function () {
        $('.main-sale__slider--item--size--item').removeClass('active');
        $(this).parent().addClass('active');
    })
</script>


<script type="text/javascript"><!--
    function addToCartOpt_s(product_id){

        $.ajax({
            url: 'index.php?route=checkout/cart/add',
            type: 'post',
            data: $('.opt_'+product_id+' input[type=\'hidden\'], .opt_'+product_id+' input[name=\'quantity\'], .opt_'+product_id+' select, .opt_'+product_id+' input[type=\'checkbox\']:checked,.opt_'+product_id+' input[type=\'radio\']:checked'),
            dataType: 'json',
            success: function(json) {

                $('.success, .warning, .attention, information, .error').remove();
                if (json['error']) {
                    if (json['error']['option']) {
                        for (i in json['error']['option']) {
                            $('#option-' + i).after('<span class="error">' + json['error']['option'][i] + '</span>');
                        }
                    }
                }
                if (json['success']) {
                    $('#notification').html('<div class="success" style="display: none;">' + json['success'] + '<img src="catalog/view/theme/default/image/close.png" alt="" class="close" /></div>');
                    $('.success').fadeIn('slow');
                    $('.cyfbas').html(json['total2']);
                    $('.bas-cart__item').load('index.php?route=common/cart/info .bas-cart__item a');
                    $('.bas-cart__subtorial > div').html(json['total3']);
                    $('html, body').animate({ scrollTop: 0 }, 'slow');
                }
            }
        });
    }

    //--></script>


<script>
    $('.active_latest .in_lab').on('click',function () {
        $('.main-sale__slider--item--size--item').removeClass('active');
        $(this).parent().addClass('active');
    })
</script>


<script type="text/javascript"><!--
    function addToCartOpt_n(product_id){
        $.ajax({
            url: 'index.php?route=checkout/cart/add',
            type: 'post',
            data: $('.opt_new_'+product_id+' input[type=\'hidden\'], .opt_new_'+product_id+' input[name=\'quantity\'], .opt_new_'+product_id+' select, .opt_new_'+product_id+' input[type=\'checkbox\']:checked,.opt_new_'+product_id+' input[type=\'radio\']:checked'),
            dataType: 'json',
            success: function(json) {

                //    console.log(this);
                //   console.log(json);



                $('.success, .warning, .attention, information, .error').remove();
                if (json['error']) {
                    if (json['error']['option']) {
                        for (i in json['error']['option']) {
                            $('#option-' + i).after('<span class="error">' + json['error']['option'][i] + '</span>');
                        }
                    }
                }
                if (json['success']) {
                    $('#notification').html('<div class="success" style="display: none;">' + json['success'] + '<img src="catalog/view/theme/default/image/close.png" alt="" class="close" /></div>');
                    $('.success').fadeIn('slow');
                    $('.cyfbas').html(json['total2']);
                    $('.bas-cart__item').load('index.php?route=common/cart/info .bas-cart__item a');
                    $('.bas-cart__subtorial > div').html(json['total3']);
                    $('html, body').animate({ scrollTop: 0 }, 'slow');
                }
            }
        });
    }

    //--></script>
<script type="text/javascript"><!--
$('select[name=\'recurring_id\'], input[name="quantity"]').change(function(){
	$.ajax({
		url: 'index.php?route=product/product/getRecurringDescription',
		type: 'post',
		data: $('input[name=\'product_id\'], input[name=\'quantity\'], select[name=\'recurring_id\']'),
		dataType: 'json',
		beforeSend: function() {
			$('#recurring-description').html('');
		},
		success: function(json) {
			$('.alert, .text-danger').remove();

			if (json['success']) {
				$('#recurring-description').html(json['success']);
			}
		}
	});
});
//--></script>
<script type="text/javascript"><!--
$('#button-cart').on('click', function() {
	$.ajax({
		url: 'index.php?route=checkout/cart/add',
		type: 'post',
		data: $('#product input[type=\'text\'],#product input[name=\'quantity\'], #product input[type=\'hidden\'], #product input[type=\'radio\']:checked, #product input[type=\'checkbox\']:checked, #product select, #product textarea'),
		dataType: 'json',
		beforeSend: function() {
			//$('#button-cart').button('loading');
		},
		complete: function() {
		//	$('#button-cart').button('reset');
		},
		success: function(json) {
			$('.alert, .text-danger').remove();
			$('.form-group').removeClass('has-error');
console.log(json);
			if (json['error']) {
				if (json['error']['option']) {
					for (i in json['error']['option']) {
						var element = $('#input-option' + i.replace('_', '-'));

						if (element.parent().hasClass('input-group')) {
							element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
						} else {
							element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
						}
					}
				}

				if (json['error']['recurring']) {
					$('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
				}

				// Highlight any found errors
				$('.text-danger').parent().addClass('has-error');
			}

			if (json['success']) {
				$('.breadcrumb').after('<div class="alert alert-success">' + json['success'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');

                $('.cyfbas').html(json['total2']);
                $('.bas-cart__item').load('index.php?route=common/cart/info .bas-cart__item a');
                $('.bas-cart__subtorial > div').html(json['total3']);

				$('html, body').animate({ scrollTop: 0 }, 'slow');


			}
		},
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
	});
});
//--></script>
<script type="text/javascript"><!--
$('.date').datetimepicker({
	pickTime: false
});

$('.datetime').datetimepicker({
	pickDate: true,
	pickTime: true
});

$('.time').datetimepicker({
	pickDate: false
});

$('button[id^=\'button-upload\']').on('click', function() {
	var node = this;

	$('#form-upload').remove();

	$('body').prepend('<form enctype="multipart/form-data" id="form-upload" style="display: none;"><input type="file" name="file" /></form>');

	$('#form-upload input[name=\'file\']').trigger('click');

	if (typeof timer != 'undefined') {
    	clearInterval(timer);
	}

	timer = setInterval(function() {
		if ($('#form-upload input[name=\'file\']').val() != '') {
			clearInterval(timer);

			$.ajax({
				url: 'index.php?route=tool/upload',
				type: 'post',
				dataType: 'json',
				data: new FormData($('#form-upload')[0]),
				cache: false,
				contentType: false,
				processData: false,
				beforeSend: function() {
					$(node).button('loading');
				},
				complete: function() {
					$(node).button('reset');
				},
				success: function(json) {
					$('.text-danger').remove();

					if (json['error']) {
						$(node).parent().find('input').after('<div class="text-danger">' + json['error'] + '</div>');
					}

					if (json['success']) {
						alert(json['success']);

						$(node).parent().find('input').val(json['code']);
					}
				},
				error: function(xhr, ajaxOptions, thrownError) {
					alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
				}
			});
		}
	}, 500);
});
//--></script>
<script type="text/javascript"><!--
$('#review').delegate('.pagination a', 'click', function(e) {
    e.preventDefault();

    $('#review').fadeOut('slow');

    $('#review').load(this.href);

    $('#review').fadeIn('slow');
});

$('#review').load('index.php?route=product/product/review&product_id=<?php echo $product_id; ?>');

$('#button-review').on('click', function() {
	$.ajax({
		url: 'index.php?route=product/product/write&product_id=<?php echo $product_id; ?>',
		type: 'post',
		dataType: 'json',
		data: $("#form-review").serialize(),
		beforeSend: function() {
			//$('#button-review').button('loading');
		},
		complete: function() {
			//$('#button-review').button('reset');
		},
		success: function(json) {

		    console.log(json);

			$('.alert-success, .alert-danger').remove();

			if (json['error']) {
				$('#review').after('<div class="alert alert-danger"><i class="fa fa-exclamation-circle"></i> ' + json['error'] + '</div>');
			}

			if (json['success']) {
				$('#review').after('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + '</div>');

				$('input[name=\'name\']').val('');
				$('textarea[name=\'text\']').val('');
				$('input[name=\'rating\']:checked').prop('checked', false);
			}
		}
	});
});

$(document).ready(function() {
	$('.thumbnails').magnificPopup({
		type:'image',
		delegate: 'a',
		gallery: {
			enabled:true
		}
	});
});
//--></script>
<?php echo $footer; ?>



<!--
<form class="form-horizontal" id="form-review">

<h2><?php echo $text_write; ?></h2>
   <?php if ($review_guest) { ?>
   <div class="form-group required">
     <div class="col-sm-12">
       <label class="control-label" for="input-name"><?php echo $entry_name; ?></label>
       <input type="text" name="name" value="<?php echo $customer_name; ?>" id="input-name" class="form-control" />
     </div>
   </div>
   <div class="form-group required">
     <div class="col-sm-12">
       <label class="control-label" for="input-review"><?php echo $entry_review; ?></label>
       <textarea name="text" rows="5" id="input-review" class="form-control"></textarea>
       <div class="help-block"><?php echo $text_note; ?></div>
     </div>
   </div>
   <div class="form-group required">
     <div class="col-sm-12">
       <label class="control-label"><?php echo $entry_rating; ?></label>
       &nbsp;&nbsp;&nbsp; <?php echo $entry_bad; ?>&nbsp;
       <input type="radio" name="rating" value="1" />
       &nbsp;
       <input type="radio" name="rating" value="2" />
       &nbsp;
       <input type="radio" name="rating" value="3" />
       &nbsp;
       <input type="radio" name="rating" value="4" />
       &nbsp;
       <input type="radio" name="rating" value="5" />
       &nbsp;<?php echo $entry_good; ?></div>
   </div>
   <?php echo $captcha; ?>
   <div class="buttons clearfix">
     <div class="pull-right">
       <button type="button" id="button-review" data-loading-text="<?php echo $text_loading; ?>" class="btn btn-primary"><?php echo $button_continue; ?></button>
     </div>
   </div>
   <?php } else { ?>
   <?php echo $text_login; ?>
   <?php } ?>
   </form>
   -->