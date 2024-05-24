// @ts-check

import RotatingFlower from "../classes/RotatingFlower";

/**
 * @name IAppState
 * @desc JSDoc type definition.
 * @author TJ
 * @typedef {Object} IAppState
 * @prop {boolean} clearEveryFrame - Clear screen every frame? Toggled by checkbox.
 * @prop {number} c - Current value of `c`. Set by &lt;select>.
 * @prop {CanvasRenderingContext2D | null} ctx
 * @prop {number} deltaC - Current value of `deltaC`. Set by &lt;select>.
 * @prop {number} deltaDivergence - Current value of `deltaDivergence`. Set by &lt;select>.
 * @prop {number} deltaPetalSize - Current value of `deltaPetalSize`. Set by &lt;select>.
 * @prop {number} divergence - Current value of `divergence`. Set by &lt;select>.
 * @prop {RotatingFlower[]} flowerList - Array of current flowers to draw.
 * @prop {string} petalColorFunctionName - Current `petalColorFunctionName`. Set by &lt;select>.
 * @prop {number} petalSize - Current `petalSize`. Set by &lt;select>.
 * @prop {string} petalStyle - Current `petalStyle`. Set by &lt;select>.
 * @prop {boolean} randomFlowers - Periodically show random flowers? Toggled by checkbox.
 */
