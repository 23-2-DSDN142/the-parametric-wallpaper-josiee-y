//your parameter variables go here!
let angle1 = 0; //0
let angle2 = 0; //0

let rbtx = 300; //300
let rbty = 300; //300

let ex1 = 0;//0
let ey1 = 0;//0

let ex2 = 0;//0
let ey2 = 0;//0

let epx1 = 0;//0
let epy1 = 0;//0

let epx2 = 0;//0
let epy2 = 0;//0

let tsx = 100;//100
let tsy = 100;//100
  
let tbx = 100;//100
let tby = 100;//100

let tmx = 100; //100
let tmy = 100; //100

let sqx = 25; //25
let sqy = 25; //25

let rsx = 50; //50
let rsy = 50; //50


let WarmColourMode = false;




function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  //pWallpaper.output_mode(GLIDE_WALLPAPER);

  pWallpaper.resolution(FIT_TO_SCREEN);
  //pWallpaper.resolution(NINE_LANDSCAPE);
  //pWallpaper.resolution(NINE_PORTRAIT);
  //pWallpaper.resolution(A4);
  //pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 500; //500
  pWallpaper.grid_settings.cell_height = 350; //350
  pWallpaper.grid_settings.row_offset  = 50;//50

  
 
}

function wallpaper_background() {

background(255, 238, 179); // light yellow
  
background(144, 208, 224); //light blue
  
}

function shape(){
  angleMode(DEGREES);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  rectMode(CENTER);
  

  
  if (WarmColourMode){
  push();
  noStroke(); //big rect
  fill(232, 123, 70);//dim orange
  translate(rbtx+65,rbty/3+65);
  rotate(angle1 + 145); //145j
  rect (0, 0, 90, 20);
  pop ();

 

  push();
  noStroke();
  fill(232, 93, 102); // pink
  ellipse(epx1+160, epy1+80, ex1+60, ey1+55); //up one

  fill(214, 75, 75); //red
  ellipse(epx2+370, epy2+250, 90-ex2, 90-ey2); //down
  pop();
 

  push();
  noStroke(); // square
  fill(247, 139, 146);// light pink
  translate(458,135);
  rotate(65);
  rect (0, 0, sqx, sqy);
  pop ();


  push();
  noStroke(); // small rect
  //fill(0,50,130);//medium blue
  fill(255, 215, 20); // yellow
  translate(95,195);
  rotate(angle1 +348);
  rect (0, 0, rsx*2+25, rsy-20);
  pop ();
 


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
 

  beginShape(TRIANGLES); //tri small
  noStroke();
  fill(235, 58, 35); // red
  rotate (angle2);
  vertex(tsx-37,tsy-20); //top point
  vertex(tsx-35,tsy+5); //l
  vertex(tsx-15,tsy-10); // r
  endShape();


  push ();
  beginShape(TRIANGLES); //tri big
  noStroke();
  fill(255, 252, 227); //lihgt yellow
  rotate (angle2);
  vertex(tbx*4,tby-36); //top point
  vertex(tbx*3+30,tby-20); //left
  vertex(tbx*3+70,tby+30); //right
  endShape();
  pop ();

  push ();
  beginShape(TRIANGLES); //tri medium
  noStroke();
  fill(235, 111, 9);//orange
  rotate (angle2);
  vertex(tmx+50,tmy*2+75); //top point
  vertex(tmx+30,tmy*3+11); //l
  vertex(tmx+65,tmy*3+15); // r
  endShape();
  pop ();
  }else{

  push();
  noStroke(); //big rect
  fill(22, 64, 130);//medium blue
  translate(rbtx+65,rbty/3+65);
  rotate(angle1 + 145); //74
  rect (0, 0, 90, 20);
  pop ();


  push();
  noStroke();
  fill(54, 94, 150); // dark grey blue
  ellipse(160, 80, ex1+60, ey1+55); //up one

  fill(105, 87, 125); // dark purple
  ellipse(370, 250, 90-ex2, 90-ey2); //down
  pop();
 

  push();
  noStroke(); // square
  fill(43, 171, 169);// blue green
  translate(458,135);
  rotate(65);
  rect (0, 0, sqx, sqy);
  pop ();


  push();
  noStroke(); // small rect
  fill(17, 191, 191); // light grey purple
  translate(95,195);
  rotate(angle1 +348);
  rect (0, 0, rsx*2+25, rsy-20);
  pop ();


  beginShape(); //cross
  noStroke();
  fill(210, 242, 247); // light blue
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
 

  beginShape(TRIANGLES); //tri small
  noStroke();
  fill(116, 111, 148); // light grey purple
  rotate (angle2);
  vertex(tsx-37,tsy-20); //top point
  vertex(tsx-35,tsy+5); //l
  vertex(tsx-15,tsy-10); // r
  endShape();


  push ();
  beginShape(TRIANGLES); //tri big
  noStroke();
  fill(223, 242, 220); //lihgt grey green
  rotate (angle2);
  vertex(tbx*4,tby-36); //top point
  vertex(tbx*3+30,tby-20); //left
  vertex(tbx*3+70,tby+30); //right
  endShape();
  pop ();

  push ();
  beginShape(TRIANGLES); //tri medium
  noStroke();
  fill(60, 94, 38); // dark green
  rotate (angle2);
  vertex(tmx+50,tmy*2+75); //top point
  vertex(tmx+30,tmy*3+11); //l
  vertex(tmx+65,tmy*3+15); // r
  endShape();
  pop ();
  }






}
 
