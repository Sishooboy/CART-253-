let names = [
    "Gerald",
    "Pinky",
    "Captain Beak",
    "Doug",
    "Sir Flaps",
    "Tweety Jr.",
    "Beatrice"
];

let colours = [
    "gray",
    "hotpink",
    "deepskyblue",
    "orange",
    "limegreen",
    "gold",
    "orchid"
];

let sizes = [90, 70, 100, 60, 85, 50, 75];

let bios = [
    "Loves long flights and stealing fries. Not sorry.",
    "Stands on one leg. Still the most balanced bird you will meet.",
    "I have seen things. Mostly windows. I hit most of them.",
    "Early riser. Will sing at 5 am. It is not a bug, it is a feature.",
    "Fly with me. Just not near the airport.",
    "Small but very loud. Sorry about the neighbours.",
    "Likes: sunsets, worms and long walks on power lines."
];

let matches = [];

let current = 0;

let verdict = "";
let verdictTimer = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255, 225, 240);
    noStroke();

    if (current >= names.length) {
        drawEnd();
    }
    else {
        drawProfile();
    }
}

function drawProfile() {
    fill(255);
    rect(50, 40, 300, 320, 20);

    drawBird(200, 130, sizes[current], colours[current]);

    fill(0);
    textAlign(CENTER, TOP);
    textSize(26);
    text(names[current], 200, 205);
    textSize(15);
    text(bios[current], 70, 250, 260, 90);

    textSize(14);
    text("Left arrow: nope     Right arrow: like", 200, 15);

    if (verdictTimer > 0) {
        verdictTimer = verdictTimer - 1;
        textSize(26);
        if (verdict === "LIKE") {
            fill(60, 170, 80);
        }
        else {
            fill(220, 60, 60);
        }
        text(verdict, 200, 44);
    }
}

function drawEnd() {
    fill(0);
    textAlign(CENTER, TOP);
    textSize(28);
    text("No more birds nearby", 200, 90);

    textSize(18);
    if (matches.length === 0) {
        text("You matched with nobody. The birds will be fine.", 50, 170, 300, 100);
    }
    else {
        text("You matched with: " + matches.join(", ") + ".", 50, 170, 300, 100);
    }

    textSize(15);
    text("Press any key to look again", 200, 330);
}

function drawBird(x, y, size, colour) {
    fill(colour);
    triangle(
        x - 0.45 * size, y,
        x - 0.75 * size, y - 0.15 * size,
        x - 0.75 * size, y + 0.1 * size
    );

    circle(x, y, size);

    fill(0, 50);
    ellipse(x - 0.1 * size, y + 0.05 * size, 0.5 * size, 0.3 * size);

    fill(255, 170, 0);
    triangle(
        x + 0.45 * size, y - 0.05 * size,
        x + 0.45 * size, y + 0.1 * size,
        x + 0.7 * size, y + 0.02 * size
    );

    fill(0);
    circle(x + 0.2 * size, y - 0.15 * size, 0.1 * size);
}

function swipe(liked) {
    if (liked) {
        matches.push(names[current]);
        verdict = "LIKE";
    }
    else {
        verdict = "NOPE";
    }
    verdictTimer = 40;

    current = current + 1;
}

function keyPressed() {
    if (current >= names.length) {
        current = 0;
        matches = [];
        verdictTimer = 0;
    }
    else if (key === "ArrowRight") {
        swipe(true);
    }
    else if (key === "ArrowLeft") {
        swipe(false);
    }
}
