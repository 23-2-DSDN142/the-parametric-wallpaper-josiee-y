//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 500;
  pWallpaper.grid_settings.cell_height = 350;
  pWallpaper.grid_settings.row_offset  = 50;

}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  strokeWeight(2);
  stroke(123)
  //fill(91, 193, 222);//light blue
  
  //var x = 110
  
  beginShape(); //rect behind
  vertex(280,10); //TR
  vertex(210,30); //TL
  vertex(299,330); //BL
  vertex(369,310); //BR
  endShape(CLOSE);
  
  beginShape(TRIANGLES); //tri left-top
  vertex(63,80); //top point
  vertex(65,105); //l
  vertex(85,90); // r
  endShape();

  beginShape(TRIANGLES); //tri right-top
  vertex(400,64); //top point
  vertex(330,80); //left
  vertex(370,130); //right
  endShape();

  beginShape(TRIANGLES); //tri left-bottom
  vertex(150,275); //top point
  vertex(130,311); //l
  vertex(165,315); // r
  endShape();

  beginShape(); //squ right
  vertex(442,130); //TL
  vertex(452,150); //BL
  vertex(473,140); //BR
  vertex(464,119); //TR
  endShape(CLOSE);

  ellipse(160, 80, 60,55); //up one
  ellipse(370, 250, 90,90); //down
  
  beginShape();
  vertex(30,196); //LT
  vertex(35,221); //LB
  vertex(155,195); //RB
  vertex(150,170); //RT 150 170
  endShape(CLOSE);
  
  
  //rect(9, 200, 107, 20);
  //ellipse(250, 330, 20, 80);
  //ellipse(250, 300, 50, 50);
  
  
}
