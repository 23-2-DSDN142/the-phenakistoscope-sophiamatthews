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

  var layer1 = new PLayer(heart);
  layer1.mode( SWIRL(4) );
  layer1.set_boundary( 300, 100 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var layer2 = new PLayer(circle);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
}

function circle(x, y, animation, pScope){
  
  scale(animation.frame*2);

beginShape();
circle(30,20,0);
}

function heart(x, y, animation, pScope){
  
  scale(animation.frame*2);



  //left half of heart
beginShape();
fill(255, 0, 0);
curveVertex(width/1, height*2);
curveVertex(width/1, height*.9);
curveVertex(width*.1, height/2);
curveVertex(width/4, height/4);
curveVertex(width/2, height/3);
curveVertex(width/2, height);
endShape();

//right half of heart
beginShape();
curveVertex(width/2, height);
curveVertex(width/2, height/3);
curveVertex(width*.70, height/4);
curveVertex(width*.9, height/2);
curveVertex(width/2, height*.9);
curveVertex(width/2, height*2);
endShape();
}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(0,0,0)
  arc(x,y,400,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255,255,255)
  rect(-10,-200-animation.wave()*50,30,100) // .wave is a cosine wave btw

}
