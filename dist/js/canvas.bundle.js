/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/1 Tiles/Tile_09.png":
/*!*************************************!*\
  !*** ./src/img/1 Tiles/Tile_09.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "18e554aeca1a44197b792733aa859201.png");

/***/ }),

/***/ "./src/img/1 Woodcutter/Woodcutter_attack1.png":
/*!*****************************************************!*\
  !*** ./src/img/1 Woodcutter/Woodcutter_attack1.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fd43e22c694226ec0006b70c8bee5761.png");

/***/ }),

/***/ "./src/img/1 Woodcutter/Woodcutter_idle.png":
/*!**************************************************!*\
  !*** ./src/img/1 Woodcutter/Woodcutter_idle.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3a0d2fc0b3fbfb9dc4686a232ef980aa.png");

/***/ }),

/***/ "./src/img/1 Woodcutter/Woodcutter_idleLeft.png":
/*!******************************************************!*\
  !*** ./src/img/1 Woodcutter/Woodcutter_idleLeft.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1eba72646d576a9bdb69a0448ff0a68d.png");

/***/ }),

/***/ "./src/img/1 Woodcutter/Woodcutter_jump.png":
/*!**************************************************!*\
  !*** ./src/img/1 Woodcutter/Woodcutter_jump.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7f17d3159a3694da6dd4749c13080a8a.png");

/***/ }),

/***/ "./src/img/1 Woodcutter/Woodcutter_jumpLeft.png":
/*!******************************************************!*\
  !*** ./src/img/1 Woodcutter/Woodcutter_jumpLeft.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d510e2f2ee1506e1126c5d4f74c9ffd9.png");

/***/ }),

/***/ "./src/img/1 Woodcutter/Woodcutter_run.png":
/*!*************************************************!*\
  !*** ./src/img/1 Woodcutter/Woodcutter_run.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "561c1a9f65d128e1887a1d79d49b579d.png");

/***/ }),

/***/ "./src/img/1 Woodcutter/Woodcutter_runLeft.png":
/*!*****************************************************!*\
  !*** ./src/img/1 Woodcutter/Woodcutter_runLeft.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fd6de89e61b2fd43870f3912cbcb5b6c.png");

/***/ }),

/***/ "./src/img/1 Woodcutter/Woodcutter_walk.png":
/*!**************************************************!*\
  !*** ./src/img/1 Woodcutter/Woodcutter_walk.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "594783f81516fa3026f29c81f4ee2364.png");

/***/ }),

/***/ "./src/img/1 Woodcutter/Woodcutter_walkLeft.png":
/*!******************************************************!*\
  !*** ./src/img/1 Woodcutter/Woodcutter_walkLeft.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a5318eccd545146e65b65e5ec2e48fef.png");

/***/ }),

/***/ "./src/img/4 Animated objects/Fountain.png":
/*!*************************************************!*\
  !*** ./src/img/4 Animated objects/Fountain.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ccaa4b25fc959e0d89e70e5eea226a11.png");

/***/ }),

/***/ "./src/img/Layers/1.png":
/*!******************************!*\
  !*** ./src/img/Layers/1.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1bb47fe5653bf7f8282ffd778cfe29f8.png");

/***/ }),

/***/ "./src/img/Layers/2.png":
/*!******************************!*\
  !*** ./src/img/Layers/2.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "be16397ff0cf87dd6a81c8d446de80c1.png");

/***/ }),

/***/ "./src/img/Layers/4.png":
/*!******************************!*\
  !*** ./src/img/Layers/4.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "aafdfb3541cb799cb6ddb6cc0c7194c1.png");

/***/ }),

/***/ "./src/img/index.js":
/*!**************************!*\
  !*** ./src/img/index.js ***!
  \**************************/
