let firstRun = true

let yPos = 0;

let nightsky;
let whitebackground;
let greyroad;
let buildingColour;
let buildingOutline;
let bodyOfStar;
let yellowLines;
let moonRise;

let starFace = [];
function draw_one_frame(words, vocal, drum, bass, other,counter) {
  
  if (firstRun) {
    rectMode(CENTER);

    nightsky = loadImage('stars1.png');
    whitebackground = loadImage('whiteback.png');
    greyroad = loadImage('road.png');
    moonRise = loadImage('sky1.png');
    yellowLines = loadImage('roadLines.png');
    buildingOutline = loadImage('outline1.png');
    buildingColour = loadImage('colourIN.png');
    bodyOfStar = loadImage('starbody.png');

    starFace.push(loadImage('star_0.png'));
    starFace.push(loadImage('star_1.png'));
    starFace.push(loadImage('star_2.png'));
    starFace.push(loadImage('star_3.png'));
    starFace.push(loadImage('star_4.png'));
    
    firstRun = false
  }

 background(65);

 if (yPos >= 0) {
  yPos += 0.11;
}
translate(image(moonRise, 0, yPos-1700));
scale(translate(image(nightsky, 0, yPos-2000)),0.1);

image(whitebackground, 0, 0);

 var movementBuild = map(drum, 0, 100, -10, 10)
 var bodyHeight = map(vocal, -50, 140, 50, -20)
 
  let quietColour = color("#fae")
  let loudColor = color("#abf")
  let colorLerpMap = map(bass, 0 , 100, 0,1)
  let currentColor = lerpColor(quietColour,loudColor,colorLerpMap)
  
 let widthOfEllipse = 500;

 image(greyroad, 0, 0);
 image(yellowLines, 0, 0);
 image(buildingColour, movementBuild, 0);
 image(buildingOutline, 0, 0);
 
 
 fill(currentColor);
 ellipse(800,2240,widthOfEllipse,colorLerpMap+100);

  // for(let i =1; i <= bassMap; i++){
  //   // console.log(i);
  //   var ellispeSpacing = i*5;
  //   fill(100)
  //   //ellipse(ellipseStartX+ellispeSpacing,200, ellipseEndX-500,ellispeSpacing) // older version 
  //   ellipse(ellipseStartX+ellispeSpacing,300, ellipseSizeCHange,ellispeSpacing)
  // }

 image(bodyOfStar, 195, 1500);
 var VocalFrame = int(map(vocal,0,100,0,5));
 console.log(VocalFrame);
 push();
 //scale();
 translate(-580, -500);
 image(starFace[VocalFrame], width/2-25, height/1.1-180)
 
 pop();



}

// ellipse(width/2, danceMove, bodyHeight);
  // colorMode(HSB, 25);
  // background(0,5,0);
  // rectMode(CENTER);
  // strokeWeight(9);
 
  // strokeWeight(9);
  // textFont('Georgia');
  // textAlign(CENTER);
  // textStyle(BOLD);
  // textSize(80);
  // noStroke();
  // fill(255);
  // text(words, width/2, height/5);


  // let seconds = counter
  // console.log(counter)
  //   textSize(60);
  //   text(seconds, 500, height-90);
  

  // line

  // console.log(words)
  // let bassMap = map(bass, 0, 100, 5, 70);
  // let drumMap = map(drum, 0, 100, 5, 100 );


  // let widthOfEllipse = 100;
  // let ellipseStartX = 200;
  // let ellipseSizeCHange = ellipseStartX + widthOfEllipse;

  // stroke(bassMap,100,200);

  // for(let i =1; i <= bassMap; i++){
  //   // console.log(i);
  //   var ellispeSpacing = i*5;
  //   fill(100)
  //   //ellipse(ellipseStartX+ellispeSpacing,200, ellipseEndX-500,ellispeSpacing) // older version 
  //   ellipse(ellipseStartX+ellispeSpacing,300, ellipseSizeCHange,ellispeSpacing)
  // }

  // let quietColour = color("#fae")
  // let loudColor = color("#abf")
  // let colorLerpMap = map(bass, 0 , 100, 0,1)
  // let currentColor = lerpColor(quietColour,loudColor,colorLerpMap)

  // // console.log(counter)
  // // if(counter > 5 && counter < 10){
  // // ellipse(600,600,100)

  // // }

  // if(words == "heroin."){
  //   ellipse(600,600,100)
  //     }


  // //stroke(drumMap,100,200);
  // stroke(currentColor)


  // stroke(bassMap,10,80);
  // for(let i =1; i <= bassMap; i++){
  //   console.log(i);
  //   var ellispeSpacing = i*5;
  //   fill(100)
  //   ellipse(ellipseStart+250,ellispeSpacing, ellipseEnd,ellispeSpacing)
  
  // }

