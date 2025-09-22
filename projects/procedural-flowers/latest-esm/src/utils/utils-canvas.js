// @ts-check
/* eslint function-call-argument-newline: 0 */
/* eslint id-length: 0 */
/* eslint max-params: 0 */
/* eslint no-magic-numbers: 1 */
/* eslint one-var: 0 */
/* eslint padded-blocks: 0 */

/**
 * @module utils-canvas
 * @desc Utility functions
 * @author TJ
 */

/**
 * @function fillCircle
 * @static
 * @desc Fills a circle in the provided <kbd>ctx</kbd>.
 * The circle is centered on  <kbd>x,y</kbd>
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @param {string} color
 */
export const fillCircle = (ctx, x, y, radius, color) => {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

/**
 * @function fillRect
 * @static
 * @desc Fills a rectangle in the provided <kbd>ctx</kbd>.
 * The rectangle's upper-left corner begins at <kbd>x,y</kbd>
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {string} color
 */
export const fillRect = (ctx, x, y, width, height, color) => {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  ctx.restore();
};
