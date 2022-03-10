import {
  bgImage,
  jumpRightImg,
  jumpLeftImg,
  platformImg,
  walkRightImg,
  standRightImg,
  standLeftImg,
  treesImg,
  lakeImg,
  fountainImg,
  attackImg,
  runImg,
  walkLeftImg,
  runLeftImg,
} from "../img";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const game = {
  state: "start",
};

function createImage(src) {
  const img = new Image();
  img.src = src;
  return img;
}
const standRight = createImage(standRightImg);
const standLeft = createImage(standLeftImg);
const walkRight = createImage(walkRightImg);
const walkLeft = createImage(walkLeftImg);
const jumpLeft = createImage(jumpLeftImg);
const jumpRight = createImage(jumpRightImg);
const tile = createImage(platformImg);
const fountain = createImage(fountainImg);
const runRight = createImage(runImg);
const runLeft = createImage(runLeftImg);

// class AnimObject {
//   constructor() {
//     this.x = 400;
//     this.y = canvas.height - 90;
//     this.image = fountainImp;
//     this.width = 72;у
//     this.height = 72;
//     this.frame = 72;
//     this.sx = 0;
//     this.currentFrame = 0;
//     this.totalFrames = 4;
//     this.frameDraws = 0;
//   }
//   draw() {
//     context.drawImage(
//       this.image,
//       this.sx,
//       0,
//       this.width,
//       this.height,
//       this.x,
//       this.y,
//       this.width,
//       this.height
//     );
//   }
// }

// const fountainObj = new AnimObject();

