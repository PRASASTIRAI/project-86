var canvas= new fabric.canvas(myCanvas);

block_img_width=30;
block_img_height=30;

player_x=10;
player_y=10;

var player_object="";

//function player update add player or img//

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(100);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_Image(get_Image){
    fabric.Image.fromURL(get_Image,function(Img){
block_image_object.scaleToWidth(block_img_width);
block_image_object.scaleToHeight(block_img_height);
block_image_object.set({
    top:player_y,
    left:player_x
});

canvas.add(block_image_object);

    });
}