<!DOCTYPE html>
<!--[if IE]><![endif]-->
<!--[if IE 8 ]><html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>" class="ie8"><![endif]-->
<!--[if IE 9 ]><html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>" class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>">
<!--<![endif]-->
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><?php echo $title; ?></title>
<base href="<?php echo $base; ?>" />
<?php if ($description) { ?>
<meta name="description" content="<?php echo $description; ?>" />
<?php } ?>
<?php if ($keywords) { ?>
<meta name="keywords" content= "<?php echo $keywords; ?>" />
<?php } ?>
<script src="catalog/view/javascript/jquery/jquery-2.1.1.min.js" type="text/javascript"></script>
<link href="catalog/view/javascript/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen" />
<script src="catalog/view/javascript/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<link href="catalog/view/javascript/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
<link href="//fonts.googleapis.com/css?family=Open+Sans:400,400i,300,700" rel="stylesheet" type="text/css" />
<link href="catalog/view/theme/default/stylesheet/stylesheet.css" rel="stylesheet">

<?php foreach ($styles as $style) { ?>
<link href="<?php echo $style['href']; ?>" type="text/css" rel="<?php echo $style['rel']; ?>" media="<?php echo $style['media']; ?>" />
<?php } ?>
<script src="catalog/view/javascript/common.js" type="text/javascript"></script>

<?php foreach ($links as $link) { ?>
<link href="<?php echo $link['href']; ?>" rel="<?php echo $link['rel']; ?>" />
<?php } ?>
<?php foreach ($scripts as $script) { ?>
<script src="<?php echo $script; ?>" type="text/javascript"></script>
<?php } ?>
<?php foreach ($analytics as $analytic) { ?>
<?php echo $analytic; ?>
<?php } ?>
</head>
<body class="<?php echo $class; ?>">




<header>

  <div class="header-top-line">
    <div class="container" >
      <div class="slider-rec">
        <a href="">Free shiping on Articial Coral order $99 and up</a>
        <a href="">Free shiping on Articial Coral order $99 and up</a>
        <a href="">Free shiping on Articial Coral order $99 and up</a>
      </div>
      <div class="slider-rec-close"></div>
    </div>
  </div>

  <div class="container">
    <div class="header-main">
      <div class="header-main__logo">
        <a href="/"><img src="<?php echo $logo; ?>" alt=""></a>
      </div>
      <div class="header-main__cont">
        <div class="header-main__cont--top">

         <!-- <form method="get" id="search" action="/index.php?route=product/search&search">-->
        <div id="search">
            <input name="search" type="text" placeholder="Search">
            <input class="serch" type="button">
        </div>
          <!--   </form> -->


          <div class="header-main__cont--top--tel">
            <a href="tel:<?php echo $telephone; ?>"><?php echo $telephone; ?></a>
          </div>
          <?=$cart?>

          <div class="header-main__cont--top--sign">
            <a href="#modal2">Sign in</a>
          </div>
          <div class="header-main__cont--top--profile">
            <a href="#">Profile</a>
            <div class="profile-pop">
              <ul>

                <li><a href="#">My Account <?=$customer_id?></a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Wish list</a></li>
                <li><a href="#">Log Out</a></li>


              </ul>
            </div>
          </div>
        </div>
        <div class="header-main__cont--bottom">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="<?=$informations[0]['href']?>">About us</a></li>
            <li class="estore"><a href="#">E-Store</a>
              <div class="products__sub">
                <ul>
                  <!-- <li class="active2"><a href="#">Saltwater Fish</a>
                    - <div class="products__sub-cat">
                         <ul>
                             <li><a href="#">Sand, Gravel & Substrate & Substrate</a></li>
                             <li><a href="#">Category 2</a></li>
                             <li><a href="#">Category 3</a></li>
                             <li><a href="#">Category 4</a></li>
                         </ul>
                     </div>
                  </li> -->
                  <?php foreach($categories as $category) { ?>
                  <li><a href="<?=$category['href']?>"><?=$category['name']?></a></li>
                  <?php } ?>
                </ul>
              </div>
            </li>
            <li class="products"><a href="#">Products</a>
              <div class="products__sub">
                <ul>
                  <li><a href="#">Artificial Reefs</a></li>
                  <li><a href="#">Aquariums</a></li>
                  <li><a href="#">Bubble wall</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Promotion</a></li>
            <li><a href="#">Wholesale</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="<?=$contact?>">Contacts</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>


  <div class="header-fix">
    <div class="container">
      <div class="header-fix-cont">
        <div class="header-fix-cont-logo"></div>
        <div class="header-fix-cont-list"></div>
        <div class="header-fix-cont-comp">
          <div class="header-fix-cont-comp-item1">

          </div>

          <div class="header-fix-cont-comp-item1">

            <div class="header-main__cont--top search-fix">

              <div class="search-fix-input">
                <input type="text" placeholder="Search">
              </div>
              <button class="lup-fix"><img src="style/img/icon/lupa.png" alt=""></button>
            </div>

            <div class="header-main__cont--top--bas mob-bas">
              <?=$cart?>
            </div>


            <div class="header-main__cont--top--bas">

            </div>

            <div class="header-main__cont--top--sign">
              <a href="#"></a>
            </div>
            <div class="header-main__cont--top--profile">
              <a href="#"></a>
              <div class="profile-pop">
                <ul>
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Orders</a></li>
                  <li><a href="#">Wish list</a></li>
                  <li><a href="#">Log Out</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="header-fix-cont-comp-item1">

          </div>


        </div>
      </div>
    </div>
  </div>

  <div class="mob-menu">
    <div class="mob-menu__logo"></div>
    <div class="mob-menu__item"></div>
    <div class="mob-menu__burger">
      <input type="checkbox" id="hmt" class="hidden-menu-ticker">
      <label class="btn-menu" for="hmt">
        <span class="first"></span>
        <span class="second"></span>
        <span class="third"></span>
      </label>

      <ul class="hidden-menu">
        <li class="prof-mob"></li>
        <li class="prof-mob__item1"></li>
      </ul>

    </div>
  </div>
</header>



