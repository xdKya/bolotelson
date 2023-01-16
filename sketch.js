var sprite, database, position;

function setup() {
  createCanvas(500, 500);

  sprite = createSprite(250, 250, 20, 20);
  sprite.shapeColor = "rgb(252,15,180)";
}

function draw() {
  background("white");

  if (keyDown("d")) {
    sprite.x += 5;
  }
  if (keyDown("a")) {
    sprite.x -= 5;
  }
  if (keyDown("s")) {
    sprite.y += 5;
  }
  if (keyDown("w")) {
    sprite.y -= 5;
  }

  drawSprites();
}