class Character {
  constructor() {
    this.position = {
      x: 20,
      y: 18.5,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 105;
    this.height = 105;
    this.spriteWidth = 48;
    this.spriteHeight = 48;
    this.gravity = 0.6;
    this.frame = 48;
    this.sx = 0;
    this.currentFrame = 0;
    this.totalFrames = 4;
    this.frameDraws = 0;
    this.image = jumpRight;
  }
  update(context) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.draw(context);
  }
  draw(context) {
    context.drawImage(
      this.image,
      this.sx,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

class Platform {
  constructor({ x, y, img }) {
    this.position = {
      x,
      y,
    };
    this.initPosition = {
      x,
      y,
    };
    this.width = 32;
    this.height = 32;
    this.image = img;
  }
  update(context) {
    this.draw(context);
  }
  draw(context) {
    context.drawImage(
      this.image,
      0,
      0,
      32,
      32,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

const character = new Character();
const platforms = [new Platform({ x: 50 * 31 + 100, y: 500, img: tile })];

for (let i = 1; i < 5; i++) {
  platforms.push(
    new Platform({ x: 50 * 31 + i * 100, y: 500 - i * 50, img: tile })
  );
}

for (let i = 0; i < 20; i++) {
  platforms.push(new Platform({ x: 1950 + i * 31, y: 300, img: tile }));
}

for (let i = 0; i < 50; i++) {
  platforms.push(new Platform({ x: 2539 + i * 31, y: 500, img: tile }));
}

for (let i = 0; i < 50; i++) {
  platforms.push(
    new Platform({
      x: i * 31,
      y: canvas.height - 20,
      img: tile,
    })
  );
}

class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 1024;
    this.height = canvas.height;
    this.x2 = this.width;
    this.y2 = this.height;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = 0;
  }
  update() {
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
    this.draw();
  }
  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(this.image, this.x2, this.y, this.width, this.height);
  }
}

const bg = createImage(bgImage);
const treesBg = createImage(treesImg);
const lakeBg = createImage(lakeImg);

const layers = [new Layer(treesBg, 0.5), new Layer(lakeBg)];

function createBg(context, image) {
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
}

let a = 0;
function animate() {
  if (game.state === "start") {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.font = "bold 48px serif";
    context.fillText(
      "The Canvas Game",
      canvas.width / 2 - 160,
      canvas.height / 2 - 48
    );
    if (a >= 1) {
      a = 0;
    }
    a += 0.03;
    context.fillStyle = `rgba(255, 255, 255,${a})`;
    context.font = "32px serif";
    context.fillText(
      "press enter to start",
      canvas.width / 2 - 100,
      canvas.height / 2
    );
  } else if (game.state === "lose") {
    reset(character, platforms);
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.font = "bold 48px serif";
    context.fillText(
      "Game Over",
      canvas.width / 2 - 120,
      canvas.height / 2 - 48
    );
    if (a >= 1) {
      a = 0;
    }
    a += 0.03;
    context.fillStyle = `rgba(255, 255, 255,${a})`;
    context.font = "32px serif";
    context.fillText(
      "press enter to try again",
      canvas.width / 2 - 150,
      canvas.height / 2
    );
  } else {
    createBg(context, bg);
    layers.forEach((layer) => {
      layer.update(context);
    });

    platforms.forEach((platform) => {
      platform.update(context);
    });
    if (character.position.y < canvas.height) {
      character.velocity.y += character.gravity;
    }
    if (
      character.position.y + character.height + character.velocity.y >=
      canvas.height
    ) {
      game.state = "lose";
      character.velocity.y = 0;
    }
    if (keys.left.pressed) {
      character.velocity.x = -5;
    } else if (keys.right.pressed) {
      character.velocity.x = 5;
    } else if (keys.jump.pressed) {
      character.velocity.y -= 2;
    } else {
      character.velocity.x = 0;
    }
    if (character.position.x + character.width > 400 && keys.right.pressed) {
      layers.forEach((layer) => {
        layer.speed = 1;
      });
      character.velocity.x = 0;
      platforms.forEach((platform) => {
        platform.position.x -= 3;
      });
    } else if (character.position.x < 100 && keys.left.pressed) {
      layers.forEach((layer) => {
        layer.speed = -1;
      });
      character.velocity.x = 0;
      platforms.forEach((platform) => {
        platform.position.x += 3;
      });
    } else {
      layers.forEach((layer) => {
        layer.speed = 0;
      });
    }
    character.currentFrame = character.currentFrame % character.totalFrames;
    character.sx = character.currentFrame * character.spriteWidth;

    character.frameDraws++;
    if (character.frameDraws >= 10) {
      character.currentFrame++;
      character.frameDraws = 0;
    }
    // fountainObj.currentFrame =
    //   fountainObj.currentFrame % fountainObj.totalFrames;
    // fountainObj.sx = fountainObj.currentFrame * fountainObj.width;

    // fountainObj.frameDraws++;
    // if (fountainObj.frameDraws >= 10) {
    //   fountainObj.currentFrame++;
    //   fountainObj.frameDraws = 0;
    // }
    // fountainObj.draw();
    platforms.forEach((platform) => {
      if (
        character.position.x + character.width / 2 >= platform.position.x &&
        character.position.x <= platform.position.x + platform.width - 10 &&
        character.position.y + character.height <= platform.position.y &&
        character.position.y + character.height + character.velocity.y >=
          platform.position.y
      ) {
        character.velocity.y = 0;
      }
    });

    if (character.position.y < canvas.height) {
      if (character.velocity.x < 0) {
        character.image = jumpLeft;
      }
      if (character.velocity.x > 0) {
        character.image = jumpRight;
      }
    }
    if (character.velocity.y === 0) {
      if (keys.right.pressed) {
        character.image = walkRight;
      }
      if (keys.left.pressed) {
        character.image = walkLeft;
      }
    }

    // changes of images
    if (keys.run.pressed) {
      if (keys.right.pressed) {
        character.image = runRight;
        platforms.forEach((platform) => {
          platform.position.x -= 3;
        });
        layers.forEach((layer) => {
          layer.speed = 2;
        });
      }
      if (keys.left.pressed) {
        character.image = runLeft;
        platforms.forEach((platform) => {
          platform.position.x += 3;
        });
        layers.forEach((layer) => {
          layer.speed = -2;
        });
      }
    }
    character.update(context);
    context.restore();
  }

  requestAnimationFrame(animate);
}

const keys = {
  left: {
    pressed: false,
  },
  right: {
    pressed: false,
  },
  run: {
    pressed: false,
  },
  jump: {
    pressed: false,
  },
};

addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "a": {
      keys.left.pressed = true;

      break;
    }
    case "s": {
      break;
    }
    case "d": {
      keys.right.pressed = true;
      break;
    }
    case "Enter": {
      game.state = "in process";
      break;
    }
    case "q": {
      keys.run.pressed = true;
      break;
    }
    case "w": {
      if (keys.run.pressed) {
        console.log("a");
        character.velocity.y -= 15;
      } else {
        character.velocity.y -= 10;
      }
      break;
    }
  }
});

addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "a": {
      keys.left.pressed = false;
      character.image = standLeft;
      break;
    }
    case "s": {
      break;
    }
    case "d": {
      keys.right.pressed = false;
      character.image = standRight;
      break;
    }
    case "w": {
      break;
    }
    case "q": {
      keys.run.pressed = false;
      break;
    }
  }
});

function reset(character, platforms) {
  character.position.x = 20;
  character.position.y = 18;
  character.velocity.x = 0;
  platforms.forEach((platform) => {
    platform.position.x = platform.initPosition.x;
    platform.position.y = platform.initPosition.y;
  });
}

animate();
