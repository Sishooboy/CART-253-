let sky = {
    r: 173,
    g: 216,
    b: 230
};

let bird = {
    x: 200,
    y: 200,
    size: 60,
    minSize: 60,
    maxSize: 220,
    groundY: 320
};

let message = "FEED ME (press space)";
let lastFed = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(sky.r, sky.g, sky.b);

    // If nobody has fed him for 3 seconds he starts to shrink
    if (millis() - lastFed > 3000 && bird.size > bird.minSize) {
        bird.size = bird.size - 0.5;
        message = "I'M STARVING...";
    }

    // Too fat to fly, so he sinks to the ground
    if (bird.size >= bird.maxSize) {
        message = "I CAN'T FLY ANYMORE";
        if (bird.y < bird.groundY) {
            bird.y = bird.y + 2;
        }
    }
    // Back in the air once he is light enough
    else if (bird.y > 200) {
        bird.y = bird.y - 2;
    }

    drawBird();

    fill(255);
    textAlign(CENTER);
    textSize(16);
    text(message, 200, 40);
}

function drawBird() {
    noStroke();

    // Body
    fill(255, 220, 0);
    circle(bird.x, bird.y, bird.size);

    // Beak
    fill(255, 140, 0);
    triangle(
        bird.x + bird.size / 2, bird.y - bird.size / 10,
        bird.x + bird.size / 2 + bird.size * 0.3, bird.y,
        bird.x + bird.size / 2, bird.y + bird.size / 10
    );

    // Eye
    fill(0);
    circle(bird.x + bird.size / 6, bird.y - bird.size / 6, bird.size / 10);
}

function keyPressed() {
    // Space feeds the bird, so he gets bigger (but not past his max size)
    if (key === " ") {
        bird.size = min(bird.size + 10, bird.maxSize);
        lastFed = millis();
        message = "NOM NOM NOM";
    }
    // Stops the page from scrolling when space is pressed
    return false;
}
