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
  //background(255, 251, 230); // light yellow
  background(255, 238, 179);
}

function shape(){
  angleMode(DEGREES);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //strokeWeight(2);
  //stroke(123)
  rectMode(CENTER);
  //fill(91, 193, 222);//light blue
  
  // var vx = 50; //100
  // var vy = 50; //100

  var tx1 = 100;
  var ty1 = 100;
  
  var tx2 = 100;
  var ty2 = 100;

  var angle1 = 0;
  var angle2 = 15

  push();
  noStroke(); //big rect
  //fill(0,50,130);//medium blue
  fill(232, 123, 70);//dim orange
  translate(288,170);
  rotate(angle1 +74); //74
  rect (0, 0, 310, 75);
  pop ();


  // beginShape(); //big rect behind
  // fill(0,50,130)
  // vertex(vx*2+80,vy-90); //TR 
  // vertex(vx*2+10,vy-70); //TL 
  // vertex(vx*2+99,vy*3+30); //BL 
  // vertex(vx*3+69,vy*3+10); //BR 
  // endShape(CLOSE);
 

  push();
  noStroke();
  fill(232, 93, 102); // pink
  ellipse(160, 80, 60, 55); //up one

  fill(227, 48, 48); //red
  ellipse(370, 250, 90, 90); //down
  pop();
 

  
  // push ();
  // noStroke (); //tri small
  // fill(0,50,130);//medium blue
  // translate ()
  // rotate()
  // triangle (63,80,65,105,85,90)
  // pop ();

  beginShape(TRIANGLES); //tri small
  noStroke();
  fill(235, 58, 35); // red
  rotate ();
  vertex(tx1-37,ty1-20); //top point
  vertex(tx1-35,ty1+5); //l
  vertex(tx1-15,ty1-10); // r
  endShape();


  push ();
  beginShape(TRIANGLES); //tri big
  noStroke();
  fill(252, 234, 68); //lihgt yellow
  rotate ();
  vertex(tx2*4,ty2-36); //top point
  vertex(tx2*3+30,ty2-20); //left
  vertex(tx2*3+70,ty2+30); //right
  endShape();
  pop ();

  push ();
  beginShape(TRIANGLES); //tri medium
  noStroke();
  fill(235, 111, 9);//orange
  rotate ();
  vertex(150,275); //top point
  vertex(130,311); //l
  vertex(165,315); // r
  endShape();
  pop ();
  

  push();
  noStroke(); // square
  fill(247, 139, 146);// light pink
  translate(458,135);
  rotate(65);
  rect (0, 0, 25, 25);
  pop ();

  // beginShape(); //squ right
  // vertex(442,130); //TL
  // vertex(452,150); //BL
  // vertex(473,140); //BR
  // vertex(464,119); //TR
  // endShape(CLOSE);

  push();
  noStroke(); // smamll rect
  //fill(0,50,130);//medium blue
  fill(255, 215, 20); // yellow
  translate(95,195);
  rotate(angle1 +348);
  rect (0, 0, 125, 30);
  pop ();
  
  // beginShape(); // small rect right bottom
  // vertex(30,196); //LT
  // vertex(35,221); //LB
  // vertex(155,195); //RB
  // vertex(150,170); //RT 150 170
  // endShape(CLOSE);


  beginShape(); //cross
  noStroke();
  fill(97, 38, 13); // brown
  rotate (angle1);
  vertex(200,145); //LT 
  vertex(243,170); //LT1 
  vertex(268,127); //LT2 
  vertex(295,143); //RT2
  vertex(269,185); //RT1
  vertex(310,210); //RT
  vertex(295,232); //RB
  vertex(260,210); //RB1
  vertex(233,257); //RB2
  vertex(203,240); //LB2
  vertex(230,193); //LB1
  vertex(187,168); //LB
  endShape(CLOSE);


}
 
  //rect(9, 200, 107, 20);
  //ellipse(250, 330, 20, 80);
  //ellipse(250, 300, 50, 50);
  
  

