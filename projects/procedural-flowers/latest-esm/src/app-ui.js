// @ts-check
import { assertIsNotNull } from "./utils/utils.js";
import { fillRect } from "./utils/utils-canvas.js";

// JSDoc interface
import "./types/IUICallbacks.js";
import "./types/IAppDefaults.js";

/**
 * @function setupUI
 * @param {IAppDefaults} defaults
 * @param {import("./types/IAppState.js").IAppState} state 
 * @param {IUICallbacks} callbacks 
 */
export const setupUI = (defaults, state, callbacks) => {
  const ctx = assertIsNotNull(state.ctx);
  const canvas = ctx.canvas;

  /* PRIVATE HELPER FUNCTIONS */
  /**
   * @function populateSelect
   * @desc Assigns the elements of a flat array to the provided <select>
   * @param {HTMLSelectElement} ref 
   * @param {string[] | number[]} dataArray 
   */
  const populateSelect = (ref, dataArray) => {
    let html = dataArray.map(val => `<option value="${val}">${val}</option>`).join("");
    ref.innerHTML = html;
  };

  /**
   * @function changePropMostRecentFlower
   * @desc 
   * @param {string} propName
   * @param {number|function} newPropValue
   */
  const changePropMostRecentFlower = (propName, newPropValue) => {
    if(!state.flowerList.length) throw "state.flowerList array is unexpectedly empty!";
    (state.flowerList[state.flowerList.length-1])[propName] = newPropValue;
  };


  /* INITIALIZE UI ELEMENTS */
  // I. Buttons
  /**
   * @var btnGimme10
   * @type {!HTMLButtonElement}
   */
  const btnGimme10 = assertIsNotNull(document.querySelector("#btn-gimme-10"));
  btnGimme10.onclick = () => callbacks.gimme10Function();

  /**
   * @var btnRestart
   * @type {!HTMLButtonElement}  
   * @desc Restarts app and preserves changes user has made to UI.
   */
  const btnRestart = assertIsNotNull(document.querySelector("#btn-restart"));
  btnRestart.onclick = () => {
    fillRect(ctx, 0, 0, defaults.canvasWidth, defaults.canvasHeight, "black");
    callbacks.restartFunction();
  };

  /**  
   * @var btnReset
   * @type {!HTMLButtonElement}
   * @desc Restarts app and resets UI to default starting state.
   */
  const btnReset = assertIsNotNull(document.querySelector("#btn-reset"));
  btnReset.onclick = () => callbacks.resetFunction();

  /**  
   * @var btnFS
   * @type {!HTMLButtonElement}
   * @desc Causes <canvas> to go into full screen mode
   */
  const btnFS =  assertIsNotNull(document.querySelector("#btn-fs"));
  btnFS.onclick = () => callbacks.goFullScreenFunction();


  // II. <select> inputs
  /**
   * @var ctrlDivergence
   * @type {!HTMLSelectElement}
   * @desc Sets `state.divergence` value
   */
  const ctrlDivergence = assertIsNotNull(document.querySelector("#ctrl-divergence"));

  // Initialize state of <select>
  populateSelect(ctrlDivergence, defaults.uiDivergenceValues);
  ctrlDivergence.value = `${defaults.uiDivergence}`;

  // Set .onchange handler
  ctrlDivergence.onchange = () => {
    state.divergence = +ctrlDivergence.value;
    // change most recent flower's `.divergence` value
    changePropMostRecentFlower("divergence", state.divergence);
  };


  /** 
   * @var ctrlDeltaDivergence
   * @type {!HTMLSelectElement}
   * @desc Sets `state.deltaDivergence` value
   */
  const ctrlDeltaDivergence = assertIsNotNull(document.querySelector("#ctrl-delta-divergence"));

  // Initialize state of <select>
  populateSelect(ctrlDeltaDivergence, defaults.uiDivergenceDeltaValues);
  ctrlDeltaDivergence.value = `${defaults.uiDeltaDivergence}`;

  // Set .onchange handler
  ctrlDeltaDivergence.onchange = () => {
    state.deltaDivergence = +ctrlDeltaDivergence.value;
    // change most recent flower's `.deltaDivergence` value
    changePropMostRecentFlower("deltaDivergence", state.deltaDivergence);
  };


  /**
  * @name ctrlPetalSize
  * @type {!HTMLSelectElement}
  * @desc Sets `state.petalSize` value
  */
  const ctrlPetalSize = assertIsNotNull(document.querySelector("#ctrl-petal-size"));

  // Initialize state of <select>
  populateSelect(ctrlPetalSize, defaults.uiPetalSizeValues);
  ctrlPetalSize.value = `${defaults.uiPetalSize}`;

  // Set .onchange handler
  ctrlPetalSize.onchange = () => {
    state.petalSize = +ctrlPetalSize.value;
    // change most recent flower's `.petalSize` value
    changePropMostRecentFlower("petalSize", state.petalSize);
  };

  
  /** 
   * @var ctrlDeltaPetalSize
   * @type {!HTMLSelectElement}
   * @desc Sets `state.deltaPetalSize` value
   */
  const ctrlDeltaPetalSize = assertIsNotNull(document.querySelector("#ctrl-delta-petal-size"));

  // Initialize state of <select>
  populateSelect(ctrlDeltaPetalSize, defaults.uiPetalSizeDeltaValues);
  ctrlDeltaPetalSize.value = `${defaults.uiDeltaPetalSize}`;

  // Set .onchange handler
  ctrlDeltaPetalSize.onchange = () => {
    state.deltaPetalSize = +ctrlDeltaPetalSize.value;
    // change most recent flower's `.deltaPetalSize` value
    changePropMostRecentFlower("deltaPetalSize", state.deltaPetalSize);
  };


  /**
   * @name ctrlC
   * @type {!HTMLSelectElement}
   * @desc Sets `state.c` ("padding") value
   */
  const ctrlC = assertIsNotNull(document.querySelector("#ctrl-c"));

  // Initialize state of <select>
  populateSelect(ctrlC, defaults.uiCValues);
  ctrlC.value = `${defaults.uiC}`;

  // Set .onchange handler
  ctrlC.onchange = () => {
    state.c = +ctrlC.value;
    // change most recent flower's `.c` ("padding") value
    changePropMostRecentFlower("c", state.c);
  };


  /**
   * @var ctrlDeltaC
   * @type {!HTMLSelectElement}
   * @desc Sets `state.deltaC` ("change in padding") value
   */
  const ctrlDeltaC = assertIsNotNull(document.querySelector("#ctrl-delta-c"));

  // Initialize state of <select>
  populateSelect(ctrlDeltaC, defaults.uiCDeltaValues);
  ctrlDeltaC.value = `${defaults.uiDeltaC}`;

  // Set .onchange handler
  ctrlDeltaC.onchange = () => {
    state.deltaC = +ctrlDeltaC.value;
    // Change most recent flower's `.deltaC` value
    //(state.flowerList?.[state.flowerList.length-1]).deltaC = state.deltaC;
    changePropMostRecentFlower("deltaC", state.deltaC);
  };


  /** 
   * @var ctrlPetalStyle
   * @type {!HTMLSelectElement}
   * @desc Sets `state.drawPetalFunction` value
   */
  const ctrlPetalStyle = assertIsNotNull(document.querySelector("#ctrl-petal-style"));

  // Initialize state of <select>
  populateSelect(ctrlPetalStyle, defaults.uiDrawFunctionValues);
  ctrlPetalStyle.value = `${defaults.uiPetalDrawFunctionName}`;

  // Set .onchange handler
  ctrlPetalStyle.onchange = () => {
    state.petalStyle = ctrlPetalStyle.value;
    // Change most recent flower's `.drawPetalFunction` value
    changePropMostRecentFlower("drawPetalFunction", callbacks.getPetalDrawFunction(state.petalStyle));
  };


   /** 
    * @var ctrlPetalColor
    * @type {!HTMLSelectElement}
    * @desc Sets `state.colorFunction` value
    */
   const ctrlPetalColor = assertIsNotNull(document.querySelector("#ctrl-petal-color"));
   populateSelect(ctrlPetalColor, defaults.uiColorFunctionValues);
    ctrlPetalColor.value = `${defaults.uiPetalColorFunctionName}`;
    ctrlPetalColor.onchange = () => {
      state.petalColorFunctionName = ctrlPetalColor.value;
      // Change most recent flower's .colorFunction property
      changePropMostRecentFlower("colorFunction", callbacks.getPetalColorFunction(state.petalColorFunctionName));
    };

  
  // III. type="checkbox" inputs
  /**
   * @var cbClearEveryFrame
   * @type {!HTMLInputElement}
   * @desc Checkbox for "Clear every frame?" user preference.
   */
  const cbClearEveryFrame = assertIsNotNull(document.querySelector("#cb-clear-every-frame"));
  cbClearEveryFrame.onchange = () => {
    state.clearEveryFrame = cbClearEveryFrame.checked;
  };

  /**
   * @var cbRandomFlowers
   * @type {!HTMLInputElement}
   * @desc Checkbox for "Spawn random flowers?" user preference.  
   */
  const cbRandomFlowers = assertIsNotNull(document.querySelector("#cb-random-flowers"));
  cbRandomFlowers.checked = defaults.uiRandomFlowers ? true : false;
  cbRandomFlowers.onchange = () => state.randomFlowers = cbRandomFlowers.checked;


  // IV. Mouse interaction
  canvas.onclick = (e) => callbacks.canvasClickFunction(e);

  // V. Keyboard interaction
  onkeyup = (e) => {
    if (e.key == "g" || e.key == "G") callbacks.gimme10Function();
  };
};

export default setupUI;