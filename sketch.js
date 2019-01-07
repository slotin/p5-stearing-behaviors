var font;
var vehicles = [];

function preload() {
    font = loadFont("AvenirNextLTPro-DemiIt.otf");
}

function setup() {
    createCanvas (900, 200);
    background(51);

    var points = font.textToPoints('Lorem ipsum dolor sit amet.', 10, 100, 64, {
        sampleFactor: 0.6,
    });

    for (var i=0; i<points.length; i++) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
    }
}

function draw() {
    background(51);
    fill(255);
    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}