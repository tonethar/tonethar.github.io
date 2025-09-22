// @ts-check
/* eslint max-params: 0 */

import "../types/IPoint.js";

/**
 * @module utils
 * @desc Utility functions
 * @author TJ
 */

 /**
 * @function assertNonNull
 * @static
 * @author https://docs.joshuatz.com/cheatsheets/js/jsdoc/
 * @desc Utility function because we can't use a TS-style post-fix assert (yet) in JSDoc
 *  - Takes any union type and excludes `null`
 * @template T
 * @param {T} thing - any union type
 * @returns {Exclude<T, null>}
 */
 export const assertNonNull = thing => {
	return /** @type {Exclude<T, null>} */ (thing);
}

/**
 * @name assertIsNonNull
 * @author https://stackoverflow.com/questions/74383150/jsdoc-non-null-assertion
 * In lieu of writing in TypeScript and having the convenient non-null assertion
 * operator (!), this helper function allows asserting that something is not
 * null or undefined without having to write a JSDoc type cast that has to
 * explicitly know the non-null type (which is error prone).
 * @template {any} T
 * @param {T} item
 */
export const assertIsNotNull = (item) => {
  if (item === null || item === undefined) throw 'item is null or undefined';
  return item;
};

/**
 * @function dtr
 * @static
 * @desc Converts degree values to radians.
 * @param {number} degrees - The value in degrees.
 * @returns {number} The value in radians.
 */
export const dtr = degrees => degrees * (Math.PI/180);

/**
 * @function randomArrayElement
 * @static
 * @param {any[]} arr 
 * @returns {any}
 */
export const randomArrayElement = arr => arr[Math.floor(Math.random() * arr.length)];

/**
 * @function randomNumber
 * @static
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export const randomNumber = (min, max) => Math.random() * (max - min) + min;

/**
 * @function getXY
 * @static
 * @param {!MouseEvent} evt
 * @returns {IPoint}
 */
export const getXY = evt =>  {
  const x = evt.offsetX;
  const y = evt.offsetY;
  return {x, y};
};

/**
 * @function goFullScreen
 * @static
 * @param {HTMLElement} element
 */
export const goFullScreen = element => element.requestFullscreen();
