function setup() {
    canvas = createCanvas(640,480);
    canvas.position(20, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 45, 40, 550, 400);

    fill(30,144,255);
    stroke(0, 0, 0);
    circle(20, 50, 40);
    circle(620, 50, 40);
    circle(20, 430, 40);
    circle(620, 430, 40);

    fill(255,0,0);
    stroke(0, 0, 0);
    rect(40, 30, 560, 20);
    rect(10, 70, 20, 340);
    rect(40, 430, 560, 20);
    rect(610, 70, 20, 340);
}

function takesnapshot(){
    save('birthday_snapshot.png');
}
