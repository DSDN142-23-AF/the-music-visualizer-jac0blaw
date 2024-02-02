
function draw_one_frame(words, vocal, drum, bass, other,counter) {
  //colorMode(HSB, 25);
  background(0,5,0);
  rectMode(CENTER);
  strokeWeight(9);
 
  strokeWeight(9);
  textFont('Georgia');
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(80);
  noStroke();
  fill(255);
  text(words, width/2, height/5);


  let seconds = counter
  console.log(counter)
    textSize(60);
    text(seconds, 20, height-90);
  
  
  }

  console.log(words)
  let bassMap = map(bass, 0, 100, 5, 70);
  let drumMap = map(drum, 0, 100, 5, 100);


  let widthOfEllipse = 100;
  let ellipseStartX = 20;
  let ellipseSizeCHange = ellipseStartX + widthOfEllipse;

  stroke(drumMap,100,200);

  for(let i =1; i <= drumMap; i++){
    // console.log(i);
    var ellispeSpacing = i*5;
    fill(100)
    //ellipse(ellipseStartX+ellispeSpacing,200, ellipseEndX-500,ellispeSpacing) // older version 
    ellipse(ellipseStartX+ellispeSpacing,400, ellipseSizeCHange,ellispeSpacing)
  }

  let quietColour = color("#fae")
  let loudColor = color("#abf")
  let colorLerpMap = map(bass, 0 , 100, 0,1)
  let currentColor = lerpColor(quietColour,loudColor,colorLerpMap)

  // console.log(counter)
  // if(counter > 5 && counter < 10){
  // ellipse(600,600,100)

  // }

  


  //stroke(drumMap,100,200);
  stroke(currentColor)


  // stroke(bassMap,10,80);
  // for(let i =1; i <= bassMap; i++){
  //   console.log(i);
  //   var ellispeSpacing = i*5;
  //   fill(100)
  //   ellipse(ellipseStart+250,ellispeSpacing, ellipseEnd,ellispeSpacing)
  
  // }




