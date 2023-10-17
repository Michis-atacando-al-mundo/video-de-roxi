
objects = [];
estatus = "";

function preload(){
video = createVideo('cuca.mp4'); 
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.position (350,50);
    video.hide();
}
function start(params) {
 objectDetector = ml5.objectDetector('cocossd', modelLoaded);   
document.getElementById("status").innerHTML = "Estado: dectetando objetos";
}

function modelLoaded() {
    console.log("¨¡Modelo cargado!")
    estatus = true;
video.loop();
video.speed(1);
}



function gotResult(error, results) {
    if (error) {
     console.log(error);
     console.log(error);   
    }
    console.log(results);
    objects = results;
}

function draw() {
image(video, 0, 0, 640, 420);


if (estatus != "") {
    objectDetector.detect(video, gotResult);
    for (i = 0; i < objects.length; i++)
     {
        document.getElementById("status").innerHTML ="Estatus: objeto dectetado"
        document.getElementById("number").innerHTML ="Numero: objeto dectetado"  
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
}





