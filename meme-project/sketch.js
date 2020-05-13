// https://kylemcdonald.github.io/cv-examples/
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2

var capture;
var tracker
var w = 500,
    h = 500;

function setup() {
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();

    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);
}

function draw() {
    // image(capture, 0, 0, w, h);
  background(90);
    var positions = tracker.getCurrentPosition();

    // noFill();
    stroke(255);
    // beginShape();
    // for (var i = 0; i < positions.length; i++) {
    //     vertex(positions[i][0], positions[i][1]);
    // }
    // endShape();

    noStroke();
    for (var i = 0; i < positions.length; i++) {
        fill(map(i, 0, positions.length, 0, 360), 50, 100);
        // ellipse(positions[i][0], positions[i][1], 4, 4);
        // text(i, positions[i][0], positions[i][1]);
    }

 if (positions.length > 0) 
   {
        var lEyeTop = createVector(positions[29][0], positions[29][1]);
        var lEyeBot = createVector(positions[31][0], positions[31][1]);
        var EYES = lEyeTop.dist(lEyeBot);
   }
  
  console.log(EYES);
  
  if(EYES > 15)
  {
    fill('#F7D243');
    ellipse(250,250,300,300);
    fill(0);
    textSize(32);
    text('I See',210,70);
    rect(200,320,100,5,20);
    fill(255);
    ellipse(200,220,80,50);
    ellipse(300,220,80,50);
    fill('#849CFF');
    ellipse(200,220,50,40);
    ellipse(300,220,50,40);
    fill('#242B46');
    ellipse(200,220,50,40);
    ellipse(300,220,50,40);

    //bezier(160,230, 200,250, 200,250, 240,230);
    //bezier(260,230, 300,250, 300,250, 340,230);
  }
  else
  {
    fill('#F7D243');
    ellipse(250,250,300,300);
    fill(0);
    textSize(32);
    text('I Cannot See',150,70);
    rect(200,320,100,5,20);
    noFill();
    stroke(0);
    strokeWeight(5);
    bezier(160,230, 200,250, 200,250, 240,230);
    bezier(260,230, 300,250, 300,250, 340,230);
  }
}
