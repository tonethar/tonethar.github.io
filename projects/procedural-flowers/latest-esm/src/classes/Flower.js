// @ts-check

/* IMPORTS */
import "../types/IFlowerParams.js";
import { dtr } from "../utils/utils.js";

/** 
 * @class Flower
 * @classdesc Represents a procedurally drawn flower. 
 * @prop {number} n - current petal generation.
 * @author TJ
 * */
class Flower{
  /**
   * @desc Creates an instance of Flower.
   * @param {IFlowerParams} params
   */
  constructor(params){
    //Object.assign(this, { centerX, centerY, divergence, c, petalSize, drawPetalFunction }); //:-(
    
    /** @type {number} */
    this.n = 0;

    // Required properies from FlowerParams
    /** @type {number} */
    this.centerX = params.centerX;

    /** @type {number} */
    this.centerY = params.centerY;

    /** @type {number} */
    this.divergence = params.divergence;

    /** @type {number} */
    this.c = params.c;

    /** @type {number} */
    this.petalSize = params.petalSize;

    /** @type {function} */
    this.drawPetalFunction = params.drawPetalFunction;
  }

  /**
   * Draws the next petal.
   * 
   * @param {CanvasRenderingContext2D} ctx - drawing context where the flower will be rendered.
   */
  update(ctx) {
    const a = this.n * dtr(this.divergence);
    const r = this.c * Math.sqrt(this.n);
    const x = r * Math.cos(a) + this.centerX;
    const y = r * Math.sin(a) + this.centerY;
    const color = `hsl(${this.n/5 % 361},100%,50%)`; // 4
    this.drawPetalFunction(ctx, x, y, this.petalSize, color);
    this.n++;
    this.c += .005;
    this.petalSize += .01;
  }

};

export default Flower;