/*! exports provided: standRightImg, standLeftImg, walkRightImg, walkLeftImg, jumpLeftImg, jumpRightImg, platformImg, bgImage, treesImg, lakeImg, trees2Img, fountainImg, attackImg, runImg, runLeftImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_1_Woodcutter_Woodcutter_idle_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/1 Woodcutter/Woodcutter_idle.png */ "./src/img/1 Woodcutter/Woodcutter_idle.png");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "standRightImg", function() { return _img_1_Woodcutter_Woodcutter_idle_png__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _img_1_Woodcutter_Woodcutter_idleLeft_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/1 Woodcutter/Woodcutter_idleLeft.png */ "./src/img/1 Woodcutter/Woodcutter_idleLeft.png");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "standLeftImg", function() { return _img_1_Woodcutter_Woodcutter_idleLeft_png__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _img_1_Woodcutter_Woodcutter_walk_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/1 Woodcutter/Woodcutter_walk.png */ "./src/img/1 Woodcutter/Woodcutter_walk.png");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walkRightImg", function() { return _img_1_Woodcutter_Woodcutter_walk_png__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _img_1_Woodcutter_Woodcutter_walkLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/1 Woodcutter/Woodcutter_walkLeft.png */ "./src/img/1 Woodcutter/Woodcutter_walkLeft.png");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walkLeftImg", function() { return _img_1_Woodcutter_Woodcutter_walkLeft_png__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _img_1_Woodcutter_Woodcutter_jump_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/1 Woodcutter/Woodcutter_jump.png */ "./src/img/1 Woodcutter/Woodcutter_jump.png");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jumpRightImg", function() { return _img_1_Woodcutter_Woodcutter_jump_png__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _img_1_Woodcutter_Woodcutter_jumpLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/1 Woodcutter/Woodcutter_jumpLeft.png */ "./src/img/1 Woodcutter/Woodcutter_jumpLeft.png");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jumpLeftImg", function() { return _img_1_Woodcutter_Woodcutter_jumpLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _img_1_Tiles_Tile_09_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/1 Tiles/Tile_09.png */ "./src/img/1 Tiles/Tile_09.png");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "platformImg", function() { return _img_1_Tiles_Tile_09_png__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _img_Layers_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/Layers/1.png */ "./src/img/Layers/1.png");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bgImage", function() { return _img_Layers_1_png__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Layers_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Layers/2.png */ "./src/img/Layers/2.png");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treesImg", function() { return _Layers_2_png__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Layers_4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Layers/4.png */ "./src/img/Layers/4.png");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lakeImg", function() { return _Layers_4_png__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trees2Img", function() { return _Layers_2_png__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _4_Animated_objects_Fountain_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./4 Animated objects/Fountain.png */ "./src/img/4 Animated objects/Fountain.png");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fountainImg", function() { return _4_Animated_objects_Fountain_png__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _1_Woodcutter_Woodcutter_attack1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./1 Woodcutter/Woodcutter_attack1.png */ "./src/img/1 Woodcutter/Woodcutter_attack1.png");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attackImg", function() { return _1_Woodcutter_Woodcutter_attack1_png__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _1_Woodcutter_Woodcutter_run_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./1 Woodcutter/Woodcutter_run.png */ "./src/img/1 Woodcutter/Woodcutter_run.png");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runImg", function() { return _1_Woodcutter_Woodcutter_run_png__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _1_Woodcutter_Woodcutter_runLeft_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./1 Woodcutter/Woodcutter_runLeft.png */ "./src/img/1 Woodcutter/Woodcutter_runLeft.png");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runLeftImg", function() { return _1_Woodcutter_Woodcutter_runLeft_png__WEBPACK_IMPORTED_MODULE_13__["default"]; });


















/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img */ "./src/img/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
var game = {
  state: "start"
};

function createImage(src) {
  var img = new Image();
  img.src = src;
  return img;
}

