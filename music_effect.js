
function draw_one_frame(words, vocal, drum, bass, other,counter) {
  //colorMode(HSB, 25);
  background(0,5,0);
  rectMode(CENTER);
  strokeWeight(9);

  console.log(words)
  let bassMap = map(bass, 0, 100, 5, 70);
  let drumMap = map(drum, 0, 100, 5, 100);


  let widthOfEllipse = 100;
  let ellipseStartX = 20;
  let ellipseSizeCHange = ellipseStartX + widthOfEllipse;

  stroke(drumMap,100,200);

  for(let i =1; i <= drumMap; i++){
    console.log(i);
    var ellispeSpacing = i*5;
    fill(100)
    //ellipse(ellipseStartX+ellispeSpacing,200, ellipseEndX-500,ellispeSpacing) // older version 
    ellipse(ellipseStartX+ellispeSpacing,400, ellipseSizeCHange,ellispeSpacing)
  }



  // stroke(bassMap,10,80);
  // for(let i =1; i <= bassMap; i++){
  //   console.log(i);
  //   var ellispeSpacing = i*5;
  //   fill(100)
  //   ellipse(ellipseStart+250,ellispeSpacing, ellipseEnd,ellispeSpacing)
  
  // }
}



