// @ts-check
/**
 * @name IFlowerParams
 * @desc JSDoc type definition. These are also properties of the Flower class.
 * @author TJ
 * @typedef {Object} IFlowerParams
 * @prop {number} c - spacing between petals.
 * @prop {number} centerX - center `x` of Flower around which petals are drawn.
 * @prop {number} centerY - center `y` of Flower around which petals are drawn.
 * @prop {number} divergence - rotation (in radians) between successive petals.
 * @prop {number} petalSize - width of each petal in pixels.
 * @prop {Function} drawPetalFunction - function that draws petals.
 * @prop {number} [alpha=1] - opacity of entire flower
 * @prop {Function} [colorFunction=0] - function used to determine color of petal.
 * @prop {number} [deltaRotation=0] - `rotation` delta per frame.
 * @prop {number} [deltaC=0] - `c` delta per frame.
 * @prop {number} [deltaDivergence=0] - `divergence` delta per frame.
 * @prop {number} [deltaPetalSize=0] - `petalSize` delta per frame.
 * @prop {number} [rotation=0] - rotation of flower in radians.
 */
