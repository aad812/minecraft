var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;

block_image_height = 30;

player_x = 10;

player_y = 10;

var player_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

if(keyPressed = 38){
    up();
    console.log(player_y);
}

if(keyPressed = 40){
    down();
    console.log(player_y);
}

if(keyPressed = 37){
    left();
    console.log(player_x);
}

if(keyPressed = 39){
    right();
    console.log(player_x);
}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_image_height;
        canvas.remove(player_object);
        player_update();
        }       
    }


function down(){
    if(player_y <= 500){
        player_y = player_y + block_image_height;
        canvas.remove(player_object);
        player_update();
        }
    }


function left(){
    if(player_x >= 0){
        plaler_x = player_x - block_image_width;
        canvas.remove(player_object);
        player_update();
        }
    }
    


function right(){
    if(player_x <= 500){
        player_x = player_x + block_image_width;
        canvas.remove(player_object);
        player_update();
        }
    }
    