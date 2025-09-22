// @ts-check
import appDefaults from "./app-defaults.js";

/**
 * @module app-state
 * @description Current state variables of app. Contains `IAppState` interface and `state` object literal.
 * @author TJ
 */

/**
 * @name state
 * @type {import("./types/IAppState").IAppState}
 * @static
 * @desc Mutable app state variables that can change over time. Most of these could be saved to localStorage.
 */
const state = Object.seal({
  clearEveryFrame:        appDefaults.uiClearEveryFrame,
  c:                      appDefaults.uiC,
  ctx:                    null,
  deltaC:                 appDefaults.uiDeltaC,
  deltaDivergence:        appDefaults.uiDeltaDivergence,
  deltaPetalSize:         appDefaults.uiDeltaPetalSize,
  divergence:             appDefaults.uiDivergence,
  petalColorFunctionName: appDefaults.uiPetalColorFunctionName,
  petalSize:              appDefaults.uiPetalSize,
  petalStyle:             appDefaults.uiPetalDrawFunctionName,
  flowerList:             [],
  randomFlowers:          appDefaults.uiRandomFlowers,
});

export default state;
