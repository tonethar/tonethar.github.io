// @ts-check
/* eslint max-params: 0 */

import "./types/IFlowerPetalDrawFunc.js";
import { randomArrayElement } from "./utils/utils.js";

/**
 * @module petal-functions
 * @desc Functions that are used to draw flower petals. These functions conform to the FlowerPetalDrawFunc interface.
 * @author TJ
 */

/* PETAL DRAWING FUNCTION DEFINITIONS */
/**
 * @name petalFillDisc
 * @desc Draws a filled circle.
 * @function {FlowerPetalDrawFunc}
 * @prop {CanvasRenderingContext2D} ctx - drawing context where the petal will be rendered.
 * @prop {number} x - 'x' of petal.
 * @prop {number} y - 'y' of petal.
 * @prop {number} radius - 1/2 width of each petal in pixels.
 * @prop {string} color - CSS color of petal.
 */
const petalFillDisc = (ctx, x, y, radius, color) => {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

/**
 * @name petalFillOval
 * @function {FlowerPetalDrawFunc}
 * @desc Draws a squashed filled circle in the provided <kbd>ctx</kbd>. The circle is centered on  <kbd>x,y</kbd>
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} x 
 * @param {number} y 
 * @param {number} radius 
 * @param {string} color 
 */
const petalFillOval = (ctx, x, y, radius, color) => {
  ctx.save();
  ctx.scale(1.1, .9);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

/**
 * @name petalStrokeCircle
 * @function {FlowerPetalDrawFunc}
 * @desc strokes a circle in the provided <kbd>ctx</kbd>. The circle is centered on  <kbd>x,y</kbd>
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} x 
 * @param {number} y 
 * @param {number} radius 
 * @param {string} color 
 */
const petalStrokeCircle = (ctx, x, y, radius, color) => {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

/**
 * @name petalFillSquare
 * @function {FlowerPetalDrawFunc}
 * @desc fills a square in the provided <kbd>ctx</kbd>. The circle is centered on  <kbd>x,y</kbd>
 * @param {*} ctx 
 * @param {*} x 
 * @param {*} y 
 * @param {*} radius 
 * @param {*} color 
 */
const petalFillSquare = (ctx, x, y, radius, color) => {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(x - radius/2, y - radius/2, radius, radius);
  ctx.restore();
};


/* PUBLIC */
/**
 * @type {Object}
 */
const drawFunctions = Object.freeze({
  Circle: petalStrokeCircle,
  Disc:   petalFillDisc,
  Oval:   petalFillOval,
  Square: petalFillSquare,
});

/**
 * @function drawFunctionKeys
 * @desc Returns an array of draw function keys allowed by `getPetalDrawFunction()`
 * @returns {string[]}
 */
export const drawFunctionKeys = () => Object.keys(drawFunctions);

/**
 * @function getPetalDrawFunction
 * @desc Public interface for draw functions
 * @param {string} funcName 
 * @returns {IFlowerPetalDrawFunc}
 */
export const getPetalDrawFunction = funcName => {
  if (drawFunctions[funcName]){
    return drawFunctions[funcName];
  }else{
    throw `Unknown petal draw funcName of ${funcName}`;
  }
}
/**
 * @type {IFlowerPetalDrawFunc[]}
 */
const weightedFunctions = [petalFillDisc, petalFillDisc, petalFillDisc, petalStrokeCircle, petalFillSquare, petalFillOval];

/**
 * @function randomPetalDrawFunction
 * @desc Returns a random petal drawing function.
 * @returns {IFlowerPetalDrawFunc}
 */
export const randomPetalDrawFunction = () => randomArrayElement(weightedFunctions);
