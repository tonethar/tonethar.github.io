// @ts-check
/**
 * @name IAppDefaults
 * @desc JSDoc type definition.
 * @author TJ
 * @typedef {Object} IAppDefaults
 * @prop {number} canvasWidth - width of canvas in pixels.
 * @prop {number} canvasHeight - height of canvas in pixels.
 * @prop {string} clearColor - CSS color to fill background with.
 * @prop {number} deltaRotation - `rotation` delta per frame.
 * @prop {number} fps - target frames-per-second of animation loop.
 * @prop {number} maxFlowers - maximum number of flowers to render.
 * @prop {number} maxPetals - maximum number of petals each flower will contain.
 * @prop {number} minFlowerOpacity - minimum opacity of randomly generated flowers.
 * @prop {number[]} randomDivergenceValues - an array of divergence values.
 * @prop {number} randomFlowerDelay - time between randomly spawned flowers in milliseconds.
 * @prop {number} randomFlowerPadding - offset in pixels of randomly spawned flowers.
 * @prop {number} uiC - padding between petals in pixels.
 * @prop {number[]} uiCDeltaValues
 * @prop {boolean} uiClearEveryFrame - Clear screen every frame?
 * @prop {string[]} uiColorFunctionValues
 * @prop {number[]} uiCValues
 * @prop {number} uiDeltaC - `c` delta per frame.
 * @prop {number} uiDeltaDivergence - `divergence` delta per frame.
 * @prop {number} uiDeltaPetalSize - `petalSize` delta per frame.
 * @prop {number} uiDivergence - degrees of rotation per frame.
 * @prop {number[]} uiDivergenceDeltaValues
 * @prop {number[]} uiDivergenceValues
 * @prop {string[]} uiDrawFunctionValues
 * @prop {string} uiPetalColorFunctionName - name of color function used for petals. 
 * @prop {string} uiPetalDrawFunctionName - drawing function used for petals. 
 * @prop {number} uiPetalSize - radius of petals in pixels.
 * @prop {number[]} uiPetalSizeDeltaValues 
 * @prop {number[]} uiPetalSizeValues
 * @prop {boolean} uiRandomFlowers - periodically display random flowers?
 */
