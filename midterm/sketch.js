var platform = [];
var gravity = 1;
var jump = 15;
var coinCount = 0;
var timer = 3;
var newGame = true;

function setup() {
    createCanvas(800, 400);
    platform[0] = createSprite(200, 275, 80, 10);
    platform[1] = createSprite(400, 275, 80, 10);
    platform[2] = createSprite(600, 275, 80, 10);
    platform[3] = createSprite(300, 175, 80, 10);
    platform[4] = createSprite(500, 175, 70, 10);
    platform[5] = createSprite(400, 100, 80, 10);
    playerSprite = createSprite(50, 200, 30, 30);
    playerSprite.shapeColor = color(255, 0, 0);
    base = createSprite(400, 375, 800, 50);
    var coinSpawn = int(random(platform.length));
    coin = createSprite(platform[coinSpawn].position.x, platform[coinSpawn].position.y - 30, 20, 20);
    coin.shapeColor = color(255, 255, 0);
    counter = createSprite(20, 20, 20, 20);
    counter.shapeColor = color(255, 255, 0);
    if (newGame) {
        setInterval(timerValue, 1000);
        newGame = false;
        //        end.remove();
    }
    ALL = new Group();
    ALL.add(platform[0]);
    ALL.add(platform[1]);
    ALL.add(platform[2]);
    ALL.add(platform[3]);
    ALL.add(platform[4]);
    ALL.add(platform[5]);
    ALL.add(coin);
    ALL.add(counter);
    ALL.add(playerSprite);
    ALL.add(base);
}

function draw() {
    background('#696565');
    playerSprite.debug = mouseIsPressed;
    base.debug = mouseIsPressed;
    coin.debug = mouseIsPressed;
    platform[0].debug = mouseIsPressed;
    platform[1].debug = mouseIsPressed;
    platform[2].debug = mouseIsPressed;
    platform[3].debug = mouseIsPressed;
    platform[4].debug = mouseIsPressed;
    platform[5].debug = mouseIsPressed;

    playerSprite.velocity.y += gravity;
    if (playerSprite.collide(base)) {
        playerSprite.velocity.y = 0;
    }

    if (playerSprite.collide(platform[0])) {
        playerSprite.velocity.y = 0;
    }

    if (playerSprite.collide(platform[1])) {
        playerSprite.velocity.y = 0;
    }

    if (playerSprite.collide(platform[2])) {
        playerSprite.velocity.y = 0;
    }

    if (playerSprite.collide(platform[3])) {
        playerSprite.velocity.y = 0;
    }

    if (playerSprite.collide(platform[4])) {
        playerSprite.velocity.y = 0;
    }

    if (playerSprite.collide(platform[5])) {
        playerSprite.velocity.y = 0;
    }

    if (keyWentDown(UP_ARROW)) {
        playerSprite.velocity.y = -jump;
    }

    if (keyIsDown(LEFT_ARROW)) {
        playerSprite.velocity.x = -5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        playerSprite.velocity.x = 5;
    }

    if (!keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW)) {
        playerSprite.velocity.x = 0;
    }

    if (playerSprite.overlap(coin)) {
        spawnCoin();
    }

    fill(0);

//    if (coinCount > 5) {
//        resetCount();
//    }

//    if (timer != 0) {
//        text(timer + " SECONDS", 50, 50);
//        text(' X ' + coinCount, 35, 25);
//    }

        text(' X ' + coinCount, 35, 25);

//    if (timer == 0) {
//        end = createSprite(400, 200, 800, 400);
        
//    } else if (typeof end !== 'undefined') {
//        end.remove();
//    }
//    if (timer == 0 && mouseIsPressed) {
//        ALL.removeSprites();
//        end.shapeColor = color(0, 255, 0);
//        coinCount = 0;
//        timer = 3;
//        setup();
//    }

    drawSprites();

}

function spawnCoin() {
    var coinSpawn = int(random(platform.length));
    coin.position.x = platform[coinSpawn].position.x;
    coin.position.y = platform[coinSpawn].position.y - 30;
    coinCount++
}

function resetCount() {
    coinCount = 0;
}

function timerValue() {
    if (timer > 0) {
        timer--;
    }
}
