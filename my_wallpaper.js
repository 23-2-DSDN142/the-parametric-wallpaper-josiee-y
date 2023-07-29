//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  strokeWeight(2);
  stroke(123)
  //fill(91, 193, 222);//light blue
  
  var x = 110
  
  beginShape(TRIANGLES);
  vertex(120,70);
  vertex(100,90);
  vertex(150,65);
  endShape();

  beginShape(TRIANGLES);
  vertex(x,70);
  vertex(x,87);
  vertex(150,85);
  endShape();

  ellipse(x, x-20, x-30,x-30); //small circle 100, 80, 70,70
  ellipse(x, x+45, x,x-10); //big circle 100,145, 100,90
  ellipse(x+10, x-25, x-85,x-85); //eye 110,75,15,15

  beginShape();
  vertex(98,127);
  vertex(76,149);
  vertex(95,140);
  //vertex(100,150);
  //vertex(1,140);
  vertex(117,150);
  endShape(CLOSE);
  //ellipse(100, 330, 20, 80);
  //ellipse(250, 330, 20, 80);
  //ellipse(250, 300, 50, 50);
  
  
}
