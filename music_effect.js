let firstRun = true

let bodyOfStar;
let starFace = [];
function draw_one_frame(words, vocal, drum, bass, other,counter) {
  
  if (firstRun) {
    rectMode(CENTER);
    bodyOfStar = loadImage('starbody.png');
    starFace.push(loadImage('star_0.png'));
    starFace.push(loadImage('star_1.png'));
    starFace.push(loadImage('star_2.png'));

    firstRun = false
  }
 background(255);
image(bodyOfStar, 20, 10);
 var VocalFrame = int(map(vocal,0,100,0,3));
 console.log(VocalFrame);
 push();
 scale(0.5);
 image(starFace[VocalFrame], width/2, height/2)
 pop();

}
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

//}