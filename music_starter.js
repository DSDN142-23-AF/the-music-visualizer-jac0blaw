
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true

let starFace = [];
function draw_one_frame(vocal, drum, bass, other) {

  if (firstRun) {
    rectMode(CENTER);
    starFace.push(loadImage('star_0.png'));
    starFace.push(loadImage('star_1.png'));
    starFace.push(loadImage('star_2.png'));

    firstRun = false
  }
 background(255);

 var VocalFrame = int(map(vocal,0,100,0,2));
 console.log(VocalFrame);
 push();
 scale(0.5);
 image(starFace[VocalFrame], width/2, height/2)
 pop();

}


