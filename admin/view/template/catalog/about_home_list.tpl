<?php echo $header; ?><?php echo $column_left; ?>
<div id="content">
  <div class="page-header">
    <div class="container-fluid">

      <h1><?php echo $heading_title; ?></h1>
      <ul class="breadcrumb">
        <?php foreach ($breadcrumbs as $breadcrumb) { ?>
        <li><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a></li>
        <?php } ?>
      </ul>
    </div>
  </div>
  <div class="container-fluid">
    <?php if ($error_warning) { ?>
    <div class="alert alert-danger"><i class="fa fa-exclamation-circle"></i> <?php echo $error_warning; ?>
      <button type="button" class="close" data-dismiss="alert">&times;</button>
    </div>
    <?php } ?>
    <?php if ($success) { ?>
    <div class="alert alert-success"><i class="fa fa-check-circle"></i> <?php echo $success; ?>
      <button type="button" class="close" data-dismiss="alert">&times;</button>
    </div>
    <?php } ?>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title"><i class="fa fa-list"></i> <?php echo $text_list; ?></h3>
      </div>
      <div class="panel-body">
        <form action="<?php echo $delete; ?>" method="post" enctype="multipart/form-data" id="form-information">
          <div class="table-responsive">
            <table class="table table-bordered table-hover">
              <thead>
                <tr>
                  <td style="width: 1px;" class="text-center">
                   <p ><?php echo $column_title; ?></p>
                </td>
                  <td class="text-right">
                    <p href="<?php echo $sort_sort_order; ?>"><?php echo 'Link to Yutube'; ?></p>

                   </td>
                  <td class="text-right">
                                <p href="<?php echo $sort_sort_order; ?>"><?php echo 'Link to More'; ?></p>
                  </td>
                  <td class="text-right"><?php echo $column_action; ?></td>

                </tr>
              </thead>

              <tbody>
                <?php if ($informations) { ?>
                <?php foreach ($informations as $information) { ?>
                <tr>

                  <td class="text-left"><?php echo $information['title']; ?></td>
                  <td class="text-right"><?php echo $information['sort_order']; ?></td>
                  <td class="text-right"><?php echo $information['link_more']; ?></td>
                  <td class="text-right"><a href="<?php echo $information['edit']; ?>" data-toggle="tooltip" title="<?php echo $button_edit; ?>" class="btn btn-primary"><i class="fa fa-pencil"></i></a></td>
                </tr>
                <?php } ?>
                <?php } else { ?>
                <tr>
                  <td class="text-center" colspan="4"><?php echo $text_no_results; ?></td>
                </tr>
                <?php } ?>
              </tbody>
            </table>
          </div>
        </form>

      </div>
    </div>
  </div>
</div>
<?php echo $footer; ?>