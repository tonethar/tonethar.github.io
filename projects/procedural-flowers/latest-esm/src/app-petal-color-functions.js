// @ts-check

import { randomArrayElement } from "./utils/utils.js";

/**
 * @module app-color-functions
 * @desc Functions for determining color of petal.
 * @author TJ
 */

/* PETAL COLOR FUNCTION DEFINITIONS */
/**
 * @name petalColorFunc1
 * @desc RGB red value increases with age (`n`) of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
//const petalColorFunc1 = (n, divergence) => `rgb(${n % 256},${(n % 256)/2},${128 - (n % 256)/2})`; 
const petalColorFunc1 = (n, divergence) => `rgb(${255-(n % 256)},${255-(n % 256)/2},${128 - (n % 256)/2})`; 

/**
 * @name petalColorFunc2
 * @desc RGB `red` value increases with accumulated rotation of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
const petalColorFunc2 = (n, divergence) => {
  const aDegrees = (n * divergence) % 256;
  return `rgb(${aDegrees},64,${(n%255)*2})`;
};

/**
 * @name petalColorFunc3
 * @desc HSL `hue` value increases with accumulated rotation of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
const petalColorFunc3 = (n, divergence) => {
  const aDegrees = (n * divergence) % 361;
  return `hsl(${aDegrees/2},100%,${80 - aDegrees%30}%)`;
};

/**
 * @name petalColorFunc4
 * @desc HSL `hue` value increases with age (`n`) of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
const petalColorFunc4 = (n, divergence) => `hsl(${n/5 % 361},100%,50%)`;

/**
 * @name petalColorFunc5
 * @desc HSL `hue` value increases with age (`n`) of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
const petalColorFunc5 = (n, divergence) => `hsl(${360 - (n/5 % 361)},100%,50%)`;

const petalColorFunc6 = (n, divergence) => `hsl(${360 - (Math.random() * 360) % 361},100%,50%)`;

/* PUBLIC */
/**
 * @type {Object}
 */
const colorFunctions = {
  "adjust-rgb-red-green-blue":  petalColorFunc1,
  "adjust-rgb-red-blue":        petalColorFunc2,
  "increase-hue-rotation":      petalColorFunc3,
  "increase-hue-each-petal":    petalColorFunc4,
  "decrease-hue-each-petal":    petalColorFunc5,
  "random-hue":                 petalColorFunc6, 
};

/**
 * @static colorFunctionKeys
 * @desc Returns an array of color function keys allowed by `getPetalColorFunction()`
 * @returns {string[]}
 */
export const colorFunctionKeys = () => Object.keys(colorFunctions);

/**
 * @static getPetalColorFunction
 * @desc Public interface for color functions
 * @param {string} funcName 
 * @returns {IFlowerPetalDrawFunc}
 */
export const getPetalColorFunction = funcName => {
  if (colorFunctions[funcName]){
    return colorFunctions[funcName];
  }else{
    throw `Unknown petal color funcName of ${funcName}`;
  }
};

/**
 * @type {IFlowerPetalColorFunc[]}
 */
const weightedPetalColorFunctions = [  petalColorFunc1, petalColorFunc2, petalColorFunc3, petalColorFunc4, petalColorFunc5, ];

/**
 * @static randomPetalColorFunction
 * @desc Returns a random petal color function.
 * @returns {IFlowerPetalColorFunc}
 */
export const randomPetalColorFunction = () => randomArrayElement(weightedPetalColorFunctions);


let petalIndex = 3;
/**
 * @static getNextPetalColorFunction
 * @returns {IFlowerPetalColorFunc}
 * @desc Returns the "next" petal color function in `weightedPetalColorFunctions`
 */
export const getNextPetalColorFunction = () => {
  petalIndex++;
  if(petalIndex >= weightedPetalColorFunctions.length) petalIndex=0;
  return weightedPetalColorFunctions[petalIndex];
};