var standRight = createImage(_img__WEBPACK_IMPORTED_MODULE_0__["standRightImg"]);
var standLeft = createImage(_img__WEBPACK_IMPORTED_MODULE_0__["standLeftImg"]);
var walkRight = createImage(_img__WEBPACK_IMPORTED_MODULE_0__["walkRightImg"]);
var walkLeft = createImage(_img__WEBPACK_IMPORTED_MODULE_0__["walkLeftImg"]);
var jumpLeft = createImage(_img__WEBPACK_IMPORTED_MODULE_0__["jumpLeftImg"]);
var jumpRight = createImage(_img__WEBPACK_IMPORTED_MODULE_0__["jumpRightImg"]);
var tile = createImage(_img__WEBPACK_IMPORTED_MODULE_0__["platformImg"]);
var fountain = createImage(_img__WEBPACK_IMPORTED_MODULE_0__["fountainImg"]);
var runRight = createImage(_img__WEBPACK_IMPORTED_MODULE_0__["runImg"]);
var runLeft = createImage(_img__WEBPACK_IMPORTED_MODULE_0__["runLeftImg"]); // class AnimObject {
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

var Character = /*#__PURE__*/function () {
  function Character() {
    _classCallCheck(this, Character);

    this.position = {
      x: 20,
      y: 18.5
    };
    this.velocity = {
      x: 0,
      y: 0
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

  _createClass(Character, [{
    key: "update",
    value: function update(context) {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.draw(context);
    }
  }, {
    key: "draw",
    value: function draw(context) {
      context.drawImage(this.image, this.sx, 0, this.spriteWidth, this.spriteHeight, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Character;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        img = _ref.img;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.initPosition = {
      x: x,
      y: y
    };
    this.width = 32;
    this.height = 32;
    this.image = img;
  }

  _createClass(Platform, [{
    key: "update",
    value: function update(context) {
      this.draw(context);
    }
  }, {
    key: "draw",
    value: function draw(context) {
      context.drawImage(this.image, 0, 0, 32, 32, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Platform;
}();

var character = new Character();
var platforms = [new Platform({
  x: 50 * 31 + 100,
  y: 500,
  img: tile
})];

for (var i = 1; i < 5; i++) {
  platforms.push(new Platform({
    x: 50 * 31 + i * 100,
    y: 500 - i * 50,
    img: tile
  }));
}

for (var _i = 0; _i < 20; _i++) {
  platforms.push(new Platform({
    x: 1950 + _i * 31,
    y: 300,
    img: tile
  }));
}

for (var _i2 = 0; _i2 < 50; _i2++) {
  platforms.push(new Platform({
    x: 2539 + _i2 * 31,
    y: 500,
    img: tile
  }));
}

for (var _i3 = 0; _i3 < 50; _i3++) {
  platforms.push(new Platform({
    x: _i3 * 31,
    y: canvas.height - 20,
    img: tile
  }));
}

var Layer = /*#__PURE__*/function () {
  function Layer(image, speedModifier) {
    _classCallCheck(this, Layer);

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

  _createClass(Layer, [{
    key: "update",
    value: function update() {
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
  }, {
    key: "draw",
    value: function draw() {
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
      context.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
  }]);

  return Layer;
}();

var bg = createImage(_img__WEBPACK_IMPORTED_MODULE_0__["bgImage"]);
var treesBg = createImage(_img__WEBPACK_IMPORTED_MODULE_0__["treesImg"]);
var lakeBg = createImage(_img__WEBPACK_IMPORTED_MODULE_0__["lakeImg"]);
var layers = [new Layer(treesBg, 0.5), new Layer(lakeBg)];

function createBg(context, image) {
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
}

var a = 0;

function animate() {
  if (game.state === "start") {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.font = "bold 48px serif";
    context.fillText("The Canvas Game", canvas.width / 2 - 160, canvas.height / 2 - 48);

    if (a >= 1) {
      a = 0;
    }

    a += 0.03;
    context.fillStyle = "rgba(255, 255, 255,".concat(a, ")");
    context.font = "32px serif";
    context.fillText("press enter to start", canvas.width / 2 - 100, canvas.height / 2);
  } else if (game.state === "lose") {
    reset(character, platforms);
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.font = "bold 48px serif";
    context.fillText("Game Over", canvas.width / 2 - 120, canvas.height / 2 - 48);

    if (a >= 1) {
      a = 0;
    }

    a += 0.03;
    context.fillStyle = "rgba(255, 255, 255,".concat(a, ")");
    context.font = "32px serif";
    context.fillText("press enter to try again", canvas.width / 2 - 150, canvas.height / 2);
  } else {
    createBg(context, bg);
    layers.forEach(function (layer) {
      layer.update(context);
    });
    platforms.forEach(function (platform) {
      platform.update(context);
    });

    if (character.position.y < canvas.height) {
      character.velocity.y += character.gravity;
    }

    if (character.position.y + character.height + character.velocity.y >= canvas.height) {
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
      layers.forEach(function (layer) {
        layer.speed = 1;
      });
      character.velocity.x = 0;
      platforms.forEach(function (platform) {
        platform.position.x -= 3;
      });
    } else if (character.position.x < 100 && keys.left.pressed) {
      layers.forEach(function (layer) {
        layer.speed = -1;
      });
      character.velocity.x = 0;
      platforms.forEach(function (platform) {
        platform.position.x += 3;
      });
    } else {
      layers.forEach(function (layer) {
        layer.speed = 0;
      });
    }

    character.currentFrame = character.currentFrame % character.totalFrames;
    character.sx = character.currentFrame * character.spriteWidth;
    character.frameDraws++;

    if (character.frameDraws >= 10) {
      character.currentFrame++;
      character.frameDraws = 0;
    } // fountainObj.currentFrame =
    //   fountainObj.currentFrame % fountainObj.totalFrames;
    // fountainObj.sx = fountainObj.currentFrame * fountainObj.width;
    // fountainObj.frameDraws++;
    // if (fountainObj.frameDraws >= 10) {
    //   fountainObj.currentFrame++;
    //   fountainObj.frameDraws = 0;
    // }
    // fountainObj.draw();


    platforms.forEach(function (platform) {
      if (character.position.x + character.width / 2 >= platform.position.x && character.position.x <= platform.position.x + platform.width - 10 && character.position.y + character.height <= platform.position.y && character.position.y + character.height + character.velocity.y >= platform.position.y) {
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
    } // changes of images


    if (keys.run.pressed) {
      if (keys.right.pressed) {
        character.image = runRight;
        platforms.forEach(function (platform) {
          platform.position.x -= 3;
        });
        layers.forEach(function (layer) {
          layer.speed = 2;
        });
      }

      if (keys.left.pressed) {
        character.image = runLeft;
        platforms.forEach(function (platform) {
          platform.position.x += 3;
        });
        layers.forEach(function (layer) {
          layer.speed = -2;
        });
      }
    }

    character.update(context);
    context.restore();
  }

  requestAnimationFrame(animate);
}

var keys = {
  left: {
    pressed: false
  },
  right: {
    pressed: false
  },
  run: {
    pressed: false
  },
  jump: {
    pressed: false
  }
};
addEventListener("keydown", function (_ref2) {
  var key = _ref2.key;

  switch (key) {
    case "a":
      {
        keys.left.pressed = true;
        break;
      }

    case "s":
      {
        break;
      }

    case "d":
      {
        keys.right.pressed = true;
        break;
      }

    case "Enter":
      {
        game.state = "in process";
        break;
      }

    case "q":
      {
        keys.run.pressed = true;
        break;
      }

    case "w":
      {
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
addEventListener("keyup", function (_ref3) {
  var key = _ref3.key;

  switch (key) {
    case "a":
      {
        keys.left.pressed = false;
        character.image = standLeft;
        break;
      }

    case "s":
      {
        break;
      }

    case "d":
      {
        keys.right.pressed = false;
        character.image = standRight;
        break;
      }

    case "w":
      {
        break;
      }

    case "q":
      {
        keys.run.pressed = false;
        break;
      }
  }
});

function reset(character, platforms) {
  character.position.x = 20;
  character.position.y = 18;
  character.velocity.x = 0;
  platforms.forEach(function (platform) {
    platform.position.x = platform.initPosition.x;
    platform.position.y = platform.initPosition.y;
  });
}

animate();

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map