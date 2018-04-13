<?=$header?>

<input class="ss" style="display:none" name="email" value="" type="text" />
<input onclick="addToCart()" style="display:none" type="submit" />

<script>
<!--
    function addToCart(){
var datas = $('.ss').val();
//console.log(data);
       $.ajax({
            url: 'index.php?route=information/packwrite/mods',
            type: 'post',
            data: 'email='+datas,
            dataType: 'json',
            success: function(json) {
console.log(json);
            }
        }); 
    }

    //-->
</script>
<?=$footer?>