
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(vocal, drum, bass, other) {
  //colorMode(HSB, 25);
  background(0,5,0);
  rectMode(CENTER);
  strokeWeight(9);

  
  let bassMap = map(bass, 0, 100, 5, 70);
  let drumMap = map(drum, 0, 100, 5, 100);
  let widthOfEllipse = 100;
  let ellipseStart = 750;
  let ellipseEnd = ellipseStart + widthOfEllipse;
  stroke(drumMap,100,200);

  for(let i =1; i <= drumMap; i++){
    console.log(i);
    var ellispeSpacing = i*5;
    fill(100)
    ellipse(ellipseStart,ellispeSpacing+200, ellipseEnd-500,ellispeSpacing)
  
  }

  stroke(bassMap,10,80);
  for(let i =1; i <= bassMap; i++){
    console.log(i);
    var ellispeSpacing = i*5;
    fill(100)
    ellipse(ellipseStart+250,ellispeSpacing, ellipseEnd,ellispeSpacing)
  
  }
  





}
