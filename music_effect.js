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

 if (yPos >= 0) { //if command to make y pos change
  yPos += 0.11;
}
translate(image(moonRise, 0, yPos-1700)); //star and sky movement command
scale(translate(image(nightsky, 0, yPos-2000)),0.1);

image(whitebackground, 0, 0); //white background to make colour look better



  let quietColour = color(255,255,255, 5); //colour lerp for spotlight
  let loudColor = color(255,228,63, 90);
  let colorLerpMap = map(bass, 0 , 100, 0,1)
  let currentColor = lerpColor(quietColour,loudColor,colorLerpMap)
  
 let widthOfEllipse = 500;

 image(greyroad, 0, 0); //images for road
 image(yellowLines, 0, 0);
 
 var movementBuild = map(drum, 0, 100, -10, 10) //drum map for movement of building 

 image(buildingColour, movementBuild, 0); //building outline and colour
 image(buildingOutline, 0, 0);
 
//  if(words == "I'm"){
//   fill(0);
//   rect(800,1200,1600, 2400,10);
//     }

//  if(words == "a"){
//   fill(0);
//   rect(800,1200,1600, 2400,10);
//     }

 if(words == "motherfuckin'"){ //if command for black rectangle
  fill(0);
  rect(800,1200,1600, 2400,10);
    }

 if(words == "starboy"){ //if command for black rectangle
  fill(0);
  rect(800,1200,1600, 2400,10);
    }

    if(words == "starbuck"){ //if command for black rectangle
      fill(0);
      rect(800,1200,1600, 2400,10);
        }

 noStroke();
 fill(currentColor);
 ellipse(800,2240,widthOfEllipse,colorLerpMap+100); //ellipse under star boy
  
 image(bodyOfStar, 200, 1500); //body of star boy
 var VocalFrame = int(map(vocal,0,100,0,5)); //vocal map for image sequence of face
 console.log(VocalFrame);
 push();
 //scale();
 translate(-580, -500);
 image(starFace[VocalFrame], width/2-20, height/1.1-180) //star face image sequence mapped to vocal frame
 
 pop();

 beginShape(TRIANGLES); //drawing triangle for spotlight
 fill(currentColor);
 vertex(800, -300);
 vertex(550, 2240);
 vertex(1050, 2240);
 
 endShape();
 
 fill(currentColor);
 rotate(180);
 
 arc(-800, -2240, 500, 100, 180, HALF_PI-1.6); //bottom semi-circle of spotlight
}
