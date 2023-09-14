const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(circle);
  layer1.mode(RING);
  layer1.set_boundary( 0, 300 );

  var BackLayer = new PLayer(backColour);
  BackLayer.mode(RING);
  BackLayer.set_boundary( 0, 1000 );

  var layer1 = new PLayer(heart);
  layer1.mode( SWIRL(4) );
  layer1.set_boundary( 300, 100 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var outline = new PLayer(border);
  outline.mode(RING);
  outline.set_boundary( 0, 2000 );  

}

//function for middle shape
function border(x, y, animation, pScope){
  strokeWeight(0);
  stroke(0);
  fill(255,255,255);
  ellipse(0, 0, 100, 200);
}

//function for background colour
function backColour(x, y, animation, pScope){
  pScope.fill_background(245);
}

//function for hearts
function heart(x, y, animation, pScope){
  fill(255,0,0);
  stroke(177, 167, 166);
  strokeWeight(15);
  push();
  scale (1);
  scale(animation.frame*2);

//left half of heart
beginShape();
curveVertex(1, 800);
curveVertex(1, 800);//top of heart
curveVertex(-100, 850);
curveVertex(-200, 750);
curveVertex(1, 500);//bottom point of heart
curveVertex(1, 500);
endShape();

//right half of heart
beginShape();
curveVertex(-1, 800);
curveVertex(-1, 800);//top of heart
curveVertex(100, 850);
curveVertex(200, 750);
curveVertex(-1, 500);//bottom point of heart
curveVertex(-1, 500);
endShape();
pop();
}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(249, 220, 92);
  strokeWeight(0);
  arc(x,y,400,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255,255,255)
  rect(-10,-300-animation.wave()*50,30,90) // .wave is a cosine wave btw

}




