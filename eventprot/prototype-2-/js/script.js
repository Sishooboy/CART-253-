let sky = {
    r: 10,
    g: 20,
    b: 40
};

let bird = {
    x: 200,
    y: 250,
    size: 90,
    mood: "asleep"
};

let zzz = {
    x: 270,
    y: 200
};

// Counts down in frames until he calms down and goes back to sleep
let moodTimer = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    // A furious bird turns the whole sky red
    if (bird.mood === "furious") {
        background(90, 10, 10);
    }
    else {
        background(sky.r, sky.g, sky.b);
    }

    // He calms down once the timer runs out
    if (moodTimer > 0) {
        moodTimer = moodTimer - 1;
        if (moodTimer === 0) {
            bird.mood = "asleep";
        }
    }

    // While he sleeps undisturbed the sky slowly turns into morning
    if (bird.mood === "asleep") {
        if (sky.r < 135) {
            sky.r = sky.r + 0.2;
        }
        if (sky.g < 205) {
            sky.g = sky.g + 0.3;
        }
        if (sky.b < 235) {
            sky.b = sky.b + 0.33;
        }
        // Once it is bright enough he wakes up happy
        else {
            bird.mood = "happy";
        }
    }

    drawBranch();
    drawBird();
    drawMessage();

    // Only a sleeping bird makes Z z z
    if (bird.mood === "asleep" || bird.mood === "grumpy") {
        drawZzz();
    }
}

function drawBranch() {
    noStroke();
    fill(100, 60, 20);
    rect(40, 290, 320, 16, 8);
}

function drawBird() {
    push();
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

    let eyeX = bird.x + bird.size / 6;
    let eyeY = bird.y - bird.size / 6;

    if (bird.mood === "furious") {
        // Wide open eye
        fill(255);
        circle(eyeX, eyeY, 16);
        fill(0);
        circle(eyeX + 2, eyeY, 7);
    }
    else if (bird.mood === "happy") {
        // Open eye
        fill(0);
        circle(eyeX, eyeY, 10);
    }
    else {
        // Closed eye
        stroke(0);
        strokeWeight(3);
        line(eyeX - 8, eyeY, eyeX + 8, eyeY);
    }
    pop();
}

function drawMessage() {
    let message = "shhh... he's sleeping";
    if (bird.mood === "grumpy") {
        message = "mmmgrrr...";
    }
    if (bird.mood === "furious") {
        message = "WHO DARES WAKE ME?!";
    }
    if (bird.mood === "happy") {
        message = "GOOD MORNING!";
    }

    noStroke();
    fill(255);
    textSize(20);
    text(message, 100, 60);
}

function drawZzz() {
    noStroke();
    fill(255);
    textSize(24);
    text("Z z z", zzz.x, zzz.y);

    // Floats up, then starts again from the bird
    zzz.y = zzz.y - 0.5;
    if (zzz.y < 120) {
        zzz.y = 200;
    }
}

// Puts the sky back to night, so the wait for morning starts over
function resetSky() {
    sky.r = 10;
    sky.g = 20;
    sky.b = 40;
}

function mouseMoved() {
    // Moving the mouse annoys him, but he stays asleep
    if (bird.mood === "asleep" || bird.mood === "grumpy") {
        bird.mood = "grumpy";
        moodTimer = 120;
        resetSky();
    }
}

function mousePressed() {
    // Clicking wakes him up properly
    bird.mood = "furious";
    moodTimer = 240;
    resetSky();
}
